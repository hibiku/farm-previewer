"use strict";
(self["webpackChunkfarm_previewer"] = self["webpackChunkfarm_previewer"] || []).push([[216],{

/***/ 879:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const DisjointSet = __webpack_require__(472);

module.exports = Object.assign({}, {DisjointSet});


/***/ }),

/***/ 472:
/***/ ((module) => {



class DisjointSet {
  constructor(idAccessorFn) {
    this._parent = {};
    this._rank = {};
    this._size = {};
    this._sets = 0;
    this._idAccessorFn = idAccessorFn || this._id;
  }

  _findSet(value) {
    const id = this._idAccessorFn(value);

    if (this._parent[id] !== value) {
      this._parent[id] = this._findSet(this._parent[id]);
    }

    return this._parent[id];
  }

  _id(x) {
    return x;
  }

  get forestElements() {
    return Object.keys(this._parent).length;
  }

  get forestSets() {
    return this._sets;
  }

  areConnected(x, y) {
    if (!this.includes(x) || !this.includes(y)) {
      return false;
    }

    return this._findSet(x) === this._findSet(y);
  }

  clear() {
    this._parent = {};
    this._rank = {};
    this._size = {};
    this._sets = 0;
    return this;
  }

  findSet(value) {
    if (this.includes(value)) {
      return this._findSet(value);
    }

    return undefined;
  }

  getId(value) {
    if (!this.includes(value)) {
      return undefined;
    }

    return this._idAccessorFn(value);
  }

  includes(value) {
    return Object.prototype.hasOwnProperty.call(this._parent, this._idAccessorFn(value));
  }

  isEmpty() {
    return this.forestElements === 0;
  }

  isRepresentative(value) {
    if (!this.includes(value)) {
      return false;
    }

    return this._parent[this._idAccessorFn(value)] === value;
  }

  isSingleton(value) {
    return this._size[this._idAccessorFn(value)] === 1;
  }

  makeSet(value) {
    if (!this.includes(value)) {
      const id = this._idAccessorFn(value);
      this._parent[id] = value;
      this._rank[id] = 0;
      this._size[id] = 1;
      this._sets += 1;
    }

    return this;
  }

  setSize(value) {
    if (!this.includes(value)) {
      return 0;
    }

    return this._size[this._idAccessorFn(this._findSet(value))];
  }

  union(x, y) {
    if (this.includes(x) && this.includes(y)) {
      let xRep = this._findSet(x);
      let yRep = this._findSet(y);

      if (xRep !== yRep) {
        let xRepId = this._idAccessorFn(xRep);
        let yRepId = this._idAccessorFn(yRep);
        const rankDiff = this._rank[xRepId] - this._rank[yRepId];

        if (rankDiff === 0) {
          this._rank[xRepId] += 1;
        } else if (rankDiff < 0) {
          [xRep, yRep] = [yRep, xRep];
          [xRepId, yRepId] = [yRepId, xRepId];
        }

        this._parent[yRepId] = xRep;
        this._size[xRepId] += this._size[yRepId];
        delete this._size[yRepId];
        this._sets -= 1;
      }
    }

    return this;
  }
}

module.exports = DisjointSet;


/***/ }),

/***/ 77:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bh": () => (/* binding */ $PROXY),
/* harmony export */   "U2": () => (/* binding */ For),
/* harmony export */   "qE": () => (/* binding */ Match),
/* harmony export */   "di": () => (/* binding */ Show),
/* harmony export */   "rs": () => (/* binding */ Switch),
/* harmony export */   "dC": () => (/* binding */ batch),
/* harmony export */   "LM": () => (/* binding */ createComponent),
/* harmony export */   "kr": () => (/* binding */ createContext),
/* harmony export */   "F3": () => (/* binding */ createRenderEffect),
/* harmony export */   "so": () => (/* binding */ createRoot),
/* harmony export */   "gQ": () => (/* binding */ createSignal),
/* harmony export */   "LO": () => (/* binding */ getListener),
/* harmony export */   "vH": () => (/* binding */ sharedConfig),
/* harmony export */   "qp": () => (/* binding */ useContext)
/* harmony export */ });
/* unused harmony exports DEV, ErrorBoundary, Index, Suspense, SuspenseList, awaitSuspense, cancelCallback, children, createComputed, createDeferred, createEffect, createMemo, createResource, createSelector, createUniqueId, enableScheduling, equalFn, from, getOwner, indexArray, lazy, mapArray, mergeProps, observable, on, onCleanup, onError, onMount, requestCallback, runWithOwner, splitProps, startTransition, untrack, useTransition */
let taskIdCounter = 1,
    isCallbackScheduled = false,
    isPerformingWork = false,
    taskQueue = (/* unused pure expression or super */ null && ([])),
    currentTask = null,
    shouldYieldToHost = null,
    yieldInterval = 5,
    deadline = 0,
    maxYieldInterval = 300,
    scheduleCallback = null,
    scheduledCallback = null;
const maxSigned31BitInt = 1073741823;
function setupScheduler() {
  const channel = new MessageChannel(),
        port = channel.port2;
  scheduleCallback = () => port.postMessage(null);
  channel.port1.onmessage = () => {
    if (scheduledCallback !== null) {
      const currentTime = performance.now();
      deadline = currentTime + yieldInterval;
      const hasTimeRemaining = true;
      try {
        const hasMoreWork = scheduledCallback(hasTimeRemaining, currentTime);
        if (!hasMoreWork) {
          scheduledCallback = null;
        } else port.postMessage(null);
      } catch (error) {
        port.postMessage(null);
        throw error;
      }
    }
  };
  if (navigator && navigator.scheduling && navigator.scheduling.isInputPending) {
    const scheduling = navigator.scheduling;
    shouldYieldToHost = () => {
      const currentTime = performance.now();
      if (currentTime >= deadline) {
        if (scheduling.isInputPending()) {
          return true;
        }
        return currentTime >= maxYieldInterval;
      } else {
        return false;
      }
    };
  } else {
    shouldYieldToHost = () => performance.now() >= deadline;
  }
}
function enqueue(taskQueue, task) {
  function findIndex() {
    let m = 0;
    let n = taskQueue.length - 1;
    while (m <= n) {
      const k = n + m >> 1;
      const cmp = task.expirationTime - taskQueue[k].expirationTime;
      if (cmp > 0) m = k + 1;else if (cmp < 0) n = k - 1;else return k;
    }
    return m;
  }
  taskQueue.splice(findIndex(), 0, task);
}
function requestCallback(fn, options) {
  if (!scheduleCallback) setupScheduler();
  let startTime = performance.now(),
      timeout = maxSigned31BitInt;
  if (options && options.timeout) timeout = options.timeout;
  const newTask = {
    id: taskIdCounter++,
    fn,
    startTime,
    expirationTime: startTime + timeout
  };
  enqueue(taskQueue, newTask);
  if (!isCallbackScheduled && !isPerformingWork) {
    isCallbackScheduled = true;
    scheduledCallback = flushWork;
    scheduleCallback();
  }
  return newTask;
}
function cancelCallback(task) {
  task.fn = null;
}
function flushWork(hasTimeRemaining, initialTime) {
  isCallbackScheduled = false;
  isPerformingWork = true;
  try {
    return workLoop(hasTimeRemaining, initialTime);
  } finally {
    currentTask = null;
    isPerformingWork = false;
  }
}
function workLoop(hasTimeRemaining, initialTime) {
  let currentTime = initialTime;
  currentTask = taskQueue[0] || null;
  while (currentTask !== null) {
    if (currentTask.expirationTime > currentTime && (!hasTimeRemaining || shouldYieldToHost())) {
      break;
    }
    const callback = currentTask.fn;
    if (callback !== null) {
      currentTask.fn = null;
      const didUserCallbackTimeout = currentTask.expirationTime <= currentTime;
      callback(didUserCallbackTimeout);
      currentTime = performance.now();
      if (currentTask === taskQueue[0]) {
        taskQueue.shift();
      }
    } else taskQueue.shift();
    currentTask = taskQueue[0] || null;
  }
  return currentTask !== null;
}

const sharedConfig = {};
function setHydrateContext(context) {
  sharedConfig.context = context;
}
function nextHydrateContext() {
  return { ...sharedConfig.context,
    id: `${sharedConfig.context.id}${sharedConfig.context.count++}.`,
    count: 0
  };
}

