/**
  @license
  Apache License 2.0 https://github.com/ReactiveX/RxJS/blob/master/LICENSE.txt
 **/
/**
  @license
  Apache License 2.0 https://github.com/ReactiveX/RxJS/blob/master/LICENSE.txt
 **/
/*
 *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
*****************************************************************************/
(function (g, B) {
  "object" === typeof exports && "undefined" !== typeof module
    ? B(exports)
    : "function" === typeof define && define.amd
    ? define("rxjs", ["exports"], B)
    : B((g.rxjs = {}));
})(this, function (g) {
  function B(b, a) {
    function c() {
      this.constructor = b;
    }
    if ("function" !== typeof a && null !== a)
      throw new TypeError(
        "Class extends value " + String(a) + " is not a constructor or null"
      );
    Qa(b, a);
    b.prototype =
      null === a ? Object.create(a) : ((c.prototype = a.prototype), new c());
  }
  function Hb(b, a) {
    var c = {},
      d;
    for (d in b)
      Object.prototype.hasOwnProperty.call(b, d) &&
        0 > a.indexOf(d) &&
        (c[d] = b[d]);
    if (null != b && "function" === typeof Object.getOwnPropertySymbols) {
      var e = 0;
      for (d = Object.getOwnPropertySymbols(b); e < d.length; e++)
        0 > a.indexOf(d[e]) &&
          Object.prototype.propertyIsEnumerable.call(b, d[e]) &&
          (c[d[e]] = b[d[e]]);
    }
    return c;
  }
  function ae(b, a, c, d) {
    function e(a) {
      return a instanceof c
        ? a
        : new c(function (b) {
            b(a);
          });
    }
    return new (c || (c = Promise))(function (c, h) {
      function f(a) {
        try {
          y(d.next(a));
        } catch (t) {
          h(t);
        }
      }
      function k(a) {
        try {
          y(d["throw"](a));
        } catch (t) {
          h(t);
        }
      }
      function y(a) {
        a.done ? c(a.value) : e(a.value).then(f, k);
      }
      y((d = d.apply(b, a || [])).next());
    });
  }
  function Ra(b, a) {
    function c(a) {
      return function (b) {
        return d([a, b]);
      };
    }
    function d(c) {
      if (f) throw new TypeError("Generator is already executing.");
      for (; e; )
        try {
          if (
            ((f = 1),
            h &&
              (l =
                c[0] & 2
                  ? h["return"]
                  : c[0]
                  ? h["throw"] || ((l = h["return"]) && l.call(h), 0)
                  : h.next) &&
              !(l = l.call(h, c[1])).done)
          )
            return l;
          if (((h = 0), l)) c = [c[0] & 2, l.value];
          switch (c[0]) {
            case 0:
            case 1:
              l = c;
              break;
            case 4:
              return e.label++, { value: c[1], done: !1 };
            case 5:
              e.label++;
              h = c[1];
              c = [0];
              continue;
            case 7:
              c = e.ops.pop();
              e.trys.pop();
              continue;
            default:
              if (
                !((l = e.trys), (l = 0 < l.length && l[l.length - 1])) &&
                (6 === c[0] || 2 === c[0])
              ) {
                e = 0;
                continue;
              }
              if (3 === c[0] && (!l || (c[1] > l[0] && c[1] < l[3])))
                e.label = c[1];
              else if (6 === c[0] && e.label < l[1]) (e.label = l[1]), (l = c);
              else if (l && e.label < l[2]) (e.label = l[2]), e.ops.push(c);
              else {
                l[2] && e.ops.pop();
                e.trys.pop();
                continue;
              }
          }
          c = a.call(b, e);
        } catch (p) {
          (c = [6, p]), (h = 0);
        } finally {
          f = l = 0;
        }
      if (c[0] & 5) throw c[1];
      return { value: c[0] ? c[1] : void 0, done: !0 };
    }
    var e = {
        label: 0,
        sent: function () {
          if (l[0] & 1) throw l[1];
          return l[1];
        },
        trys: [],
        ops: [],
      },
      f,
      h,
      l,
      k;
    return (
      (k = { next: c(0), throw: c(1), return: c(2) }),
      "function" === typeof Symbol &&
        (k[Symbol.iterator] = function () {
          return this;
        }),
      k
    );
  }
  function G(b) {
    var a = "function" === typeof Symbol && Symbol.iterator,
      c = a && b[a],
      d = 0;
    if (c) return c.call(b);
    if (b && "number" === typeof b.length)
      return {
        next: function () {
          b && d >= b.length && (b = void 0);
          return { value: b && b[d++], done: !b };
        },
      };
    throw new TypeError(
      a ? "Object is not iterable." : "Symbol.iterator is not defined."
    );
  }
  function z(b, a) {
    var c = "function" === typeof Symbol && b[Symbol.iterator];
    if (!c) return b;
    b = c.call(b);
    var d,
      e = [],
      f;
    try {
      for (; (void 0 === a || 0 < a--) && !(d = b.next()).done; )
        e.push(d.value);
    } catch (h) {
      f = { error: h };
    } finally {
      try {
        d && !d.done && (c = b["return"]) && c.call(b);
      } finally {
        if (f) throw f.error;
      }
    }
    return e;
  }
  function A(b, a) {
    for (var c = 0, d = a.length, e = b.length; c < d; c++, e++) b[e] = a[c];
    return b;
  }
  function aa(b) {
    return this instanceof aa ? ((this.v = b), this) : new aa(b);
  }
  function be(b, a, c) {
    function d(a) {
      k[a] &&
        (g[a] = function (b) {
          return new Promise(function (c, d) {
            1 < p.push([a, b, c, d]) || e(a, b);
          });
        });
    }
    function e(a, b) {
      try {
        var c = k[a](b);
        c.value instanceof aa
          ? Promise.resolve(c.value.v).then(f, h)
          : l(p[0][2], c);
      } catch (u) {
        l(p[0][3], u);
      }
    }
    function f(a) {
      e("next", a);
    }
    function h(a) {
      e("throw", a);
    }
    function l(a, b) {
      (a(b), p.shift(), p.length) && e(p[0][0], p[0][1]);
    }
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var k = c.apply(b, a || []),
      g,
      p = [];
    return (
      (g = {}),
      d("next"),
      d("throw"),
      d("return"),
      (g[Symbol.asyncIterator] = function () {
        return this;
      }),
      g
    );
  }
  function ce(b) {
    function a(a) {
      e[a] =
        b[a] &&
        function (d) {
          return new Promise(function (e, f) {
            d = b[a](d);
            c(e, f, d.done, d.value);
          });
        };
    }
    function c(a, b, c, d) {
      Promise.resolve(d).then(function (b) {
        a({ value: b, done: c });
      }, b);
    }
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var d = b[Symbol.asyncIterator],
      e;
    return d
      ? d.call(b)
      : ((b = "function" === typeof G ? G(b) : b[Symbol.iterator]()),
        (e = {}),
        a("next"),
        a("throw"),
        a("return"),
        (e[Symbol.asyncIterator] = function () {
          return this;
        }),
        e);
  }
  function q(b) {
    return "function" === typeof b;
  }
  function Q(b) {
    b = b(function (a) {
      Error.call(a);
      a.stack = Error().stack;
    });
    b.prototype = Object.create(Error.prototype);
    return (b.prototype.constructor = b);
  }
  function N(b, a) {
    b && ((a = b.indexOf(a)), 0 <= a && b.splice(a, 1));
  }
  function Ib(b) {
    return (
      b instanceof C ||
      (b && "closed" in b && q(b.remove) && q(b.add) && q(b.unsubscribe))
    );
  }
  function Jb(b) {
    ba.setTimeout(function () {
      var a = R.onUnhandledError;
      if (a) a(b);
      else throw b;
    });
  }
  function D() {}
  function I(b, a, c) {
    return { kind: b, value: a, error: c };
  }
  function Aa(b) {
    if (R.useDeprecatedSynchronousErrorHandling) {
      var a = !T;
      a && (T = { errorThrown: !1, error: null });
      b();
      if (a && ((a = T), (b = a.errorThrown), (a = a.error), (T = null), b))
        throw a;
    } else b();
  }
  function Sa(b, a) {
    return function () {
      for (var a = [], d = 0; d < arguments.length; d++) a[d] = arguments[d];
      try {
        b.apply(void 0, A([], z(a)));
      } catch (e) {
        R.useDeprecatedSynchronousErrorHandling
          ? R.useDeprecatedSynchronousErrorHandling &&
            T &&
            ((T.errorThrown = !0), (T.error = e))
          : Jb(e);
      }
    };
  }
  function Kb(b) {
    throw b;
  }
  function Ta(b, a) {
    var c = R.onStoppedNotification;
    c &&
      ba.setTimeout(function () {
        return c(b, a);
      });
  }
  function F(b) {
    return b;
  }
  function Ua() {
    for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
    return Lb(b);
  }
  function Lb(b) {
    return 0 === b.length
      ? F
      : 1 === b.length
      ? b[0]
      : function (a) {
          return b.reduce(function (a, b) {
            return b(a);
          }, a);
        };
  }
  function Mb(b) {
    var a;
    return null !== (a = null !== b && void 0 !== b ? b : R.Promise) &&
      void 0 !== a
      ? a
      : Promise;
  }
  function de(b) {
    var a;
    (a = b && b instanceof la) ||
      (a = b && q(b.next) && q(b.error) && q(b.complete) && Ib(b));
    return a;
  }
  function n(b) {
    return function (a) {
      if (q(null === a || void 0 === a ? void 0 : a.lift))
        return a.lift(function (a) {
          try {
            return b(a, this);
          } catch (d) {
            this.error(d);
          }
        });
      throw new TypeError("Unable to lift unknown Observable type");
    };
  }
  function Va() {
    return n(function (b, a) {
      var c = null;
      b._refCount++;
      var d = new m(a, void 0, void 0, void 0, function () {
        if (!b || 0 >= b._refCount || 0 < --b._refCount) c = null;
        else {
          var d = b._connection,
            f = c;
          c = null;
          !d || (f && d !== f) || d.unsubscribe();
          a.unsubscribe();
        }
      });
      b.subscribe(d);
      d.closed || (c = b.connect());
    });
  }
  function Nb(b) {
    var a = S.schedule;
    return new r(function (c) {
      var d = new C(),
        e = b || Ba,
        f = e.now(),
        h = function (l) {
          var k = e.now();
          c.next({ timestamp: b ? k : l, elapsed: k - f });
          c.closed || d.add(a(h));
        };
      d.add(a(h));
      return d;
    });
  }
  function Ob(b) {
    return b in Wa ? (delete Wa[b], !0) : !1;
  }
  function ee(b) {
    return new r(function (a) {
      return b.schedule(function () {
        return a.complete();
      });
    });
  }
  function Xa(b, a) {
    return new r(function (c) {
      var d = 0;
      return a.schedule(function () {
        d === b.length
          ? c.complete()
          : (c.next(b[d++]), c.closed || this.schedule());
      });
    });
  }
  function fe(b, a) {
    return new r(function (c) {
      var d = new C();
      d.add(
        a.schedule(function () {
          var e = b[ca]();
          d.add(
            e.subscribe({
              next: function (b) {
                d.add(
                  a.schedule(function () {
                    return c.next(b);
                  })
                );
              },
              error: function (b) {
                d.add(
                  a.schedule(function () {
                    return c.error(b);
                  })
                );
              },
              complete: function () {
                d.add(
                  a.schedule(function () {
                    return c.complete();
                  })
                );
              },
            })
          );
        })
      );
      return d;
    });
  }
  function ge(b, a) {
    return new r(function (c) {
      return a.schedule(function () {
        return b.then(
          function (b) {
            c.add(
              a.schedule(function () {
                c.next(b);
                c.add(
                  a.schedule(function () {
                    return c.complete();
                  })
                );
              })
            );
          },
          function (b) {
            c.add(
              a.schedule(function () {
                return c.error(b);
              })
            );
          }
        );
      });
    });
  }
  function Pb(b, a, c, d) {
    void 0 === d && (d = 0);
    a = a.schedule(function () {
      try {
        c.call(this);
      } catch (e) {
        b.error(e);
      }
    }, d);
    b.add(a);
    return a;
  }
  function Qb(b, a) {
    return new r(function (c) {
      var d;
      c.add(
        a.schedule(function () {
          d = b[Ya]();
          Pb(c, a, function () {
            var a = d.next(),
              b = a.value;
            a.done ? c.complete() : (c.next(b), this.schedule());
          });
        })
      );
      return function () {
        return q(null === d || void 0 === d ? void 0 : d.return) && d.return();
      };
    });
  }
  function Rb(b, a) {
    if (!b) throw Error("Iterable cannot be null");
    return new r(function (c) {
      var d = new C();
      d.add(
        a.schedule(function () {
          var e = b[Symbol.asyncIterator]();
          d.add(
            a.schedule(function () {
              var a = this;
              e.next().then(function (b) {
                b.done ? c.complete() : (c.next(b.value), a.schedule());
              });
            })
          );
        })
      );
      return d;
    });
  }
  function Sb(b) {
    return q(null === b || void 0 === b ? void 0 : b[Ya]);
  }
  function Tb(b) {
    return (
      Symbol.asyncIterator &&
      q(null === b || void 0 === b ? void 0 : b[Symbol.asyncIterator])
    );
  }
  function Ub(b) {
    return new TypeError(
      "You provided " +
        (null !== b && "object" === typeof b
          ? "an invalid object"
          : "'" + b + "'") +
        " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable."
    );
  }
  function Vb(b) {
    return be(this, arguments, function () {
      var a, c, d, e;
      return Ra(this, function (f) {
        switch (f.label) {
          case 0:
            (a = b.getReader()), (f.label = 1);
          case 1:
            f.trys.push([1, , 9, 10]), (f.label = 2);
          case 2:
            return [4, aa(a.read())];
          case 3:
            return (
              (c = f.sent()),
              (d = c.value),
              (e = c.done) ? [4, aa(void 0)] : [3, 5]
            );
          case 4:
            return [2, f.sent()];
          case 5:
            return [4, aa(d)];
          case 6:
            return [4, f.sent()];
          case 7:
            return f.sent(), [3, 2];
          case 8:
            return [3, 10];
          case 9:
            return a.releaseLock(), [7];
          case 10:
            return [2];
        }
      });
    });
  }
  function Wb(b, a) {
    if (null != b) {
      if (q(b[ca])) return fe(b, a);
      if (Za(b)) return Xa(b, a);
      if (q(null === b || void 0 === b ? void 0 : b.then)) return ge(b, a);
      if (Tb(b)) return Rb(b, a);
      if (Sb(b)) return Qb(b, a);
      if (q(null === b || void 0 === b ? void 0 : b.getReader))
        return Rb(Vb(b), a);
    }
    throw Ub(b);
  }
  function da(b, a) {
    return a ? Wb(b, a) : v(b);
  }
  function v(b) {
    if (b instanceof r) return b;
    if (null != b) {
      if (q(b[ca])) return he(b);
      if (Za(b)) return Xb(b);
      if (q(null === b || void 0 === b ? void 0 : b.then)) return ie(b);
      if (Tb(b)) return Yb(b);
      if (Sb(b)) return je(b);
      if (q(null === b || void 0 === b ? void 0 : b.getReader))
        return Yb(Vb(b));
    }
    throw Ub(b);
  }
  function he(b) {
    return new r(function (a) {
      var c = b[ca]();
      if (q(c.subscribe)) return c.subscribe(a);
      throw new TypeError(
        "Provided object does not correctly implement Symbol.observable"
      );
    });
  }
  function Xb(b) {
    return new r(function (a) {
      for (var c = 0; c < b.length && !a.closed; c++) a.next(b[c]);
      a.complete();
    });
  }
  function ie(b) {
    return new r(function (a) {
      b.then(
        function (b) {
          a.closed || (a.next(b), a.complete());
        },
        function (b) {
          return a.error(b);
        }
      ).then(null, Jb);
    });
  }
  function je(b) {
    return new r(function (a) {
      var c, d;
      try {
        for (var e = G(b), f = e.next(); !f.done; f = e.next())
          if ((a.next(f.value), a.closed)) return;
      } catch (h) {
        c = { error: h };
      } finally {
        try {
          f && !f.done && (d = e.return) && d.call(e);
        } finally {
          if (c) throw c.error;
        }
      }
      a.complete();
    });
  }
  function Yb(b) {
    return new r(function (a) {
      ke(b, a).catch(function (b) {
        return a.error(b);
      });
    });
  }
  function ke(b, a) {
    var c, d, e, f;
    return ae(this, void 0, void 0, function () {
      var h, l;
      return Ra(this, function (k) {
        switch (k.label) {
          case 0:
            k.trys.push([0, 5, 6, 11]), (c = ce(b)), (k.label = 1);
          case 1:
            return [4, c.next()];
          case 2:
            if (((d = k.sent()), d.done)) return [3, 4];
            h = d.value;
            a.next(h);
            if (a.closed) return [2];
            k.label = 3;
          case 3:
            return [3, 1];
          case 4:
            return [3, 11];
          case 5:
            return (l = k.sent()), (e = { error: l }), [3, 11];
          case 6:
            return (
              k.trys.push([6, , 9, 10]),
              d && !d.done && (f = c.return) ? [4, f.call(c)] : [3, 8]
            );
          case 7:
            k.sent(), (k.label = 8);
          case 8:
            return [3, 10];
          case 9:
            if (e) throw e.error;
            return [7];
          case 10:
            return [7];
          case 11:
            return a.complete(), [2];
        }
      });
    });
  }
  function ea(b, a) {
    return a ? Xa(b, a) : Xb(b);
  }
  function Ca(b) {
    return b && q(b.schedule);
  }
  function ma(b) {
    return q(b[b.length - 1]) ? b.pop() : void 0;
  }
  function O(b) {
    return Ca(b[b.length - 1]) ? b.pop() : void 0;
  }
  function $a() {
    for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
    return (a = O(b)) ? Xa(b, a) : ea(b);
  }
  function Zb(b, a) {
    var c = q(b)
        ? b
        : function () {
            return b;
          },
      d = function (a) {
        return a.error(c());
      };
    return new r(
      a
        ? function (b) {
            return a.schedule(d, 0, b);
          }
        : d
    );
  }
  function Da(b, a) {
    var c,
      d,
      e,
      f = b.kind,
      h = b.value;
    b = b.error;
    if ("string" !== typeof f)
      throw new TypeError('Invalid notification, missing "kind"');
    "N" === f
      ? null === (c = a.next) || void 0 === c
        ? void 0
        : c.call(a, h)
      : "E" === f
      ? null === (d = a.error) || void 0 === d
        ? void 0
        : d.call(a, b)
      : null === (e = a.complete) || void 0 === e
      ? void 0
      : e.call(a);
  }
  function ab(b) {
    return b instanceof Date && !isNaN(b);
  }
  function bb(b, a) {
    b = ab(b) ? { first: b } : "number" === typeof b ? { each: b } : b;
    var c = b.first,
      d = b.each,
      e = b.with,
      f = void 0 === e ? le : e,
      e = b.scheduler,
      h = void 0 === e ? (null !== a && void 0 !== a ? a : K) : e;
    a = b.meta;
    var l = void 0 === a ? null : a;
    if (null == c && null == d) throw new TypeError("No timeout provided.");
    return n(function (a, b) {
      var e,
        k,
        g = null,
        y = 0,
        u = function (a) {
          k = Pb(
            b,
            h,
            function () {
              e.unsubscribe();
              v(f({ meta: l, lastValue: g, seen: y })).subscribe(b);
            },
            a
          );
        };
      e = a.subscribe(
        new m(
          b,
          function (a) {
            null === k || void 0 === k ? void 0 : k.unsubscribe();
            y++;
            b.next((g = a));
            0 < d && u(d);
          },
          void 0,
          void 0,
          function () {
            (null === k || void 0 === k ? 0 : k.closed) ||
              (null === k || void 0 === k ? void 0 : k.unsubscribe());
            g = null;
          }
        )
      );
      u(null != c ? ("number" === typeof c ? c : +c - h.now()) : d);
    });
  }
  function le(b) {
    throw new $b(b);
  }
  function cb(b, a) {
    void 0 === a && (a = 0);
    return n(function (c, d) {
      d.add(
        b.schedule(function () {
          return c.subscribe(d);
        }, a)
      );
    });
  }
  function L(b, a) {
    return n(function (c, d) {
      var e = 0;
      c.subscribe(
        new m(d, function (c) {
          d.next(b.call(a, c, e++));
        })
      );
    });
  }
  function U(b) {
    return L(function (a) {
      return me(a) ? b.apply(void 0, A([], z(a))) : b(a);
    });
  }
  function db(b, a) {
    void 0 === a && (a = 0);
    return n(function (c, d) {
      c.subscribe(
        new m(
          d,
          function (c) {
            return d.add(
              b.schedule(function () {
                return d.next(c);
              }, a)
            );
          },
          function () {
            return d.add(
              b.schedule(function () {
                return d.complete();
              }, a)
            );
          },
          function (c) {
            return d.add(
              b.schedule(function () {
                return d.error(c);
              }, a)
            );
          }
        )
      );
    });
  }
  function Ea(b, a, c, d) {
    if (c)
      if (Ca(c)) d = c;
      else
        return function () {
          for (var e = [], f = 0; f < arguments.length; f++)
            e[f] = arguments[f];
          return Ea(b, a, d).apply(this, e).pipe(U(c));
        };
    return d
      ? function () {
          for (var c = [], f = 0; f < arguments.length; f++)
            c[f] = arguments[f];
          return Ea(b, a).apply(this, c).pipe(cb(d), db(d));
        }
      : function () {
          for (var c = this, d = [], h = 0; h < arguments.length; h++)
            d[h] = arguments[h];
          var l = new eb(),
            k = !0;
          return new r(function (e) {
            e = l.subscribe(e);
            if (k) {
              var f = (k = !1),
                h = !1;
              a.apply(
                c,
                A(A([], z(d)), [
                  function () {
                    for (var a = [], c = 0; c < arguments.length; c++)
                      a[c] = arguments[c];
                    if (b && ((c = a.shift()), null != c)) {
                      l.error(c);
                      return;
                    }
                    l.next(1 < a.length ? a : a[0]);
                    h = !0;
                    f && l.complete();
                  },
                ])
              );
              h && l.complete();
              f = !0;
            }
            return e;
          });
        };
  }
  function ac(b) {
    if (1 === b.length) {
      var a = b[0];
      if (ne(a)) return { args: a, keys: null };
      if (a && "object" === typeof a && oe(a) === pe)
        return (
          (b = qe(a)),
          {
            args: b.map(function (b) {
              return a[b];
            }),
            keys: b,
          }
        );
    }
    return { args: b, keys: null };
  }
  function bc(b, a) {
    return b.reduce(function (b, d, e) {
      return (b[d] = a[e]), b;
    }, {});
  }
  function cc() {
    for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
    var c = O(b),
      a = ma(b),
      b = ac(b),
      d = b.args,
      e = b.keys;
    if (0 === d.length) return da([], c);
    c = new r(
      dc(
        d,
        c,
        e
          ? function (a) {
              return bc(e, a);
            }
          : F
      )
    );
    return a ? c.pipe(U(a)) : c;
  }
  function dc(b, a, c) {
    void 0 === c && (c = F);
    return function (d) {
      ec(
        a,
        function () {
          for (
            var e = b.length,
              f = Array(e),
              h = e,
              l = e,
              k = function (e) {
                ec(
                  a,
                  function () {
                    var k = !1;
                    da(b[e], a).subscribe(
                      new m(
                        d,
                        function (a) {
                          f[e] = a;
                          k || ((k = !0), l--);
                          l || d.next(c(f.slice()));
                        },
                        function () {
                          --h || d.complete();
                        }
                      )
                    );
                  },
                  d
                );
              },
              g = 0;
            g < e;
            g++
          )
            k(g);
        },
        d
      );
    };
  }
  function ec(b, a, c) {
    b ? c.add(b.schedule(a)) : a();
  }
  function fb(b, a, c, d, e, f, h, l) {
    var k = [],
      g = 0,
      p = 0,
      t = !1,
      w = function (a) {
        return g < d ? x(a) : k.push(a);
      },
      x = function (b) {
        f && a.next(b);
        g++;
        var l = !1;
        v(c(b, p++)).subscribe(
          new m(
            a,
            function (b) {
              null === e || void 0 === e ? void 0 : e(b);
              f ? w(b) : a.next(b);
            },
            function () {
              l = !0;
            },
            void 0,
            function () {
              if (l)
                try {
                  g--;
                  for (
                    var b = function () {
                      var b = k.shift();
                      h
                        ? a.add(
                            h.schedule(function () {
                              return x(b);
                            })
                          )
                        : x(b);
                    };
                    k.length && g < d;

                  )
                    b();
                  !t || k.length || g || a.complete();
                } catch (P) {
                  a.error(P);
                }
            }
          )
        );
      };
    b.subscribe(
      new m(a, w, function () {
        t = !0;
        !t || k.length || g || a.complete();
      })
    );
    return function () {
      null === l || void 0 === l ? void 0 : l();
    };
  }
  function H(b, a, c) {
    void 0 === c && (c = Infinity);
    if (q(a))
      return H(function (c, e) {
        return L(function (b, d) {
          return a(c, b, e, d);
        })(v(b(c, e)));
      }, c);
    "number" === typeof a && (c = a);
    return n(function (a, e) {
      return fb(a, e, b, c);
    });
  }
  function oa(b) {
    void 0 === b && (b = Infinity);
    return H(F, b);
  }
  function Fa() {
    return oa(1);
  }
  function pa() {
    for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
    return Fa()(ea(b, O(b)));
  }
  function qa(b) {
    return new r(function (a) {
      v(b()).subscribe(a);
    });
  }
  function gb(b, a, c, d) {
    q(c) && ((d = c), (c = void 0));
    if (d) return gb(b, a, c).pipe(U(d));
    d = z(
      re(b)
        ? se.map(function (d) {
            return function (e) {
              return b[d](a, e, c);
            };
          })
        : te(b)
        ? ue.map(fc(b, a))
        : ve(b)
        ? we.map(fc(b, a))
        : [],
      2
    );
    var e = d[0],
      f = d[1];
    if (!e && Za(b))
      return H(function (b) {
        return gb(b, a, c);
      })(ea(b));
    if (!e) throw new TypeError("Invalid event target");
    return new r(function (a) {
      var b = function () {
        for (var b = [], c = 0; c < arguments.length; c++) b[c] = arguments[c];
        return a.next(1 < b.length ? b : b[0]);
      };
      e(b);
      return function () {
        return f(b);
      };
    });
  }
  function fc(b, a) {
    return function (c) {
      return function (d) {
        return b[c](a, d);
      };
    };
  }
  function te(b) {
    return q(b.addListener) && q(b.removeListener);
  }
  function ve(b) {
    return q(b.on) && q(b.off);
  }
  function re(b) {
    return q(b.addEventListener) && q(b.removeEventListener);
  }
  function gc(b, a, c) {
    return c
      ? gc(b, a).pipe(U(c))
      : new r(function (c) {
          var d = function () {
              for (var a = [], b = 0; b < arguments.length; b++)
                a[b] = arguments[b];
              return c.next(1 === a.length ? a[0] : a);
            },
            f = b(d);
          return q(a)
            ? function () {
                return a(d, f);
              }
            : void 0;
        });
  }
  function ra(b, a, c) {
    void 0 === b && (b = 0);
    void 0 === c && (c = sa);
    var d = -1;
    null != a && (Ca(a) ? (c = a) : (d = a));
    return new r(function (a) {
      var e = ab(b) ? +b - c.now() : b;
      0 > e && (e = 0);
      var h = 0;
      return c.schedule(function () {
        a.closed ||
          (a.next(h++), 0 <= d ? this.schedule(void 0, d) : a.complete());
      }, e);
    });
  }
  function hc(b, a) {
    void 0 === b && (b = 0);
    void 0 === a && (a = K);
    0 > b && (b = 0);
    return ra(b, b, a);
  }
  function V(b) {
    return 1 === b.length && xe(b[0]) ? b[0] : b;
  }
  function ic() {
    for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
    var c = V(b);
    return n(function (a, b) {
      var d = A([a], z(c)),
        e = function () {
          if (!b.closed)
            if (0 < d.length) {
              var a = void 0;
              try {
                a = v(d.shift());
              } catch (y) {
                e();
                return;
              }
              var c = new m(b, void 0, D, D);
              b.add(a.subscribe(c));
              c.add(e);
            } else b.complete();
        };
      e();
    });
  }
  function jc(b, a) {
    return function (c, d) {
      return !b.call(a, c, d);
    };
  }
  function M(b, a) {
    return n(function (c, d) {
      var e = 0;
      c.subscribe(
        new m(d, function (c) {
          return b.call(a, c, e++) && d.next(c);
        })
      );
    });
  }
  function kc(b) {
    return function (a) {
      for (
        var c = [],
          d = function (d) {
            c.push(
              v(b[d]).subscribe(
                new m(a, function (b) {
                  if (c) {
                    for (var e = 0; e < c.length; e++)
                      e !== d && c[e].unsubscribe();
                    c = null;
                  }
                  a.next(b);
                })
              )
            );
          },
          e = 0;
        c && !a.closed && e < b.length;
        e++
      )
        d(e);
    };
  }
  function hb() {
    for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
    var c = ma(b),
      d = V(b);
    return d.length
      ? new r(function (a) {
          var b = d.map(function () {
              return [];
            }),
            e = d.map(function () {
              return !1;
            });
          a.add(function () {
            b = e = null;
          });
          for (
            var l = function (f) {
                v(d[f]).subscribe(
                  new m(
                    a,
                    function (d) {
                      b[f].push(d);
                      b.every(function (a) {
                        return a.length;
                      }) &&
                        ((d = b.map(function (a) {
                          return a.shift();
                        })),
                        a.next(c ? c.apply(void 0, A([], z(d))) : d),
                        b.some(function (a, b) {
                          return !a.length && e[b];
                        }) && a.complete());
                    },
                    function () {
                      e[f] = !0;
                      !b[f].length && a.complete();
                    }
                  )
                );
              },
              k = 0;
            !a.closed && k < d.length;
            k++
          )
            l(k);
          return function () {
            b = e = null;
          };
        })
      : J;
  }
  function ib(b) {
    return n(function (a, c) {
      var d = !1,
        e = null,
        f = null,
        h = !1,
        l = function () {
          null === f || void 0 === f ? void 0 : f.unsubscribe();
          f = null;
          if (d) {
            d = !1;
            var a = e;
            e = null;
            c.next(a);
          }
          h && c.complete();
        },
        k = function () {
          f = null;
          h && c.complete();
        };
      a.subscribe(
        new m(
          c,
          function (a) {
            d = !0;
            e = a;
            f || v(b(a)).subscribe((f = new m(c, l, k)));
          },
          function () {
            h = !0;
            (d && f && !f.closed) || c.complete();
          }
        )
      );
    });
  }
  function lc(b, a) {
    void 0 === a && (a = sa);
    return ib(function () {
      return ra(b, a);
    });
  }
  function mc(b) {
    return n(function (a, c) {
      var d = [];
      a.subscribe(
        new m(
          c,
          function (a) {
            return d.push(a);
          },
          function () {
            c.next(d);
            c.complete();
          }
        )
      );
      b.subscribe(
        new m(
          c,
          function () {
            var a = d;
            d = [];
            c.next(a);
          },
          D
        )
      );
      return function () {
        d = null;
      };
    });
  }
  function nc(b, a) {
    void 0 === a && (a = null);
    a = null !== a && void 0 !== a ? a : b;
    return n(function (c, d) {
      var e = [],
        f = 0;
      c.subscribe(
        new m(
          d,
          function (c) {
            var h,
              k,
              g,
              p,
              t = null;
            0 === f++ % a && e.push([]);
            try {
              for (var w = G(e), m = w.next(); !m.done; m = w.next()) {
                var u = m.value;
                u.push(c);
                b <= u.length &&
                  ((t = null !== t && void 0 !== t ? t : []), t.push(u));
              }
            } catch (P) {
              h = { error: P };
            } finally {
              try {
                m && !m.done && (k = w.return) && k.call(w);
              } finally {
                if (h) throw h.error;
              }
            }
            if (t)
              try {
                for (var n = G(t), na = n.next(); !na.done; na = n.next())
                  (u = na.value), N(e, u), d.next(u);
              } catch (P) {
                g = { error: P };
              } finally {
                try {
                  na && !na.done && (p = n.return) && p.call(n);
                } finally {
                  if (g) throw g.error;
                }
              }
          },
          function () {
            var a, b;
            try {
              for (var c = G(e), f = c.next(); !f.done; f = c.next())
                d.next(f.value);
            } catch (p) {
              a = { error: p };
            } finally {
              try {
                f && !f.done && (b = c.return) && b.call(c);
              } finally {
                if (a) throw a.error;
              }
            }
            d.complete();
          },
          void 0,
          function () {
            e = null;
          }
        )
      );
    });
  }
  function oc(b) {
    for (var a, c, d = [], e = 1; e < arguments.length; e++)
      d[e - 1] = arguments[e];
    var f = null !== (a = O(d)) && void 0 !== a ? a : K,
      h = null !== (c = d[0]) && void 0 !== c ? c : null,
      l = d[1] || Infinity;
    return n(function (a, c) {
      var d = [],
        e = !1,
        k = function (a) {
          var b = a.buffer;
          a.subs.unsubscribe();
          N(d, a);
          c.next(b);
          e && g();
        },
        g = function () {
          if (d) {
            var a = new C();
            c.add(a);
            var e = { buffer: [], subs: a };
            d.push(e);
            a.add(
              f.schedule(function () {
                return k(e);
              }, b)
            );
          }
        };
      null !== h && 0 <= h
        ? c.add(
            f.schedule(function () {
              g();
              !this.closed && c.add(this.schedule(null, h));
            }, h)
          )
        : (e = !0);
      g();
      var y = new m(
        c,
        function (a) {
          var b,
            c,
            e = d.slice();
          try {
            for (var f = G(e), h = f.next(); !h.done; h = f.next()) {
              var g = h.value,
                p = g.buffer;
              p.push(a);
              l <= p.length && k(g);
            }
          } catch (ze) {
            b = { error: ze };
          } finally {
            try {
              h && !h.done && (c = f.return) && c.call(f);
            } finally {
              if (b) throw b.error;
            }
          }
        },
        function () {
          for (; null === d || void 0 === d ? 0 : d.length; )
            c.next(d.shift().buffer);
          null === y || void 0 === y ? void 0 : y.unsubscribe();
          c.complete();
          c.unsubscribe();
        },
        void 0,
        function () {
          return (d = null);
        }
      );
      a.subscribe(y);
    });
  }
  function pc(b, a) {
    return n(function (c, d) {
      var e = [];
      v(b).subscribe(
        new m(
          d,
          function (b) {
            var c = [];
            e.push(c);
            var f = new C();
            f.add(
              v(a(b)).subscribe(
                new m(
                  d,
                  function () {
                    N(e, c);
                    d.next(c);
                    f.unsubscribe();
                  },
                  D
                )
              )
            );
          },
          D
        )
      );
      c.subscribe(
        new m(
          d,
          function (a) {
            var b, c;
            try {
              for (var d = G(e), f = d.next(); !f.done; f = d.next())
                f.value.push(a);
            } catch (p) {
              b = { error: p };
            } finally {
              try {
                f && !f.done && (c = d.return) && c.call(d);
              } finally {
                if (b) throw b.error;
              }
            }
          },
          function () {
            for (; 0 < e.length; ) d.next(e.shift());
            d.complete();
          }
        )
      );
    });
  }
  function qc(b) {
    return n(function (a, c) {
      var d = null,
        e = null,
        f = function () {
          null === e || void 0 === e ? void 0 : e.unsubscribe();
          var a = d;
          d = [];
          a && c.next(a);
          v(b()).subscribe((e = new m(c, f, D)));
        };
      f();
      a.subscribe(
        new m(
          c,
          function (a) {
            return null === d || void 0 === d ? void 0 : d.push(a);
          },
          function () {
            d && c.next(d);
            c.complete();
          },
          void 0,
          function () {
            return (d = e = null);
          }
        )
      );
    });
  }
  function jb(b) {
    return n(function (a, c) {
      var d = null,
        e = !1,
        f,
        d = a.subscribe(
          new m(c, void 0, void 0, function (h) {
            f = v(b(h, jb(b)(a)));
            d ? (d.unsubscribe(), (d = null), f.subscribe(c)) : (e = !0);
          })
        );
      e && (d.unsubscribe(), (d = null), f.subscribe(c));
    });
  }
  function rc(b, a, c, d, e) {
    return function (f, h) {
      var l = c,
        k = a,
        g = 0;
      f.subscribe(
        new m(
          h,
          function (a) {
            var c = g++;
            k = l ? b(k, a, c) : ((l = !0), a);
            d && h.next(k);
          },
          e &&
            function () {
              l && h.next(k);
              h.complete();
            }
        )
      );
    };
  }
  function fa(b, a) {
    return n(rc(b, a, 2 <= arguments.length, !1, !0));
  }
  function kb() {
    return n(function (b, a) {
      fa(Ae, [])(b).subscribe(a);
    });
  }
  function sc(b, a) {
    return Ua(
      kb(),
      H(function (a) {
        return b(a);
      }),
      a ? U(a) : F
    );
  }
  function Ga(b) {
    return sc(cc, b);
  }
  function lb() {
    for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
    return (a = ma(b))
      ? Ua(lb.apply(void 0, A([], z(b))), U(a))
      : n(function (a, d) {
          dc(A([a], z(V(b))))(d);
        });
  }
  function tc() {
    for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
    return lb.apply(void 0, A([], z(b)));
  }
  function Ha(b, a) {
    return q(a) ? H(b, a, 1) : H(b, 1);
  }
  function uc(b, a) {
    return q(a)
      ? Ha(function () {
          return b;
        }, a)
      : Ha(function () {
          return b;
        });
  }
  function vc() {
    for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
    var c = O(b);
    return n(function (a, e) {
      Fa()(ea(A([a], z(b)), c)).subscribe(e);
    });
  }
  function wc() {
    for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
    return vc.apply(void 0, A([], z(b)));
  }
  function Be(b) {
    return new r(function (a) {
      return b.subscribe(a);
    });
  }
  function Ia(b, a) {
    void 0 === a && (a = Ce);
    var c = a.connector;
    return n(function (a, e) {
      var d = c();
      da(b(Be(d))).subscribe(e);
      e.add(a.subscribe(d));
    });
  }
  function xc(b) {
    return fa(function (a, c, d) {
      return !b || b(c, d) ? a + 1 : a;
    }, 0);
  }
  function yc(b) {
    return n(function (a, c) {
      var d = !1,
        e = null,
        f = null,
        h = function () {
          null === f || void 0 === f ? void 0 : f.unsubscribe();
          f = null;
          if (d) {
            d = !1;
            var a = e;
            e = null;
            c.next(a);
          }
        };
      a.subscribe(
        new m(
          c,
          function (a) {
            null === f || void 0 === f ? void 0 : f.unsubscribe();
            d = !0;
            e = a;
            f = new m(c, h, D);
            v(b(a)).subscribe(f);
          },
          function () {
            h();
            c.complete();
          },
          void 0,
          function () {
            e = f = null;
          }
        )
      );
    });
  }
  function zc(b, a) {
    void 0 === a && (a = K);
    return n(function (c, d) {
      function e() {
        var c = l + b,
          e = a.now();
        e < c ? ((f = this.schedule(void 0, c - e)), d.add(f)) : k();
      }
      var f = null,
        h = null,
        l = null,
        k = function () {
          if (f) {
            f.unsubscribe();
            f = null;
            var a = h;
            h = null;
            d.next(a);
          }
        };
      c.subscribe(
        new m(
          d,
          function (c) {
            h = c;
            l = a.now();
            f || ((f = a.schedule(e, b)), d.add(f));
          },
          function () {
            k();
            d.complete();
          },
          void 0,
          function () {
            h = f = null;
          }
        )
      );
    });
  }
  function ta(b) {
    return n(function (a, c) {
      var d = !1;
      a.subscribe(
        new m(
          c,
          function (a) {
            d = !0;
            c.next(a);
          },
          function () {
            d || c.next(b);
            c.complete();
          }
        )
      );
    });
  }
  function W(b) {
    return 0 >= b
      ? function () {
          return J;
        }
      : n(function (a, c) {
          var d = 0;
          a.subscribe(
            new m(c, function (a) {
              ++d <= b && (c.next(a), b <= d && c.complete());
            })
          );
        });
  }
  function mb() {
    return n(function (b, a) {
      b.subscribe(new m(a, D));
    });
  }
  function nb(b) {
    return L(function () {
      return b;
    });
  }
  function Ja(b, a) {
    return a
      ? function (c) {
          return pa(a.pipe(W(1), mb()), c.pipe(Ja(b)));
        }
      : H(function (a, d) {
          return b(a, d).pipe(W(1), nb(a));
        });
  }
  function Ac(b, a) {
    void 0 === a && (a = K);
    var c = ra(b, a);
    return Ja(function () {
      return c;
    });
  }
  function Bc() {
    return n(function (b, a) {
      b.subscribe(
        new m(a, function (b) {
          return Da(b, a);
        })
      );
    });
  }
  function Cc(b, a) {
    return n(function (c, d) {
      var e = new Set();
      c.subscribe(
        new m(d, function (a) {
          var c = b ? b(a) : a;
          e.has(c) || (e.add(c), d.next(a));
        })
      );
      null === a || void 0 === a
        ? void 0
        : a.subscribe(
            new m(
              d,
              function () {
                return e.clear();
              },
              D
            )
          );
    });
  }
  function ob(b, a) {
    void 0 === a && (a = F);
    b = null !== b && void 0 !== b ? b : De;
    return n(function (c, d) {
      var e,
        f = !0;
      c.subscribe(
        new m(d, function (c) {
          var h = a(c);
          if (f || !b(e, h)) (f = !1), (e = h), d.next(c);
        })
      );
    });
  }
  function De(b, a) {
    return b === a;
  }
  function Dc(b, a) {
    return ob(function (c, d) {
      return a ? a(c[b], d[b]) : c[b] === d[b];
    });
  }
  function ua(b) {
    void 0 === b && (b = Ee);
    return n(function (a, c) {
      var d = !1;
      a.subscribe(
        new m(
          c,
          function (a) {
            d = !0;
            c.next(a);
          },
          function () {
            return d ? c.complete() : c.error(b());
          }
        )
      );
    });
  }
  function Ee() {
    return new X();
  }
  function Ec(b, a) {
    if (0 > b) throw new pb();
    var c = 2 <= arguments.length;
    return function (d) {
      return d.pipe(
        M(function (a, c) {
          return c === b;
        }),
        W(1),
        c
          ? ta(a)
          : ua(function () {
              return new pb();
            })
      );
    };
  }
  function Fc() {
    for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
    return function (a) {
      return pa(a, $a.apply(void 0, A([], z(b))));
    };
  }
  function Gc(b, a) {
    return n(function (c, d) {
      var e = 0;
      c.subscribe(
        new m(
          d,
          function (f) {
            b.call(a, f, e++, c) || (d.next(!1), d.complete());
          },
          function () {
            d.next(!0);
            d.complete();
          }
        )
      );
    });
  }
  function Ka() {
    return n(function (b, a) {
      var c = !1,
        d = null;
      b.subscribe(
        new m(
          a,
          function (b) {
            d ||
              (d = v(b).subscribe(
                new m(a, void 0, function () {
                  d = null;
                  c && a.complete();
                })
              ));
          },
          function () {
            c = !0;
            !d && a.complete();
          }
        )
      );
    });
  }
  function qb(b, a) {
    return a
      ? function (c) {
          return c.pipe(
            qb(function (c, e) {
              return v(b(c, e)).pipe(
                L(function (b, d) {
                  return a(c, b, e, d);
                })
              );
            })
          );
        }
      : n(function (a, d) {
          var c = 0,
            f = null,
            h = !1;
          a.subscribe(
            new m(
              d,
              function (a) {
                f ||
                  ((f = new m(d, void 0, function () {
                    f = null;
                    h && d.complete();
                  })),
                  v(b(a, c++)).subscribe(f));
              },
              function () {
                h = !0;
                !f && d.complete();
              }
            )
          );
        });
  }
  function Hc(b, a, c) {
    void 0 === a && (a = Infinity);
    a = 1 > (a || 0) ? Infinity : a;
    return n(function (d, e) {
      return fb(d, e, b, a, void 0, !0, c);
    });
  }
  function Ic(b) {
    return n(function (a, c) {
      try {
        a.subscribe(c);
      } finally {
        c.add(b);
      }
    });
  }
  function Jc(b, a) {
    return n(Kc(b, a, "value"));
  }
  function Kc(b, a, c) {
    var d = "index" === c;
    return function (c, f) {
      var e = 0;
      c.subscribe(
        new m(
          f,
          function (h) {
            var l = e++;
            b.call(a, h, l, c) && (f.next(d ? l : h), f.complete());
          },
          function () {
            f.next(d ? -1 : void 0);
            f.complete();
          }
        )
      );
    };
  }
  function Lc(b, a) {
    return n(Kc(b, a, "index"));
  }
  function Mc(b, a) {
    var c = 2 <= arguments.length;
    return function (d) {
      return d.pipe(
        b
          ? M(function (a, c) {
              return b(a, c, d);
            })
          : F,
        W(1),
        c
          ? ta(a)
          : ua(function () {
              return new X();
            })
      );
    };
  }
  function Nc(b, a, c, d) {
    return n(function (e, f) {
      function h(a, b) {
        var c = new r(function (a) {
          t.activeGroups++;
          var c = b.subscribe(a);
          return function () {
            c.unsubscribe();
            0 === --t.activeGroups && t.teardownAttempted && t.unsubscribe();
          };
        });
        c.key = a;
        return c;
      }
      var l;
      a && "function" !== typeof a
        ? ((c = a.duration), (l = a.element), (d = a.connector))
        : (l = a);
      var k = new Map(),
        g = function (a) {
          k.forEach(a);
          a(f);
        },
        p = function (a) {
          return g(function (b) {
            return b.error(a);
          });
        },
        t = new Fe(
          f,
          function (a) {
            try {
              var e = b(a),
                g = k.get(e);
              if (!g) {
                k.set(e, (g = d ? d() : new E()));
                var y = h(e, g);
                f.next(y);
                if (c) {
                  var w = new m(
                    g,
                    function () {
                      g.complete();
                      null === w || void 0 === w ? void 0 : w.unsubscribe();
                    },
                    void 0,
                    void 0,
                    function () {
                      return k.delete(e);
                    }
                  );
                  t.add(v(c(y)).subscribe(w));
                }
              }
              g.next(l ? l(a) : a);
            } catch (P) {
              p(P);
            }
          },
          function () {
            return g(function (a) {
              return a.complete();
            });
          },
          p,
          function () {
            return k.clear();
          }
        );
      e.subscribe(t);
    });
  }
  function Oc() {
    return n(function (b, a) {
      b.subscribe(
        new m(
          a,
          function () {
            a.next(!1);
            a.complete();
          },
          function () {
            a.next(!0);
            a.complete();
          }
        )
      );
    });
  }
  function rb(b) {
    return 0 >= b
      ? function () {
          return J;
        }
      : n(function (a, c) {
          var d = [];
          a.subscribe(
            new m(
              c,
              function (a) {
                d.push(a);
                b < d.length && d.shift();
              },
              function () {
                var a, b;
                try {
                  for (var h = G(d), l = h.next(); !l.done; l = h.next())
                    c.next(l.value);
                } catch (k) {
                  a = { error: k };
                } finally {
                  try {
                    l && !l.done && (b = h.return) && b.call(h);
                  } finally {
                    if (a) throw a.error;
                  }
                }
                c.complete();
              },
              void 0,
              function () {
                d = null;
              }
            )
          );
        });
  }
  function Pc(b, a) {
    var c = 2 <= arguments.length;
    return function (d) {
      return d.pipe(
        b
          ? M(function (a, c) {
              return b(a, c, d);
            })
          : F,
        rb(1),
        c
          ? ta(a)
          : ua(function () {
              return new X();
            })
      );
    };
  }
  function Qc() {
    return n(function (b, a) {
      b.subscribe(
        new m(
          a,
          function (b) {
            a.next(La.createNext(b));
          },
          function () {
            a.next(La.createComplete());
            a.complete();
          },
          function (b) {
            a.next(La.createError(b));
            a.complete();
          }
        )
      );
    });
  }
  function Rc(b) {
    return fa(
      q(b)
        ? function (a, c) {
            return 0 < b(a, c) ? a : c;
          }
        : function (a, b) {
            return a > b ? a : b;
          }
    );
  }
  function Sc(b, a, c) {
    void 0 === c && (c = Infinity);
    if (q(a))
      return H(
        function () {
          return b;
        },
        a,
        c
      );
    "number" === typeof a && (c = a);
    return H(function () {
      return b;
    }, c);
  }
  function Tc(b, a, c) {
    void 0 === c && (c = Infinity);
    return n(function (d, e) {
      var f = a;
      return fb(
        d,
        e,
        function (a, c) {
          return b(f, a, c);
        },
        c,
        function (a) {
          f = a;
        },
        !1,
        void 0,
        function () {
          return (f = null);
        }
      );
    });
  }
  function Uc() {
    for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
    var c = O(b),
      d = "number" === typeof b[b.length - 1] ? b.pop() : Infinity,
      b = V(b);
    return n(function (a, f) {
      oa(d)(ea(A([a], z(b)), c)).subscribe(f);
    });
  }
  function Vc() {
    for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
    return Uc.apply(void 0, A([], z(b)));
  }
  function Wc(b) {
    return fa(
      q(b)
        ? function (a, c) {
            return 0 > b(a, c) ? a : c;
          }
        : function (a, b) {
            return a < b ? a : b;
          }
    );
  }
  function Ma(b, a) {
    var c = q(b)
      ? b
      : function () {
          return b;
        };
    return q(a)
      ? Ia(a, { connector: c })
      : function (a) {
          return new Na(a, c);
        };
  }
  function Xc() {
    return n(function (b, a) {
      var c,
        d = !1;
      b.subscribe(
        new m(a, function (b) {
          var e = c;
          c = b;
          d && a.next([e, b]);
          d = !0;
        })
      );
    });
  }
  function Yc() {
    for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
    var c = b.length;
    if (0 === c) throw Error("list of properties cannot be empty.");
    return L(function (a) {
      var d = a;
      for (a = 0; a < c; a++)
        if (
          ((d = null === d || void 0 === d ? void 0 : d[b[a]]),
          "undefined" === typeof d)
        )
          return;
      return d;
    });
  }
  function Zc(b) {
    return b
      ? function (a) {
          return Ia(b)(a);
        }
      : function (a) {
          return Ma(new E())(a);
        };
  }
  function $c(b) {
    return function (a) {
      var c = new ad(b);
      return new Na(a, function () {
        return c;
      });
    };
  }
  function bd() {
    return function (b) {
      var a = new eb();
      return new Na(b, function () {
        return a;
      });
    };
  }
  function cd(b, a, c, d) {
    c && !q(c) && (d = c);
    var e = q(c) ? c : void 0;
    return function (c) {
      return Ma(new ga(b, a, d), e)(c);
    };
  }
  function sb() {
    for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
    return b.length
      ? n(function (a, d) {
          kc(A([a], z(b)))(d);
        })
      : F;
  }
  function dd(b) {
    void 0 === b && (b = Infinity);
    return 0 >= b
      ? function () {
          return J;
        }
      : n(function (a, c) {
          var d = 0,
            e,
            f = function () {
              var h = !1;
              e = a.subscribe(
                new m(c, void 0, function () {
                  ++d < b
                    ? e
                      ? (e.unsubscribe(), (e = null), f())
                      : (h = !0)
                    : c.complete();
                })
              );
              h && (e.unsubscribe(), (e = null), f());
            };
          f();
        });
  }
  function ed(b) {
    return n(function (a, c) {
      var d,
        e = !1,
        f,
        h = !1,
        l = !1,
        k = function () {
          f ||
            ((f = new E()),
            b(f).subscribe(
              new m(
                c,
                function () {
                  d ? g() : (e = !0);
                },
                function () {
                  h = !0;
                  l && h && c.complete();
                }
              )
            ));
          return f;
        },
        g = function () {
          l = !1;
          d = a.subscribe(
            new m(c, void 0, function () {
              (((l = !0), h) && (c.complete(), !0)) || k().next();
            })
          );
          e && (d.unsubscribe(), (d = null), (e = !1), g());
        };
      g();
    });
  }
  function fd(b) {
    void 0 === b && (b = Infinity);
    b = b && "object" === typeof b ? b : { count: b };
    var a = b.count;
    b = b.resetOnSuccess;
    var c = void 0 === b ? !1 : b;
    return 0 >= a
      ? F
      : n(function (b, e) {
          var d = 0,
            h,
            l = function () {
              var f = !1;
              h = b.subscribe(
                new m(
                  e,
                  function (a) {
                    c && (d = 0);
                    e.next(a);
                  },
                  void 0,
                  function (b) {
                    d++ < a
                      ? h
                        ? (h.unsubscribe(), (h = null), l())
                        : (f = !0)
                      : e.error(b);
                  }
                )
              );
              f && (h.unsubscribe(), (h = null), l());
            };
          l();
        });
  }
  function gd(b) {
    return n(function (a, c) {
      var d,
        e = !1,
        f,
        h = function () {
          d = a.subscribe(
            new m(c, void 0, void 0, function (a) {
              f ||
                ((f = new E()),
                b(f).subscribe(
                  new m(c, function () {
                    return d ? h() : (e = !0);
                  })
                ));
              f && f.next(a);
            })
          );
          e && (d.unsubscribe(), (d = null), (e = !1), h());
        };
      h();
    });
  }
  function tb(b) {
    return n(function (a, c) {
      var d = !1,
        e = null;
      a.subscribe(
        new m(c, function (a) {
          d = !0;
          e = a;
        })
      );
      b.subscribe(
        new m(
          c,
          function () {
            if (d) {
              d = !1;
              var a = e;
              e = null;
              c.next(a);
            }
          },
          D
        )
      );
    });
  }
  function hd(b, a) {
    void 0 === a && (a = K);
    return tb(hc(b, a));
  }
  function ub(b, a) {
    return n(rc(b, a, 2 <= arguments.length, !0));
  }
  function id(b, a) {
    void 0 === a &&
      (a = function (a, b) {
        return a === b;
      });
    return n(function (c, d) {
      var e = { buffer: [], complete: !1 },
        f = { buffer: [], complete: !1 },
        h = function (b, c) {
          var e = new m(
            d,
            function (e) {
              var f = c.buffer,
                h = c.complete;
              0 === f.length
                ? h
                  ? (d.next(!1), d.complete())
                  : b.buffer.push(e)
                : a(e, f.shift()) || (d.next(!1), d.complete());
            },
            function () {
              b.complete = !0;
              var a = c.buffer;
              c.complete && (d.next(0 === a.length), d.complete());
              null === e || void 0 === e ? void 0 : e.unsubscribe();
            }
          );
          return e;
        };
      c.subscribe(h(e, f));
      b.subscribe(h(f, e));
    });
  }
  function vb(b) {
    void 0 === b && (b = {});
    var a = b.connector,
      c =
        void 0 === a
          ? function () {
              return new E();
            }
          : a,
      a = b.resetOnError,
      d = void 0 === a ? !0 : a,
      a = b.resetOnComplete,
      e = void 0 === a ? !0 : a;
    b = b.resetOnRefCountZero;
    var f = void 0 === b ? !0 : b;
    return function (a) {
      var b = null,
        h = null,
        g = null,
        p = 0,
        t = !1,
        m = !1,
        x = function () {
          null === h || void 0 === h ? void 0 : h.unsubscribe();
          h = null;
        },
        u = function () {
          x();
          b = g = null;
          t = m = !1;
        },
        q = function () {
          var a = b;
          u();
          null === a || void 0 === a ? void 0 : a.unsubscribe();
        };
      return n(function (a, l) {
        p++;
        m || t || x();
        var k = (g = null !== g && void 0 !== g ? g : c());
        l.add(function () {
          p--;
          0 !== p || m || t || (h = wb(q, f));
        });
        k.subscribe(l);
        b ||
          ((b = new Oa({
            next: function (a) {
              return k.next(a);
            },
            error: function (a) {
              m = !0;
              x();
              h = wb(u, d, a);
              k.error(a);
            },
            complete: function () {
              t = !0;
              x();
              h = wb(u, e);
              k.complete();
            },
          })),
          da(a).subscribe(b));
      })(a);
    };
  }
  function wb(b, a) {
    for (var c = [], d = 2; d < arguments.length; d++) c[d - 2] = arguments[d];
    return !0 === a
      ? (b(), null)
      : !1 === a
      ? null
      : a
          .apply(void 0, A([], z(c)))
          .pipe(W(1))
          .subscribe(function () {
            return b();
          });
  }
  function jd(b, a, c) {
    var d,
      e,
      f,
      h = !1;
    b && "object" === typeof b
      ? ((f = null !== (d = b.bufferSize) && void 0 !== d ? d : Infinity),
        (a = null !== (e = b.windowTime) && void 0 !== e ? e : Infinity),
        (h = !!b.refCount),
        (c = b.scheduler))
      : (f = null !== b && void 0 !== b ? b : Infinity);
    return vb({
      connector: function () {
        return new ga(f, a, c);
      },
      resetOnError: !0,
      resetOnComplete: !1,
      resetOnRefCountZero: h,
    });
  }
  function kd(b) {
    return n(function (a, c) {
      var d = !1,
        e,
        f = !1,
        h = 0;
      a.subscribe(
        new m(
          c,
          function (l) {
            f = !0;
            if (!b || b(l, h++, a))
              d && c.error(new ld("Too many matching values")),
                (d = !0),
                (e = l);
          },
          function () {
            d
              ? (c.next(e), c.complete())
              : c.error(f ? new md("No matching values") : new X());
          }
        )
      );
    });
  }
  function nd(b) {
    return M(function (a, c) {
      return b <= c;
    });
  }
  function od(b) {
    return 0 >= b
      ? F
      : n(function (a, c) {
          var d = Array(b),
            e = 0;
          a.subscribe(
            new m(c, function (a) {
              var f = e++;
              if (f < b) d[f] = a;
              else {
                var f = f % b,
                  l = d[f];
                d[f] = a;
                c.next(l);
              }
            })
          );
          return function () {
            d = null;
          };
        });
  }
  function pd(b) {
    return n(function (a, c) {
      var d = !1,
        e = new m(
          c,
          function () {
            null === e || void 0 === e ? void 0 : e.unsubscribe();
            d = !0;
          },
          D
        );
      v(b).subscribe(e);
      a.subscribe(
        new m(c, function (a) {
          return d && c.next(a);
        })
      );
    });
  }
  function qd(b) {
    return n(function (a, c) {
      var d = !1,
        e = 0;
      a.subscribe(
        new m(c, function (a) {
          return (d || (d = !b(a, e++))) && c.next(a);
        })
      );
    });
  }
  function rd() {
    for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
    var c = O(b);
    return n(function (a, e) {
      (c ? pa(b, a, c) : pa(b, a)).subscribe(e);
    });
  }
  function ha(b, a) {
    return n(function (c, d) {
      var e = null,
        f = 0,
        h = !1;
      c.subscribe(
        new m(
          d,
          function (c) {
            null === e || void 0 === e ? void 0 : e.unsubscribe();
            var l = 0,
              g = f++;
            v(b(c, g)).subscribe(
              (e = new m(
                d,
                function (b) {
                  return d.next(a ? a(c, b, g, l++) : b);
                },
                function () {
                  e = null;
                  h && !e && d.complete();
                }
              ))
            );
          },
          function () {
            ((h = !0), !e) && d.complete();
          }
        )
      );
    });
  }
  function sd() {
    return ha(F);
  }
  function td(b, a) {
    return q(a)
      ? ha(function () {
          return b;
        }, a)
      : ha(function () {
          return b;
        });
  }
  function ud(b, a) {
    return n(function (c, d) {
      var e = a;
      ha(
        function (a, c) {
          return b(e, a, c);
        },
        function (a, b) {
          return (e = b), b;
        }
      )(c).subscribe(d);
      return function () {
        e = null;
      };
    });
  }
  function vd(b) {
    return n(function (a, c) {
      v(b).subscribe(
        new m(
          c,
          function () {
            return c.complete();
          },
          D
        )
      );
      !c.closed && a.subscribe(c);
    });
  }
  function wd(b, a) {
    void 0 === a && (a = !1);
    return n(function (c, d) {
      var e = 0;
      c.subscribe(
        new m(d, function (c) {
          var f = b(c, e++);
          (f || a) && d.next(c);
          !f && d.complete();
        })
      );
    });
  }
  function xd(b, a, c) {
    var d = q(b) || a || c ? { next: b, error: a, complete: c } : b;
    return d
      ? n(function (a, b) {
          a.subscribe(
            new m(
              b,
              function (a) {
                var c;
                null === (c = d.next) || void 0 === c ? void 0 : c.call(d, a);
                b.next(a);
              },
              function () {
                var a;
                null === (a = d.complete) || void 0 === a ? void 0 : a.call(d);
                b.complete();
              },
              function (a) {
                var c;
                null === (c = d.error) || void 0 === c ? void 0 : c.call(d, a);
                b.error(a);
              }
            )
          );
        })
      : F;
  }
  function xb(b, a) {
    a = void 0 === a ? yd : a;
    var c = a.leading,
      d = a.trailing;
    return n(function (a, f) {
      var e = !1,
        l = null,
        g = null,
        y = !1,
        p = function () {
          null === g || void 0 === g ? void 0 : g.unsubscribe();
          g = null;
          d && (w(), y && f.complete());
        },
        t = function () {
          g = null;
          y && f.complete();
        },
        w = function () {
          if (e) {
            e = !1;
            var a = l;
            l = null;
            f.next(a);
            !y && (g = v(b(a)).subscribe(new m(f, p, t)));
          }
        };
      a.subscribe(
        new m(
          f,
          function (a) {
            e = !0;
            l = a;
            (!g || g.closed) &&
              (c ? w() : (g = v(b(a)).subscribe(new m(f, p, t))));
          },
          function () {
            y = !0;
            (d && e && g && !g.closed) || f.complete();
          }
        )
      );
    });
  }
  function zd(b, a, c) {
    void 0 === a && (a = K);
    void 0 === c && (c = yd);
    var d = ra(b, a);
    return xb(function () {
      return d;
    }, c);
  }
  function Ad(b) {
    void 0 === b && (b = sa);
    return function (a) {
      return qa(function () {
        return a.pipe(
          ub(
            function (a, d) {
              a = a.current;
              return { value: d, current: b.now(), last: a };
            },
            { current: b.now(), value: void 0, last: void 0 }
          ),
          L(function (a) {
            return new Ge(a.value, a.current - a.last);
          })
        );
      });
    };
  }
  function Bd(b, a, c) {
    var d, e;
    c = null !== c && void 0 !== c ? c : sa;
    ab(b) ? (d = b) : "number" === typeof b && (e = b);
    if (a)
      b = function () {
        return a;
      };
    else throw new TypeError("No observable provided to switch to");
    if (null == d && null == e) throw new TypeError("No timeout provided.");
    return bb({ first: d, each: e, scheduler: c, with: b });
  }
  function Cd(b) {
    void 0 === b && (b = ia);
    return L(function (a) {
      return { value: a, timestamp: b.now() };
    });
  }
  function Dd(b) {
    return n(function (a, c) {
      var d = new E();
      c.next(d.asObservable());
      var e = function (a) {
        d.error(a);
        c.error(a);
      };
      a.subscribe(
        new m(
          c,
          function (a) {
            return null === d || void 0 === d ? void 0 : d.next(a);
          },
          function () {
            d.complete();
            c.complete();
          },
          e
        )
      );
      b.subscribe(
        new m(
          c,
          function () {
            d.complete();
            c.next((d = new E()));
          },
          D,
          e
        )
      );
      return function () {
        null === d || void 0 === d ? void 0 : d.unsubscribe();
        d = null;
      };
    });
  }
  function Ed(b, a) {
    void 0 === a && (a = 0);
    var c = 0 < a ? a : b;
    return n(function (a, e) {
      var d = [new E()],
        h = 0;
      e.next(d[0].asObservable());
      a.subscribe(
        new m(
          e,
          function (a) {
            var f, l;
            try {
              for (var g = G(d), t = g.next(); !t.done; t = g.next())
                t.value.next(a);
            } catch (w) {
              f = { error: w };
            } finally {
              try {
                t && !t.done && (l = g.return) && l.call(g);
              } finally {
                if (f) throw f.error;
              }
            }
            a = h - b + 1;
            0 <= a && 0 === a % c && d.shift().complete();
            0 === ++h % c &&
              ((a = new E()), d.push(a), e.next(a.asObservable()));
          },
          function () {
            for (; 0 < d.length; ) d.shift().complete();
            e.complete();
          },
          function (a) {
            for (; 0 < d.length; ) d.shift().error(a);
            e.error(a);
          },
          function () {
            d = null;
          }
        )
      );
    });
  }
  function Fd(b) {
    for (var a, c, d = [], e = 1; e < arguments.length; e++)
      d[e - 1] = arguments[e];
    var f = null !== (a = O(d)) && void 0 !== a ? a : K,
      h = null !== (c = d[0]) && void 0 !== c ? c : null,
      g = d[1] || Infinity;
    return n(function (a, c) {
      var d = [],
        e = !1,
        l = function (a) {
          var b = a.subs;
          a.window.complete();
          b.unsubscribe();
          N(d, a);
          e && k();
        },
        k = function () {
          if (d) {
            var a = new C();
            c.add(a);
            var e = new E(),
              h = { window: e, subs: a, seen: 0 };
            d.push(h);
            c.next(e.asObservable());
            a.add(
              f.schedule(function () {
                return l(h);
              }, b)
            );
          }
        };
      null !== h && 0 <= h
        ? c.add(
            f.schedule(function () {
              k();
              !this.closed && c.add(this.schedule(null, h));
            }, h)
          )
        : (e = !0);
      k();
      var y = function (a) {
        d.slice().forEach(function (b) {
          return a(b.window);
        });
        a(c);
        c.unsubscribe();
      };
      a.subscribe(
        new m(
          c,
          function (a) {
            d.slice().forEach(function (b) {
              b.window.next(a);
              g <= ++b.seen && l(b);
            });
          },
          function () {
            return y(function (a) {
              return a.complete();
            });
          },
          function (a) {
            return y(function (b) {
              return b.error(a);
            });
          }
        )
      );
      return function () {
        d = null;
      };
    });
  }
  function Gd(b, a) {
    return n(function (c, d) {
      var e = [],
        f = function (a) {
          for (; 0 < e.length; ) e.shift().error(a);
          d.error(a);
        };
      v(b).subscribe(
        new m(
          d,
          function (b) {
            var c = new E();
            e.push(c);
            var h = new C(),
              g;
            try {
              g = v(a(b));
            } catch (p) {
              f(p);
              return;
            }
            d.next(c.asObservable());
            h.add(
              g.subscribe(
                new m(
                  d,
                  function () {
                    N(e, c);
                    c.complete();
                    h.unsubscribe();
                  },
                  D,
                  f
                )
              )
            );
          },
          D
        )
      );
      c.subscribe(
        new m(
          d,
          function (a) {
            var b,
              c,
              d = e.slice();
            try {
              for (var f = G(d), h = f.next(); !h.done; h = f.next())
                h.value.next(a);
            } catch (w) {
              b = { error: w };
            } finally {
              try {
                h && !h.done && (c = f.return) && c.call(f);
              } finally {
                if (b) throw b.error;
              }
            }
          },
          function () {
            for (; 0 < e.length; ) e.shift().complete();
            d.complete();
          },
          f,
          function () {
            for (; 0 < e.length; ) e.shift().unsubscribe();
          }
        )
      );
    });
  }
  function Hd(b) {
    return n(function (a, c) {
      var d,
        e,
        f = function (a) {
          d.error(a);
          c.error(a);
        },
        h = function () {
          null === e || void 0 === e ? void 0 : e.unsubscribe();
          null === d || void 0 === d ? void 0 : d.complete();
          d = new E();
          c.next(d.asObservable());
          var a;
          try {
            a = v(b());
          } catch (k) {
            f(k);
            return;
          }
          a.subscribe((e = new m(c, h, h, f)));
        };
      h();
      a.subscribe(
        new m(
          c,
          function (a) {
            return d.next(a);
          },
          function () {
            d.complete();
            c.complete();
          },
          f,
          function () {
            null === e || void 0 === e ? void 0 : e.unsubscribe();
            d = null;
          }
        )
      );
    });
  }
  function Id() {
    for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
    var c = ma(b);
    return n(function (a, e) {
      for (
        var d = b.length,
          h = Array(d),
          g = b.map(function () {
            return !1;
          }),
          k = !1,
          y = function (a) {
            v(b[a]).subscribe(
              new m(
                e,
                function (b) {
                  h[a] = b;
                  k || g[a] || ((g[a] = !0), (k = g.every(F)) && (g = null));
                },
                D
              )
            );
          },
          p = 0;
        p < d;
        p++
      )
        y(p);
      a.subscribe(
        new m(e, function (a) {
          k &&
            ((a = A([a], z(h))), e.next(c ? c.apply(void 0, A([], z(a))) : a));
        })
      );
    });
  }
  function Jd(b) {
    return sc(hb, b);
  }
  function Kd() {
    for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
    return n(function (a, d) {
      hb.apply(void 0, A([a], z(b))).subscribe(d);
    });
  }
  function Ld() {
    for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
    return Kd.apply(void 0, A([], z(b)));
  }
  function Md(b, a) {
    for (var c = 0, d = a.length; c < d; c++)
      for (
        var e = a[c],
          f = Object.getOwnPropertyNames(e.prototype),
          h = 0,
          g = f.length;
        h < g;
        h++
      ) {
        var k = f[h];
        b.prototype[k] = e.prototype[k];
      }
  }
  function Nd(b) {
    switch (b.responseType) {
      case "json":
        return "response" in b ? b.response : JSON.parse(b.responseText);
      case "document":
        return b.responseXML;
      default:
        return "response" in b ? b.response : b.responseText;
    }
  }
  function He(b, a) {
    return Y({ method: "GET", url: b, headers: a });
  }
  function Ie(b, a, c) {
    return Y({ method: "POST", url: b, body: a, headers: c });
  }
  function Je(b, a) {
    return Y({ method: "DELETE", url: b, headers: a });
  }
  function Ke(b, a, c) {
    return Y({ method: "PUT", url: b, body: a, headers: c });
  }
  function Le(b, a, c) {
    return Y({ method: "PATCH", url: b, body: a, headers: c });
  }
  function Me(b, a) {
    return Ne(Y({ method: "GET", url: b, headers: a }));
  }
  function Oe(b) {
    return new r(function (a) {
      var c,
        d,
        e = b.queryParams,
        f = b.body,
        h = b.headers,
        g = Hb(b, ["queryParams", "body", "headers"]),
        k = g.url;
      if (!k) throw new TypeError("url is required");
      if (e) {
        var m;
        if (k.includes("?")) {
          k = k.split("?");
          if (2 < k.length) throw new TypeError("invalid url");
          m = new URLSearchParams(k[1]);
          new URLSearchParams(e).forEach(function (a, b) {
            return m.set(b, a);
          });
          k = k[0] + "?" + m;
        } else (m = new URLSearchParams(e)), (k = k + "?" + m);
      }
      e = {};
      if (h)
        for (var p in h) h.hasOwnProperty(p) && (e[p.toLowerCase()] = h[p]);
      b.crossDomain ||
        "x-requested-with" in e ||
        (e["x-requested-with"] = "XMLHttpRequest");
      var t = g.xsrfCookieName,
        h = g.xsrfHeaderName;
      (g.withCredentials || !g.crossDomain) &&
        t &&
        h &&
        (t =
          null !==
            (d =
              null ===
                (c =
                  null === document || void 0 === document
                    ? void 0
                    : document.cookie.match(
                        new RegExp("(^|;\\s*)(" + t + ")\x3d([^;]*)")
                      )) || void 0 === c
                ? void 0
                : c.pop()) && void 0 !== d
            ? d
            : "") &&
        (e[h] = t);
      c = Pe(f, e);
      var n = Z(
          Z(
            {
              async: !0,
              crossDomain: !0,
              withCredentials: !1,
              method: "GET",
              timeout: 0,
              responseType: "json",
            },
            g
          ),
          { url: k, headers: e, body: c }
        ),
        x;
      x = b.createXHR ? b.createXHR() : new XMLHttpRequest();
      var u = b.progressSubscriber,
        g = b.includeDownloadProgress,
        g = void 0 === g ? !1 : g;
      d = b.includeUploadProgress;
      d = void 0 === d ? !1 : d;
      f = function (b, c) {
        x.addEventListener(b, function () {
          var b,
            d = c();
          null === (b = null === u || void 0 === u ? void 0 : u.error) ||
          void 0 === b
            ? void 0
            : b.call(u, d);
          a.error(d);
        });
      };
      f("timeout", function () {
        return new Od(x, n);
      });
      f("abort", function () {
        return new va("aborted", x, n);
      });
      var q = function (b, c, d) {
        b.addEventListener(c, function (b) {
          a.next(new yb(b, x, n, d + "_" + b.type));
        });
      };
      d &&
        [zb, Ab, Pd].forEach(function (a) {
          return q(x.upload, a, Qe);
        });
      u &&
        [zb, Ab].forEach(function (a) {
          return x.upload.addEventListener(a, function (a) {
            var b;
            return null ===
              (b = null === u || void 0 === u ? void 0 : u.next) || void 0 === b
              ? void 0
              : b.call(u, a);
          });
        });
      g &&
        [zb, Ab].forEach(function (a) {
          return q(x, a, Qd);
        });
      var r = function (b) {
        a.error(new va("ajax error" + (b ? " " + b : ""), x, n));
      };
      x.addEventListener("error", function (a) {
        var b;
        null === (b = null === u || void 0 === u ? void 0 : u.error) ||
        void 0 === b
          ? void 0
          : b.call(u, a);
        r();
      });
      x.addEventListener(Pd, function (b) {
        var c,
          d,
          e = x.status;
        if (400 > e) {
          null === (c = null === u || void 0 === u ? void 0 : u.complete) ||
          void 0 === c
            ? void 0
            : c.call(u);
          c = void 0;
          try {
            c = new yb(b, x, n, Qd + "_" + b.type);
          } catch (ye) {
            a.error(ye);
            return;
          }
          a.next(c);
          a.complete();
        } else null === (d = null === u || void 0 === u ? void 0 : u.error) || void 0 === d ? void 0 : d.call(u, b), r(e);
      });
      g = n.user;
      d = n.method;
      f = n.async;
      g ? x.open(d, k, f, g, n.password) : x.open(d, k, f);
      f && ((x.timeout = n.timeout), (x.responseType = n.responseType));
      "withCredentials" in x && (x.withCredentials = n.withCredentials);
      for (p in e) e.hasOwnProperty(p) && x.setRequestHeader(p, e[p]);
      c ? x.send(c) : x.send();
      return function () {
        x && 4 !== x.readyState && x.abort();
      };
    });
  }
  function Pe(b, a) {
    var c;
    if (
      !b ||
      "string" === typeof b ||
      ("undefined" !== typeof FormData && b instanceof FormData) ||
      ("undefined" !== typeof URLSearchParams &&
        b instanceof URLSearchParams) ||
      Bb(b, "ArrayBuffer") ||
      Bb(b, "File") ||
      Bb(b, "Blob") ||
      ("undefined" !== typeof ReadableStream && b instanceof ReadableStream)
    )
      return b;
    if ("undefined" !== typeof ArrayBuffer && ArrayBuffer.isView(b))
      return b.buffer;
    if ("object" === typeof b)
      return (
        (a["content-type"] =
          null !== (c = a["content-type"]) && void 0 !== c
            ? c
            : "application/json;charset\x3dutf-8"),
        JSON.stringify(b)
      );
    throw new TypeError("Unknown body type");
  }
  function Bb(b, a) {
    return Re.call(b) === "[object " + a + "]";
  }
  var Qa = function (b, a) {
      Qa =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (a, b) {
            a.__proto__ = b;
          }) ||
        function (a, b) {
          for (var c in b)
            Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c]);
        };
      return Qa(b, a);
    },
    Z = function () {
      Z =
        Object.assign ||
        function (b) {
          for (var a, c = 1, d = arguments.length; c < d; c++) {
            a = arguments[c];
            for (var e in a)
              Object.prototype.hasOwnProperty.call(a, e) && (b[e] = a[e]);
          }
          return b;
        };
      return Z.apply(this, arguments);
    },
    Pa = Q(function (b) {
      return function (a) {
        b(this);
        this.message = a
          ? a.length +
            " errors occurred during unsubscription:\n" +
            a
              .map(function (a, b) {
                return b + 1 + ") " + a.toString();
              })
              .join("\n  ")
          : "";
        this.name = "UnsubscriptionError";
        this.errors = a;
      };
    }),
    C = (function () {
      function b(a) {
        this.initialTeardown = a;
        this.closed = !1;
        this._teardowns = this._parentage = null;
      }
      b.prototype.unsubscribe = function () {
        var a, b, d, e, f;
        if (!this.closed) {
          this.closed = !0;
          var h = this._parentage;
          if (h)
            if (((this._parentage = null), Array.isArray(h)))
              try {
                for (var g = G(h), k = g.next(); !k.done; k = g.next())
                  k.value.remove(this);
              } catch (w) {
                a = { error: w };
              } finally {
                try {
                  k && !k.done && (b = g.return) && b.call(g);
                } finally {
                  if (a) throw a.error;
                }
              }
            else h.remove(this);
          a = this.initialTeardown;
          if (q(a))
            try {
              a();
            } catch (w) {
              f = w instanceof Pa ? w.errors : [w];
            }
          if ((a = this._teardowns)) {
            this._teardowns = null;
            try {
              for (var m = G(a), p = m.next(); !p.done; p = m.next()) {
                var n = p.value;
                try {
                  (a = n), q(a) ? a() : a.unsubscribe();
                } catch (w) {
                  (f = null !== f && void 0 !== f ? f : []),
                    w instanceof Pa
                      ? (f = A(A([], z(f)), z(w.errors)))
                      : f.push(w);
                }
              }
            } catch (w) {
              d = { error: w };
            } finally {
              try {
                p && !p.done && (e = m.return) && e.call(m);
              } finally {
                if (d) throw d.error;
              }
            }
          }
          if (f) throw new Pa(f);
        }
      };
      b.prototype.add = function (a) {
        var c;
        if (a && a !== this)
          if (this.closed) q(a) ? a() : a.unsubscribe();
          else {
            if (a instanceof b) {
              if (a.closed || a._hasParent(this)) return;
              a._addParent(this);
            }
            (this._teardowns =
              null !== (c = this._teardowns) && void 0 !== c ? c : []).push(a);
          }
      };
      b.prototype._hasParent = function (a) {
        var b = this._parentage;
        return b === a || (Array.isArray(b) && b.includes(a));
      };
      b.prototype._addParent = function (a) {
        var b = this._parentage;
        this._parentage = Array.isArray(b) ? (b.push(a), b) : b ? [b, a] : a;
      };
      b.prototype._removeParent = function (a) {
        var b = this._parentage;
        b === a ? (this._parentage = null) : Array.isArray(b) && N(b, a);
      };
      b.prototype.remove = function (a) {
        var c = this._teardowns;
        c && N(c, a);
        a instanceof b && a._removeParent(this);
      };
      b.EMPTY = (function () {
        var a = new b();
        a.closed = !0;
        return a;
      })();
      return b;
    })(),
    Rd = C.EMPTY,
    R = {
      onUnhandledError: null,
      onStoppedNotification: null,
      Promise: void 0,
      useDeprecatedSynchronousErrorHandling: !1,
      useDeprecatedNextContext: !1,
    },
    ba = {
      setTimeout: function () {
        for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        a = ba.delegate;
        return (
          (null === a || void 0 === a ? void 0 : a.setTimeout) || setTimeout
        ).apply(void 0, A([], z(b)));
      },
      clearTimeout: function (b) {
        var a = ba.delegate;
        return (
          (null === a || void 0 === a ? void 0 : a.clearTimeout) || clearTimeout
        )(b);
      },
      delegate: void 0,
    },
    wa = I("C", void 0, void 0),
    T = null,
    la = (function (b) {
      function a(a) {
        var c = b.call(this) || this;
        c.isStopped = !1;
        a ? ((c.destination = a), Ib(a) && a.add(c)) : (c.destination = Se);
        return c;
      }
      B(a, b);
      a.create = function (a, b, e) {
        return new Oa(a, b, e);
      };
      a.prototype.next = function (a) {
        this.isStopped ? Ta(I("N", a, void 0), this) : this._next(a);
      };
      a.prototype.error = function (a) {
        this.isStopped
          ? Ta(I("E", void 0, a), this)
          : ((this.isStopped = !0), this._error(a));
      };
      a.prototype.complete = function () {
        this.isStopped
          ? Ta(wa, this)
          : ((this.isStopped = !0), this._complete());
      };
      a.prototype.unsubscribe = function () {
        this.closed ||
          ((this.isStopped = !0),
          b.prototype.unsubscribe.call(this),
          (this.destination = null));
      };
      a.prototype._next = function (a) {
        this.destination.next(a);
      };
      a.prototype._error = function (a) {
        try {
          this.destination.error(a);
        } finally {
          this.unsubscribe();
        }
      };
      a.prototype._complete = function () {
        try {
          this.destination.complete();
        } finally {
          this.unsubscribe();
        }
      };
      return a;
    })(C),
    Oa = (function (b) {
      function a(a, d, e) {
        var c = b.call(this) || this,
          h;
        q(a)
          ? (h = a)
          : a &&
            ((h = a.next),
            (d = a.error),
            (e = a.complete),
            c &&
              R.useDeprecatedNextContext &&
              ((a = Object.create(a)),
              (a.unsubscribe = function () {
                return c.unsubscribe();
              })),
            (h = null === h || void 0 === h ? void 0 : h.bind(a)),
            (d = null === d || void 0 === d ? void 0 : d.bind(a)),
            (e = null === e || void 0 === e ? void 0 : e.bind(a)));
        c.destination = {
          next: h ? Sa(h, c) : D,
          error: Sa(null !== d && void 0 !== d ? d : Kb, c),
          complete: e ? Sa(e, c) : D,
        };
        return c;
      }
      B(a, b);
      return a;
    })(la),
    Se = { closed: !0, next: D, error: Kb, complete: D },
    ca = ("function" === typeof Symbol && Symbol.observable) || "@@observable",
    r = (function () {
      function b(a) {
        a && (this._subscribe = a);
      }
      b.prototype.lift = function (a) {
        var c = new b();
        c.source = this;
        c.operator = a;
        return c;
      };
      b.prototype.subscribe = function (a, b, d) {
        var c = this,
          f = de(a) ? a : new Oa(a, b, d);
        Aa(function () {
          var a = c.operator,
            b = c.source;
          f.add(a ? a.call(f, b) : b ? c._subscribe(f) : c._trySubscribe(f));
        });
        return f;
      };
      b.prototype._trySubscribe = function (a) {
        try {
          return this._subscribe(a);
        } catch (c) {
          a.error(c);
        }
      };
      b.prototype.forEach = function (a, b) {
        var c = this;
        b = Mb(b);
        return new b(function (b, d) {
          var e;
          e = c.subscribe(
            function (b) {
              try {
                a(b);
              } catch (k) {
                d(k), null === e || void 0 === e ? void 0 : e.unsubscribe();
              }
            },
            d,
            b
          );
        });
      };
      b.prototype._subscribe = function (a) {
        var b;
        return null === (b = this.source) || void 0 === b
          ? void 0
          : b.subscribe(a);
      };
      b.prototype[ca] = function () {
        return this;
      };
      b.prototype.pipe = function () {
        for (var a = [], b = 0; b < arguments.length; b++) a[b] = arguments[b];
        return a.length ? Lb(a)(this) : this;
      };
      b.prototype.toPromise = function (a) {
        var b = this;
        a = Mb(a);
        return new a(function (a, c) {
          var d;
          b.subscribe(
            function (a) {
              return (d = a);
            },
            function (a) {
              return c(a);
            },
            function () {
              return a(d);
            }
          );
        });
      };
      b.create = function (a) {
        return new b(a);
      };
      return b;
    })(),
    m = (function (b) {
      function a(a, d, e, f, h) {
        var c = b.call(this, a) || this;
        c.onFinalize = h;
        c._next = d
          ? function (b) {
              try {
                d(b);
              } catch (y) {
                a.error(y);
              }
            }
          : b.prototype._next;
        c._error = f
          ? function (b) {
              try {
                f(b);
              } catch (y) {
                a.error(y);
              } finally {
                this.unsubscribe();
              }
            }
          : b.prototype._error;
        c._complete = e
          ? function () {
              try {
                e();
              } catch (k) {
                a.error(k);
              } finally {
                this.unsubscribe();
              }
            }
          : b.prototype._complete;
        return c;
      }
      B(a, b);
      a.prototype.unsubscribe = function () {
        var a,
          d = this.closed;
        b.prototype.unsubscribe.call(this);
        !d &&
          (null === (a = this.onFinalize) || void 0 === a
            ? void 0
            : a.call(this));
      };
      return a;
    })(la),
    Na = (function (b) {
      function a(a, d) {
        var c = b.call(this) || this;
        c.source = a;
        c.subjectFactory = d;
        c._subject = null;
        c._refCount = 0;
        c._connection = null;
        q(null === a || void 0 === a ? void 0 : a.lift) && (c.lift = a.lift);
        return c;
      }
      B(a, b);
      a.prototype._subscribe = function (a) {
        return this.getSubject().subscribe(a);
      };
      a.prototype.getSubject = function () {
        var a = this._subject;
        if (!a || a.isStopped) this._subject = this.subjectFactory();
        return this._subject;
      };
      a.prototype._teardown = function () {
        this._refCount = 0;
        var a = this._connection;
        this._subject = this._connection = null;
        null === a || void 0 === a ? void 0 : a.unsubscribe();
      };
      a.prototype.connect = function () {
        var a = this,
          b = this._connection;
        if (!b) {
          var b = (this._connection = new C()),
            e = this.getSubject();
          b.add(
            this.source.subscribe(
              new m(
                e,
                void 0,
                function () {
                  a._teardown();
                  e.complete();
                },
                function (b) {
                  a._teardown();
                  e.error(b);
                },
                function () {
                  return a._teardown();
                }
              )
            )
          );
          b.closed && ((this._connection = null), (b = C.EMPTY));
        }
        return b;
      };
      a.prototype.refCount = function () {
        return Va()(this);
      };
      return a;
    })(r),
    Ba = {
      now: function () {
        return (Ba.delegate || performance).now();
      },
      delegate: void 0,
    },
    S = {
      schedule: function (b) {
        var a = requestAnimationFrame,
          c = cancelAnimationFrame,
          d = S.delegate;
        d && ((a = d.requestAnimationFrame), (c = d.cancelAnimationFrame));
        var e = a(function (a) {
          c = void 0;
          b(a);
        });
        return new C(function () {
          return null === c || void 0 === c ? void 0 : c(e);
        });
      },
      requestAnimationFrame: function () {
        for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        a = S.delegate;
        return (
          (null === a || void 0 === a ? void 0 : a.requestAnimationFrame) ||
          requestAnimationFrame
        ).apply(void 0, A([], z(b)));
      },
      cancelAnimationFrame: function () {
        for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        a = S.delegate;
        return (
          (null === a || void 0 === a ? void 0 : a.cancelAnimationFrame) ||
          cancelAnimationFrame
        ).apply(void 0, A([], z(b)));
      },
      delegate: void 0,
    },
    Te = Nb(),
    Sd = Q(function (b) {
      return function () {
        b(this);
        this.name = "ObjectUnsubscribedError";
        this.message = "object unsubscribed";
      };
    }),
    E = (function (b) {
      function a() {
        var a = b.call(this) || this;
        a.closed = !1;
        a.observers = [];
        a.isStopped = !1;
        a.hasError = !1;
        a.thrownError = null;
        return a;
      }
      B(a, b);
      a.prototype.lift = function (a) {
        var b = new Cb(this, this);
        b.operator = a;
        return b;
      };
      a.prototype._throwIfClosed = function () {
        if (this.closed) throw new Sd();
      };
      a.prototype.next = function (a) {
        var b = this;
        Aa(function () {
          var c, d;
          b._throwIfClosed();
          if (!b.isStopped) {
            var h = b.observers.slice();
            try {
              for (var g = G(h), k = g.next(); !k.done; k = g.next())
                k.value.next(a);
            } catch (y) {
              c = { error: y };
            } finally {
              try {
                k && !k.done && (d = g.return) && d.call(g);
              } finally {
                if (c) throw c.error;
              }
            }
          }
        });
      };
      a.prototype.error = function (a) {
        var b = this;
        Aa(function () {
          b._throwIfClosed();
          if (!b.isStopped) {
            b.hasError = b.isStopped = !0;
            b.thrownError = a;
            for (var c = b.observers; c.length; ) c.shift().error(a);
          }
        });
      };
      a.prototype.complete = function () {
        var a = this;
        Aa(function () {
          a._throwIfClosed();
          if (!a.isStopped) {
            a.isStopped = !0;
            for (var b = a.observers; b.length; ) b.shift().complete();
          }
        });
      };
      a.prototype.unsubscribe = function () {
        this.isStopped = this.closed = !0;
        this.observers = null;
      };
      Object.defineProperty(a.prototype, "observed", {
        get: function () {
          var a;
          return (
            0 <
            (null === (a = this.observers) || void 0 === a ? void 0 : a.length)
          );
        },
        enumerable: !1,
        configurable: !0,
      });
      a.prototype._trySubscribe = function (a) {
        this._throwIfClosed();
        return b.prototype._trySubscribe.call(this, a);
      };
      a.prototype._subscribe = function (a) {
        this._throwIfClosed();
        this._checkFinalizedStatuses(a);
        return this._innerSubscribe(a);
      };
      a.prototype._innerSubscribe = function (a) {
        var b = this.isStopped,
          c = this.observers;
        return this.hasError || b
          ? Rd
          : (c.push(a),
            new C(function () {
              return N(c, a);
            }));
      };
      a.prototype._checkFinalizedStatuses = function (a) {
        var b = this.thrownError,
          c = this.isStopped;
        this.hasError ? a.error(b) : c && a.complete();
      };
      a.prototype.asObservable = function () {
        var a = new r();
        a.source = this;
        return a;
      };
      a.create = function (a, b) {
        return new Cb(a, b);
      };
      return a;
    })(r),
    Cb = (function (b) {
      function a(a, d) {
        var c = b.call(this) || this;
        c.destination = a;
        c.source = d;
        return c;
      }
      B(a, b);
      a.prototype.next = function (a) {
        var b, c;
        null ===
          (c =
            null === (b = this.destination) || void 0 === b
              ? void 0
              : b.next) || void 0 === c
          ? void 0
          : c.call(b, a);
      };
      a.prototype.error = function (a) {
        var b, c;
        null ===
          (c =
            null === (b = this.destination) || void 0 === b
              ? void 0
              : b.error) || void 0 === c
          ? void 0
          : c.call(b, a);
      };
      a.prototype.complete = function () {
        var a, b;
        null ===
          (b =
            null === (a = this.destination) || void 0 === a
              ? void 0
              : a.complete) || void 0 === b
          ? void 0
          : b.call(a);
      };
      a.prototype._subscribe = function (a) {
        var b, c;
        return null !==
          (c =
            null === (b = this.source) || void 0 === b
              ? void 0
              : b.subscribe(a)) && void 0 !== c
          ? c
          : Rd;
      };
      return a;
    })(E),
    ad = (function (b) {
      function a(a) {
        var c = b.call(this) || this;
        c._value = a;
        return c;
      }
      B(a, b);
      Object.defineProperty(a.prototype, "value", {
        get: function () {
          return this.getValue();
        },
        enumerable: !1,
        configurable: !0,
      });
      a.prototype._subscribe = function (a) {
        var c = b.prototype._subscribe.call(this, a);
        !c.closed && a.next(this._value);
        return c;
      };
      a.prototype.getValue = function () {
        var a = this.thrownError,
          b = this._value;
        if (this.hasError) throw a;
        this._throwIfClosed();
        return b;
      };
      a.prototype.next = function (a) {
        b.prototype.next.call(this, (this._value = a));
      };
      return a;
    })(E),
    ia = {
      now: function () {
        return (ia.delegate || Date).now();
      },
      delegate: void 0,
    },
    ga = (function (b) {
      function a(a, d, e) {
        void 0 === a && (a = Infinity);
        void 0 === d && (d = Infinity);
        void 0 === e && (e = ia);
        var c = b.call(this) || this;
        c._bufferSize = a;
        c._windowTime = d;
        c._timestampProvider = e;
        c._buffer = [];
        c._infiniteTimeWindow = Infinity === d;
        c._bufferSize = Math.max(1, a);
        c._windowTime = Math.max(1, d);
        return c;
      }
      B(a, b);
      a.prototype.next = function (a) {
        var c = this._buffer,
          e = this._infiniteTimeWindow,
          f = this._timestampProvider,
          h = this._windowTime;
        this.isStopped || (c.push(a), !e && c.push(f.now() + h));
        this._trimBuffer();
        b.prototype.next.call(this, a);
      };
      a.prototype._subscribe = function (a) {
        this._throwIfClosed();
        this._trimBuffer();
        for (
          var b = this._innerSubscribe(a),
            c = this._infiniteTimeWindow,
            f = this._buffer.slice(),
            h = 0;
          h < f.length && !a.closed;
          h += c ? 1 : 2
        )
          a.next(f[h]);
        this._checkFinalizedStatuses(a);
        return b;
      };
      a.prototype._trimBuffer = function () {
        var a = this._bufferSize,
          b = this._timestampProvider,
          e = this._buffer,
          f = this._infiniteTimeWindow,
          h = (f ? 1 : 2) * a;
        Infinity > a && h < e.length && e.splice(0, e.length - h);
        if (!f) {
          a = b.now();
          b = 0;
          for (f = 1; f < e.length && e[f] <= a; f += 2) b = f;
          b && e.splice(0, b + 1);
        }
      };
      return a;
    })(E),
    eb = (function (b) {
      function a() {
        var a = (null !== b && b.apply(this, arguments)) || this;
        a._value = null;
        a._hasValue = !1;
        a._isComplete = !1;
        return a;
      }
      B(a, b);
      a.prototype._checkFinalizedStatuses = function (a) {
        var b = this._hasValue,
          c = this._value,
          f = this.thrownError,
          h = this.isStopped;
        this.hasError ? a.error(f) : h && (b && a.next(c), a.complete());
      };
      a.prototype.next = function (a) {
        this.isStopped || ((this._value = a), (this._hasValue = !0));
      };
      a.prototype.complete = function () {
        var a = this._hasValue,
          d = this._value;
        this._isComplete ||
          ((this._isComplete = !0),
          a && b.prototype.next.call(this, d),
          b.prototype.complete.call(this));
      };
      return a;
    })(E),
    ja = {
      setInterval: function () {
        for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        a = ja.delegate;
        return (
          (null === a || void 0 === a ? void 0 : a.setInterval) || setInterval
        ).apply(void 0, A([], z(b)));
      },
      clearInterval: function (b) {
        var a = ja.delegate;
        return (
          (null === a || void 0 === a ? void 0 : a.clearInterval) ||
          clearInterval
        )(b);
      },
      delegate: void 0,
    },
    xa = (function (b) {
      function a(a, d) {
        var c = b.call(this, a, d) || this;
        c.scheduler = a;
        c.work = d;
        c.pending = !1;
        return c;
      }
      B(a, b);
      a.prototype.schedule = function (a, b) {
        void 0 === b && (b = 0);
        if (this.closed) return this;
        this.state = a;
        a = this.id;
        var c = this.scheduler;
        null != a && (this.id = this.recycleAsyncId(c, a, b));
        this.pending = !0;
        this.delay = b;
        this.id = this.id || this.requestAsyncId(c, this.id, b);
        return this;
      };
      a.prototype.requestAsyncId = function (a, b, e) {
        void 0 === e && (e = 0);
        return ja.setInterval(a.flush.bind(a, this), e);
      };
      a.prototype.recycleAsyncId = function (a, b, e) {
        void 0 === e && (e = 0);
        if (null != e && this.delay === e && !1 === this.pending) return b;
        ja.clearInterval(b);
      };
      a.prototype.execute = function (a, b) {
        if (this.closed) return Error("executing a cancelled action");
        this.pending = !1;
        if ((a = this._execute(a, b))) return a;
        !1 === this.pending &&
          null != this.id &&
          (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
      };
      a.prototype._execute = function (a, b) {
        b = !1;
        var c;
        try {
          this.work(a);
        } catch (f) {
          (b = !0), (c = (!!f && f) || Error(f));
        }
        if (b) return this.unsubscribe(), c;
      };
      a.prototype.unsubscribe = function () {
        if (!this.closed) {
          var a = this.id,
            d = this.scheduler,
            e = d.actions;
          this.work = this.state = this.scheduler = null;
          this.pending = !1;
          N(e, this);
          null != a && (this.id = this.recycleAsyncId(d, a, null));
          this.delay = null;
          b.prototype.unsubscribe.call(this);
        }
      };
      return a;
    })(
      (function (b) {
        function a(a, d) {
          return b.call(this) || this;
        }
        B(a, b);
        a.prototype.schedule = function (a, b) {
          return this;
        };
        return a;
      })(C)
    ),
    Ue = 1,
    Db,
    Wa = {},
    Ve = function (b) {
      var a = Ue++;
      Wa[a] = !0;
      Db || (Db = Promise.resolve());
      Db.then(function () {
        return Ob(a) && b();
      });
      return a;
    },
    We = function (b) {
      Ob(b);
    },
    ka = {
      setImmediate: function () {
        for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        a = ka.delegate;
        return (
          (null === a || void 0 === a ? void 0 : a.setImmediate) || Ve
        ).apply(void 0, A([], z(b)));
      },
      clearImmediate: function (b) {
        var a = ka.delegate;
        return ((null === a || void 0 === a ? void 0 : a.clearImmediate) || We)(
          b
        );
      },
      delegate: void 0,
    },
    Xe = (function (b) {
      function a(a, d) {
        var c = b.call(this, a, d) || this;
        c.scheduler = a;
        c.work = d;
        return c;
      }
      B(a, b);
      a.prototype.requestAsyncId = function (a, d, e) {
        void 0 === e && (e = 0);
        if (null !== e && 0 < e)
          return b.prototype.requestAsyncId.call(this, a, d, e);
        a.actions.push(this);
        return (
          a._scheduled ||
          (a._scheduled = ka.setImmediate(a.flush.bind(a, void 0)))
        );
      };
      a.prototype.recycleAsyncId = function (a, d, e) {
        void 0 === e && (e = 0);
        if ((null != e && 0 < e) || (null == e && 0 < this.delay))
          return b.prototype.recycleAsyncId.call(this, a, d, e);
        0 === a.actions.length &&
          (ka.clearImmediate(d), (a._scheduled = void 0));
      };
      return a;
    })(xa),
    Eb = (function () {
      function b(a, c) {
        void 0 === c && (c = b.now);
        this.schedulerActionCtor = a;
        this.now = c;
      }
      b.prototype.schedule = function (a, b, d) {
        void 0 === b && (b = 0);
        return new this.schedulerActionCtor(this, a).schedule(d, b);
      };
      b.now = ia.now;
      return b;
    })(),
    ya = (function (b) {
      function a(a, d) {
        void 0 === d && (d = Eb.now);
        a = b.call(this, a, d) || this;
        a.actions = [];
        a._active = !1;
        a._scheduled = void 0;
        return a;
      }
      B(a, b);
      a.prototype.flush = function (a) {
        var b = this.actions;
        if (this._active) b.push(a);
        else {
          var c;
          this._active = !0;
          do if ((c = a.execute(a.state, a.delay))) break;
          while ((a = b.shift()));
          this._active = !1;
          if (c) {
            for (; (a = b.shift()); ) a.unsubscribe();
            throw c;
          }
        }
      };
      return a;
    })(Eb),
    Td = new ((function (b) {
      function a() {
        return (null !== b && b.apply(this, arguments)) || this;
      }
      B(a, b);
      a.prototype.flush = function (a) {
        this._active = !0;
        this._scheduled = void 0;
        var b = this.actions,
          c,
          f = -1;
        a = a || b.shift();
        var h = b.length;
        do if ((c = a.execute(a.state, a.delay))) break;
        while (++f < h && (a = b.shift()));
        this._active = !1;
        if (c) {
          for (; ++f < h && (a = b.shift()); ) a.unsubscribe();
          throw c;
        }
      };
      return a;
    })(ya))(Xe),
    K = new ya(xa),
    sa = K,
    Ye = (function (b) {
      function a(a, d) {
        var c = b.call(this, a, d) || this;
        c.scheduler = a;
        c.work = d;
        return c;
      }
      B(a, b);
      a.prototype.schedule = function (a, d) {
        void 0 === d && (d = 0);
        if (0 < d) return b.prototype.schedule.call(this, a, d);
        this.delay = d;
        this.state = a;
        this.scheduler.flush(this);
        return this;
      };
      a.prototype.execute = function (a, d) {
        return 0 < d || this.closed
          ? b.prototype.execute.call(this, a, d)
          : this._execute(a, d);
      };
      a.prototype.requestAsyncId = function (a, d, e) {
        void 0 === e && (e = 0);
        return (null != e && 0 < e) || (null == e && 0 < this.delay)
          ? b.prototype.requestAsyncId.call(this, a, d, e)
          : a.flush(this);
      };
      return a;
    })(xa),
    Ud = new ((function (b) {
      function a() {
        return (null !== b && b.apply(this, arguments)) || this;
      }
      B(a, b);
      return a;
    })(ya))(Ye),
    Ze = (function (b) {
      function a(a, d) {
        var c = b.call(this, a, d) || this;
        c.scheduler = a;
        c.work = d;
        return c;
      }
      B(a, b);
      a.prototype.requestAsyncId = function (a, d, e) {
        void 0 === e && (e = 0);
        if (null !== e && 0 < e)
          return b.prototype.requestAsyncId.call(this, a, d, e);
        a.actions.push(this);
        return (
          a._scheduled ||
          (a._scheduled = S.requestAnimationFrame(function () {
            return a.flush(void 0);
          }))
        );
      };
      a.prototype.recycleAsyncId = function (a, d, e) {
        void 0 === e && (e = 0);
        if ((null != e && 0 < e) || (null == e && 0 < this.delay))
          return b.prototype.recycleAsyncId.call(this, a, d, e);
        0 === a.actions.length &&
          (S.cancelAnimationFrame(d), (a._scheduled = void 0));
      };
      return a;
    })(xa),
    Vd = new ((function (b) {
      function a() {
        return (null !== b && b.apply(this, arguments)) || this;
      }
      B(a, b);
      a.prototype.flush = function (a) {
        this._active = !0;
        this._scheduled = void 0;
        var b = this.actions,
          c,
          f = -1;
        a = a || b.shift();
        var h = b.length;
        do if ((c = a.execute(a.state, a.delay))) break;
        while (++f < h && (a = b.shift()));
        this._active = !1;
        if (c) {
          for (; ++f < h && (a = b.shift()); ) a.unsubscribe();
          throw c;
        }
      };
      return a;
    })(ya))(Ze),
    Wd = (function (b) {
      function a(a, d) {
        void 0 === a && (a = Fb);
        void 0 === d && (d = Infinity);
        var c =
          b.call(this, a, function () {
            return c.frame;
          }) || this;
        c.maxFrames = d;
        c.frame = 0;
        c.index = -1;
        return c;
      }
      B(a, b);
      a.prototype.flush = function () {
        for (
          var a = this.actions, b = this.maxFrames, e, f;
          (f = a[0]) &&
          f.delay <= b &&
          !(a.shift(),
          (this.frame = f.delay),
          (e = f.execute(f.state, f.delay)));

        );
        if (e) {
          for (; (f = a.shift()); ) f.unsubscribe();
          throw e;
        }
      };
      a.frameTimeFactor = 10;
      return a;
    })(ya),
    Fb = (function (b) {
      function a(a, d, e) {
        void 0 === e && (e = a.index += 1);
        var c = b.call(this, a, d) || this;
        c.scheduler = a;
        c.work = d;
        c.index = e;
        c.active = !0;
        c.index = a.index = e;
        return c;
      }
      B(a, b);
      a.prototype.schedule = function (c, d) {
        void 0 === d && (d = 0);
        if (Number.isFinite(d)) {
          if (!this.id) return b.prototype.schedule.call(this, c, d);
          this.active = !1;
          var e = new a(this.scheduler, this.work);
          this.add(e);
          return e.schedule(c, d);
        }
        return C.EMPTY;
      };
      a.prototype.requestAsyncId = function (b, d, e) {
        void 0 === e && (e = 0);
        this.delay = b.frame + e;
        b = b.actions;
        b.push(this);
        b.sort(a.sortActions);
        return !0;
      };
      a.prototype.recycleAsyncId = function (a, b, e) {};
      a.prototype._execute = function (a, d) {
        if (!0 === this.active) return b.prototype._execute.call(this, a, d);
      };
      a.sortActions = function (a, b) {
        return a.delay === b.delay
          ? a.index === b.index
            ? 0
            : a.index > b.index
            ? 1
            : -1
          : a.delay > b.delay
          ? 1
          : -1;
      };
      return a;
    })(xa),
    J = new r(function (b) {
      return b.complete();
    }),
    Za = function (b) {
      return b && "number" === typeof b.length && "function" !== typeof b;
    },
    Ya;
  Ya =
    "function" === typeof Symbol && Symbol.iterator
      ? Symbol.iterator
      : "@@iterator";
  (function (b) {
    b.NEXT = "N";
    b.ERROR = "E";
    b.COMPLETE = "C";
  })(g.NotificationKind || (g.NotificationKind = {}));
  var La = (function () {
      function b(a, b, d) {
        this.kind = a;
        this.value = b;
        this.error = d;
        this.hasValue = "N" === a;
      }
      b.prototype.observe = function (a) {
        return Da(this, a);
      };
      b.prototype.do = function (a, b, d) {
        var c = this.kind,
          f = this.value,
          h = this.error;
        return "N" === c
          ? null === a || void 0 === a
            ? void 0
            : a(f)
          : "E" === c
          ? null === b || void 0 === b
            ? void 0
            : b(h)
          : null === d || void 0 === d
          ? void 0
          : d();
      };
      b.prototype.accept = function (a, b, d) {
        return q(null === a || void 0 === a ? void 0 : a.next)
          ? this.observe(a)
          : this.do(a, b, d);
      };
      b.prototype.toObservable = function () {
        var a = this.kind,
          b = this.value,
          d = this.error,
          b =
            "N" === a
              ? $a(b)
              : "E" === a
              ? Zb(function () {
                  return d;
                })
              : "C" === a
              ? J
              : 0;
        if (!b) throw new TypeError("Unexpected notification kind " + a);
        return b;
      };
      b.createNext = function (a) {
        return new b("N", a);
      };
      b.createError = function (a) {
        return new b("E", void 0, a);
      };
      b.createComplete = function () {
        return b.completeNotification;
      };
      b.completeNotification = new b("C");
      return b;
    })(),
    X = Q(function (b) {
      return function () {
        b(this);
        this.name = "EmptyError";
        this.message = "no elements in sequence";
      };
    }),
    pb = Q(function (b) {
      return function () {
        b(this);
        this.name = "ArgumentOutOfRangeError";
        this.message = "argument out of range";
      };
    }),
    md = Q(function (b) {
      return function (a) {
        b(this);
        this.name = "NotFoundError";
        this.message = a;
      };
    }),
    ld = Q(function (b) {
      return function (a) {
        b(this);
        this.name = "SequenceError";
        this.message = a;
      };
    }),
    $b = Q(function (b) {
      return function (a) {
        void 0 === a && (a = null);
        b(this);
        this.message = "Timeout has occurred";
        this.name = "TimeoutError";
        this.info = a;
      };
    }),
    me = Array.isArray,
    ne = Array.isArray,
    oe = Object.getPrototypeOf,
    pe = Object.prototype,
    qe = Object.keys,
    $e = {
      connector: function () {
        return new E();
      },
      resetOnDisconnect: !0,
    },
    ue = ["addListener", "removeListener"],
    se = ["addEventListener", "removeEventListener"],
    we = ["on", "off"],
    Xd = new r(D),
    xe = Array.isArray,
    Ae = function (b, a) {
      return b.push(a), b;
    },
    Ce = {
      connector: function () {
        return new E();
      },
    },
    Fe = (function (b) {
      function a() {
        var a = (null !== b && b.apply(this, arguments)) || this;
        a.activeGroups = 0;
        a.teardownAttempted = !1;
        return a;
      }
      B(a, b);
      a.prototype.unsubscribe = function () {
        this.teardownAttempted = !0;
        0 === this.activeGroups && b.prototype.unsubscribe.call(this);
      };
      return a;
    })(m),
    yd = { leading: !0, trailing: !1 },
    Ge = (function () {
      return function (b, a) {
        this.value = b;
        this.interval = a;
      };
    })(),
    af = Object.freeze({
      audit: ib,
      auditTime: lc,
      buffer: mc,
      bufferCount: nc,
      bufferTime: oc,
      bufferToggle: pc,
      bufferWhen: qc,
      catchError: jb,
      combineAll: Ga,
      combineLatestAll: Ga,
      combineLatest: lb,
      combineLatestWith: tc,
      concat: vc,
      concatAll: Fa,
      concatMap: Ha,
      concatMapTo: uc,
      concatWith: wc,
      connect: Ia,
      count: xc,
      debounce: yc,
      debounceTime: zc,
      defaultIfEmpty: ta,
      delay: Ac,
      delayWhen: Ja,
      dematerialize: Bc,
      distinct: Cc,
      distinctUntilChanged: ob,
      distinctUntilKeyChanged: Dc,
      elementAt: Ec,
      endWith: Fc,
      every: Gc,
      exhaust: Ka,
      exhaustAll: Ka,
      exhaustMap: qb,
      expand: Hc,
      filter: M,
      finalize: Ic,
      find: Jc,
      findIndex: Lc,
      first: Mc,
      groupBy: Nc,
      ignoreElements: mb,
      isEmpty: Oc,
      last: Pc,
      map: L,
      mapTo: nb,
      materialize: Qc,
      max: Rc,
      merge: Uc,
      mergeAll: oa,
      flatMap: H,
      mergeMap: H,
      mergeMapTo: Sc,
      mergeScan: Tc,
      mergeWith: Vc,
      min: Wc,
      multicast: Ma,
      observeOn: db,
      onErrorResumeNext: ic,
      pairwise: Xc,
      partition: function (b, a) {
        return function (c) {
          return [M(b, a)(c), M(jc(b, a))(c)];
        };
      },
      pluck: Yc,
      publish: Zc,
      publishBehavior: $c,
      publishLast: bd,
      publishReplay: cd,
      race: function () {
        for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        return sb.apply(void 0, A([], z(V(b))));
      },
      raceWith: sb,
      reduce: fa,
      repeat: dd,
      repeatWhen: ed,
      retry: fd,
      retryWhen: gd,
      refCount: Va,
      sample: tb,
      sampleTime: hd,
      scan: ub,
      sequenceEqual: id,
      share: vb,
      shareReplay: jd,
      single: kd,
      skip: nd,
      skipLast: od,
      skipUntil: pd,
      skipWhile: qd,
      startWith: rd,
      subscribeOn: cb,
      switchAll: sd,
      switchMap: ha,
      switchMapTo: td,
      switchScan: ud,
      take: W,
      takeLast: rb,
      takeUntil: vd,
      takeWhile: wd,
      tap: xd,
      throttle: xb,
      throttleTime: zd,
      throwIfEmpty: ua,
      timeInterval: Ad,
      timeout: bb,
      timeoutWith: Bd,
      timestamp: Cd,
      toArray: kb,
      window: Dd,
      windowCount: Ed,
      windowTime: Fd,
      windowToggle: Gd,
      windowWhen: Hd,
      withLatestFrom: Id,
      zip: Kd,
      zipAll: Jd,
      zipWith: Ld,
    }),
    za = (function () {
      return function (b, a) {
        void 0 === a && (a = Infinity);
        this.subscribedFrame = b;
        this.unsubscribedFrame = a;
      };
    })(),
    Yd = (function () {
      function b() {
        this.subscriptions = [];
      }
      b.prototype.logSubscribedFrame = function () {
        this.subscriptions.push(new za(this.scheduler.now()));
        return this.subscriptions.length - 1;
      };
      b.prototype.logUnsubscribedFrame = function (a) {
        var b = this.subscriptions;
        b[a] = new za(b[a].subscribedFrame, this.scheduler.now());
      };
      return b;
    })(),
    Gb = (function (b) {
      function a(a, d) {
        var c =
          b.call(this, function (a) {
            var b = this,
              c = b.logSubscribedFrame(),
              d = new C();
            d.add(
              new C(function () {
                b.logUnsubscribedFrame(c);
              })
            );
            b.scheduleMessages(a);
            return d;
          }) || this;
        c.messages = a;
        c.subscriptions = [];
        c.scheduler = d;
        return c;
      }
      B(a, b);
      a.prototype.scheduleMessages = function (a) {
        for (var b = this.messages.length, c = 0; c < b; c++) {
          var f = this.messages[c];
          a.add(
            this.scheduler.schedule(
              function (a) {
                Da(a.message.notification, a.subscriber);
              },
              f.frame,
              { message: f, subscriber: a }
            )
          );
        }
      };
      return a;
    })(r);
  Md(Gb, [Yd]);
  var Zd = (function (b) {
    function a(a, d) {
      var c = b.call(this) || this;
      c.messages = a;
      c.subscriptions = [];
      c.scheduler = d;
      return c;
    }
    B(a, b);
    a.prototype._subscribe = function (a) {
      var c = this,
        e = c.logSubscribedFrame(),
        f = new C();
      f.add(
        new C(function () {
          c.logUnsubscribedFrame(e);
        })
      );
      f.add(b.prototype._subscribe.call(this, a));
      return f;
    };
    a.prototype.setup = function () {
      for (
        var a = this,
          b = a.messages.length,
          e = function (b) {
            (function () {
              var c = a.messages[b],
                d = c.notification;
              a.scheduler.schedule(function () {
                Da(d, a);
              }, c.frame);
            })();
          },
          f = 0;
        f < b;
        f++
      )
        e(f);
    };
    return a;
  })(E);
  Md(Zd, [Yd]);
  var bf = (function (b) {
      function a(a) {
        var c = b.call(this, Fb, 750) || this;
        c.assertDeepEqual = a;
        c.hotObservables = [];
        c.coldObservables = [];
        c.flushTests = [];
        c.runMode = !1;
        return c;
      }
      B(a, b);
      a.prototype.createTime = function (b) {
        b = this.runMode ? b.trim().indexOf("|") : b.indexOf("|");
        if (-1 === b)
          throw Error(
            'marble diagram for time should have a completion marker "|"'
          );
        return b * a.frameTimeFactor;
      };
      a.prototype.createColdObservable = function (b, d, e) {
        if (-1 !== b.indexOf("^"))
          throw Error('cold observable cannot have subscription offset "^"');
        if (-1 !== b.indexOf("!"))
          throw Error('cold observable cannot have unsubscription marker "!"');
        b = a.parseMarbles(b, d, e, void 0, this.runMode);
        b = new Gb(b, this);
        this.coldObservables.push(b);
        return b;
      };
      a.prototype.createHotObservable = function (b, d, e) {
        if (-1 !== b.indexOf("!"))
          throw Error('hot observable cannot have unsubscription marker "!"');
        b = a.parseMarbles(b, d, e, void 0, this.runMode);
        b = new Zd(b, this);
        this.hotObservables.push(b);
        return b;
      };
      a.prototype.materializeInnerObservable = function (a, b) {
        var c = this,
          d = [];
        a.subscribe(
          function (a) {
            d.push({ frame: c.frame - b, notification: I("N", a, void 0) });
          },
          function (a) {
            d.push({ frame: c.frame - b, notification: I("E", void 0, a) });
          },
          function () {
            d.push({ frame: c.frame - b, notification: wa });
          }
        );
        return d;
      };
      a.prototype.expectObservable = function (b, d) {
        var c = this;
        void 0 === d && (d = null);
        var f = [],
          h = { actual: f, ready: !1 };
        d = a.parseMarblesAsSubscriptions(d, this.runMode);
        var g = Infinity === d.subscribedFrame ? 0 : d.subscribedFrame;
        d = d.unsubscribedFrame;
        var k;
        this.schedule(function () {
          k = b.subscribe(
            function (a) {
              a = a instanceof r ? c.materializeInnerObservable(a, c.frame) : a;
              f.push({ frame: c.frame, notification: I("N", a, void 0) });
            },
            function (a) {
              f.push({ frame: c.frame, notification: I("E", void 0, a) });
            },
            function () {
              f.push({ frame: c.frame, notification: wa });
            }
          );
        }, g);
        Infinity !== d &&
          this.schedule(function () {
            return k.unsubscribe();
          }, d);
        this.flushTests.push(h);
        var m = this.runMode;
        return {
          toBe: function (b, c, d) {
            h.ready = !0;
            h.expected = a.parseMarbles(b, c, d, !0, m);
          },
          toEqual: function (a) {
            h.ready = !0;
            h.expected = [];
            c.schedule(function () {
              k = a.subscribe(
                function (a) {
                  a =
                    a instanceof r
                      ? c.materializeInnerObservable(a, c.frame)
                      : a;
                  h.expected.push({
                    frame: c.frame,
                    notification: I("N", a, void 0),
                  });
                },
                function (a) {
                  h.expected.push({
                    frame: c.frame,
                    notification: I("E", void 0, a),
                  });
                },
                function () {
                  h.expected.push({ frame: c.frame, notification: wa });
                }
              );
            }, g);
          },
        };
      };
      a.prototype.expectSubscriptions = function (b) {
        var c = { actual: b, ready: !1 };
        this.flushTests.push(c);
        var e = this.runMode;
        return {
          toBe: function (b) {
            b = "string" === typeof b ? [b] : b;
            c.ready = !0;
            c.expected = b
              .map(function (b) {
                return a.parseMarblesAsSubscriptions(b, e);
              })
              .filter(function (a) {
                return Infinity !== a.subscribedFrame;
              });
          },
        };
      };
      a.prototype.flush = function () {
        for (var a = this, d = this.hotObservables; 0 < d.length; )
          d.shift().setup();
        b.prototype.flush.call(this);
        this.flushTests = this.flushTests.filter(function (b) {
          return b.ready ? (a.assertDeepEqual(b.actual, b.expected), !1) : !0;
        });
      };
      a.parseMarblesAsSubscriptions = function (a, b) {
        var c = this;
        void 0 === b && (b = !1);
        if ("string" !== typeof a) return new za(Infinity);
        var d = A([], z(a));
        a = d.length;
        for (
          var g = -1,
            l = Infinity,
            k = Infinity,
            m = 0,
            p = function (a) {
              var e = m,
                f = function (a) {
                  e += a * c.frameTimeFactor;
                },
                h = d[a];
              switch (h) {
                case " ":
                  b || f(1);
                  break;
                case "-":
                  f(1);
                  break;
                case "(":
                  g = m;
                  f(1);
                  break;
                case ")":
                  g = -1;
                  f(1);
                  break;
                case "^":
                  if (Infinity !== l)
                    throw Error(
                      "found a second subscription point '^' in a subscription marble diagram. There can only be one."
                    );
                  l = -1 < g ? g : m;
                  f(1);
                  break;
                case "!":
                  if (Infinity !== k)
                    throw Error(
                      "found a second unsubscription point '!' in a subscription marble diagram. There can only be one."
                    );
                  k = -1 < g ? g : m;
                  break;
                default:
                  if (
                    b &&
                    h.match(/^[0-9]$/) &&
                    (0 === a || " " === d[a - 1])
                  ) {
                    var p = d
                      .slice(a)
                      .join("")
                      .match(/^([0-9]+(?:\.[0-9]+)?)(ms|s|m) /);
                    if (p) {
                      a += p[0].length - 1;
                      var h = parseFloat(p[1]),
                        t = void 0;
                      switch (p[2]) {
                        case "ms":
                          t = h;
                          break;
                        case "s":
                          t = 1e3 * h;
                          break;
                        case "m":
                          t = 6e4 * h;
                      }
                      f(t / n.frameTimeFactor);
                      break;
                    }
                  }
                  throw Error(
                    "there can only be '^' and '!' markers in a subscription marble diagram. Found instead '" +
                      h +
                      "'."
                  );
              }
              m = e;
              w = a;
            },
            n = this,
            w,
            q = 0;
          q < a;
          q++
        )
          p(q), (q = w);
        return 0 > k ? new za(l) : new za(l, k);
      };
      a.parseMarbles = function (a, b, e, f, g) {
        var c = this;
        void 0 === f && (f = !1);
        void 0 === g && (g = !1);
        if (-1 !== a.indexOf("!"))
          throw Error(
            'conventional marble diagrams cannot have the unsubscription marker "!"'
          );
        var d = A([], z(a)),
          h = d.length,
          m = [];
        a = g ? a.replace(/^[ ]+/, "").indexOf("^") : a.indexOf("^");
        var n = -1 === a ? 0 : a * -this.frameTimeFactor,
          w =
            "object" !== typeof b
              ? function (a) {
                  return a;
                }
              : function (a) {
                  return f && b[a] instanceof Gb ? b[a].messages : b[a];
                },
          q = -1;
        a = function (a) {
          var b = n,
            f = function (a) {
              b += a * c.frameTimeFactor;
            },
            h = void 0,
            k = d[a];
          switch (k) {
            case " ":
              g || f(1);
              break;
            case "-":
              f(1);
              break;
            case "(":
              q = n;
              f(1);
              break;
            case ")":
              q = -1;
              f(1);
              break;
            case "|":
              h = wa;
              f(1);
              break;
            case "^":
              f(1);
              break;
            case "#":
              h = I("E", void 0, e || "error");
              f(1);
              break;
            default:
              if (g && k.match(/^[0-9]$/) && (0 === a || " " === d[a - 1])) {
                var l = d
                  .slice(a)
                  .join("")
                  .match(/^([0-9]+(?:\.[0-9]+)?)(ms|s|m) /);
                if (l) {
                  a += l[0].length - 1;
                  var k = parseFloat(l[1]),
                    p = void 0;
                  switch (l[2]) {
                    case "ms":
                      p = k;
                      break;
                    case "s":
                      p = 1e3 * k;
                      break;
                    case "m":
                      p = 6e4 * k;
                  }
                  f(p / u.frameTimeFactor);
                  break;
                }
              }
              h = I("N", w(k), void 0);
              f(1);
          }
          h && m.push({ frame: -1 < q ? q : n, notification: h });
          n = b;
          r = a;
        };
        for (var u = this, r, v = 0; v < h; v++) a(v), (v = r);
        return m;
      };
      a.prototype.createAnimator = function () {
        var b = this;
        if (!this.runMode)
          throw Error("animate() must only be used in run mode");
        var d = 0,
          e;
        return {
          animate: function (c) {
            var d, f;
            if (e)
              throw Error(
                "animate() must not be called more than once within run()"
              );
            if (/[|#]/.test(c))
              throw Error("animate() must not complete or error");
            e = new Map();
            c = a.parseMarbles(c, void 0, void 0, void 0, !0);
            try {
              for (var g = G(c), m = g.next(); !m.done; m = g.next())
                b.schedule(function () {
                  var a,
                    c,
                    d = b.now(),
                    f = Array.from(e.values());
                  e.clear();
                  try {
                    for (
                      var g = ((a = void 0), G(f)), h = g.next();
                      !h.done;
                      h = g.next()
                    ) {
                      var k = h.value;
                      k(d);
                    }
                  } catch (P) {
                    a = { error: P };
                  } finally {
                    try {
                      h && !h.done && (c = g.return) && c.call(g);
                    } finally {
                      if (a) throw a.error;
                    }
                  }
                }, m.value.frame);
            } catch (p) {
              d = { error: p };
            } finally {
              try {
                m && !m.done && (f = g.return) && f.call(g);
              } finally {
                if (d) throw d.error;
              }
            }
          },
          delegate: {
            requestAnimationFrame: function (a) {
              if (!e) throw Error("animate() was not called within run()");
              var b = ++d;
              e.set(b, a);
              return b;
            },
            cancelAnimationFrame: function (a) {
              if (!e) throw Error("animate() was not called within run()");
              e.delete(a);
            },
          },
        };
      };
      a.prototype.createDelegates = function () {
        var a = this,
          b = 0,
          e = new Map(),
          f = function () {
            var b = a.now(),
              c = Array.from(e.values()).filter(function (a) {
                return a.due <= b;
              }),
              d = c.filter(function (a) {
                return "immediate" === a.type;
              });
            if (0 < d.length)
              (d = d[0]), (c = d.handle), (d = d.handler), e.delete(c), d();
            else if (
              ((d = c.filter(function (a) {
                return "interval" === a.type;
              })),
              0 < d.length)
            ) {
              var c = d[0],
                g = c.duration,
                d = c.handler;
              c.due = b + g;
              c.subscription = a.schedule(f, g);
              d();
            } else if (
              ((c = c.filter(function (a) {
                return "timeout" === a.type;
              })),
              0 < c.length)
            )
              (d = c[0]), (c = d.handle), (d = d.handler), e.delete(c), d();
            else throw Error("Expected a due immediate or interval");
          };
        return {
          immediate: {
            setImmediate: function (c) {
              var d = ++b;
              e.set(d, {
                due: a.now(),
                duration: 0,
                handle: d,
                handler: c,
                subscription: a.schedule(f, 0),
                type: "immediate",
              });
              return d;
            },
            clearImmediate: function (a) {
              var b = e.get(a);
              b && (b.subscription.unsubscribe(), e.delete(a));
            },
          },
          interval: {
            setInterval: function (c, d) {
              void 0 === d && (d = 0);
              var g = ++b;
              e.set(g, {
                due: a.now() + d,
                duration: d,
                handle: g,
                handler: c,
                subscription: a.schedule(f, d),
                type: "interval",
              });
              return g;
            },
            clearInterval: function (a) {
              var b = e.get(a);
              b && (b.subscription.unsubscribe(), e.delete(a));
            },
          },
          timeout: {
            setTimeout: function (c, d) {
              void 0 === d && (d = 0);
              var g = ++b;
              e.set(g, {
                due: a.now() + d,
                duration: d,
                handle: g,
                handler: c,
                subscription: a.schedule(f, d),
                type: "timeout",
              });
              return g;
            },
            clearTimeout: function (a) {
              var b = e.get(a);
              b && (b.subscription.unsubscribe(), e.delete(a));
            },
          },
        };
      };
      a.prototype.run = function (b) {
        var c = a.frameTimeFactor,
          e = this.maxFrames;
        a.frameTimeFactor = 1;
        this.maxFrames = Infinity;
        this.runMode = !0;
        var f = this.createAnimator(),
          g = this.createDelegates();
        S.delegate = f.delegate;
        ia.delegate = this;
        ka.delegate = g.immediate;
        ja.delegate = g.interval;
        ba.delegate = g.timeout;
        Ba.delegate = this;
        f = {
          cold: this.createColdObservable.bind(this),
          hot: this.createHotObservable.bind(this),
          flush: this.flush.bind(this),
          time: this.createTime.bind(this),
          expectObservable: this.expectObservable.bind(this),
          expectSubscriptions: this.expectSubscriptions.bind(this),
          animate: f.animate,
        };
        try {
          var l = b(f);
          this.flush();
          return l;
        } finally {
          (a.frameTimeFactor = c),
            (this.maxFrames = e),
            (this.runMode = !1),
            (S.delegate = void 0),
            (ia.delegate = void 0),
            (ka.delegate = void 0),
            (ja.delegate = void 0),
            (ba.delegate = void 0),
            (Ba.delegate = void 0);
        }
      };
      a.frameTimeFactor = 10;
      return a;
    })(Wd),
    cf = Object.freeze({ TestScheduler: bf }),
    yb = (function () {
      return function (b, a, c, d) {
        void 0 === d && (d = "download_load");
        this.originalEvent = b;
        this.xhr = a;
        this.request = c;
        this.type = d;
        c = a.status;
        d = a.responseType;
        this.status = null !== c && void 0 !== c ? c : 0;
        this.responseType = null !== d && void 0 !== d ? d : "";
        this.responseHeaders = (c = a.getAllResponseHeaders())
          ? c.split("\n").reduce(function (a, b) {
              var c = b.indexOf(": ");
              a[b.slice(0, c)] = b.slice(c + 2);
              return a;
            }, {})
          : {};
        this.response = Nd(a);
        a = b.total;
        this.loaded = b.loaded;
        this.total = a;
      };
    })(),
    va = Q(function (b) {
      return function (a, b, d) {
        this.message = a;
        this.name = "AjaxError";
        this.xhr = b;
        this.request = d;
        this.status = b.status;
        this.responseType = b.responseType;
        var c;
        try {
          c = Nd(b);
        } catch (f) {
          c = b.responseText;
        }
        this.response = c;
      };
    }),
    Od = (function () {
      function b(a, b) {
        va.call(this, "ajax timeout", a, b);
        this.name = "AjaxTimeoutError";
        return this;
      }
      b.prototype = Object.create(va.prototype);
      return b;
    })(),
    Ne = L(function (b) {
      return b.response;
    }),
    Y = (function () {
      var b = function (a) {
        return Oe("string" === typeof a ? { url: a } : a);
      };
      b.get = He;
      b.post = Ie;
      b.delete = Je;
      b.put = Ke;
      b.patch = Le;
      b.getJSON = Me;
      return b;
    })(),
    Qe = "upload",
    Qd = "download",
    zb = "loadstart",
    Ab = "progress",
    Pd = "load",
    Re = Object.prototype.toString,
    df = Object.freeze({
      ajax: Y,
      AjaxError: va,
      AjaxTimeoutError: Od,
      AjaxResponse: yb,
    }),
    ef = {
      url: "",
      deserializer: function (b) {
        return JSON.parse(b.data);
      },
      serializer: function (b) {
        return JSON.stringify(b);
      },
    },
    $d = (function (b) {
      function a(a, d) {
        var c = b.call(this) || this;
        c._socket = null;
        if (a instanceof r) (c.destination = d), (c.source = a);
        else {
          d = c._config = Z({}, ef);
          c._output = new E();
          if ("string" === typeof a) d.url = a;
          else for (var f in a) a.hasOwnProperty(f) && (d[f] = a[f]);
          if (!d.WebSocketCtor && WebSocket) d.WebSocketCtor = WebSocket;
          else if (!d.WebSocketCtor)
            throw Error("no WebSocket constructor can be found");
          c.destination = new ga();
        }
        return c;
      }
      B(a, b);
      a.prototype.lift = function (b) {
        var c = new a(this._config, this.destination);
        c.operator = b;
        c.source = this;
        return c;
      };
      a.prototype._resetState = function () {
        this._socket = null;
        this.source || (this.destination = new ga());
        this._output = new E();
      };
      a.prototype.multiplex = function (a, b, e) {
        var c = this;
        return new r(function (d) {
          try {
            c.next(a());
          } catch (k) {
            d.error(k);
          }
          var f = c.subscribe(
            function (a) {
              try {
                e(a) && d.next(a);
              } catch (y) {
                d.error(y);
              }
            },
            function (a) {
              return d.error(a);
            },
            function () {
              return d.complete();
            }
          );
          return function () {
            try {
              c.next(b());
            } catch (k) {
              d.error(k);
            }
            f.unsubscribe();
          };
        });
      };
      a.prototype._connectSocket = function () {
        var a = this,
          b = this._config,
          e = b.WebSocketCtor,
          f = b.protocol,
          g = b.url,
          b = b.binaryType,
          l = this._output,
          k = null;
        try {
          (this._socket = k = f ? new e(g, f) : new e(g)),
            b && (this._socket.binaryType = b);
        } catch (p) {
          l.error(p);
          return;
        }
        var m = new C(function () {
          a._socket = null;
          k && 1 === k.readyState && k.close();
        });
        k.onopen = function (b) {
          if (a._socket) {
            var c = a._config.openObserver;
            c && c.next(b);
            b = a.destination;
            a.destination = la.create(
              function (b) {
                if (1 === k.readyState)
                  try {
                    var c = a._config.serializer;
                    k.send(c(b));
                  } catch (u) {
                    a.destination.error(u);
                  }
              },
              function (b) {
                var c = a._config.closingObserver;
                c && c.next(void 0);
                b && b.code
                  ? k.close(b.code, b.reason)
                  : l.error(
                      new TypeError(
                        "WebSocketSubject.error must be called with an object with an error code, and an optional reason: { code: number, reason: string }"
                      )
                    );
                a._resetState();
              },
              function () {
                var b = a._config.closingObserver;
                b && b.next(void 0);
                k.close();
                a._resetState();
              }
            );
            b && b instanceof ga && m.add(b.subscribe(a.destination));
          } else k.close(), a._resetState();
        };
        k.onerror = function (b) {
          a._resetState();
          l.error(b);
        };
        k.onclose = function (b) {
          a._resetState();
          var c = a._config.closeObserver;
          c && c.next(b);
          b.wasClean ? l.complete() : l.error(b);
        };
        k.onmessage = function (b) {
          try {
            var c = a._config.deserializer;
            l.next(c(b));
          } catch (w) {
            l.error(w);
          }
        };
      };
      a.prototype._subscribe = function (a) {
        var b = this,
          c = this.source;
        if (c) return c.subscribe(a);
        this._socket || this._connectSocket();
        this._output.subscribe(a);
        a.add(function () {
          var a = b._socket;
          0 === b._output.observers.length &&
            (!a || (1 !== a.readyState && 0 !== a.readyState) || a.close(),
            b._resetState());
        });
        return a;
      };
      a.prototype.unsubscribe = function () {
        var a = this._socket;
        !a || (1 !== a.readyState && 0 !== a.readyState) || a.close();
        this._resetState();
        b.prototype.unsubscribe.call(this);
      };
      return a;
    })(Cb),
    ff = Object.freeze({
      webSocket: function (b) {
        return new $d(b);
      },
      WebSocketSubject: $d,
    }),
    gf = Object.freeze({
      fromFetch: function (b, a) {
        void 0 === a && (a = {});
        var c = a.selector,
          d = Hb(a, ["selector"]);
        return new r(function (a) {
          var e = new AbortController(),
            g = e.signal,
            l = !0,
            k = d.signal;
          if (k)
            if (k.aborted) e.abort();
            else {
              var n = function () {
                g.aborted || e.abort();
              };
              k.addEventListener("abort", n);
              a.add(function () {
                return k.removeEventListener("abort", n);
              });
            }
          var p = Z(Z({}, d), { signal: g }),
            q = function (b) {
              l = !1;
              a.error(b);
            };
          fetch(b, p)
            .then(function (b) {
              c
                ? v(c(b)).subscribe(
                    new m(
                      a,
                      void 0,
                      function () {
                        l = !1;
                        a.complete();
                      },
                      q
                    )
                  )
                : ((l = !1), a.next(b), a.complete());
            })
            .catch(q);
          return function () {
            l && e.abort();
          };
        });
      },
    });
  g.operators = af;
  g.testing = cf;
  g.ajax = df;
  g.webSocket = ff;
  g.fetch = gf;
  g.Observable = r;
  g.ConnectableObservable = Na;
  g.observable = ca;
  g.animationFrames = function (b) {
    return b ? Nb(b) : Te;
  };
  g.Subject = E;
  g.BehaviorSubject = ad;
  g.ReplaySubject = ga;
  g.AsyncSubject = eb;
  g.asap = Td;
  g.asapScheduler = Td;
  g.async = sa;
  g.asyncScheduler = K;
  g.queue = Ud;
  g.queueScheduler = Ud;
  g.animationFrame = Vd;
  g.animationFrameScheduler = Vd;
  g.VirtualTimeScheduler = Wd;
  g.VirtualAction = Fb;
  g.Scheduler = Eb;
  g.Subscription = C;
  g.Subscriber = la;
  g.Notification = La;
  g.pipe = Ua;
  g.noop = D;
  g.identity = F;
  g.isObservable = function (b) {
    return !!b && (b instanceof r || (q(b.lift) && q(b.subscribe)));
  };
  g.lastValueFrom = function (b, a) {
    var c = "object" === typeof a;
    return new Promise(function (d, e) {
      var f = !1,
        g;
      b.subscribe({
        next: function (a) {
          g = a;
          f = !0;
        },
        error: e,
        complete: function () {
          f ? d(g) : c ? d(a.defaultValue) : e(new X());
        },
      });
    });
  };
  g.firstValueFrom = function (b, a) {
    var c = "object" === typeof a;
    return new Promise(function (d, e) {
      var f = new Oa({
        next: function (a) {
          d(a);
          f.unsubscribe();
        },
        error: e,
        complete: function () {
          c ? d(a.defaultValue) : e(new X());
        },
      });
      b.subscribe(f);
    });
  };
  g.ArgumentOutOfRangeError = pb;
  g.EmptyError = X;
  g.NotFoundError = md;
  g.ObjectUnsubscribedError = Sd;
  g.SequenceError = ld;
  g.TimeoutError = $b;
  g.UnsubscriptionError = Pa;
  g.bindCallback = function (b, a, c) {
    return Ea(!1, b, a, c);
  };
  g.bindNodeCallback = function (b, a, c) {
    return Ea(!0, b, a, c);
  };
  g.combineLatest = cc;
  g.concat = pa;
  g.connectable = function (b, a) {
    void 0 === a && (a = $e);
    var c = null,
      d = a.connector;
    a = a.resetOnDisconnect;
    var e = void 0 === a ? !0 : a,
      f = d();
    a = new r(function (a) {
      return f.subscribe(a);
    });
    a.connect = function () {
      if (!c || c.closed)
        (c = qa(function () {
          return b;
        }).subscribe(f)),
          e &&
            c.add(function () {
              return (f = d());
            });
      return c;
    };
    return a;
  };
  g.defer = qa;
  g.empty = function (b) {
    return b ? ee(b) : J;
  };
  g.forkJoin = function () {
    for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
    var a = ma(b),
      b = ac(b),
      c = b.args,
      d = b.keys,
      b = new r(function (a) {
        var b = c.length;
        if (b)
          for (
            var e = Array(b),
              g = b,
              k = b,
              n = function (b) {
                var f = !1;
                v(c[b]).subscribe(
                  new m(
                    a,
                    function (a) {
                      f || ((f = !0), k--);
                      e[b] = a;
                    },
                    function () {
                      (--g && f) ||
                        (k || a.next(d ? bc(d, e) : e), a.complete());
                    }
                  )
                );
              },
              p = 0;
            p < b;
            p++
          )
            n(p);
        else a.complete();
      });
    return a ? b.pipe(U(a)) : b;
  };
  g.from = da;
  g.fromEvent = gb;
  g.fromEventPattern = gc;
  g.generate = function (b, a, c, d, e) {
    function f() {
      var b;
      return Ra(this, function (d) {
        switch (d.label) {
          case 0:
            (b = k), (d.label = 1);
          case 1:
            return a && !a(b) ? [3, 4] : [4, l(b)];
          case 2:
            d.sent(), (d.label = 3);
          case 3:
            return (b = c(b)), [3, 1];
          case 4:
            return [2];
        }
      });
    }
    var g, l, k;
    1 === arguments.length
      ? ((k = b.initialState),
        (a = b.condition),
        (c = b.iterate),
        (g = b.resultSelector),
        (l = void 0 === g ? F : g),
        (e = b.scheduler))
      : ((k = b), !d || Ca(d) ? ((l = F), (e = d)) : (l = d));
    return qa(
      e
        ? function () {
            return Qb(f(), e);
          }
        : f
    );
  };
  g.iif = function (b, a, c) {
    return qa(function () {
      return b() ? a : c;
    });
  };
  g.interval = hc;
  g.merge = function () {
    for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
    var a = O(b),
      c = "number" === typeof b[b.length - 1] ? b.pop() : Infinity;
    return b.length ? (1 === b.length ? v(b[0]) : oa(c)(ea(b, a))) : J;
  };
  g.never = function () {
    return Xd;
  };
  g.of = $a;
  g.onErrorResumeNext = function () {
    for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
    return ic(V(b))(J);
  };
  g.pairs = function (b, a) {
    return da(Object.entries(b), a);
  };
  g.partition = function (b, a, c) {
    return [M(a, c)(v(b)), M(jc(a, c))(v(b))];
  };
  g.race = function () {
    for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
    b = V(b);
    return 1 === b.length ? v(b[0]) : new r(kc(b));
  };
  g.range = function (b, a, c) {
    null == a && ((a = b), (b = 0));
    if (0 >= a) return J;
    var d = a + b;
    return new r(
      c
        ? function (a) {
            var e = b;
            return c.schedule(function () {
              e < d ? (a.next(e++), this.schedule()) : a.complete();
            });
          }
        : function (a) {
            for (var c = b; c < d && !a.closed; ) a.next(c++);
            a.complete();
          }
    );
  };
  g.throwError = Zb;
  g.timer = ra;
  g.using = function (b, a) {
    return new r(function (c) {
      var d = b(),
        e = a(d);
      (e ? v(e) : J).subscribe(c);
      return function () {
        d && d.unsubscribe();
      };
    });
  };
  g.zip = hb;
  g.scheduled = Wb;
  g.EMPTY = J;
  g.NEVER = Xd;
  g.config = R;
  g.audit = ib;
  g.auditTime = lc;
  g.buffer = mc;
  g.bufferCount = nc;
  g.bufferTime = oc;
  g.bufferToggle = pc;
  g.bufferWhen = qc;
  g.catchError = jb;
  g.combineAll = Ga;
  g.combineLatestAll = Ga;
  g.combineLatestWith = tc;
  g.concatAll = Fa;
  g.concatMap = Ha;
  g.concatMapTo = uc;
  g.concatWith = wc;
  g.connect = Ia;
  g.count = xc;
  g.debounce = yc;
  g.debounceTime = zc;
  g.defaultIfEmpty = ta;
  g.delay = Ac;
  g.delayWhen = Ja;
  g.dematerialize = Bc;
  g.distinct = Cc;
  g.distinctUntilChanged = ob;
  g.distinctUntilKeyChanged = Dc;
  g.elementAt = Ec;
  g.endWith = Fc;
  g.every = Gc;
  g.exhaust = Ka;
  g.exhaustAll = Ka;
  g.exhaustMap = qb;
  g.expand = Hc;
  g.filter = M;
  g.finalize = Ic;
  g.find = Jc;
  g.findIndex = Lc;
  g.first = Mc;
  g.groupBy = Nc;
  g.ignoreElements = mb;
  g.isEmpty = Oc;
  g.last = Pc;
  g.map = L;
  g.mapTo = nb;
  g.materialize = Qc;
  g.max = Rc;
  g.mergeAll = oa;
  g.flatMap = H;
  g.mergeMap = H;
  g.mergeMapTo = Sc;
  g.mergeScan = Tc;
  g.mergeWith = Vc;
  g.min = Wc;
  g.multicast = Ma;
  g.observeOn = db;
  g.pairwise = Xc;
  g.pluck = Yc;
  g.publish = Zc;
  g.publishBehavior = $c;
  g.publishLast = bd;
  g.publishReplay = cd;
  g.raceWith = sb;
  g.reduce = fa;
  g.repeat = dd;
  g.repeatWhen = ed;
  g.retry = fd;
  g.retryWhen = gd;
  g.refCount = Va;
  g.sample = tb;
  g.sampleTime = hd;
  g.scan = ub;
  g.sequenceEqual = id;
  g.share = vb;
  g.shareReplay = jd;
  g.single = kd;
  g.skip = nd;
  g.skipLast = od;
  g.skipUntil = pd;
  g.skipWhile = qd;
  g.startWith = rd;
  g.subscribeOn = cb;
  g.switchAll = sd;
  g.switchMap = ha;
  g.switchMapTo = td;
  g.switchScan = ud;
  g.take = W;
  g.takeLast = rb;
  g.takeUntil = vd;
  g.takeWhile = wd;
  g.tap = xd;
  g.throttle = xb;
  g.throttleTime = zd;
  g.throwIfEmpty = ua;
  g.timeInterval = Ad;
  g.timeout = bb;
  g.timeoutWith = Bd;
  g.timestamp = Cd;
  g.toArray = kb;
  g.window = Dd;
  g.windowCount = Ed;
  g.windowTime = Fd;
  g.windowToggle = Gd;
  g.windowWhen = Hd;
  g.withLatestFrom = Id;
  g.zipAll = Jd;
  g.zipWith = Ld;
  Object.defineProperty(g, "__esModule", { value: !0 });
});
//# sourceMappingURL=rxjs.umd.min.js.map