const equalFn = (a, b) => a === b;
const $PROXY = Symbol("solid-proxy");
const signalOptions = {
  equals: equalFn
};
let ERROR = null;
let runEffects = runQueue;
const NOTPENDING = {};
const STALE = 1;
const PENDING = 2;
const UNOWNED = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
const [transPending, setTransPending] = /*@__PURE__*/createSignal(false);
var Owner = null;
let Transition = null;
let Scheduler = null;
let Listener = null;
let Pending = null;
let Updates = null;
let Effects = null;
let ExecCount = 0;
function createRoot(fn, detachedOwner) {
  detachedOwner && (Owner = detachedOwner);
  const listener = Listener,
        owner = Owner,
        root = fn.length === 0 && !false ? UNOWNED : {
    owned: null,
    cleanups: null,
    context: null,
    owner
  };
  Owner = root;
  Listener = null;
  let result;
  try {
    runUpdates(() => result = fn(() => cleanNode(root)), true);
  } finally {
    Listener = listener;
    Owner = owner;
  }
  return result;
}
function createSignal(value, options) {
  options = options ? Object.assign({}, signalOptions, options) : signalOptions;
  const s = {
    value,
    observers: null,
    observerSlots: null,
    pending: NOTPENDING,
    comparator: options.equals || undefined
  };
  return [readSignal.bind(s), value => {
    if (typeof value === "function") {
      if (Transition && Transition.running && Transition.sources.has(s)) value = value(s.pending !== NOTPENDING ? s.pending : s.tValue);else value = value(s.pending !== NOTPENDING ? s.pending : s.value);
    }
    return writeSignal(s, value);
  }];
}
function createComputed(fn, value, options) {
  updateComputation(createComputation(fn, value, true, STALE));
}
function createRenderEffect(fn, value, options) {
  updateComputation(createComputation(fn, value, false, STALE));
}
function createEffect(fn, value, options) {
  runEffects = runUserEffects;
  const c = createComputation(fn, value, false, STALE),
        s = SuspenseContext && lookup(Owner, SuspenseContext.id);
  if (s) c.suspense = s;
  c.user = true;
  Effects && Effects.push(c);
}
function createMemo(fn, value, options) {
  options = options ? Object.assign({}, signalOptions, options) : signalOptions;
  const c = createComputation(fn, value, true, 0);
  c.pending = NOTPENDING;
  c.observers = null;
  c.observerSlots = null;
  c.comparator = options.equals || undefined;
  updateComputation(c);
  return readSignal.bind(c);
}
function createResource(source, fetcher, options) {
  if (arguments.length === 2) {
    if (typeof fetcher === "object") {
      options = fetcher;
      fetcher = source;
      source = true;
    }
  } else if (arguments.length === 1) {
    fetcher = source;
    source = true;
  }
  const contexts = new Set(),
        [s, set] = createSignal((options || {}).initialValue),
        [track, trigger] = createSignal(undefined, {
    equals: false
  }),
        [loading, setLoading] = createSignal(false),
        [error, setError] = createSignal();
  let err = undefined,
      pr = null,
      initP = null,
      id = null,
      loadedUnderTransition = false,
      dynamic = typeof source === "function";
  if (sharedConfig.context) {
    id = `${sharedConfig.context.id}${sharedConfig.context.count++}`;
    if (sharedConfig.context.loadResource) {
      initP = sharedConfig.context.loadResource(id);
    } else if (sharedConfig.resources && id && id in sharedConfig.resources) {
      initP = sharedConfig.resources[id];
      delete sharedConfig.resources[id];
    }
  }
  function loadEnd(p, v, e) {
    if (pr === p) {
      setError(err = e);
      pr = null;
      if (Transition && p && loadedUnderTransition) {
        Transition.promises.delete(p);
        loadedUnderTransition = false;
        runUpdates(() => {
          Transition.running = true;
          if (!Transition.promises.size) {
            Effects.push.apply(Effects, Transition.effects);
            Transition.effects = [];
          }
          completeLoad(v);
        }, false);
      } else completeLoad(v);
    }
    return v;
  }
  function completeLoad(v) {
    batch(() => {
      set(() => v);
      setLoading(false);
      for (const c of contexts.keys()) c.decrement();
      contexts.clear();
    });
  }
  function read() {
    const c = SuspenseContext && lookup(Owner, SuspenseContext.id),
          v = s();
    if (err) throw err;
    if (Listener && !Listener.user && c) {
      createComputed(() => {
        track();
        if (pr) {
          if (c.resolved && Transition) Transition.promises.add(pr);else if (!contexts.has(c)) {
            c.increment();
            contexts.add(c);
          }
        }
      });
    }
    return v;
  }
  function load() {
    setError(err = undefined);
    const lookup = dynamic ? source() : source;
    loadedUnderTransition = Transition && Transition.running;
    if (lookup == null || lookup === false) {
      loadEnd(pr, untrack(s));
      return;
    }
    if (Transition && pr) Transition.promises.delete(pr);
    const p = initP || untrack(() => fetcher(lookup, s));
    initP = null;
    if (typeof p !== "object" || !("then" in p)) {
      loadEnd(pr, p);
      return;
    }
    pr = p;
    batch(() => {
      setLoading(true);
      trigger();
    });
    p.then(v => loadEnd(p, v), e => loadEnd(p, e, e));
  }
  Object.defineProperties(read, {
    loading: {
      get() {
        return loading();
      }
    },
    error: {
      get() {
        return error();
      }
    }
  });
  if (dynamic) createComputed(load);else load();
  return [read, {
    refetch: load,
    mutate: set
  }];
}
function createDeferred(source, options) {
  let t,
      timeout = options ? options.timeoutMs : undefined;
  const node = createComputation(() => {
    if (!t || !t.fn) t = requestCallback(() => setDeferred(() => node.value), timeout !== undefined ? {
      timeout
    } : undefined);
    return source();
  }, undefined, true);
  const [deferred, setDeferred] = createSignal(node.value, options);
  updateComputation(node);
  setDeferred(() => node.value);
  return deferred;
}
function createSelector(source, fn = equalFn, options) {
  const subs = new Map();
  const node = createComputation(p => {
    const v = source();
    for (const key of subs.keys()) if (fn(key, v) || p !== undefined && fn(key, p)) {
      const l = subs.get(key);
      for (const c of l.values()) {
        c.state = STALE;
        if (c.pure) Updates.push(c);else Effects.push(c);
      }
    }
    return v;
  }, undefined, true, STALE);
  updateComputation(node);
  return key => {
    let listener;
    if (listener = Listener) {
      let l;
      if (l = subs.get(key)) l.add(listener);else subs.set(key, l = new Set([listener]));
      onCleanup(() => {
        l.size > 1 ? l.delete(listener) : subs.delete(key);
      });
    }
    return fn(key, Transition && Transition.running && Transition.sources.has(node) ? node.tValue : node.value);
  };
}
function batch(fn) {
  if (Pending) return fn();
  let result;
  const q = Pending = [];
  try {
    result = fn();
  } finally {
    Pending = null;
  }
  runUpdates(() => {
    for (let i = 0; i < q.length; i += 1) {
      const data = q[i];
      if (data.pending !== NOTPENDING) {
        const pending = data.pending;
        data.pending = NOTPENDING;
        writeSignal(data, pending);
      }
    }
  }, false);
  return result;
}
function untrack(fn) {
  let result,
      listener = Listener;
  Listener = null;
  result = fn();
  Listener = listener;
  return result;
}
function on(deps, fn, options) {
  const isArray = Array.isArray(deps);
  let prevInput;
  let defer = options && options.defer;
  return prevValue => {
    let input;
    if (isArray) {
      input = [];
      for (let i = 0; i < deps.length; i++) input.push(deps[i]());
    } else input = deps();
    if (defer) {
      defer = false;
      return undefined;
    }
    const result = untrack(() => fn(input, prevInput, prevValue));
    prevInput = input;
    return result;
  };
}
function onMount(fn) {
  createEffect(() => untrack(fn));
}
function onCleanup(fn) {
  if (Owner === null) ;else if (Owner.cleanups === null) Owner.cleanups = [fn];else Owner.cleanups.push(fn);
  return fn;
}
function onError(fn) {
  ERROR || (ERROR = Symbol("error"));
  if (Owner === null) ;else if (Owner.context === null) Owner.context = {
    [ERROR]: [fn]
  };else if (!Owner.context[ERROR]) Owner.context[ERROR] = [fn];else Owner.context[ERROR].push(fn);
}
function getListener() {
  return Listener;
}
function getOwner() {
  return Owner;
}
function runWithOwner(o, fn) {
  const prev = Owner;
  Owner = o;
  try {
    return fn();
  } finally {
    Owner = prev;
  }
}
function enableScheduling(scheduler = requestCallback) {
  Scheduler = scheduler;
}
function startTransition(fn, cb) {
  queueMicrotask(() => {
    if (Scheduler || SuspenseContext) {
      Transition || (Transition = {
        sources: new Set(),
        effects: [],
        promises: new Set(),
        disposed: new Set(),
        queue: new Set(),
        running: true,
        cb: []
      });
      cb && Transition.cb.push(cb);
      Transition.running = true;
    }
    batch(fn);
    if (!Scheduler && !SuspenseContext && cb) cb();
  });
}
function useTransition() {
  return [transPending, startTransition];
}
function resumeEffects(e) {
  Effects.push.apply(Effects, e);
  e.length = 0;
}
function createContext(defaultValue) {
  const id = Symbol("context");
  return {
    id,
    Provider: createProvider(id),
    defaultValue
  };
}
function useContext(context) {
  return lookup(Owner, context.id) || context.defaultValue;
}
function children(fn) {
  const children = createMemo(fn);
  return createMemo(() => resolveChildren(children()));
}
let SuspenseContext;
function getSuspenseContext() {
  return SuspenseContext || (SuspenseContext = createContext({}));
}
function readSignal() {
  if (this.state && this.sources) {
    const updates = Updates;
    Updates = null;
    this.state === STALE || Transition && Transition.running && this.tState ? updateComputation(this) : lookDownstream(this);
    Updates = updates;
  }
  if (Listener) {
    const sSlot = this.observers ? this.observers.length : 0;
    if (!Listener.sources) {
      Listener.sources = [this];
      Listener.sourceSlots = [sSlot];
    } else {
      Listener.sources.push(this);
      Listener.sourceSlots.push(sSlot);
    }
    if (!this.observers) {
      this.observers = [Listener];
      this.observerSlots = [Listener.sources.length - 1];
    } else {
      this.observers.push(Listener);
      this.observerSlots.push(Listener.sources.length - 1);
    }
  }
  if (Transition && Transition.running && Transition.sources.has(this)) return this.tValue;
  return this.value;
}
function writeSignal(node, value, isComp) {
  if (node.comparator) {
    if (Transition && Transition.running && Transition.sources.has(node)) {
      if (node.comparator(node.tValue, value)) return value;
    } else if (node.comparator(node.value, value)) return value;
  }
  if (Pending) {
    if (node.pending === NOTPENDING) Pending.push(node);
    node.pending = value;
    return value;
  }
  let TransitionRunning = false;
  if (Transition) {
    TransitionRunning = Transition.running;
    if (TransitionRunning || !isComp && Transition.sources.has(node)) {
      Transition.sources.add(node);
      node.tValue = value;
    }
    if (!TransitionRunning) node.value = value;
  } else node.value = value;
  if (node.observers && node.observers.length) {
    runUpdates(() => {
      for (let i = 0; i < node.observers.length; i += 1) {
        const o = node.observers[i];
        if (TransitionRunning && Transition.disposed.has(o)) continue;
        if (o.pure) Updates.push(o);else Effects.push(o);
        if (o.observers && (TransitionRunning && !o.tState || !TransitionRunning && !o.state)) markUpstream(o);
        if (TransitionRunning) o.tState = STALE;else o.state = STALE;
      }
      if (Updates.length > 10e5) {
        Updates = [];
        if (false) {}
        throw new Error();
      }
    }, false);
  }
  return value;
}
function updateComputation(node) {
  if (!node.fn) return;
  cleanNode(node);
  const owner = Owner,
        listener = Listener,
        time = ExecCount;
  Listener = Owner = node;
  runComputation(node, node.value, time);
  if (Transition && !Transition.running && Transition.sources.has(node)) {
    queueMicrotask(() => {
      runUpdates(() => {
        Transition && (Transition.running = true);
        runComputation(node, node.tValue, time);
      }, false);
    });
  }
  Listener = listener;
  Owner = owner;
}
function runComputation(node, value, time) {
  let nextValue;
  try {
    nextValue = node.fn(value);
  } catch (err) {
    handleError(err);
  }
  if (!node.updatedAt || node.updatedAt <= time) {
    if (node.observers && node.observers.length) {
      writeSignal(node, nextValue, true);
    } else if (Transition && Transition.running && node.pure) {
      Transition.sources.add(node);
      node.tValue = nextValue;
    } else node.value = nextValue;
    node.updatedAt = time;
  }
}
function createComputation(fn, init, pure, state = STALE, options) {
  const c = {
    fn,
    state: state,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: init,
    owner: Owner,
    context: null,
    pure
  };
  if (Transition && Transition.running) {
    c.state = 0;
    c.tState = state;
  }
  if (Owner === null) ;else if (Owner !== UNOWNED) {
    if (Transition && Transition.running && Owner.pure) {
      if (!Owner.tOwned) Owner.tOwned = [c];else Owner.tOwned.push(c);
    } else {
      if (!Owner.owned) Owner.owned = [c];else Owner.owned.push(c);
    }
  }
  return c;
}
function runTop(node) {
  const runningTransition = Transition && Transition.running;
  if (!runningTransition && node.state !== STALE) return node.state = 0;
  if (runningTransition && node.tState !== STALE) return node.tState = 0;
  if (node.suspense && untrack(node.suspense.inFallback)) return node.suspense.effects.push(node);
  const ancestors = [node];
  while ((node = node.owner) && (!node.updatedAt || node.updatedAt < ExecCount)) {
    if (runningTransition && Transition.disposed.has(node)) return;
    if (node.state || runningTransition && node.tState) ancestors.push(node);
  }
  for (let i = ancestors.length - 1; i >= 0; i--) {
    node = ancestors[i];
    if (runningTransition) {
      let top = node,
          prev = ancestors[i + 1];
      while ((top = top.owner) && top !== prev) {
        if (Transition.disposed.has(top)) return;
      }
    }
    if (node.state === STALE || runningTransition && node.tState === STALE) {
      updateComputation(node);
    } else if (node.state === PENDING || runningTransition && node.tState === PENDING) {
      const updates = Updates;
      Updates = null;
      lookDownstream(node);
      Updates = updates;
    }
  }
}
function runUpdates(fn, init) {
  if (Updates) return fn();
  let wait = false;
  if (!init) Updates = [];
  if (Effects) wait = true;else Effects = [];
  ExecCount++;
  try {
    fn();
  } catch (err) {
    handleError(err);
  } finally {
    completeUpdates(wait);
  }
}
function completeUpdates(wait) {
  if (Updates) {
    if (Scheduler && Transition && Transition.running) scheduleQueue(Updates);else runQueue(Updates);
    Updates = null;
  }
  if (wait) return;
  let cbs;
  if (Transition && Transition.running) {
    if (Transition.promises.size || Transition.queue.size) {
      Transition.running = false;
      Transition.effects.push.apply(Transition.effects, Effects);
      Effects = null;
      setTransPending(true);
      return;
    }
    const sources = Transition.sources;
    cbs = Transition.cb;
    Effects.forEach(e => {
      "tState" in e && (e.state = e.tState);
      delete e.tState;
    });
    Transition = null;
    batch(() => {
      sources.forEach(v => {
        v.value = v.tValue;
        if (v.owned) {
          for (let i = 0, len = v.owned.length; i < len; i++) cleanNode(v.owned[i]);
        }
        if (v.tOwned) v.owned = v.tOwned;
        delete v.tValue;
        delete v.tOwned;
        v.tState = 0;
      });
      setTransPending(false);
    });
  }
  if (Effects.length) batch(() => {
    runEffects(Effects);
    Effects = null;
  });else {
    Effects = null;
  }
  if (cbs) cbs.forEach(cb => cb());
}
function runQueue(queue) {
  for (let i = 0; i < queue.length; i++) runTop(queue[i]);
}
function scheduleQueue(queue) {
  for (let i = 0; i < queue.length; i++) {
    const item = queue[i];
    const tasks = Transition.queue;
    if (!tasks.has(item)) {
      tasks.add(item);
      Scheduler(() => {
        tasks.delete(item);
        runUpdates(() => {
          Transition.running = true;
          runTop(item);
          if (!tasks.size) {
            Effects.push.apply(Effects, Transition.effects);
            Transition.effects = [];
          }
        }, false);
        Transition && (Transition.running = false);
      });
    }
  }
}
function runUserEffects(queue) {
  let i,
      userLength = 0;
  for (i = 0; i < queue.length; i++) {
    const e = queue[i];
    if (!e.user) runTop(e);else queue[userLength++] = e;
  }
  const resume = queue.length;
  for (i = 0; i < userLength; i++) runTop(queue[i]);
  for (i = resume; i < queue.length; i++) runTop(queue[i]);
}
function lookDownstream(node) {
  node.state = 0;
  for (let i = 0; i < node.sources.length; i += 1) {
    const source = node.sources[i];
    if (source.sources) {
      if (source.state === STALE || Transition && Transition.running && source.tState) runTop(source);else if (source.state === PENDING) lookDownstream(source);
    }
  }
}
function markUpstream(node) {
  const runningTransition = Transition && Transition.running;
  for (let i = 0; i < node.observers.length; i += 1) {
    const o = node.observers[i];
    if (!o.state || runningTransition && !o.tState) {
      if (runningTransition) o.tState = PENDING;else o.state = PENDING;
      if (o.pure) Updates.push(o);else Effects.push(o);
      o.observers && markUpstream(o);
    }
  }
}
function cleanNode(node) {
  let i;
  if (node.sources) {
    while (node.sources.length) {
      const source = node.sources.pop(),
            index = node.sourceSlots.pop(),
            obs = source.observers;
      if (obs && obs.length) {
        const n = obs.pop(),
              s = source.observerSlots.pop();
        if (index < obs.length) {
          n.sourceSlots[s] = index;
          obs[index] = n;
          source.observerSlots[index] = s;
        }
      }
    }
  }
  if (Transition && Transition.running && node.pure) {
    if (node.tOwned) {
      for (i = 0; i < node.tOwned.length; i++) cleanNode(node.tOwned[i]);
      delete node.tOwned;
    }
    reset(node, true);
  } else if (node.owned) {
    for (i = 0; i < node.owned.length; i++) cleanNode(node.owned[i]);
    node.owned = null;
  }
  if (node.cleanups) {
    for (i = 0; i < node.cleanups.length; i++) node.cleanups[i]();
    node.cleanups = null;
  }
  if (Transition && Transition.running) node.tState = 0;else node.state = 0;
  node.context = null;
}
function reset(node, top) {
  if (!top) {
    node.tState = 0;
    Transition.disposed.add(node);
  }
  if (node.owned) {
    for (let i = 0; i < node.owned.length; i++) reset(node.owned[i]);
  }
}
function handleError(err) {
  const fns = ERROR && lookup(Owner, ERROR);
  if (!fns) throw err;
  fns.forEach(f => f(err));
}
function lookup(owner, key) {
  return owner && (owner.context && owner.context[key] || owner.owner && lookup(owner.owner, key));
}
function resolveChildren(children) {
  if (typeof children === "function" && !children.length) return resolveChildren(children());
  if (Array.isArray(children)) {
    const results = [];
    for (let i = 0; i < children.length; i++) {
      const result = resolveChildren(children[i]);
      Array.isArray(result) ? results.push.apply(results, result) : results.push(result);
    }
    return results;
  }
  return children;
}
function createProvider(id) {
  return function provider(props) {
    let res;
    createComputed(() => res = untrack(() => {
      Owner.context = {
        [id]: props.value
      };
      return children(() => props.children);
    }));
    return res;
  };
}

function getSymbol() {
  const SymbolCopy = Symbol;
  return SymbolCopy.observable || "@@observable";
}
function observable(input) {
  const $$observable = getSymbol();
  return {
    subscribe(observer) {
      if (!(observer instanceof Object) || observer == null) {
        throw new TypeError("Expected the observer to be an object.");
      }
      const handler = "next" in observer ? observer.next : observer;
      let complete = false;
      createComputed(() => {
        if (complete) return;
        const v = input();
        untrack(() => handler(v));
      });
      return {
        unsubscribe() {
          complete = true;
        }
      };
    },
    [$$observable]() {
      return this;
    }
  };
}
function from(producer) {
  const [s, set] = createSignal(undefined, {
    equals: false
  });
  if ("subscribe" in producer) {
    const unsub = producer.subscribe(v => set(() => v));
    onCleanup(() => "unsubscribe" in unsub ? unsub.unsubscribe() : unsub());
  } else {
    const clean = producer(set);
    onCleanup(clean);
  }
  return s;
}

const FALLBACK = Symbol("fallback");
function dispose(d) {
  for (let i = 0; i < d.length; i++) d[i]();
}
function mapArray(list, mapFn, options = {}) {
  let items = [],
      mapped = [],
      disposers = [],
      len = 0,
      indexes = mapFn.length > 1 ? [] : null;
  onCleanup(() => dispose(disposers));
  return () => {
    let newItems = list() || [],
        i,
        j;
    return untrack(() => {
      let newLen = newItems.length,
          newIndices,
          newIndicesNext,
          temp,
          tempdisposers,
          tempIndexes,
          start,
          end,
          newEnd,
          item;
      if (newLen === 0) {
        if (len !== 0) {
          dispose(disposers);
          disposers = [];
          items = [];
          mapped = [];
          len = 0;
          indexes && (indexes = []);
        }
        if (options.fallback) {
          items = [FALLBACK];
          mapped[0] = createRoot(disposer => {
            disposers[0] = disposer;
            return options.fallback();
          });
          len = 1;
        }
      }
      else if (len === 0) {
        mapped = new Array(newLen);
        for (j = 0; j < newLen; j++) {
          items[j] = newItems[j];
          mapped[j] = createRoot(mapper);
        }
        len = newLen;
      } else {
        temp = new Array(newLen);
        tempdisposers = new Array(newLen);
        indexes && (tempIndexes = new Array(newLen));
        for (start = 0, end = Math.min(len, newLen); start < end && items[start] === newItems[start]; start++);
        for (end = len - 1, newEnd = newLen - 1; end >= start && newEnd >= start && items[end] === newItems[newEnd]; end--, newEnd--) {
          temp[newEnd] = mapped[end];
          tempdisposers[newEnd] = disposers[end];
          indexes && (tempIndexes[newEnd] = indexes[end]);
        }
        newIndices = new Map();
        newIndicesNext = new Array(newEnd + 1);
        for (j = newEnd; j >= start; j--) {
          item = newItems[j];
          i = newIndices.get(item);
          newIndicesNext[j] = i === undefined ? -1 : i;
          newIndices.set(item, j);
        }
        for (i = start; i <= end; i++) {
          item = items[i];
          j = newIndices.get(item);
          if (j !== undefined && j !== -1) {
            temp[j] = mapped[i];
            tempdisposers[j] = disposers[i];
            indexes && (tempIndexes[j] = indexes[i]);
            j = newIndicesNext[j];
            newIndices.set(item, j);
          } else disposers[i]();
        }
        for (j = start; j < newLen; j++) {
          if (j in temp) {
            mapped[j] = temp[j];
            disposers[j] = tempdisposers[j];
            if (indexes) {
              indexes[j] = tempIndexes[j];
              indexes[j](j);
            }
          } else mapped[j] = createRoot(mapper);
        }
        mapped = mapped.slice(0, len = newLen);
        items = newItems.slice(0);
      }
      return mapped;
    });
    function mapper(disposer) {
      disposers[j] = disposer;
      if (indexes) {
        const [s, set] = createSignal(j);
        indexes[j] = set;
        return mapFn(newItems[j], s);
      }
      return mapFn(newItems[j]);
    }
  };
}
function indexArray(list, mapFn, options = {}) {
  let items = [],
      mapped = [],
      disposers = [],
      signals = [],
      len = 0,
      i;
  onCleanup(() => dispose(disposers));
  return () => {
    const newItems = list() || [];
    return untrack(() => {
      if (newItems.length === 0) {
        if (len !== 0) {
          dispose(disposers);
          disposers = [];
          items = [];
          mapped = [];
          len = 0;
          signals = [];
        }
        if (options.fallback) {
          items = [FALLBACK];
          mapped[0] = createRoot(disposer => {
            disposers[0] = disposer;
            return options.fallback();
          });
          len = 1;
        }
        return mapped;
      }
      if (items[0] === FALLBACK) {
        disposers[0]();
        disposers = [];
        items = [];
        mapped = [];
        len = 0;
      }
      for (i = 0; i < newItems.length; i++) {
        if (i < items.length && items[i] !== newItems[i]) {
          signals[i](() => newItems[i]);
        } else if (i >= items.length) {
          mapped[i] = createRoot(mapper);
        }
      }
      for (; i < items.length; i++) {
        disposers[i]();
      }
      len = signals.length = disposers.length = newItems.length;
      items = newItems.slice(0);
      return mapped = mapped.slice(0, len);
    });
    function mapper(disposer) {
      disposers[i] = disposer;
      const [s, set] = createSignal(newItems[i]);
      signals[i] = set;
      return mapFn(s, i);
    }
  };
}

function createComponent(Comp, props) {
  if (sharedConfig.context) {
    const c = sharedConfig.context;
    setHydrateContext(nextHydrateContext());
    const r = untrack(() => Comp(props));
    setHydrateContext(c);
    return r;
  }
  return untrack(() => Comp(props));
}
function trueFn() {
  return true;
}
const propTraps = {
  get(_, property, receiver) {
    if (property === $PROXY) return receiver;
    return _.get(property);
  },
  has(_, property) {
    return _.has(property);
  },
  set: trueFn,
  deleteProperty: trueFn,
  getOwnPropertyDescriptor(_, property) {
    return {
      configurable: true,
      enumerable: true,
      get() {
        return _.get(property);
      },
      set: trueFn,
      deleteProperty: trueFn
    };
  },
  ownKeys(_) {
    return _.keys();
  }
};
function mergeProps(...sources) {
  return new Proxy({
    get(property) {
      for (let i = sources.length - 1; i >= 0; i--) {
        const v = sources[i][property];
        if (v !== undefined) return v;
      }
    },
    has(property) {
      for (let i = sources.length - 1; i >= 0; i--) {
        if (property in sources[i]) return true;
      }
      return false;
    },
    keys() {
      const keys = [];
      for (let i = 0; i < sources.length; i++) keys.push(...Object.keys(sources[i]));
      return [...new Set(keys)];
    }
  }, propTraps);
}
function splitProps(props, ...keys) {
  const blocked = new Set(keys.flat());
  const descriptors = Object.getOwnPropertyDescriptors(props);
  const res = keys.map(k => {
    const clone = {};
    for (let i = 0; i < k.length; i++) {
      const key = k[i];
      Object.defineProperty(clone, key, descriptors[key] ? descriptors[key] : {
        get() {
          return props[key];
        }
      });
    }
    return clone;
  });
  res.push(new Proxy({
    get(property) {
      return blocked.has(property) ? undefined : props[property];
    },
    has(property) {
      return blocked.has(property) ? false : property in props;
    },
    keys() {
      return Object.keys(props).filter(k => !blocked.has(k));
    }
  }, propTraps));
  return res;
}
function lazy(fn) {
  let comp;
  const wrap = props => {
    const ctx = sharedConfig.context;
    if (ctx && sharedConfig.resources) {
      ctx.count++;
      const [s, set] = createSignal();
      fn().then(mod => {
        setHydrateContext(ctx);
        set(() => mod.default);
        setHydrateContext(undefined);
      });
      comp = s;
    } else if (!comp) {
      const [s] = createResource(() => fn().then(mod => mod.default));
      comp = s;
    } else {
      const c = comp();
      if (c) return c(props);
    }
    let Comp;
    return createMemo(() => (Comp = comp()) && untrack(() => {
      if (!ctx) return Comp(props);
      const c = sharedConfig.context;
      setHydrateContext(ctx);
      const r = Comp(props);
      setHydrateContext(c);
      return r;
    }));
  };
  wrap.preload = () => comp || fn().then(mod => comp = () => mod.default);
  return wrap;
}
let counter = 0;
function createUniqueId() {
  const ctx = sharedConfig.context;
  return ctx ? `${ctx.id}${ctx.count++}` : `cl:${counter++}`;
}

function For(props) {
  const fallback = "fallback" in props && {
    fallback: () => props.fallback
  };
  return createMemo(mapArray(() => props.each, props.children, fallback ? fallback : undefined));
}
function Index(props) {
  const fallback = "fallback" in props && {
    fallback: () => props.fallback
  };
  return createMemo(indexArray(() => props.each, props.children, fallback ? fallback : undefined));
}
function Show(props) {
  let strictEqual = false;
  const condition = createMemo(() => props.when, undefined, {
    equals: (a, b) => strictEqual ? a === b : !a === !b
  });
  return createMemo(() => {
    const c = condition();
    if (c) {
      const child = props.children;
      return (strictEqual = typeof child === "function" && child.length > 0) ? untrack(() => child(c)) : child;
    }
    return props.fallback;
  });
}
function Switch(props) {
  let strictEqual = false;
  const conditions = children(() => props.children),
        evalConditions = createMemo(() => {
    let conds = conditions();
    if (!Array.isArray(conds)) conds = [conds];
    for (let i = 0; i < conds.length; i++) {
      const c = conds[i].when;
      if (c) return [i, c, conds[i]];
    }
    return [-1];
  }, undefined, {
    equals: (a, b) => a && a[0] === b[0] && (strictEqual ? a[1] === b[1] : !a[1] === !b[1]) && a[2] === b[2]
  });
  return createMemo(() => {
    const [index, when, cond] = evalConditions();
    if (index < 0) return props.fallback;
    const c = cond.children;
    return (strictEqual = typeof c === "function" && c.length > 0) ? untrack(() => c(when)) : c;
  });
}
function Match(props) {
  return props;
}
function ErrorBoundary(props) {
  const [errored, setErrored] = createSignal();
  let e;
  return createMemo(() => {
    if ((e = errored()) != null) {
      const f = props.fallback;
      return typeof f === "function" && f.length ? untrack(() => f(e, () => setErrored(null))) : f;
    }
    onError(setErrored);
    return props.children;
  });
}

const SuspenseListContext = createContext();
function SuspenseList(props) {
  let index = 0,
      suspenseSetter,
      showContent,
      showFallback;
  const listContext = useContext(SuspenseListContext);
  if (listContext) {
    const [inFallback, setFallback] = createSignal(false);
    suspenseSetter = setFallback;
    [showContent, showFallback] = listContext.register(inFallback);
  }
  const registry = [],
        comp = createComponent(SuspenseListContext.Provider, {
    value: {
      register: inFallback => {
        const [showingContent, showContent] = createSignal(false),
              [showingFallback, showFallback] = createSignal(false);
        registry[index++] = {
          inFallback,
          showContent,
          showFallback
        };
        return [showingContent, showingFallback];
      }
    },
    get children() {
      return props.children;
    }
  });
  createComputed(() => {
    const reveal = props.revealOrder,
          tail = props.tail,
          visibleContent = showContent ? showContent() : true,
          visibleFallback = showFallback ? showFallback() : true,
          reverse = reveal === "backwards";
    if (reveal === "together") {
      const all = registry.every(i => !i.inFallback());
      suspenseSetter && suspenseSetter(!all);
      registry.forEach(i => {
        i.showContent(all && visibleContent);
        i.showFallback(visibleFallback);
      });
      return;
    }
    let stop = false;
    for (let i = 0, len = registry.length; i < len; i++) {
      const n = reverse ? len - i - 1 : i,
            s = registry[n].inFallback();
      if (!stop && !s) {
        registry[n].showContent(visibleContent);
        registry[n].showFallback(visibleFallback);
      } else {
        const next = !stop;
        if (next && suspenseSetter) suspenseSetter(true);
        if (!tail || next && tail === "collapsed") {
          registry[n].showFallback(visibleFallback);
        } else registry[n].showFallback(false);
        stop = true;
        registry[n].showContent(next);
      }
    }
    if (!stop && suspenseSetter) suspenseSetter(false);
  });
  return comp;
}
function Suspense(props) {
  let counter = 0,
      showContent,
      showFallback;
  const [inFallback, setFallback] = createSignal(false),
        SuspenseContext = getSuspenseContext(),
        store = {
    increment: () => {
      if (++counter === 1) setFallback(true);
    },
    decrement: () => {
      if (--counter === 0) setFallback(false);
    },
    inFallback,
    effects: [],
    resolved: false
  };
  const listContext = useContext(SuspenseListContext);
  if (listContext) [showContent, showFallback] = listContext.register(store.inFallback);
  return createComponent(SuspenseContext.Provider, {
    value: store,
    get children() {
      const rendered = untrack(() => props.children);
      return createMemo(() => {
        const inFallback = store.inFallback(),
              visibleContent = showContent ? showContent() : true,
              visibleFallback = showFallback ? showFallback() : true;
        if (!inFallback && visibleContent) {
          store.resolved = true;
          resumeEffects(store.effects);
          return rendered;
        }
        if (!visibleFallback) return;
        return props.fallback;
      });
    }
  });
}

function awaitSuspense() {}
let DEV;




/***/ }),

/***/ 163:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MT": () => (/* binding */ createStore)
/* harmony export */ });
/* unused harmony exports $RAW, createMutable, produce, reconcile, unwrap */
/* harmony import */ var solid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);


const $RAW = Symbol("store-raw"),
      $NODE = Symbol("store-node"),
      $NAME = Symbol("store-name");
function wrap$1(value, name) {
  let p = value[solid_js__WEBPACK_IMPORTED_MODULE_0__/* .$PROXY */ .bh];
  if (!p) {
    Object.defineProperty(value, solid_js__WEBPACK_IMPORTED_MODULE_0__/* .$PROXY */ .bh, {
      value: p = new Proxy(value, proxyTraps$1)
    });
    const keys = Object.keys(value),
          desc = Object.getOwnPropertyDescriptors(value);
    for (let i = 0, l = keys.length; i < l; i++) {
      const prop = keys[i];
      if (desc[prop].get) {
        const get = desc[prop].get.bind(p);
        Object.defineProperty(value, prop, {
          get
        });
      }
    }
  }
  return p;
}
function isWrappable(obj) {
  return obj != null && typeof obj === "object" && (!obj.__proto__ || obj.__proto__ === Object.prototype || Array.isArray(obj));
}
function unwrap(item, set = new Set()) {
  let result, unwrapped, v, prop;
  if (result = item != null && item[$RAW]) return result;
  if (!isWrappable(item) || set.has(item)) return item;
  if (Array.isArray(item)) {
    if (Object.isFrozen(item)) item = item.slice(0);else set.add(item);
    for (let i = 0, l = item.length; i < l; i++) {
      v = item[i];
      if ((unwrapped = unwrap(v, set)) !== v) item[i] = unwrapped;
    }
  } else {
    if (Object.isFrozen(item)) item = Object.assign({}, item);else set.add(item);
    const keys = Object.keys(item),
          desc = Object.getOwnPropertyDescriptors(item);
    for (let i = 0, l = keys.length; i < l; i++) {
      prop = keys[i];
      if (desc[prop].get) continue;
      v = item[prop];
      if ((unwrapped = unwrap(v, set)) !== v) item[prop] = unwrapped;
    }
  }
  return item;
}
function getDataNodes(target) {
  let nodes = target[$NODE];
  if (!nodes) Object.defineProperty(target, $NODE, {
    value: nodes = {}
  });
  return nodes;
}
function proxyDescriptor(target, property) {
  const desc = Reflect.getOwnPropertyDescriptor(target, property);
  if (!desc || desc.get || property === solid_js__WEBPACK_IMPORTED_MODULE_0__/* .$PROXY */ .bh || property === $NODE || property === $NAME) return desc;
  delete desc.value;
  delete desc.writable;
  desc.get = () => target[solid_js__WEBPACK_IMPORTED_MODULE_0__/* .$PROXY */ .bh][property];
  return desc;
}
function ownKeys(target) {
  if ((0,solid_js__WEBPACK_IMPORTED_MODULE_0__/* .getListener */ .LO)()) {
    const nodes = getDataNodes(target);
    (nodes._ || (nodes._ = createDataNode()))();
  }
  return Reflect.ownKeys(target);
}
function createDataNode() {
  const [s, set] = (0,solid_js__WEBPACK_IMPORTED_MODULE_0__/* .createSignal */ .gQ)(undefined, {
    equals: false,
    internal: true
  });
  s.$ = set;
  return s;
}
const proxyTraps$1 = {
  get(target, property, receiver) {
    if (property === $RAW) return target;
    if (property === solid_js__WEBPACK_IMPORTED_MODULE_0__/* .$PROXY */ .bh) return receiver;
    const value = target[property];
    if (property === $NODE || property === "__proto__") return value;
    const wrappable = isWrappable(value);
    if ((0,solid_js__WEBPACK_IMPORTED_MODULE_0__/* .getListener */ .LO)() && (typeof value !== "function" || target.hasOwnProperty(property))) {
      let nodes, node;
      if (wrappable && (nodes = getDataNodes(value))) {
        node = nodes._ || (nodes._ = createDataNode());
        node();
      }
      nodes = getDataNodes(target);
      node = nodes[property] || (nodes[property] = createDataNode());
      node();
    }
    return wrappable ? wrap$1(value) : value;
  },
  set() {
    return true;
  },
  deleteProperty() {
    return true;
  },
  ownKeys: ownKeys,
  getOwnPropertyDescriptor: proxyDescriptor
};
function setProperty(state, property, value) {
  if (state[property] === value) return;
  const array = Array.isArray(state);
  const len = state.length;
  const isUndefined = value === undefined;
  const notify = array || isUndefined === property in state;
  if (isUndefined) {
    delete state[property];
  } else state[property] = value;
  let nodes = getDataNodes(state),
      node;
  (node = nodes[property]) && node.$();
  if (array && state.length !== len) (node = nodes.length) && node.$();
  notify && (node = nodes._) && node.$();
}
function mergeStoreNode(state, value) {
  const keys = Object.keys(value);
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    setProperty(state, key, value[key]);
  }
}
function updatePath(current, path, traversed = []) {
  let part,
      prev = current;
  if (path.length > 1) {
    part = path.shift();
    const partType = typeof part,
          isArray = Array.isArray(current);
    if (Array.isArray(part)) {
      for (let i = 0; i < part.length; i++) {
        updatePath(current, [part[i]].concat(path), [part[i]].concat(traversed));
      }
      return;
    } else if (isArray && partType === "function") {
      for (let i = 0; i < current.length; i++) {
        if (part(current[i], i)) updatePath(current, [i].concat(path), [i].concat(traversed));
      }
      return;
    } else if (isArray && partType === "object") {
      const {
        from = 0,
        to = current.length - 1,
        by = 1
      } = part;
      for (let i = from; i <= to; i += by) {
        updatePath(current, [i].concat(path), [i].concat(traversed));
      }
      return;
    } else if (path.length > 1) {
      updatePath(current[part], path, [part].concat(traversed));
      return;
    }
    prev = current[part];
    traversed = [part].concat(traversed);
  }
  let value = path[0];
  if (typeof value === "function") {
    value = value(prev, traversed);
    if (value === prev) return;
  }
  if (part === undefined && value == undefined) return;
  value = unwrap(value);
  if (part === undefined || isWrappable(prev) && isWrappable(value) && !Array.isArray(value)) {
    mergeStoreNode(prev, value);
  } else setProperty(current, part, value);
}
function createStore(store, options) {
  const unwrappedStore = unwrap(store || {});
  const wrappedStore = wrap$1(unwrappedStore);
  function setStore(...args) {
    (0,solid_js__WEBPACK_IMPORTED_MODULE_0__/* .batch */ .dC)(() => updatePath(unwrappedStore, args));
  }
  return [wrappedStore, setStore];
}

const proxyTraps = {
  get(target, property, receiver) {
    if (property === $RAW) return target;
    if (property === solid_js__WEBPACK_IMPORTED_MODULE_0__/* .$PROXY */ .bh) return receiver;
    const value = target[property];
    if (property === $NODE || property === "__proto__") return value;
    const wrappable = isWrappable(value);
    if ((0,solid_js__WEBPACK_IMPORTED_MODULE_0__/* .getListener */ .LO)() && (typeof value !== "function" || target.hasOwnProperty(property))) {
      let nodes, node;
      if (wrappable && (nodes = getDataNodes(value))) {
        node = nodes._ || (nodes._ = createDataNode());
        node();
      }
      nodes = getDataNodes(target);
      node = nodes[property] || (nodes[property] = createDataNode());
      node();
    }
    return wrappable ? wrap(value) : value;
  },
  set(target, property, value) {
    setProperty(target, property, unwrap(value));
    return true;
  },
  deleteProperty(target, property) {
    setProperty(target, property, undefined);
    return true;
  },
  ownKeys: ownKeys,
  getOwnPropertyDescriptor: proxyDescriptor
};
function wrap(value, name) {
  let p = value[solid_js__WEBPACK_IMPORTED_MODULE_0__/* .$PROXY */ .bh];
  if (!p) {
    Object.defineProperty(value, solid_js__WEBPACK_IMPORTED_MODULE_0__/* .$PROXY */ .bh, {
      value: p = new Proxy(value, proxyTraps)
    });
    const keys = Object.keys(value),
          desc = Object.getOwnPropertyDescriptors(value);
    for (let i = 0, l = keys.length; i < l; i++) {
      const prop = keys[i];
      if (desc[prop].get) {
        const get = desc[prop].get.bind(p);
        Object.defineProperty(value, prop, {
          get
        });
      }
      if (desc[prop].set) {
        const og = desc[prop].set,
              set = v => (0,solid_js__WEBPACK_IMPORTED_MODULE_0__/* .batch */ .dC)(() => og.call(p, v));
        Object.defineProperty(value, prop, {
          set
        });
      }
    }
  }
  return p;
}
function createMutable(state, options) {
  const unwrappedStore = unwrap(state || {});
  const wrappedStore = wrap(unwrappedStore);
  return wrappedStore;
}

function applyState(target, parent, property, merge, key) {
  const previous = parent[property];
  if (target === previous) return;
  if (!isWrappable(target) || !isWrappable(previous) || key && target[key] !== previous[key]) {
    target !== previous && setProperty(parent, property, target);
    return;
  }
  if (Array.isArray(target)) {
    if (target.length && previous.length && (!merge || key && target[0][key] != null)) {
      let i, j, start, end, newEnd, item, newIndicesNext, keyVal;
      for (start = 0, end = Math.min(previous.length, target.length); start < end && (previous[start] === target[start] || key && previous[start][key] === target[start][key]); start++) {
        applyState(target[start], previous, start, merge, key);
      }
      const temp = new Array(target.length),
            newIndices = new Map();
      for (end = previous.length - 1, newEnd = target.length - 1; end >= start && newEnd >= start && (previous[end] === target[newEnd] || key && previous[end][key] === target[newEnd][key]); end--, newEnd--) {
        temp[newEnd] = previous[end];
      }
      if (start > newEnd || start > end) {
        for (j = start; j <= newEnd; j++) setProperty(previous, j, target[j]);
        for (; j < target.length; j++) {
          setProperty(previous, j, temp[j]);
          applyState(target[j], previous, j, merge, key);
        }
        if (previous.length > target.length) setProperty(previous, "length", target.length);
        return;
      }
      newIndicesNext = new Array(newEnd + 1);
      for (j = newEnd; j >= start; j--) {
        item = target[j];
        keyVal = key ? item[key] : item;
        i = newIndices.get(keyVal);
        newIndicesNext[j] = i === undefined ? -1 : i;
        newIndices.set(keyVal, j);
      }
      for (i = start; i <= end; i++) {
        item = previous[i];
        keyVal = key ? item[key] : item;
        j = newIndices.get(keyVal);
        if (j !== undefined && j !== -1) {
          temp[j] = previous[i];
          j = newIndicesNext[j];
          newIndices.set(keyVal, j);
        }
      }
      for (j = start; j < target.length; j++) {
        if (j in temp) {
          setProperty(previous, j, temp[j]);
          applyState(target[j], previous, j, merge, key);
        } else setProperty(previous, j, target[j]);
      }
    } else {
      for (let i = 0, len = target.length; i < len; i++) {
        applyState(target[i], previous, i, merge, key);
      }
    }
    if (previous.length > target.length) setProperty(previous, "length", target.length);
    return;
  }
  const targetKeys = Object.keys(target);
  for (let i = 0, len = targetKeys.length; i < len; i++) {
    applyState(target[targetKeys[i]], previous, targetKeys[i], merge, key);
  }
  const previousKeys = Object.keys(previous);
  for (let i = 0, len = previousKeys.length; i < len; i++) {
    if (target[previousKeys[i]] === undefined) setProperty(previous, previousKeys[i], undefined);
  }
}
function reconcile(value, options = {}) {
  const {
    merge,
    key = "id"
  } = options,
        v = unwrap(value);
  return s => {
    const state = s;
    if (!isWrappable(state) || !isWrappable(v)) return v;
    applyState(v, {
      state
    }, "state", merge, key);
    return state;
  };
}
const setterTraps = {
  get(target, property) {
    if (property === $RAW) return target;
    const value = target[property];
    return isWrappable(value) ? new Proxy(value, setterTraps) : value;
  },
  set(target, property, value) {
    setProperty(target, property, unwrap(value));
    return true;
  },
  deleteProperty(target, property) {
    setProperty(target, property, undefined);
    return true;
  }
};
function produce(fn) {
  return s => {
    const state = s;
    if (isWrappable(state)) fn(new Proxy(state, setterTraps));
    return state;
  };
}




/***/ }),

/***/ 47:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Qj": () => (/* binding */ delegateEvents),
/* harmony export */   "$T": () => (/* binding */ insert),
/* harmony export */   "sY": () => (/* binding */ render),
/* harmony export */   "XK": () => (/* binding */ template)
/* harmony export */ });
/* unused harmony exports Aliases, Assets, ChildProperties, DelegatedEvents, Dynamic, HydrationScript, NoHydration, Portal, PropAliases, Properties, SVGElements, SVGNamespace, addEventListener, assign, classList, clearDelegatedEvents, dynamicProperty, escape, gatherHydratable, generateHydrationScript, getHydrationKey, getNextElement, getNextMarker, getNextMatch, hydrate, isServer, memo, pipeToNodeWritable, pipeToWritable, renderToString, renderToStringAsync, resolveSSRNode, runHydrationEvents, setAttribute, setAttributeNS, spread, ssr, ssrBoolean, ssrClassList, ssrHydrationKey, ssrSpread, ssrStyle, style */
/* harmony import */ var solid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);



const booleans = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"];
const Properties = new Set(["className", "value", "readOnly", "formNoValidate", "isMap", "noModule", "playsInline", ...booleans]);
const ChildProperties = new Set(["innerHTML", "textContent", "innerText", "children"]);
const Aliases = {
  className: "class",
  htmlFor: "for"
};
const PropAliases = {
  class: "className",
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly"
};
const DelegatedEvents = new Set(["beforeinput", "click", "dblclick", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"]);
const SVGElements = new Set([
"altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "linearGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect",
"set", "stop",
"svg", "switch", "symbol", "text", "textPath",
"tref", "tspan", "use", "view", "vkern"]);
const SVGNamespace = {
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace"
};

function memo(fn, equals) {
  return createMemo(fn, undefined, !equals ? {
    equals
  } : undefined);
}

function reconcileArrays(parentNode, a, b) {
  let bLength = b.length,
      aEnd = a.length,
      bEnd = bLength,
      aStart = 0,
      bStart = 0,
      after = a[aEnd - 1].nextSibling,
      map = null;
  while (aStart < aEnd || bStart < bEnd) {
    if (a[aStart] === b[bStart]) {
      aStart++;
      bStart++;
      continue;
    }
    while (a[aEnd - 1] === b[bEnd - 1]) {
      aEnd--;
      bEnd--;
    }
    if (aEnd === aStart) {
      const node = bEnd < bLength ? bStart ? b[bStart - 1].nextSibling : b[bEnd - bStart] : after;
      while (bStart < bEnd) parentNode.insertBefore(b[bStart++], node);
    } else if (bEnd === bStart) {
      while (aStart < aEnd) {
        if (!map || !map.has(a[aStart])) parentNode.removeChild(a[aStart]);
        aStart++;
      }
    } else if (a[aStart] === b[bEnd - 1] && b[bStart] === a[aEnd - 1]) {
      const node = a[--aEnd].nextSibling;
      parentNode.insertBefore(b[bStart++], a[aStart++].nextSibling);
      parentNode.insertBefore(b[--bEnd], node);
      a[aEnd] = b[bEnd];
    } else {
      if (!map) {
        map = new Map();
        let i = bStart;
        while (i < bEnd) map.set(b[i], i++);
      }
      const index = map.get(a[aStart]);
      if (index != null) {
        if (bStart < index && index < bEnd) {
          let i = aStart,
              sequence = 1,
              t;
          while (++i < aEnd && i < bEnd) {
            if ((t = map.get(a[i])) == null || t !== index + sequence) break;
            sequence++;
          }
          if (sequence > index - bStart) {
            const node = a[aStart];
            while (bStart < index) parentNode.insertBefore(b[bStart++], node);
          } else parentNode.replaceChild(b[bStart++], a[aStart++]);
        } else aStart++;
      } else parentNode.removeChild(a[aStart++]);
    }
  }
}

const $$EVENTS = "_$DX_DELEGATE";
function render(code, element, init) {
  let disposer;
  (0,solid_js__WEBPACK_IMPORTED_MODULE_0__/* .createRoot */ .so)(dispose => {
    disposer = dispose;
    insert(element, code(), element.firstChild ? null : undefined, init);
  });
  return () => {
    disposer();
    element.textContent = "";
  };
}
function template(html, check, isSVG) {
  const t = document.createElement("template");
  t.innerHTML = html;
  let node = t.content.firstChild;
  if (isSVG) node = node.firstChild;
  return node;
}
function delegateEvents(eventNames, document = window.document) {
  const e = document[$$EVENTS] || (document[$$EVENTS] = new Set());
  for (let i = 0, l = eventNames.length; i < l; i++) {
    const name = eventNames[i];
    if (!e.has(name)) {
      e.add(name);
      document.addEventListener(name, eventHandler);
    }
  }
}
function clearDelegatedEvents(document = window.document) {
  if (document[$$EVENTS]) {
    for (let name of document[$$EVENTS].keys()) document.removeEventListener(name, eventHandler);
    delete document[$$EVENTS];
  }
}
function setAttribute(node, name, value) {
  if (value == null) node.removeAttribute(name);else node.setAttribute(name, value);
}
function setAttributeNS(node, namespace, name, value) {
  if (value == null) node.removeAttributeNS(namespace, name);else node.setAttributeNS(namespace, name, value);
}
function addEventListener(node, name, handler, delegate) {
  if (delegate) {
    if (Array.isArray(handler)) {
      node[`$$${name}`] = handler[0];
      node[`$$${name}Data`] = handler[1];
    } else node[`$$${name}`] = handler;
  } else if (Array.isArray(handler)) {
    node.addEventListener(name, e => handler[0](handler[1], e));
  } else node.addEventListener(name, handler);
}
function classList(node, value, prev = {}) {
  const classKeys = Object.keys(value || {}),
        prevKeys = Object.keys(prev);
  let i, len;
  for (i = 0, len = prevKeys.length; i < len; i++) {
    const key = prevKeys[i];
    if (!key || key === "undefined" || value[key]) continue;
    toggleClassKey(node, key, false);
    delete prev[key];
  }
  for (i = 0, len = classKeys.length; i < len; i++) {
    const key = classKeys[i],
          classValue = !!value[key];
    if (!key || key === "undefined" || prev[key] === classValue || !classValue) continue;
    toggleClassKey(node, key, true);
    prev[key] = classValue;
  }
  return prev;
}
function style(node, value, prev = {}) {
  const nodeStyle = node.style;
  if (value == null || typeof value === "string") return nodeStyle.cssText = value;
  typeof prev === "string" && (prev = {});
  let v, s;
  for (s in prev) {
    value[s] == null && nodeStyle.removeProperty(s);
    delete prev[s];
  }
  for (s in value) {
    v = value[s];
    if (v !== prev[s]) {
      nodeStyle.setProperty(s, v);
      prev[s] = v;
    }
  }
  return prev;
}
function spread(node, accessor, isSVG, skipChildren) {
  if (typeof accessor === "function") {
    createRenderEffect(current => spreadExpression(node, accessor(), current, isSVG, skipChildren));
  } else spreadExpression(node, accessor, undefined, isSVG, skipChildren);
}
function dynamicProperty(props, key) {
  const src = props[key];
  Object.defineProperty(props, key, {
    get() {
      return src();
    },
    enumerable: true
  });
  return props;
}
function insert(parent, accessor, marker, initial) {
  if (marker !== undefined && !initial) initial = [];
  if (typeof accessor !== "function") return insertExpression(parent, accessor, initial, marker);
  (0,solid_js__WEBPACK_IMPORTED_MODULE_0__/* .createRenderEffect */ .F3)(current => insertExpression(parent, accessor(), current, marker), initial);
}
function assign(node, props, isSVG, skipChildren, prevProps = {}) {
  let isCE, isProp, isChildProp;
  for (const prop in props) {
    if (prop === "children") {
      if (!skipChildren) insertExpression(node, props.children);
      continue;
    }
    const value = props[prop];
    if (value === prevProps[prop]) continue;
    if (prop === "style") {
      style(node, value, prevProps[prop]);
    } else if (prop === "classList") {
      classList(node, value, prevProps[prop]);
    } else if (prop === "ref") {
      value(node);
    } else if (prop.slice(0, 3) === "on:") {
      node.addEventListener(prop.slice(3), value);
    } else if (prop.slice(0, 10) === "oncapture:") {
      node.addEventListener(prop.slice(10), value, true);
    } else if (prop.slice(0, 2) === "on") {
      const name = prop.slice(2).toLowerCase();
      const delegate = DelegatedEvents.has(name);
      addEventListener(node, name, value, delegate);
      delegate && delegateEvents([name]);
    } else if ((isChildProp = ChildProperties.has(prop)) || !isSVG && (PropAliases[prop] || (isProp = Properties.has(prop))) || (isCE = node.nodeName.includes("-"))) {
      if (isCE && !isProp && !isChildProp) node[toPropertyName(prop)] = value;else node[PropAliases[prop] || prop] = value;
    } else {
      const ns = isSVG && prop.indexOf(":") > -1 && SVGNamespace[prop.split(":")[0]];
      if (ns) setAttributeNS(node, ns, prop, value);else setAttribute(node, Aliases[prop] || prop, value);
    }
    prevProps[prop] = value;
  }
}
function hydrate(code, element) {
  sharedConfig.resources = globalThis._$HYDRATION.resources;
  sharedConfig.completed = globalThis._$HYDRATION.completed;
  sharedConfig.events = globalThis._$HYDRATION.events;
  sharedConfig.context = {
    id: "",
    count: 0,
    loadResource: globalThis._$HYDRATION.loadResource
  };
  sharedConfig.registry = new Map();
  gatherHydratable(element);
  const dispose = render(code, element, [...element.childNodes]);
  sharedConfig.context = null;
  return dispose;
}
function gatherHydratable(element) {
  const templates = element.querySelectorAll(`*[data-hk]`);
  for (let i = 0; i < templates.length; i++) {
    const node = templates[i];
    sharedConfig.registry.set(node.getAttribute("data-hk"), node);
  }
}
function getNextElement(template) {
  let node, key;
  if (!sharedConfig.context || !(node = sharedConfig.registry.get(key = getHydrationKey()))) {
    return template.cloneNode(true);
  }
  if (sharedConfig.completed) sharedConfig.completed.add(node);
  sharedConfig.registry.delete(key);
  return node;
}
function getNextMatch(el, nodeName) {
  while (el && el.localName !== nodeName) el = el.nextSibling;
  return el;
}
function getNextMarker(start) {
  let end = start,
      count = 0,
      current = [];
  if (sharedConfig.context) {
    while (end) {
      if (end.nodeType === 8) {
        const v = end.nodeValue;
        if (v === "#") count++;else if (v === "/") {
          if (count === 0) return [end, current];
          count--;
        }
      }
      current.push(end);
      end = end.nextSibling;
    }
  }
  return [end, current];
}
function runHydrationEvents() {
  if (sharedConfig.events && !sharedConfig.events.queued) {
    queueMicrotask(() => {
      const {
        completed,
        events
      } = sharedConfig;
      events.queued = false;
      while (events.length) {
        const [el, e] = events[0];
        if (!completed.has(el)) return;
        eventHandler(e);
        events.shift();
      }
    });
    sharedConfig.events.queued = true;
  }
}
function toPropertyName(name) {
  return name.toLowerCase().replace(/-([a-z])/g, (_, w) => w.toUpperCase());
}
function toggleClassKey(node, key, value) {
  const classNames = key.trim().split(/\s+/);
  for (let i = 0, nameLen = classNames.length; i < nameLen; i++) node.classList.toggle(classNames[i], value);
}
function eventHandler(e) {
  const key = `$$${e.type}`;
  let node = e.composedPath && e.composedPath()[0] || e.target;
  if (e.target !== node) {
    Object.defineProperty(e, "target", {
      configurable: true,
      value: node
    });
  }
  Object.defineProperty(e, "currentTarget", {
    configurable: true,
    get() {
      return node;
    }
  });
  while (node !== null) {
    const handler = node[key];
    if (handler && !node.disabled) {
      const data = node[`${key}Data`];
      data !== undefined ? handler(data, e) : handler(e);
      if (e.cancelBubble) return;
    }
    node = node.host && node.host !== node && node.host instanceof Node ? node.host : node.parentNode;
  }
}
function spreadExpression(node, props, prevProps = {}, isSVG, skipChildren) {
  if (!skipChildren && "children" in props) {
    createRenderEffect(() => prevProps.children = insertExpression(node, props.children, prevProps.children));
  }
  createRenderEffect(() => assign(node, props, isSVG, true, prevProps));
  return prevProps;
}
function insertExpression(parent, value, current, marker, unwrapArray) {
  while (typeof current === "function") current = current();
  if (value === current) return current;
  const t = typeof value,
        multi = marker !== undefined;
  parent = multi && current[0] && current[0].parentNode || parent;
  if (t === "string" || t === "number") {
    if (t === "number") value = value.toString();
    if (multi) {
      let node = current[0];
      if (node && node.nodeType === 3) {
        node.data = value;
      } else node = document.createTextNode(value);
      current = cleanChildren(parent, current, marker, node);
    } else {
      if (current !== "" && typeof current === "string") {
        current = parent.firstChild.data = value;
      } else current = parent.textContent = value;
    }
  } else if (value == null || t === "boolean") {
    if (solid_js__WEBPACK_IMPORTED_MODULE_0__/* .sharedConfig.context */ .vH.context) return current;
    current = cleanChildren(parent, current, marker);
  } else if (t === "function") {
    (0,solid_js__WEBPACK_IMPORTED_MODULE_0__/* .createRenderEffect */ .F3)(() => {
      let v = value();
      while (typeof v === "function") v = v();
      current = insertExpression(parent, v, current, marker);
    });
    return () => current;
  } else if (Array.isArray(value)) {
    const array = [];
    if (normalizeIncomingArray(array, value, unwrapArray)) {
      (0,solid_js__WEBPACK_IMPORTED_MODULE_0__/* .createRenderEffect */ .F3)(() => current = insertExpression(parent, array, current, marker, true));
      return () => current;
    }
    if (solid_js__WEBPACK_IMPORTED_MODULE_0__/* .sharedConfig.context */ .vH.context && current && current.length) return current;
    if (array.length === 0) {
      current = cleanChildren(parent, current, marker);
      if (multi) return current;
    } else {
      if (Array.isArray(current)) {
        if (current.length === 0) {
          appendNodes(parent, array, marker);
        } else reconcileArrays(parent, current, array);
      } else if (current == null || current === "") {
        appendNodes(parent, array);
      } else {
        reconcileArrays(parent, multi && current || [parent.firstChild], array);
      }
    }
    current = array;
  } else if (value instanceof Node) {
    if (Array.isArray(current)) {
      if (multi) return current = cleanChildren(parent, current, marker, value);
      cleanChildren(parent, current, null, value);
    } else if (current == null || current === "" || !parent.firstChild) {
      parent.appendChild(value);
    } else parent.replaceChild(value, parent.firstChild);
    current = value;
  } else ;
  return current;
}
function normalizeIncomingArray(normalized, array, unwrap) {
  let dynamic = false;
  for (let i = 0, len = array.length; i < len; i++) {
    let item = array[i],
        t;
    if (item instanceof Node) {
      normalized.push(item);
    } else if (item == null || item === true || item === false) ; else if (Array.isArray(item)) {
      dynamic = normalizeIncomingArray(normalized, item) || dynamic;
    } else if ((t = typeof item) === "string") {
      normalized.push(document.createTextNode(item));
    } else if (t === "function") {
      if (unwrap) {
        while (typeof item === "function") item = item();
        dynamic = normalizeIncomingArray(normalized, Array.isArray(item) ? item : [item]) || dynamic;
      } else {
        normalized.push(item);
        dynamic = true;
      }
    } else normalized.push(document.createTextNode(item.toString()));
  }
  return dynamic;
}
function appendNodes(parent, array, marker) {
  for (let i = 0, len = array.length; i < len; i++) parent.insertBefore(array[i], marker);
}
function cleanChildren(parent, current, marker, replacement) {
  if (marker === undefined) return parent.textContent = "";
  const node = replacement || document.createTextNode("");
  if (current.length) {
    let inserted = false;
    for (let i = current.length - 1; i >= 0; i--) {
      const el = current[i];
      if (node !== el) {
        const isParent = el.parentNode === parent;
        if (!inserted && !i) isParent ? parent.replaceChild(node, el) : parent.insertBefore(node, marker);else isParent && parent.removeChild(el);
      } else inserted = true;
    }
  } else parent.insertBefore(node, marker);
  return [node];
}
function getHydrationKey() {
  const hydrate = sharedConfig.context;
  return `${hydrate.id}${hydrate.count++}`;
}
function Assets() {
  return;
}
function NoHydration(props) {
  return sharedConfig.context ? undefined : props.children;
}

function renderToString(fn, options) {}
function renderToStringAsync(fn, options) {}
function pipeToNodeWritable(fn, writable, options) {}
function pipeToWritable(fn, writable, options) {}
function ssr(template, ...nodes) {}
function resolveSSRNode(node) {}
function ssrClassList(value) {}
function ssrStyle(value) {}
function ssrSpread(accessor) {}
function ssrBoolean(key, value) {}
function ssrHydrationKey() {}
function escape(html) {}
function generateHydrationScript() {}

const isServer = false;
const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
function createElement(tagName, isSVG = false) {
  return isSVG ? document.createElementNS(SVG_NAMESPACE, tagName) : document.createElement(tagName);
}
function Portal(props) {
  const {
    useShadow
  } = props,
        marker = document.createTextNode(""),
        mount = props.mount || document.body;
  function renderPortal() {
    if (sharedConfig.context) {
      const [s, set] = createSignal(false);
      queueMicrotask(() => set(true));
      return () => s() && props.children;
    } else return () => props.children;
  }
  if (mount instanceof HTMLHeadElement) {
    const [clean, setClean] = createSignal(false);
    const cleanup = () => setClean(true);
    createRoot(dispose => insert(mount, () => !clean() ? renderPortal()() : dispose(), null));
    onCleanup(() => {
      if (sharedConfig.context) queueMicrotask(cleanup);else cleanup();
    });
  } else {
    const container = createElement(props.isSVG ? "g" : "div", props.isSVG),
          renderRoot = useShadow && container.attachShadow ? container.attachShadow({
      mode: "open"
    }) : container;
    Object.defineProperty(container, "host", {
      get() {
        return marker.parentNode;
      }
    });
    insert(renderRoot, renderPortal());
    mount.appendChild(container);
    props.ref && props.ref(container);
    onCleanup(() => mount.removeChild(container));
  }
  return marker;
}
function Dynamic(props) {
  const [p, others] = splitProps(props, ["component"]);
  return createMemo(() => {
    const component = p.component;
    switch (typeof component) {
      case "function":
        return untrack(() => component(others));
      case "string":
        const isSvg = SVGElements.has(component);
        const el = sharedConfig.context ? getNextElement() : createElement(component, isSvg);
        spread(el, others, isSvg);
        return el;
    }
  });
}




/***/ })

}]);