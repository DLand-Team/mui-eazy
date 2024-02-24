import { s as Ue, c as ht, g as He, a as Ae, B as Ke, j as at } from "./index-dNnwtKjp.mjs";
import ze from "react";
import Ge from "react-dom";
import { alpha as Nt } from "@mui/system";
var Ve = "";
Ue(Ve);
function We() {
  this.__data__ = [], this.size = 0;
}
var Ze = We;
function Ye(w, R) {
  return w === R || w !== w && R !== R;
}
var ke = Ye, Xe = ke;
function Qe(w, R) {
  for (var b = w.length; b--; )
    if (Xe(w[b][0], R))
      return b;
  return -1;
}
var Rt = Qe, Je = Rt, tn = Array.prototype, en = tn.splice;
function nn(w) {
  var R = this.__data__, b = Je(R, w);
  if (b < 0)
    return !1;
  var s = R.length - 1;
  return b == s ? R.pop() : en.call(R, b, 1), --this.size, !0;
}
var rn = nn, on = Rt;
function an(w) {
  var R = this.__data__, b = on(R, w);
  return b < 0 ? void 0 : R[b][1];
}
var ln = an, un = Rt;
function sn(w) {
  return un(this.__data__, w) > -1;
}
var fn = sn, cn = Rt;
function hn(w, R) {
  var b = this.__data__, s = cn(b, w);
  return s < 0 ? (++this.size, b.push([w, R])) : b[s][1] = R, this;
}
var dn = hn, vn = Ze, pn = rn, yn = ln, gn = fn, mn = dn;
function bt(w) {
  var R = -1, b = w == null ? 0 : w.length;
  for (this.clear(); ++R < b; ) {
    var s = w[R];
    this.set(s[0], s[1]);
  }
}
bt.prototype.clear = vn;
bt.prototype.delete = pn;
bt.prototype.get = yn;
bt.prototype.has = gn;
bt.prototype.set = mn;
var jt = bt, bn = jt;
function _n() {
  this.__data__ = new bn(), this.size = 0;
}
var On = _n;
function En(w) {
  var R = this.__data__, b = R.delete(w);
  return this.size = R.size, b;
}
var wn = En;
function qn(w) {
  return this.__data__.get(w);
}
var An = qn;
function kn(w) {
  return this.__data__.has(w);
}
var Tn = kn, Nn = typeof ht == "object" && ht && ht.Object === Object && ht, Te = Nn, xn = Te, Sn = typeof self == "object" && self && self.Object === Object && self, Pn = xn || Sn || Function("return this")(), yt = Pn, Ln = yt, Rn = Ln.Symbol, Wt = Rn, Xt = Wt, Ne = Object.prototype, jn = Ne.hasOwnProperty, In = Ne.toString, At = Xt ? Xt.toStringTag : void 0;
function Mn(w) {
  var R = jn.call(w, At), b = w[At];
  try {
    w[At] = void 0;
    var s = !0;
  } catch {
  }
  var d = In.call(w);
  return s && (R ? w[At] = b : delete w[At]), d;
}
var Dn = Mn, Bn = Object.prototype, Cn = Bn.toString;
function $n(w) {
  return Cn.call(w);
}
var Fn = $n, Qt = Wt, Un = Dn, Hn = Fn, Kn = "[object Null]", zn = "[object Undefined]", Jt = Qt ? Qt.toStringTag : void 0;
function Gn(w) {
  return w == null ? w === void 0 ? zn : Kn : Jt && Jt in Object(w) ? Un(w) : Hn(w);
}
var It = Gn;
function Vn(w) {
  var R = typeof w;
  return w != null && (R == "object" || R == "function");
}
var xe = Vn, Wn = It, Zn = xe, Yn = "[object AsyncFunction]", Xn = "[object Function]", Qn = "[object GeneratorFunction]", Jn = "[object Proxy]";
function tr(w) {
  if (!Zn(w))
    return !1;
  var R = Wn(w);
  return R == Xn || R == Qn || R == Yn || R == Jn;
}
var Se = tr, er = yt, nr = er["__core-js_shared__"], rr = nr, $t = rr, te = function() {
  var w = /[^.]+$/.exec($t && $t.keys && $t.keys.IE_PROTO || "");
  return w ? "Symbol(src)_1." + w : "";
}();
function ir(w) {
  return !!te && te in w;
}
var or = ir, ar = Function.prototype, lr = ar.toString;
function ur(w) {
  if (w != null) {
    try {
      return lr.call(w);
    } catch {
    }
    try {
      return w + "";
    } catch {
    }
  }
  return "";
}
var Pe = ur, sr = Se, fr = or, cr = xe, hr = Pe, dr = /[\\^$.*+?()[\]{}|]/g, vr = /^\[object .+?Constructor\]$/, pr = Function.prototype, yr = Object.prototype, gr = pr.toString, mr = yr.hasOwnProperty, br = RegExp(
  "^" + gr.call(mr).replace(dr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function _r(w) {
  if (!cr(w) || fr(w))
    return !1;
  var R = sr(w) ? br : vr;
  return R.test(hr(w));
}
var Or = _r;
function Er(w, R) {
  return w == null ? void 0 : w[R];
}
var wr = Er, qr = Or, Ar = wr;
function kr(w, R) {
  var b = Ar(w, R);
  return qr(b) ? b : void 0;
}
var _t = kr, Tr = _t, Nr = yt, xr = Tr(Nr, "Map"), Zt = xr, Sr = _t, Pr = Sr(Object, "create"), Mt = Pr, ee = Mt;
function Lr() {
  this.__data__ = ee ? ee(null) : {}, this.size = 0;
}
var Rr = Lr;
function jr(w) {
  var R = this.has(w) && delete this.__data__[w];
  return this.size -= R ? 1 : 0, R;
}
var Ir = jr, Mr = Mt, Dr = "__lodash_hash_undefined__", Br = Object.prototype, Cr = Br.hasOwnProperty;
function $r(w) {
  var R = this.__data__;
  if (Mr) {
    var b = R[w];
    return b === Dr ? void 0 : b;
  }
  return Cr.call(R, w) ? R[w] : void 0;
}
var Fr = $r, Ur = Mt, Hr = Object.prototype, Kr = Hr.hasOwnProperty;
function zr(w) {
  var R = this.__data__;
  return Ur ? R[w] !== void 0 : Kr.call(R, w);
}
var Gr = zr, Vr = Mt, Wr = "__lodash_hash_undefined__";
function Zr(w, R) {
  var b = this.__data__;
  return this.size += this.has(w) ? 0 : 1, b[w] = Vr && R === void 0 ? Wr : R, this;
}
var Yr = Zr, Xr = Rr, Qr = Ir, Jr = Fr, ti = Gr, ei = Yr;
function Ot(w) {
  var R = -1, b = w == null ? 0 : w.length;
  for (this.clear(); ++R < b; ) {
    var s = w[R];
    this.set(s[0], s[1]);
  }
}
Ot.prototype.clear = Xr;
Ot.prototype.delete = Qr;
Ot.prototype.get = Jr;
Ot.prototype.has = ti;
Ot.prototype.set = ei;
var ni = Ot, ne = ni, ri = jt, ii = Zt;
function oi() {
  this.size = 0, this.__data__ = {
    hash: new ne(),
    map: new (ii || ri)(),
    string: new ne()
  };
}
var ai = oi;
function li(w) {
  var R = typeof w;
  return R == "string" || R == "number" || R == "symbol" || R == "boolean" ? w !== "__proto__" : w === null;
}
var ui = li, si = ui;
function fi(w, R) {
  var b = w.__data__;
  return si(R) ? b[typeof R == "string" ? "string" : "hash"] : b.map;
}
var Dt = fi, ci = Dt;
function hi(w) {
  var R = ci(this, w).delete(w);
  return this.size -= R ? 1 : 0, R;
}
var di = hi, vi = Dt;
function pi(w) {
  return vi(this, w).get(w);
}
var yi = pi, gi = Dt;
function mi(w) {
  return gi(this, w).has(w);
}
var bi = mi, _i = Dt;
function Oi(w, R) {
  var b = _i(this, w), s = b.size;
  return b.set(w, R), this.size += b.size == s ? 0 : 1, this;
}
var Ei = Oi, wi = ai, qi = di, Ai = yi, ki = bi, Ti = Ei;
function Et(w) {
  var R = -1, b = w == null ? 0 : w.length;
  for (this.clear(); ++R < b; ) {
    var s = w[R];
    this.set(s[0], s[1]);
  }
}
Et.prototype.clear = wi;
Et.prototype.delete = qi;
Et.prototype.get = Ai;
Et.prototype.has = ki;
Et.prototype.set = Ti;
var Le = Et, Ni = jt, xi = Zt, Si = Le, Pi = 200;
function Li(w, R) {
  var b = this.__data__;
  if (b instanceof Ni) {
    var s = b.__data__;
    if (!xi || s.length < Pi - 1)
      return s.push([w, R]), this.size = ++b.size, this;
    b = this.__data__ = new Si(s);
  }
  return b.set(w, R), this.size = b.size, this;
}
var Ri = Li, ji = jt, Ii = On, Mi = wn, Di = An, Bi = Tn, Ci = Ri;
function wt(w) {
  var R = this.__data__ = new ji(w);
  this.size = R.size;
}
wt.prototype.clear = Ii;
wt.prototype.delete = Mi;
wt.prototype.get = Di;
wt.prototype.has = Bi;
wt.prototype.set = Ci;
var $i = wt, Fi = "__lodash_hash_undefined__";
function Ui(w) {
  return this.__data__.set(w, Fi), this;
}
var Hi = Ui;
function Ki(w) {
  return this.__data__.has(w);
}
var zi = Ki, Gi = Le, Vi = Hi, Wi = zi;
function xt(w) {
  var R = -1, b = w == null ? 0 : w.length;
  for (this.__data__ = new Gi(); ++R < b; )
    this.add(w[R]);
}
xt.prototype.add = xt.prototype.push = Vi;
xt.prototype.has = Wi;
var Zi = xt;
function Yi(w, R) {
  for (var b = -1, s = w == null ? 0 : w.length; ++b < s; )
    if (R(w[b], b, w))
      return !0;
  return !1;
}
var Xi = Yi;
function Qi(w, R) {
  return w.has(R);
}
var Ji = Qi, to = Zi, eo = Xi, no = Ji, ro = 1, io = 2;
function oo(w, R, b, s, d, k) {
  var q = b & ro, _ = w.length, v = R.length;
  if (_ != v && !(q && v > _))
    return !1;
  var y = k.get(w), h = k.get(R);
  if (y && h)
    return y == R && h == w;
  var o = -1, t = !0, e = b & io ? new to() : void 0;
  for (k.set(w, R), k.set(R, w); ++o < _; ) {
    var u = w[o], a = R[o];
    if (s)
      var l = q ? s(a, u, o, R, w, k) : s(u, a, o, w, R, k);
    if (l !== void 0) {
      if (l)
        continue;
      t = !1;
      break;
    }
    if (e) {
      if (!eo(R, function(r, i) {
        if (!no(e, i) && (u === r || d(u, r, b, s, k)))
          return e.push(i);
      })) {
        t = !1;
        break;
      }
    } else if (!(u === a || d(u, a, b, s, k))) {
      t = !1;
      break;
    }
  }
  return k.delete(w), k.delete(R), t;
}
var Re = oo, ao = yt, lo = ao.Uint8Array, uo = lo;
function so(w) {
  var R = -1, b = Array(w.size);
  return w.forEach(function(s, d) {
    b[++R] = [d, s];
  }), b;
}
var fo = so;
function co(w) {
  var R = -1, b = Array(w.size);
  return w.forEach(function(s) {
    b[++R] = s;
  }), b;
}
var ho = co, re = Wt, ie = uo, vo = ke, po = Re, yo = fo, go = ho, mo = 1, bo = 2, _o = "[object Boolean]", Oo = "[object Date]", Eo = "[object Error]", wo = "[object Map]", qo = "[object Number]", Ao = "[object RegExp]", ko = "[object Set]", To = "[object String]", No = "[object Symbol]", xo = "[object ArrayBuffer]", So = "[object DataView]", oe = re ? re.prototype : void 0, Ft = oe ? oe.valueOf : void 0;
function Po(w, R, b, s, d, k, q) {
  switch (b) {
    case So:
      if (w.byteLength != R.byteLength || w.byteOffset != R.byteOffset)
        return !1;
      w = w.buffer, R = R.buffer;
    case xo:
      return !(w.byteLength != R.byteLength || !k(new ie(w), new ie(R)));
    case _o:
    case Oo:
    case qo:
      return vo(+w, +R);
    case Eo:
      return w.name == R.name && w.message == R.message;
    case Ao:
    case To:
      return w == R + "";
    case wo:
      var _ = yo;
    case ko:
      var v = s & mo;
      if (_ || (_ = go), w.size != R.size && !v)
        return !1;
      var y = q.get(w);
      if (y)
        return y == R;
      s |= bo, q.set(w, R);
      var h = po(_(w), _(R), s, d, k, q);
      return q.delete(w), h;
    case No:
      if (Ft)
        return Ft.call(w) == Ft.call(R);
  }
  return !1;
}
var Lo = Po;
function Ro(w, R) {
  for (var b = -1, s = R.length, d = w.length; ++b < s; )
    w[d + b] = R[b];
  return w;
}
var jo = Ro, Io = Array.isArray, Yt = Io, Mo = jo, Do = Yt;
function Bo(w, R, b) {
  var s = R(w);
  return Do(w) ? s : Mo(s, b(w));
}
var Co = Bo;
function $o(w, R) {
  for (var b = -1, s = w == null ? 0 : w.length, d = 0, k = []; ++b < s; ) {
    var q = w[b];
    R(q, b, w) && (k[d++] = q);
  }
  return k;
}
var Fo = $o;
function Uo() {
  return [];
}
var Ho = Uo, Ko = Fo, zo = Ho, Go = Object.prototype, Vo = Go.propertyIsEnumerable, ae = Object.getOwnPropertySymbols, Wo = ae ? function(w) {
  return w == null ? [] : (w = Object(w), Ko(ae(w), function(R) {
    return Vo.call(w, R);
  }));
} : zo, Zo = Wo;
function Yo(w, R) {
  for (var b = -1, s = Array(w); ++b < w; )
    s[b] = R(b);
  return s;
}
var Xo = Yo;
function Qo(w) {
  return w != null && typeof w == "object";
}
var Bt = Qo, Jo = It, ta = Bt, ea = "[object Arguments]";
function na(w) {
  return ta(w) && Jo(w) == ea;
}
var ra = na, le = ra, ia = Bt, je = Object.prototype, oa = je.hasOwnProperty, aa = je.propertyIsEnumerable, la = le(/* @__PURE__ */ function() {
  return arguments;
}()) ? le : function(w) {
  return ia(w) && oa.call(w, "callee") && !aa.call(w, "callee");
}, ua = la, St = { exports: {} };
function sa() {
  return !1;
}
var fa = sa;
St.exports;
(function(w, R) {
  var b = yt, s = fa, d = R && !R.nodeType && R, k = d && !0 && w && !w.nodeType && w, q = k && k.exports === d, _ = q ? b.Buffer : void 0, v = _ ? _.isBuffer : void 0, y = v || s;
  w.exports = y;
})(St, St.exports);
var Ie = St.exports, ca = 9007199254740991, ha = /^(?:0|[1-9]\d*)$/;
function da(w, R) {
  var b = typeof w;
  return R = R ?? ca, !!R && (b == "number" || b != "symbol" && ha.test(w)) && w > -1 && w % 1 == 0 && w < R;
}
var va = da, pa = 9007199254740991;
function ya(w) {
  return typeof w == "number" && w > -1 && w % 1 == 0 && w <= pa;
}
var Me = ya, ga = It, ma = Me, ba = Bt, _a = "[object Arguments]", Oa = "[object Array]", Ea = "[object Boolean]", wa = "[object Date]", qa = "[object Error]", Aa = "[object Function]", ka = "[object Map]", Ta = "[object Number]", Na = "[object Object]", xa = "[object RegExp]", Sa = "[object Set]", Pa = "[object String]", La = "[object WeakMap]", Ra = "[object ArrayBuffer]", ja = "[object DataView]", Ia = "[object Float32Array]", Ma = "[object Float64Array]", Da = "[object Int8Array]", Ba = "[object Int16Array]", Ca = "[object Int32Array]", $a = "[object Uint8Array]", Fa = "[object Uint8ClampedArray]", Ua = "[object Uint16Array]", Ha = "[object Uint32Array]", lt = {};
lt[Ia] = lt[Ma] = lt[Da] = lt[Ba] = lt[Ca] = lt[$a] = lt[Fa] = lt[Ua] = lt[Ha] = !0;
lt[_a] = lt[Oa] = lt[Ra] = lt[Ea] = lt[ja] = lt[wa] = lt[qa] = lt[Aa] = lt[ka] = lt[Ta] = lt[Na] = lt[xa] = lt[Sa] = lt[Pa] = lt[La] = !1;
function Ka(w) {
  return ba(w) && ma(w.length) && !!lt[ga(w)];
}
var za = Ka;
function Ga(w) {
  return function(R) {
    return w(R);
  };
}
var Va = Ga, Pt = { exports: {} };
Pt.exports;
(function(w, R) {
  var b = Te, s = R && !R.nodeType && R, d = s && !0 && w && !w.nodeType && w, k = d && d.exports === s, q = k && b.process, _ = function() {
    try {
      var v = d && d.require && d.require("util").types;
      return v || q && q.binding && q.binding("util");
    } catch {
    }
  }();
  w.exports = _;
})(Pt, Pt.exports);
var Wa = Pt.exports, Za = za, Ya = Va, ue = Wa, se = ue && ue.isTypedArray, Xa = se ? Ya(se) : Za, De = Xa, Qa = Xo, Ja = ua, tl = Yt, el = Ie, nl = va, rl = De, il = Object.prototype, ol = il.hasOwnProperty;
function al(w, R) {
  var b = tl(w), s = !b && Ja(w), d = !b && !s && el(w), k = !b && !s && !d && rl(w), q = b || s || d || k, _ = q ? Qa(w.length, String) : [], v = _.length;
  for (var y in w)
    (R || ol.call(w, y)) && !(q && // Safari 9 has enumerable `arguments.length` in strict mode.
    (y == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    d && (y == "offset" || y == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    k && (y == "buffer" || y == "byteLength" || y == "byteOffset") || // Skip index properties.
    nl(y, v))) && _.push(y);
  return _;
}
var ll = al, ul = Object.prototype;
function sl(w) {
  var R = w && w.constructor, b = typeof R == "function" && R.prototype || ul;
  return w === b;
}
var fl = sl;
function cl(w, R) {
  return function(b) {
    return w(R(b));
  };
}
var hl = cl, dl = hl, vl = dl(Object.keys, Object), pl = vl, yl = fl, gl = pl, ml = Object.prototype, bl = ml.hasOwnProperty;
function _l(w) {
  if (!yl(w))
    return gl(w);
  var R = [];
  for (var b in Object(w))
    bl.call(w, b) && b != "constructor" && R.push(b);
  return R;
}
var Ol = _l, El = Se, wl = Me;
function ql(w) {
  return w != null && wl(w.length) && !El(w);
}
var Al = ql, kl = ll, Tl = Ol, Nl = Al;
function xl(w) {
  return Nl(w) ? kl(w) : Tl(w);
}
var Sl = xl, Pl = Co, Ll = Zo, Rl = Sl;
function jl(w) {
  return Pl(w, Rl, Ll);
}
var Il = jl, fe = Il, Ml = 1, Dl = Object.prototype, Bl = Dl.hasOwnProperty;
function Cl(w, R, b, s, d, k) {
  var q = b & Ml, _ = fe(w), v = _.length, y = fe(R), h = y.length;
  if (v != h && !q)
    return !1;
  for (var o = v; o--; ) {
    var t = _[o];
    if (!(q ? t in R : Bl.call(R, t)))
      return !1;
  }
  var e = k.get(w), u = k.get(R);
  if (e && u)
    return e == R && u == w;
  var a = !0;
  k.set(w, R), k.set(R, w);
  for (var l = q; ++o < v; ) {
    t = _[o];
    var r = w[t], i = R[t];
    if (s)
      var f = q ? s(i, r, t, R, w, k) : s(r, i, t, w, R, k);
    if (!(f === void 0 ? r === i || d(r, i, b, s, k) : f)) {
      a = !1;
      break;
    }
    l || (l = t == "constructor");
  }
  if (a && !l) {
    var n = w.constructor, c = R.constructor;
    n != c && "constructor" in w && "constructor" in R && !(typeof n == "function" && n instanceof n && typeof c == "function" && c instanceof c) && (a = !1);
  }
  return k.delete(w), k.delete(R), a;
}
var $l = Cl, Fl = _t, Ul = yt, Hl = Fl(Ul, "DataView"), Kl = Hl, zl = _t, Gl = yt, Vl = zl(Gl, "Promise"), Wl = Vl, Zl = _t, Yl = yt, Xl = Zl(Yl, "Set"), Ql = Xl, Jl = _t, tu = yt, eu = Jl(tu, "WeakMap"), nu = eu, Ht = Kl, Kt = Zt, zt = Wl, Gt = Ql, Vt = nu, Be = It, qt = Pe, ce = "[object Map]", ru = "[object Object]", he = "[object Promise]", de = "[object Set]", ve = "[object WeakMap]", pe = "[object DataView]", iu = qt(Ht), ou = qt(Kt), au = qt(zt), lu = qt(Gt), uu = qt(Vt), mt = Be;
(Ht && mt(new Ht(new ArrayBuffer(1))) != pe || Kt && mt(new Kt()) != ce || zt && mt(zt.resolve()) != he || Gt && mt(new Gt()) != de || Vt && mt(new Vt()) != ve) && (mt = function(w) {
  var R = Be(w), b = R == ru ? w.constructor : void 0, s = b ? qt(b) : "";
  if (s)
    switch (s) {
      case iu:
        return pe;
      case ou:
        return ce;
      case au:
        return he;
      case lu:
        return de;
      case uu:
        return ve;
    }
  return R;
});
var su = mt, Ut = $i, fu = Re, cu = Lo, hu = $l, ye = su, ge = Yt, me = Ie, du = De, vu = 1, be = "[object Arguments]", _e = "[object Array]", Tt = "[object Object]", pu = Object.prototype, Oe = pu.hasOwnProperty;
function yu(w, R, b, s, d, k) {
  var q = ge(w), _ = ge(R), v = q ? _e : ye(w), y = _ ? _e : ye(R);
  v = v == be ? Tt : v, y = y == be ? Tt : y;
  var h = v == Tt, o = y == Tt, t = v == y;
  if (t && me(w)) {
    if (!me(R))
      return !1;
    q = !0, h = !1;
  }
  if (t && !h)
    return k || (k = new Ut()), q || du(w) ? fu(w, R, b, s, d, k) : cu(w, R, v, b, s, d, k);
  if (!(b & vu)) {
    var e = h && Oe.call(w, "__wrapped__"), u = o && Oe.call(R, "__wrapped__");
    if (e || u) {
      var a = e ? w.value() : w, l = u ? R.value() : R;
      return k || (k = new Ut()), d(a, l, b, s, k);
    }
  }
  return t ? (k || (k = new Ut()), hu(w, R, b, s, d, k)) : !1;
}
var gu = yu, mu = gu, Ee = Bt;
function Ce(w, R, b, s, d) {
  return w === R ? !0 : w == null || R == null || !Ee(w) && !Ee(R) ? w !== w && R !== R : mu(w, R, b, s, Ce, d);
}
var bu = Ce, _u = bu;
function Ou(w, R) {
  return _u(w, R);
}
var Eu = Ou, $e = { exports: {} };
/*!
 * Quill Editor v1.3.7
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */
(function(w, R) {
  (function(s, d) {
    w.exports = d();
  })(typeof self < "u" ? self : ht, function() {
    return (
      /******/
      function(b) {
        var s = {};
        function d(k) {
          if (s[k])
            return s[k].exports;
          var q = s[k] = {
            /******/
            i: k,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return b[k].call(q.exports, q, q.exports, d), q.l = !0, q.exports;
        }
        return d.m = b, d.c = s, d.d = function(k, q, _) {
          d.o(k, q) || Object.defineProperty(k, q, {
            /******/
            configurable: !1,
            /******/
            enumerable: !0,
            /******/
            get: _
            /******/
          });
        }, d.n = function(k) {
          var q = k && k.__esModule ? (
            /******/
            function() {
              return k.default;
            }
          ) : (
            /******/
            function() {
              return k;
            }
          );
          return d.d(q, "a", q), q;
        }, d.o = function(k, q) {
          return Object.prototype.hasOwnProperty.call(k, q);
        }, d.p = "", d(d.s = 109);
      }([
        /* 0 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", { value: !0 });
          var k = d(17), q = d(18), _ = d(19), v = d(45), y = d(46), h = d(47), o = d(48), t = d(49), e = d(12), u = d(32), a = d(33), l = d(31), r = d(1), i = {
            Scope: r.Scope,
            create: r.create,
            find: r.find,
            query: r.query,
            register: r.register,
            Container: k.default,
            Format: q.default,
            Leaf: _.default,
            Embed: o.default,
            Scroll: v.default,
            Block: h.default,
            Inline: y.default,
            Text: t.default,
            Attributor: {
              Attribute: e.default,
              Class: u.default,
              Style: a.default,
              Store: l.default
            }
          };
          s.default = i;
        },
        /* 1 */
        /***/
        function(b, s, d) {
          var k = this && this.__extends || function() {
            var l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
              r.__proto__ = i;
            } || function(r, i) {
              for (var f in i)
                i.hasOwnProperty(f) && (r[f] = i[f]);
            };
            return function(r, i) {
              l(r, i);
              function f() {
                this.constructor = r;
              }
              r.prototype = i === null ? Object.create(i) : (f.prototype = i.prototype, new f());
            };
          }();
          Object.defineProperty(s, "__esModule", { value: !0 });
          var q = (
            /** @class */
            function(l) {
              k(r, l);
              function r(i) {
                var f = this;
                return i = "[Parchment] " + i, f = l.call(this, i) || this, f.message = i, f.name = f.constructor.name, f;
              }
              return r;
            }(Error)
          );
          s.ParchmentError = q;
          var _ = {}, v = {}, y = {}, h = {};
          s.DATA_KEY = "__blot";
          var o;
          (function(l) {
            l[l.TYPE = 3] = "TYPE", l[l.LEVEL = 12] = "LEVEL", l[l.ATTRIBUTE = 13] = "ATTRIBUTE", l[l.BLOT = 14] = "BLOT", l[l.INLINE = 7] = "INLINE", l[l.BLOCK = 11] = "BLOCK", l[l.BLOCK_BLOT = 10] = "BLOCK_BLOT", l[l.INLINE_BLOT = 6] = "INLINE_BLOT", l[l.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", l[l.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", l[l.ANY = 15] = "ANY";
          })(o = s.Scope || (s.Scope = {}));
          function t(l, r) {
            var i = u(l);
            if (i == null)
              throw new q("Unable to create " + l + " blot");
            var f = i, n = (
              // @ts-ignore
              l instanceof Node || l.nodeType === Node.TEXT_NODE ? l : f.create(r)
            );
            return new f(n, r);
          }
          s.create = t;
          function e(l, r) {
            return r === void 0 && (r = !1), l == null ? null : l[s.DATA_KEY] != null ? l[s.DATA_KEY].blot : r ? e(l.parentNode, r) : null;
          }
          s.find = e;
          function u(l, r) {
            r === void 0 && (r = o.ANY);
            var i;
            if (typeof l == "string")
              i = h[l] || _[l];
            else if (l instanceof Text || l.nodeType === Node.TEXT_NODE)
              i = h.text;
            else if (typeof l == "number")
              l & o.LEVEL & o.BLOCK ? i = h.block : l & o.LEVEL & o.INLINE && (i = h.inline);
            else if (l instanceof HTMLElement) {
              var f = (l.getAttribute("class") || "").split(/\s+/);
              for (var n in f)
                if (i = v[f[n]], i)
                  break;
              i = i || y[l.tagName];
            }
            return i == null ? null : r & o.LEVEL & i.scope && r & o.TYPE & i.scope ? i : null;
          }
          s.query = u;
          function a() {
            for (var l = [], r = 0; r < arguments.length; r++)
              l[r] = arguments[r];
            if (l.length > 1)
              return l.map(function(n) {
                return a(n);
              });
            var i = l[0];
            if (typeof i.blotName != "string" && typeof i.attrName != "string")
              throw new q("Invalid definition");
            if (i.blotName === "abstract")
              throw new q("Cannot register abstract class");
            if (h[i.blotName || i.attrName] = i, typeof i.keyName == "string")
              _[i.keyName] = i;
            else if (i.className != null && (v[i.className] = i), i.tagName != null) {
              Array.isArray(i.tagName) ? i.tagName = i.tagName.map(function(n) {
                return n.toUpperCase();
              }) : i.tagName = i.tagName.toUpperCase();
              var f = Array.isArray(i.tagName) ? i.tagName : [i.tagName];
              f.forEach(function(n) {
                (y[n] == null || i.className == null) && (y[n] = i);
              });
            }
            return i;
          }
          s.register = a;
        },
        /* 2 */
        /***/
        function(b, s, d) {
          var k = d(51), q = d(11), _ = d(3), v = d(20), y = "\0", h = function(o) {
            Array.isArray(o) ? this.ops = o : o != null && Array.isArray(o.ops) ? this.ops = o.ops : this.ops = [];
          };
          h.prototype.insert = function(o, t) {
            var e = {};
            return o.length === 0 ? this : (e.insert = o, t != null && typeof t == "object" && Object.keys(t).length > 0 && (e.attributes = t), this.push(e));
          }, h.prototype.delete = function(o) {
            return o <= 0 ? this : this.push({ delete: o });
          }, h.prototype.retain = function(o, t) {
            if (o <= 0)
              return this;
            var e = { retain: o };
            return t != null && typeof t == "object" && Object.keys(t).length > 0 && (e.attributes = t), this.push(e);
          }, h.prototype.push = function(o) {
            var t = this.ops.length, e = this.ops[t - 1];
            if (o = _(!0, {}, o), typeof e == "object") {
              if (typeof o.delete == "number" && typeof e.delete == "number")
                return this.ops[t - 1] = { delete: e.delete + o.delete }, this;
              if (typeof e.delete == "number" && o.insert != null && (t -= 1, e = this.ops[t - 1], typeof e != "object"))
                return this.ops.unshift(o), this;
              if (q(o.attributes, e.attributes)) {
                if (typeof o.insert == "string" && typeof e.insert == "string")
                  return this.ops[t - 1] = { insert: e.insert + o.insert }, typeof o.attributes == "object" && (this.ops[t - 1].attributes = o.attributes), this;
                if (typeof o.retain == "number" && typeof e.retain == "number")
                  return this.ops[t - 1] = { retain: e.retain + o.retain }, typeof o.attributes == "object" && (this.ops[t - 1].attributes = o.attributes), this;
              }
            }
            return t === this.ops.length ? this.ops.push(o) : this.ops.splice(t, 0, o), this;
          }, h.prototype.chop = function() {
            var o = this.ops[this.ops.length - 1];
            return o && o.retain && !o.attributes && this.ops.pop(), this;
          }, h.prototype.filter = function(o) {
            return this.ops.filter(o);
          }, h.prototype.forEach = function(o) {
            this.ops.forEach(o);
          }, h.prototype.map = function(o) {
            return this.ops.map(o);
          }, h.prototype.partition = function(o) {
            var t = [], e = [];
            return this.forEach(function(u) {
              var a = o(u) ? t : e;
              a.push(u);
            }), [t, e];
          }, h.prototype.reduce = function(o, t) {
            return this.ops.reduce(o, t);
          }, h.prototype.changeLength = function() {
            return this.reduce(function(o, t) {
              return t.insert ? o + v.length(t) : t.delete ? o - t.delete : o;
            }, 0);
          }, h.prototype.length = function() {
            return this.reduce(function(o, t) {
              return o + v.length(t);
            }, 0);
          }, h.prototype.slice = function(o, t) {
            o = o || 0, typeof t != "number" && (t = 1 / 0);
            for (var e = [], u = v.iterator(this.ops), a = 0; a < t && u.hasNext(); ) {
              var l;
              a < o ? l = u.next(o - a) : (l = u.next(t - a), e.push(l)), a += v.length(l);
            }
            return new h(e);
          }, h.prototype.compose = function(o) {
            var t = v.iterator(this.ops), e = v.iterator(o.ops), u = [], a = e.peek();
            if (a != null && typeof a.retain == "number" && a.attributes == null) {
              for (var l = a.retain; t.peekType() === "insert" && t.peekLength() <= l; )
                l -= t.peekLength(), u.push(t.next());
              a.retain - l > 0 && e.next(a.retain - l);
            }
            for (var r = new h(u); t.hasNext() || e.hasNext(); )
              if (e.peekType() === "insert")
                r.push(e.next());
              else if (t.peekType() === "delete")
                r.push(t.next());
              else {
                var i = Math.min(t.peekLength(), e.peekLength()), f = t.next(i), n = e.next(i);
                if (typeof n.retain == "number") {
                  var c = {};
                  typeof f.retain == "number" ? c.retain = i : c.insert = f.insert;
                  var N = v.attributes.compose(f.attributes, n.attributes, typeof f.retain == "number");
                  if (N && (c.attributes = N), r.push(c), !e.hasNext() && q(r.ops[r.ops.length - 1], c)) {
                    var O = new h(t.rest());
                    return r.concat(O).chop();
                  }
                } else
                  typeof n.delete == "number" && typeof f.retain == "number" && r.push(n);
              }
            return r.chop();
          }, h.prototype.concat = function(o) {
            var t = new h(this.ops.slice());
            return o.ops.length > 0 && (t.push(o.ops[0]), t.ops = t.ops.concat(o.ops.slice(1))), t;
          }, h.prototype.diff = function(o, t) {
            if (this.ops === o.ops)
              return new h();
            var e = [this, o].map(function(i) {
              return i.map(function(f) {
                if (f.insert != null)
                  return typeof f.insert == "string" ? f.insert : y;
                var n = i === o ? "on" : "with";
                throw new Error("diff() called " + n + " non-document");
              }).join("");
            }), u = new h(), a = k(e[0], e[1], t), l = v.iterator(this.ops), r = v.iterator(o.ops);
            return a.forEach(function(i) {
              for (var f = i[1].length; f > 0; ) {
                var n = 0;
                switch (i[0]) {
                  case k.INSERT:
                    n = Math.min(r.peekLength(), f), u.push(r.next(n));
                    break;
                  case k.DELETE:
                    n = Math.min(f, l.peekLength()), l.next(n), u.delete(n);
                    break;
                  case k.EQUAL:
                    n = Math.min(l.peekLength(), r.peekLength(), f);
                    var c = l.next(n), N = r.next(n);
                    q(c.insert, N.insert) ? u.retain(n, v.attributes.diff(c.attributes, N.attributes)) : u.push(N).delete(n);
                    break;
                }
                f -= n;
              }
            }), u.chop();
          }, h.prototype.eachLine = function(o, t) {
            t = t || `
`;
            for (var e = v.iterator(this.ops), u = new h(), a = 0; e.hasNext(); ) {
              if (e.peekType() !== "insert")
                return;
              var l = e.peek(), r = v.length(l) - e.peekLength(), i = typeof l.insert == "string" ? l.insert.indexOf(t, r) - r : -1;
              if (i < 0)
                u.push(e.next());
              else if (i > 0)
                u.push(e.next(i));
              else {
                if (o(u, e.next(1).attributes || {}, a) === !1)
                  return;
                a += 1, u = new h();
              }
            }
            u.length() > 0 && o(u, {}, a);
          }, h.prototype.transform = function(o, t) {
            if (t = !!t, typeof o == "number")
              return this.transformPosition(o, t);
            for (var e = v.iterator(this.ops), u = v.iterator(o.ops), a = new h(); e.hasNext() || u.hasNext(); )
              if (e.peekType() === "insert" && (t || u.peekType() !== "insert"))
                a.retain(v.length(e.next()));
              else if (u.peekType() === "insert")
                a.push(u.next());
              else {
                var l = Math.min(e.peekLength(), u.peekLength()), r = e.next(l), i = u.next(l);
                if (r.delete)
                  continue;
                i.delete ? a.push(i) : a.retain(l, v.attributes.transform(r.attributes, i.attributes, t));
              }
            return a.chop();
          }, h.prototype.transformPosition = function(o, t) {
            t = !!t;
            for (var e = v.iterator(this.ops), u = 0; e.hasNext() && u <= o; ) {
              var a = e.peekLength(), l = e.peekType();
              if (e.next(), l === "delete") {
                o -= Math.min(a, o - u);
                continue;
              } else
                l === "insert" && (u < o || !t) && (o += a);
              u += a;
            }
            return o;
          }, b.exports = h;
        },
        /* 3 */
        /***/
        function(b, s) {
          var d = Object.prototype.hasOwnProperty, k = Object.prototype.toString, q = Object.defineProperty, _ = Object.getOwnPropertyDescriptor, v = function(e) {
            return typeof Array.isArray == "function" ? Array.isArray(e) : k.call(e) === "[object Array]";
          }, y = function(e) {
            if (!e || k.call(e) !== "[object Object]")
              return !1;
            var u = d.call(e, "constructor"), a = e.constructor && e.constructor.prototype && d.call(e.constructor.prototype, "isPrototypeOf");
            if (e.constructor && !u && !a)
              return !1;
            var l;
            for (l in e)
              ;
            return typeof l > "u" || d.call(e, l);
          }, h = function(e, u) {
            q && u.name === "__proto__" ? q(e, u.name, {
              enumerable: !0,
              configurable: !0,
              value: u.newValue,
              writable: !0
            }) : e[u.name] = u.newValue;
          }, o = function(e, u) {
            if (u === "__proto__")
              if (d.call(e, u)) {
                if (_)
                  return _(e, u).value;
              } else
                return;
            return e[u];
          };
          b.exports = function t() {
            var e, u, a, l, r, i, f = arguments[0], n = 1, c = arguments.length, N = !1;
            for (typeof f == "boolean" && (N = f, f = arguments[1] || {}, n = 2), (f == null || typeof f != "object" && typeof f != "function") && (f = {}); n < c; ++n)
              if (e = arguments[n], e != null)
                for (u in e)
                  a = o(f, u), l = o(e, u), f !== l && (N && l && (y(l) || (r = v(l))) ? (r ? (r = !1, i = a && v(a) ? a : []) : i = a && y(a) ? a : {}, h(f, { name: u, newValue: t(N, i, l) })) : typeof l < "u" && h(f, { name: u, newValue: l }));
            return f;
          };
        },
        /* 4 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.default = s.BlockEmbed = s.bubbleFormats = void 0;
          var k = /* @__PURE__ */ function() {
            function p(g, T) {
              for (var S = 0; S < T.length; S++) {
                var I = T[S];
                I.enumerable = I.enumerable || !1, I.configurable = !0, "value" in I && (I.writable = !0), Object.defineProperty(g, I.key, I);
              }
            }
            return function(g, T, S) {
              return T && p(g.prototype, T), S && p(g, S), g;
            };
          }(), q = function p(g, T, S) {
            g === null && (g = Function.prototype);
            var I = Object.getOwnPropertyDescriptor(g, T);
            if (I === void 0) {
              var $ = Object.getPrototypeOf(g);
              return $ === null ? void 0 : p($, T, S);
            } else {
              if ("value" in I)
                return I.value;
              var F = I.get;
              return F === void 0 ? void 0 : F.call(S);
            }
          }, _ = d(3), v = f(_), y = d(2), h = f(y), o = d(0), t = f(o), e = d(16), u = f(e), a = d(6), l = f(a), r = d(7), i = f(r);
          function f(p) {
            return p && p.__esModule ? p : { default: p };
          }
          function n(p, g) {
            if (!(p instanceof g))
              throw new TypeError("Cannot call a class as a function");
          }
          function c(p, g) {
            if (!p)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return g && (typeof g == "object" || typeof g == "function") ? g : p;
          }
          function N(p, g) {
            if (typeof g != "function" && g !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof g);
            p.prototype = Object.create(g && g.prototype, { constructor: { value: p, enumerable: !1, writable: !0, configurable: !0 } }), g && (Object.setPrototypeOf ? Object.setPrototypeOf(p, g) : p.__proto__ = g);
          }
          var O = 1, E = function(p) {
            N(g, p);
            function g() {
              return n(this, g), c(this, (g.__proto__ || Object.getPrototypeOf(g)).apply(this, arguments));
            }
            return k(g, [{
              key: "attach",
              value: function() {
                q(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "attach", this).call(this), this.attributes = new t.default.Attributor.Store(this.domNode);
              }
            }, {
              key: "delta",
              value: function() {
                return new h.default().insert(this.value(), (0, v.default)(this.formats(), this.attributes.values()));
              }
            }, {
              key: "format",
              value: function(S, I) {
                var $ = t.default.query(S, t.default.Scope.BLOCK_ATTRIBUTE);
                $ != null && this.attributes.attribute($, I);
              }
            }, {
              key: "formatAt",
              value: function(S, I, $, F) {
                this.format($, F);
              }
            }, {
              key: "insertAt",
              value: function(S, I, $) {
                if (typeof I == "string" && I.endsWith(`
`)) {
                  var F = t.default.create(x.blotName);
                  this.parent.insertBefore(F, S === 0 ? this : this.next), F.insertAt(0, I.slice(0, -1));
                } else
                  q(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "insertAt", this).call(this, S, I, $);
              }
            }]), g;
          }(t.default.Embed);
          E.scope = t.default.Scope.BLOCK_BLOT;
          var x = function(p) {
            N(g, p);
            function g(T) {
              n(this, g);
              var S = c(this, (g.__proto__ || Object.getPrototypeOf(g)).call(this, T));
              return S.cache = {}, S;
            }
            return k(g, [{
              key: "delta",
              value: function() {
                return this.cache.delta == null && (this.cache.delta = this.descendants(t.default.Leaf).reduce(function(S, I) {
                  return I.length() === 0 ? S : S.insert(I.value(), m(I));
                }, new h.default()).insert(`
`, m(this))), this.cache.delta;
              }
            }, {
              key: "deleteAt",
              value: function(S, I) {
                q(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "deleteAt", this).call(this, S, I), this.cache = {};
              }
            }, {
              key: "formatAt",
              value: function(S, I, $, F) {
                I <= 0 || (t.default.query($, t.default.Scope.BLOCK) ? S + I === this.length() && this.format($, F) : q(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "formatAt", this).call(this, S, Math.min(I, this.length() - S - 1), $, F), this.cache = {});
              }
            }, {
              key: "insertAt",
              value: function(S, I, $) {
                if ($ != null)
                  return q(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "insertAt", this).call(this, S, I, $);
                if (I.length !== 0) {
                  var F = I.split(`
`), W = F.shift();
                  W.length > 0 && (S < this.length() - 1 || this.children.tail == null ? q(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "insertAt", this).call(this, Math.min(S, this.length() - 1), W) : this.children.tail.insertAt(this.children.tail.length(), W), this.cache = {});
                  var B = this;
                  F.reduce(function(M, A) {
                    return B = B.split(M, !0), B.insertAt(0, A), A.length;
                  }, S + W.length);
                }
              }
            }, {
              key: "insertBefore",
              value: function(S, I) {
                var $ = this.children.head;
                q(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "insertBefore", this).call(this, S, I), $ instanceof u.default && $.remove(), this.cache = {};
              }
            }, {
              key: "length",
              value: function() {
                return this.cache.length == null && (this.cache.length = q(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "length", this).call(this) + O), this.cache.length;
              }
            }, {
              key: "moveChildren",
              value: function(S, I) {
                q(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "moveChildren", this).call(this, S, I), this.cache = {};
              }
            }, {
              key: "optimize",
              value: function(S) {
                q(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "optimize", this).call(this, S), this.cache = {};
              }
            }, {
              key: "path",
              value: function(S) {
                return q(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "path", this).call(this, S, !0);
              }
            }, {
              key: "removeChild",
              value: function(S) {
                q(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "removeChild", this).call(this, S), this.cache = {};
              }
            }, {
              key: "split",
              value: function(S) {
                var I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                if (I && (S === 0 || S >= this.length() - O)) {
                  var $ = this.clone();
                  return S === 0 ? (this.parent.insertBefore($, this), this) : (this.parent.insertBefore($, this.next), $);
                } else {
                  var F = q(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "split", this).call(this, S, I);
                  return this.cache = {}, F;
                }
              }
            }]), g;
          }(t.default.Block);
          x.blotName = "block", x.tagName = "P", x.defaultChild = "break", x.allowedChildren = [l.default, t.default.Embed, i.default];
          function m(p) {
            var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            return p == null || (typeof p.formats == "function" && (g = (0, v.default)(g, p.formats())), p.parent == null || p.parent.blotName == "scroll" || p.parent.statics.scope !== p.statics.scope) ? g : m(p.parent, g);
          }
          s.bubbleFormats = m, s.BlockEmbed = E, s.default = x;
        },
        /* 5 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.default = s.overload = s.expandConfig = void 0;
          var k = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(B) {
            return typeof B;
          } : function(B) {
            return B && typeof Symbol == "function" && B.constructor === Symbol && B !== Symbol.prototype ? "symbol" : typeof B;
          }, q = /* @__PURE__ */ function() {
            function B(M, A) {
              var L = [], j = !0, U = !1, C = void 0;
              try {
                for (var P = M[Symbol.iterator](), D; !(j = (D = P.next()).done) && (L.push(D.value), !(A && L.length === A)); j = !0)
                  ;
              } catch (H) {
                U = !0, C = H;
              } finally {
                try {
                  !j && P.return && P.return();
                } finally {
                  if (U)
                    throw C;
                }
              }
              return L;
            }
            return function(M, A) {
              if (Array.isArray(M))
                return M;
              if (Symbol.iterator in Object(M))
                return B(M, A);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), _ = /* @__PURE__ */ function() {
            function B(M, A) {
              for (var L = 0; L < A.length; L++) {
                var j = A[L];
                j.enumerable = j.enumerable || !1, j.configurable = !0, "value" in j && (j.writable = !0), Object.defineProperty(M, j.key, j);
              }
            }
            return function(M, A, L) {
              return A && B(M.prototype, A), L && B(M, L), M;
            };
          }();
          d(50);
          var v = d(2), y = m(v), h = d(14), o = m(h), t = d(8), e = m(t), u = d(9), a = m(u), l = d(0), r = m(l), i = d(15), f = m(i), n = d(3), c = m(n), N = d(10), O = m(N), E = d(34), x = m(E);
          function m(B) {
            return B && B.__esModule ? B : { default: B };
          }
          function p(B, M, A) {
            return M in B ? Object.defineProperty(B, M, { value: A, enumerable: !0, configurable: !0, writable: !0 }) : B[M] = A, B;
          }
          function g(B, M) {
            if (!(B instanceof M))
              throw new TypeError("Cannot call a class as a function");
          }
          var T = (0, O.default)("quill"), S = function() {
            _(B, null, [{
              key: "debug",
              value: function(A) {
                A === !0 && (A = "log"), O.default.level(A);
              }
            }, {
              key: "find",
              value: function(A) {
                return A.__quill || r.default.find(A);
              }
            }, {
              key: "import",
              value: function(A) {
                return this.imports[A] == null && T.error("Cannot import " + A + ". Are you sure it was registered?"), this.imports[A];
              }
            }, {
              key: "register",
              value: function(A, L) {
                var j = this, U = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
                if (typeof A != "string") {
                  var C = A.attrName || A.blotName;
                  typeof C == "string" ? this.register("formats/" + C, A, L) : Object.keys(A).forEach(function(P) {
                    j.register(P, A[P], L);
                  });
                } else
                  this.imports[A] != null && !U && T.warn("Overwriting " + A + " with", L), this.imports[A] = L, (A.startsWith("blots/") || A.startsWith("formats/")) && L.blotName !== "abstract" ? r.default.register(L) : A.startsWith("modules") && typeof L.register == "function" && L.register();
              }
            }]);
            function B(M) {
              var A = this, L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              if (g(this, B), this.options = I(M, L), this.container = this.options.container, this.container == null)
                return T.error("Invalid Quill container", M);
              this.options.debug && B.debug(this.options.debug);
              var j = this.container.innerHTML.trim();
              this.container.classList.add("ql-container"), this.container.innerHTML = "", this.container.__quill = this, this.root = this.addContainer("ql-editor"), this.root.classList.add("ql-blank"), this.root.setAttribute("data-gramm", !1), this.scrollingContainer = this.options.scrollingContainer || this.root, this.emitter = new e.default(), this.scroll = r.default.create(this.root, {
                emitter: this.emitter,
                whitelist: this.options.formats
              }), this.editor = new o.default(this.scroll), this.selection = new f.default(this.scroll, this.emitter), this.theme = new this.options.theme(this, this.options), this.keyboard = this.theme.addModule("keyboard"), this.clipboard = this.theme.addModule("clipboard"), this.history = this.theme.addModule("history"), this.theme.init(), this.emitter.on(e.default.events.EDITOR_CHANGE, function(C) {
                C === e.default.events.TEXT_CHANGE && A.root.classList.toggle("ql-blank", A.editor.isBlank());
              }), this.emitter.on(e.default.events.SCROLL_UPDATE, function(C, P) {
                var D = A.selection.lastRange, H = D && D.length === 0 ? D.index : void 0;
                $.call(A, function() {
                  return A.editor.update(null, P, H);
                }, C);
              });
              var U = this.clipboard.convert(`<div class='ql-editor' style="white-space: normal;">` + j + "<p><br></p></div>");
              this.setContents(U), this.history.clear(), this.options.placeholder && this.root.setAttribute("data-placeholder", this.options.placeholder), this.options.readOnly && this.disable();
            }
            return _(B, [{
              key: "addContainer",
              value: function(A) {
                var L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                if (typeof A == "string") {
                  var j = A;
                  A = document.createElement("div"), A.classList.add(j);
                }
                return this.container.insertBefore(A, L), A;
              }
            }, {
              key: "blur",
              value: function() {
                this.selection.setRange(null);
              }
            }, {
              key: "deleteText",
              value: function(A, L, j) {
                var U = this, C = F(A, L, j), P = q(C, 4);
                return A = P[0], L = P[1], j = P[3], $.call(this, function() {
                  return U.editor.deleteText(A, L);
                }, j, A, -1 * L);
              }
            }, {
              key: "disable",
              value: function() {
                this.enable(!1);
              }
            }, {
              key: "enable",
              value: function() {
                var A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
                this.scroll.enable(A), this.container.classList.toggle("ql-disabled", !A);
              }
            }, {
              key: "focus",
              value: function() {
                var A = this.scrollingContainer.scrollTop;
                this.selection.focus(), this.scrollingContainer.scrollTop = A, this.scrollIntoView();
              }
            }, {
              key: "format",
              value: function(A, L) {
                var j = this, U = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.default.sources.API;
                return $.call(this, function() {
                  var C = j.getSelection(!0), P = new y.default();
                  if (C == null)
                    return P;
                  if (r.default.query(A, r.default.Scope.BLOCK))
                    P = j.editor.formatLine(C.index, C.length, p({}, A, L));
                  else {
                    if (C.length === 0)
                      return j.selection.format(A, L), P;
                    P = j.editor.formatText(C.index, C.length, p({}, A, L));
                  }
                  return j.setSelection(C, e.default.sources.SILENT), P;
                }, U);
              }
            }, {
              key: "formatLine",
              value: function(A, L, j, U, C) {
                var P = this, D = void 0, H = F(A, L, j, U, C), K = q(H, 4);
                return A = K[0], L = K[1], D = K[2], C = K[3], $.call(this, function() {
                  return P.editor.formatLine(A, L, D);
                }, C, A, 0);
              }
            }, {
              key: "formatText",
              value: function(A, L, j, U, C) {
                var P = this, D = void 0, H = F(A, L, j, U, C), K = q(H, 4);
                return A = K[0], L = K[1], D = K[2], C = K[3], $.call(this, function() {
                  return P.editor.formatText(A, L, D);
                }, C, A, 0);
              }
            }, {
              key: "getBounds",
              value: function(A) {
                var L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, j = void 0;
                typeof A == "number" ? j = this.selection.getBounds(A, L) : j = this.selection.getBounds(A.index, A.length);
                var U = this.container.getBoundingClientRect();
                return {
                  bottom: j.bottom - U.top,
                  height: j.height,
                  left: j.left - U.left,
                  right: j.right - U.left,
                  top: j.top - U.top,
                  width: j.width
                };
              }
            }, {
              key: "getContents",
              value: function() {
                var A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.getLength() - A, j = F(A, L), U = q(j, 2);
                return A = U[0], L = U[1], this.editor.getContents(A, L);
              }
            }, {
              key: "getFormat",
              value: function() {
                var A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.getSelection(!0), L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                return typeof A == "number" ? this.editor.getFormat(A, L) : this.editor.getFormat(A.index, A.length);
              }
            }, {
              key: "getIndex",
              value: function(A) {
                return A.offset(this.scroll);
              }
            }, {
              key: "getLength",
              value: function() {
                return this.scroll.length();
              }
            }, {
              key: "getLeaf",
              value: function(A) {
                return this.scroll.leaf(A);
              }
            }, {
              key: "getLine",
              value: function(A) {
                return this.scroll.line(A);
              }
            }, {
              key: "getLines",
              value: function() {
                var A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE;
                return typeof A != "number" ? this.scroll.lines(A.index, A.length) : this.scroll.lines(A, L);
              }
            }, {
              key: "getModule",
              value: function(A) {
                return this.theme.modules[A];
              }
            }, {
              key: "getSelection",
              value: function() {
                var A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
                return A && this.focus(), this.update(), this.selection.getRange()[0];
              }
            }, {
              key: "getText",
              value: function() {
                var A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.getLength() - A, j = F(A, L), U = q(j, 2);
                return A = U[0], L = U[1], this.editor.getText(A, L);
              }
            }, {
              key: "hasFocus",
              value: function() {
                return this.selection.hasFocus();
              }
            }, {
              key: "insertEmbed",
              value: function(A, L, j) {
                var U = this, C = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : B.sources.API;
                return $.call(this, function() {
                  return U.editor.insertEmbed(A, L, j);
                }, C, A);
              }
            }, {
              key: "insertText",
              value: function(A, L, j, U, C) {
                var P = this, D = void 0, H = F(A, 0, j, U, C), K = q(H, 4);
                return A = K[0], D = K[2], C = K[3], $.call(this, function() {
                  return P.editor.insertText(A, L, D);
                }, C, A, L.length);
              }
            }, {
              key: "isEnabled",
              value: function() {
                return !this.container.classList.contains("ql-disabled");
              }
            }, {
              key: "off",
              value: function() {
                return this.emitter.off.apply(this.emitter, arguments);
              }
            }, {
              key: "on",
              value: function() {
                return this.emitter.on.apply(this.emitter, arguments);
              }
            }, {
              key: "once",
              value: function() {
                return this.emitter.once.apply(this.emitter, arguments);
              }
            }, {
              key: "pasteHTML",
              value: function(A, L, j) {
                this.clipboard.dangerouslyPasteHTML(A, L, j);
              }
            }, {
              key: "removeFormat",
              value: function(A, L, j) {
                var U = this, C = F(A, L, j), P = q(C, 4);
                return A = P[0], L = P[1], j = P[3], $.call(this, function() {
                  return U.editor.removeFormat(A, L);
                }, j, A);
              }
            }, {
              key: "scrollIntoView",
              value: function() {
                this.selection.scrollIntoView(this.scrollingContainer);
              }
            }, {
              key: "setContents",
              value: function(A) {
                var L = this, j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.default.sources.API;
                return $.call(this, function() {
                  A = new y.default(A);
                  var U = L.getLength(), C = L.editor.deleteText(0, U), P = L.editor.applyDelta(A), D = P.ops[P.ops.length - 1];
                  D != null && typeof D.insert == "string" && D.insert[D.insert.length - 1] === `
` && (L.editor.deleteText(L.getLength() - 1, 1), P.delete(1));
                  var H = C.compose(P);
                  return H;
                }, j);
              }
            }, {
              key: "setSelection",
              value: function(A, L, j) {
                if (A == null)
                  this.selection.setRange(null, L || B.sources.API);
                else {
                  var U = F(A, L, j), C = q(U, 4);
                  A = C[0], L = C[1], j = C[3], this.selection.setRange(new i.Range(A, L), j), j !== e.default.sources.SILENT && this.selection.scrollIntoView(this.scrollingContainer);
                }
              }
            }, {
              key: "setText",
              value: function(A) {
                var L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.default.sources.API, j = new y.default().insert(A);
                return this.setContents(j, L);
              }
            }, {
              key: "update",
              value: function() {
                var A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.default.sources.USER, L = this.scroll.update(A);
                return this.selection.update(A), L;
              }
            }, {
              key: "updateContents",
              value: function(A) {
                var L = this, j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.default.sources.API;
                return $.call(this, function() {
                  return A = new y.default(A), L.editor.applyDelta(A, j);
                }, j, !0);
              }
            }]), B;
          }();
          S.DEFAULTS = {
            bounds: null,
            formats: null,
            modules: {},
            placeholder: "",
            readOnly: !1,
            scrollingContainer: null,
            strict: !0,
            theme: "default"
          }, S.events = e.default.events, S.sources = e.default.sources, S.version = "1.3.7", S.imports = {
            delta: y.default,
            parchment: r.default,
            "core/module": a.default,
            "core/theme": x.default
          };
          function I(B, M) {
            if (M = (0, c.default)(!0, {
              container: B,
              modules: {
                clipboard: !0,
                keyboard: !0,
                history: !0
              }
            }, M), !M.theme || M.theme === S.DEFAULTS.theme)
              M.theme = x.default;
            else if (M.theme = S.import("themes/" + M.theme), M.theme == null)
              throw new Error("Invalid theme " + M.theme + ". Did you register it?");
            var A = (0, c.default)(!0, {}, M.theme.DEFAULTS);
            [A, M].forEach(function(U) {
              U.modules = U.modules || {}, Object.keys(U.modules).forEach(function(C) {
                U.modules[C] === !0 && (U.modules[C] = {});
              });
            });
            var L = Object.keys(A.modules).concat(Object.keys(M.modules)), j = L.reduce(function(U, C) {
              var P = S.import("modules/" + C);
              return P == null ? T.error("Cannot load " + C + " module. Are you sure you registered it?") : U[C] = P.DEFAULTS || {}, U;
            }, {});
            return M.modules != null && M.modules.toolbar && M.modules.toolbar.constructor !== Object && (M.modules.toolbar = {
              container: M.modules.toolbar
            }), M = (0, c.default)(!0, {}, S.DEFAULTS, { modules: j }, A, M), ["bounds", "container", "scrollingContainer"].forEach(function(U) {
              typeof M[U] == "string" && (M[U] = document.querySelector(M[U]));
            }), M.modules = Object.keys(M.modules).reduce(function(U, C) {
              return M.modules[C] && (U[C] = M.modules[C]), U;
            }, {}), M;
          }
          function $(B, M, A, L) {
            if (this.options.strict && !this.isEnabled() && M === e.default.sources.USER)
              return new y.default();
            var j = A == null ? null : this.getSelection(), U = this.editor.delta, C = B();
            if (j != null && (A === !0 && (A = j.index), L == null ? j = W(j, C, M) : L !== 0 && (j = W(j, A, L, M)), this.setSelection(j, e.default.sources.SILENT)), C.length() > 0) {
              var P, D = [e.default.events.TEXT_CHANGE, C, U, M];
              if ((P = this.emitter).emit.apply(P, [e.default.events.EDITOR_CHANGE].concat(D)), M !== e.default.sources.SILENT) {
                var H;
                (H = this.emitter).emit.apply(H, D);
              }
            }
            return C;
          }
          function F(B, M, A, L, j) {
            var U = {};
            return typeof B.index == "number" && typeof B.length == "number" ? typeof M != "number" ? (j = L, L = A, A = M, M = B.length, B = B.index) : (M = B.length, B = B.index) : typeof M != "number" && (j = L, L = A, A = M, M = 0), (typeof A > "u" ? "undefined" : k(A)) === "object" ? (U = A, j = L) : typeof A == "string" && (L != null ? U[A] = L : j = A), j = j || e.default.sources.API, [B, M, U, j];
          }
          function W(B, M, A, L) {
            if (B == null)
              return null;
            var j = void 0, U = void 0;
            if (M instanceof y.default) {
              var C = [B.index, B.index + B.length].map(function(K) {
                return M.transformPosition(K, L !== e.default.sources.USER);
              }), P = q(C, 2);
              j = P[0], U = P[1];
            } else {
              var D = [B.index, B.index + B.length].map(function(K) {
                return K < M || K === M && L === e.default.sources.USER ? K : A >= 0 ? K + A : Math.max(M, K + A);
              }), H = q(D, 2);
              j = H[0], U = H[1];
            }
            return new i.Range(j, U - j);
          }
          s.expandConfig = I, s.overload = F, s.default = S;
        },
        /* 6 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var k = /* @__PURE__ */ function() {
            function l(r, i) {
              for (var f = 0; f < i.length; f++) {
                var n = i[f];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n);
              }
            }
            return function(r, i, f) {
              return i && l(r.prototype, i), f && l(r, f), r;
            };
          }(), q = function l(r, i, f) {
            r === null && (r = Function.prototype);
            var n = Object.getOwnPropertyDescriptor(r, i);
            if (n === void 0) {
              var c = Object.getPrototypeOf(r);
              return c === null ? void 0 : l(c, i, f);
            } else {
              if ("value" in n)
                return n.value;
              var N = n.get;
              return N === void 0 ? void 0 : N.call(f);
            }
          }, _ = d(7), v = o(_), y = d(0), h = o(y);
          function o(l) {
            return l && l.__esModule ? l : { default: l };
          }
          function t(l, r) {
            if (!(l instanceof r))
              throw new TypeError("Cannot call a class as a function");
          }
          function e(l, r) {
            if (!l)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return r && (typeof r == "object" || typeof r == "function") ? r : l;
          }
          function u(l, r) {
            if (typeof r != "function" && r !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof r);
            l.prototype = Object.create(r && r.prototype, { constructor: { value: l, enumerable: !1, writable: !0, configurable: !0 } }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(l, r) : l.__proto__ = r);
          }
          var a = function(l) {
            u(r, l);
            function r() {
              return t(this, r), e(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
            }
            return k(r, [{
              key: "formatAt",
              value: function(f, n, c, N) {
                if (r.compare(this.statics.blotName, c) < 0 && h.default.query(c, h.default.Scope.BLOT)) {
                  var O = this.isolate(f, n);
                  N && O.wrap(c, N);
                } else
                  q(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "formatAt", this).call(this, f, n, c, N);
              }
            }, {
              key: "optimize",
              value: function(f) {
                if (q(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "optimize", this).call(this, f), this.parent instanceof r && r.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
                  var n = this.parent.isolate(this.offset(), this.length());
                  this.moveChildren(n), n.wrap(this);
                }
              }
            }], [{
              key: "compare",
              value: function(f, n) {
                var c = r.order.indexOf(f), N = r.order.indexOf(n);
                return c >= 0 || N >= 0 ? c - N : f === n ? 0 : f < n ? -1 : 1;
              }
            }]), r;
          }(h.default.Inline);
          a.allowedChildren = [a, h.default.Embed, v.default], a.order = [
            "cursor",
            "inline",
            // Must be lower
            "underline",
            "strike",
            "italic",
            "bold",
            "script",
            "link",
            "code"
            // Must be higher
          ], s.default = a;
        },
        /* 7 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var k = d(0), q = _(k);
          function _(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function v(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          }
          function y(t, e) {
            if (!t)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e && (typeof e == "object" || typeof e == "function") ? e : t;
          }
          function h(t, e) {
            if (typeof e != "function" && e !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          }
          var o = function(t) {
            h(e, t);
            function e() {
              return v(this, e), y(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
            }
            return e;
          }(q.default.Text);
          s.default = o;
        },
        /* 8 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var k = /* @__PURE__ */ function() {
            function i(f, n) {
              for (var c = 0; c < n.length; c++) {
                var N = n[c];
                N.enumerable = N.enumerable || !1, N.configurable = !0, "value" in N && (N.writable = !0), Object.defineProperty(f, N.key, N);
              }
            }
            return function(f, n, c) {
              return n && i(f.prototype, n), c && i(f, c), f;
            };
          }(), q = function i(f, n, c) {
            f === null && (f = Function.prototype);
            var N = Object.getOwnPropertyDescriptor(f, n);
            if (N === void 0) {
              var O = Object.getPrototypeOf(f);
              return O === null ? void 0 : i(O, n, c);
            } else {
              if ("value" in N)
                return N.value;
              var E = N.get;
              return E === void 0 ? void 0 : E.call(c);
            }
          }, _ = d(54), v = o(_), y = d(10), h = o(y);
          function o(i) {
            return i && i.__esModule ? i : { default: i };
          }
          function t(i, f) {
            if (!(i instanceof f))
              throw new TypeError("Cannot call a class as a function");
          }
          function e(i, f) {
            if (!i)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return f && (typeof f == "object" || typeof f == "function") ? f : i;
          }
          function u(i, f) {
            if (typeof f != "function" && f !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof f);
            i.prototype = Object.create(f && f.prototype, { constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 } }), f && (Object.setPrototypeOf ? Object.setPrototypeOf(i, f) : i.__proto__ = f);
          }
          var a = (0, h.default)("quill:events"), l = ["selectionchange", "mousedown", "mouseup", "click"];
          l.forEach(function(i) {
            document.addEventListener(i, function() {
              for (var f = arguments.length, n = Array(f), c = 0; c < f; c++)
                n[c] = arguments[c];
              [].slice.call(document.querySelectorAll(".ql-container")).forEach(function(N) {
                if (N.__quill && N.__quill.emitter) {
                  var O;
                  (O = N.__quill.emitter).handleDOM.apply(O, n);
                }
              });
            });
          });
          var r = function(i) {
            u(f, i);
            function f() {
              t(this, f);
              var n = e(this, (f.__proto__ || Object.getPrototypeOf(f)).call(this));
              return n.listeners = {}, n.on("error", a.error), n;
            }
            return k(f, [{
              key: "emit",
              value: function() {
                a.log.apply(a, arguments), q(f.prototype.__proto__ || Object.getPrototypeOf(f.prototype), "emit", this).apply(this, arguments);
              }
            }, {
              key: "handleDOM",
              value: function(c) {
                for (var N = arguments.length, O = Array(N > 1 ? N - 1 : 0), E = 1; E < N; E++)
                  O[E - 1] = arguments[E];
                (this.listeners[c.type] || []).forEach(function(x) {
                  var m = x.node, p = x.handler;
                  (c.target === m || m.contains(c.target)) && p.apply(void 0, [c].concat(O));
                });
              }
            }, {
              key: "listenDOM",
              value: function(c, N, O) {
                this.listeners[c] || (this.listeners[c] = []), this.listeners[c].push({ node: N, handler: O });
              }
            }]), f;
          }(v.default);
          r.events = {
            EDITOR_CHANGE: "editor-change",
            SCROLL_BEFORE_UPDATE: "scroll-before-update",
            SCROLL_OPTIMIZE: "scroll-optimize",
            SCROLL_UPDATE: "scroll-update",
            SELECTION_CHANGE: "selection-change",
            TEXT_CHANGE: "text-change"
          }, r.sources = {
            API: "api",
            SILENT: "silent",
            USER: "user"
          }, s.default = r;
        },
        /* 9 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          function k(_, v) {
            if (!(_ instanceof v))
              throw new TypeError("Cannot call a class as a function");
          }
          var q = function _(v) {
            var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            k(this, _), this.quill = v, this.options = y;
          };
          q.DEFAULTS = {}, s.default = q;
        },
        /* 10 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var k = ["error", "warn", "log", "info"], q = "warn";
          function _(y) {
            if (k.indexOf(y) <= k.indexOf(q)) {
              for (var h, o = arguments.length, t = Array(o > 1 ? o - 1 : 0), e = 1; e < o; e++)
                t[e - 1] = arguments[e];
              (h = console)[y].apply(h, t);
            }
          }
          function v(y) {
            return k.reduce(function(h, o) {
              return h[o] = _.bind(console, o, y), h;
            }, {});
          }
          _.level = v.level = function(y) {
            q = y;
          }, s.default = v;
        },
        /* 11 */
        /***/
        function(b, s, d) {
          var k = Array.prototype.slice, q = d(52), _ = d(53), v = b.exports = function(t, e, u) {
            return u || (u = {}), t === e ? !0 : t instanceof Date && e instanceof Date ? t.getTime() === e.getTime() : !t || !e || typeof t != "object" && typeof e != "object" ? u.strict ? t === e : t == e : o(t, e, u);
          };
          function y(t) {
            return t == null;
          }
          function h(t) {
            return !(!t || typeof t != "object" || typeof t.length != "number" || typeof t.copy != "function" || typeof t.slice != "function" || t.length > 0 && typeof t[0] != "number");
          }
          function o(t, e, u) {
            var a, l;
            if (y(t) || y(e) || t.prototype !== e.prototype)
              return !1;
            if (_(t))
              return _(e) ? (t = k.call(t), e = k.call(e), v(t, e, u)) : !1;
            if (h(t)) {
              if (!h(e) || t.length !== e.length)
                return !1;
              for (a = 0; a < t.length; a++)
                if (t[a] !== e[a])
                  return !1;
              return !0;
            }
            try {
              var r = q(t), i = q(e);
            } catch {
              return !1;
            }
            if (r.length != i.length)
              return !1;
            for (r.sort(), i.sort(), a = r.length - 1; a >= 0; a--)
              if (r[a] != i[a])
                return !1;
            for (a = r.length - 1; a >= 0; a--)
              if (l = r[a], !v(t[l], e[l], u))
                return !1;
            return typeof t == typeof e;
          }
        },
        /* 12 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", { value: !0 });
          var k = d(1), q = (
            /** @class */
            function() {
              function _(v, y, h) {
                h === void 0 && (h = {}), this.attrName = v, this.keyName = y;
                var o = k.Scope.TYPE & k.Scope.ATTRIBUTE;
                h.scope != null ? this.scope = h.scope & k.Scope.LEVEL | o : this.scope = k.Scope.ATTRIBUTE, h.whitelist != null && (this.whitelist = h.whitelist);
              }
              return _.keys = function(v) {
                return [].map.call(v.attributes, function(y) {
                  return y.name;
                });
              }, _.prototype.add = function(v, y) {
                return this.canAdd(v, y) ? (v.setAttribute(this.keyName, y), !0) : !1;
              }, _.prototype.canAdd = function(v, y) {
                var h = k.query(v, k.Scope.BLOT & (this.scope | k.Scope.TYPE));
                return h == null ? !1 : this.whitelist == null ? !0 : typeof y == "string" ? this.whitelist.indexOf(y.replace(/["']/g, "")) > -1 : this.whitelist.indexOf(y) > -1;
              }, _.prototype.remove = function(v) {
                v.removeAttribute(this.keyName);
              }, _.prototype.value = function(v) {
                var y = v.getAttribute(this.keyName);
                return this.canAdd(v, y) && y ? y : "";
              }, _;
            }()
          );
          s.default = q;
        },
        /* 13 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.default = s.Code = void 0;
          var k = /* @__PURE__ */ function() {
            function E(x, m) {
              var p = [], g = !0, T = !1, S = void 0;
              try {
                for (var I = x[Symbol.iterator](), $; !(g = ($ = I.next()).done) && (p.push($.value), !(m && p.length === m)); g = !0)
                  ;
              } catch (F) {
                T = !0, S = F;
              } finally {
                try {
                  !g && I.return && I.return();
                } finally {
                  if (T)
                    throw S;
                }
              }
              return p;
            }
            return function(x, m) {
              if (Array.isArray(x))
                return x;
              if (Symbol.iterator in Object(x))
                return E(x, m);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), q = /* @__PURE__ */ function() {
            function E(x, m) {
              for (var p = 0; p < m.length; p++) {
                var g = m[p];
                g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(x, g.key, g);
              }
            }
            return function(x, m, p) {
              return m && E(x.prototype, m), p && E(x, p), x;
            };
          }(), _ = function E(x, m, p) {
            x === null && (x = Function.prototype);
            var g = Object.getOwnPropertyDescriptor(x, m);
            if (g === void 0) {
              var T = Object.getPrototypeOf(x);
              return T === null ? void 0 : E(T, m, p);
            } else {
              if ("value" in g)
                return g.value;
              var S = g.get;
              return S === void 0 ? void 0 : S.call(p);
            }
          }, v = d(2), y = i(v), h = d(0), o = i(h), t = d(4), e = i(t), u = d(6), a = i(u), l = d(7), r = i(l);
          function i(E) {
            return E && E.__esModule ? E : { default: E };
          }
          function f(E, x) {
            if (!(E instanceof x))
              throw new TypeError("Cannot call a class as a function");
          }
          function n(E, x) {
            if (!E)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return x && (typeof x == "object" || typeof x == "function") ? x : E;
          }
          function c(E, x) {
            if (typeof x != "function" && x !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof x);
            E.prototype = Object.create(x && x.prototype, { constructor: { value: E, enumerable: !1, writable: !0, configurable: !0 } }), x && (Object.setPrototypeOf ? Object.setPrototypeOf(E, x) : E.__proto__ = x);
          }
          var N = function(E) {
            c(x, E);
            function x() {
              return f(this, x), n(this, (x.__proto__ || Object.getPrototypeOf(x)).apply(this, arguments));
            }
            return x;
          }(a.default);
          N.blotName = "code", N.tagName = "CODE";
          var O = function(E) {
            c(x, E);
            function x() {
              return f(this, x), n(this, (x.__proto__ || Object.getPrototypeOf(x)).apply(this, arguments));
            }
            return q(x, [{
              key: "delta",
              value: function() {
                var p = this, g = this.domNode.textContent;
                return g.endsWith(`
`) && (g = g.slice(0, -1)), g.split(`
`).reduce(function(T, S) {
                  return T.insert(S).insert(`
`, p.formats());
                }, new y.default());
              }
            }, {
              key: "format",
              value: function(p, g) {
                if (!(p === this.statics.blotName && g)) {
                  var T = this.descendant(r.default, this.length() - 1), S = k(T, 1), I = S[0];
                  I != null && I.deleteAt(I.length() - 1, 1), _(x.prototype.__proto__ || Object.getPrototypeOf(x.prototype), "format", this).call(this, p, g);
                }
              }
            }, {
              key: "formatAt",
              value: function(p, g, T, S) {
                if (g !== 0 && !(o.default.query(T, o.default.Scope.BLOCK) == null || T === this.statics.blotName && S === this.statics.formats(this.domNode))) {
                  var I = this.newlineIndex(p);
                  if (!(I < 0 || I >= p + g)) {
                    var $ = this.newlineIndex(p, !0) + 1, F = I - $ + 1, W = this.isolate($, F), B = W.next;
                    W.format(T, S), B instanceof x && B.formatAt(0, p - $ + g - F, T, S);
                  }
                }
              }
            }, {
              key: "insertAt",
              value: function(p, g, T) {
                if (T == null) {
                  var S = this.descendant(r.default, p), I = k(S, 2), $ = I[0], F = I[1];
                  $.insertAt(F, g);
                }
              }
            }, {
              key: "length",
              value: function() {
                var p = this.domNode.textContent.length;
                return this.domNode.textContent.endsWith(`
`) ? p : p + 1;
              }
            }, {
              key: "newlineIndex",
              value: function(p) {
                var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                if (g)
                  return this.domNode.textContent.slice(0, p).lastIndexOf(`
`);
                var T = this.domNode.textContent.slice(p).indexOf(`
`);
                return T > -1 ? p + T : -1;
              }
            }, {
              key: "optimize",
              value: function(p) {
                this.domNode.textContent.endsWith(`
`) || this.appendChild(o.default.create("text", `
`)), _(x.prototype.__proto__ || Object.getPrototypeOf(x.prototype), "optimize", this).call(this, p);
                var g = this.next;
                g != null && g.prev === this && g.statics.blotName === this.statics.blotName && this.statics.formats(this.domNode) === g.statics.formats(g.domNode) && (g.optimize(p), g.moveChildren(this), g.remove());
              }
            }, {
              key: "replace",
              value: function(p) {
                _(x.prototype.__proto__ || Object.getPrototypeOf(x.prototype), "replace", this).call(this, p), [].slice.call(this.domNode.querySelectorAll("*")).forEach(function(g) {
                  var T = o.default.find(g);
                  T == null ? g.parentNode.removeChild(g) : T instanceof o.default.Embed ? T.remove() : T.unwrap();
                });
              }
            }], [{
              key: "create",
              value: function(p) {
                var g = _(x.__proto__ || Object.getPrototypeOf(x), "create", this).call(this, p);
                return g.setAttribute("spellcheck", !1), g;
              }
            }, {
              key: "formats",
              value: function() {
                return !0;
              }
            }]), x;
          }(e.default);
          O.blotName = "code-block", O.tagName = "PRE", O.TAB = "  ", s.Code = N, s.default = O;
        },
        /* 14 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var k = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(B) {
            return typeof B;
          } : function(B) {
            return B && typeof Symbol == "function" && B.constructor === Symbol && B !== Symbol.prototype ? "symbol" : typeof B;
          }, q = /* @__PURE__ */ function() {
            function B(M, A) {
              var L = [], j = !0, U = !1, C = void 0;
              try {
                for (var P = M[Symbol.iterator](), D; !(j = (D = P.next()).done) && (L.push(D.value), !(A && L.length === A)); j = !0)
                  ;
              } catch (H) {
                U = !0, C = H;
              } finally {
                try {
                  !j && P.return && P.return();
                } finally {
                  if (U)
                    throw C;
                }
              }
              return L;
            }
            return function(M, A) {
              if (Array.isArray(M))
                return M;
              if (Symbol.iterator in Object(M))
                return B(M, A);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), _ = /* @__PURE__ */ function() {
            function B(M, A) {
              for (var L = 0; L < A.length; L++) {
                var j = A[L];
                j.enumerable = j.enumerable || !1, j.configurable = !0, "value" in j && (j.writable = !0), Object.defineProperty(M, j.key, j);
              }
            }
            return function(M, A, L) {
              return A && B(M.prototype, A), L && B(M, L), M;
            };
          }(), v = d(2), y = g(v), h = d(20), o = g(h), t = d(0), e = g(t), u = d(13), a = g(u), l = d(24), r = g(l), i = d(4), f = g(i), n = d(16), c = g(n), N = d(21), O = g(N), E = d(11), x = g(E), m = d(3), p = g(m);
          function g(B) {
            return B && B.__esModule ? B : { default: B };
          }
          function T(B, M, A) {
            return M in B ? Object.defineProperty(B, M, { value: A, enumerable: !0, configurable: !0, writable: !0 }) : B[M] = A, B;
          }
          function S(B, M) {
            if (!(B instanceof M))
              throw new TypeError("Cannot call a class as a function");
          }
          var I = /^[ -~]*$/, $ = function() {
            function B(M) {
              S(this, B), this.scroll = M, this.delta = this.getDelta();
            }
            return _(B, [{
              key: "applyDelta",
              value: function(A) {
                var L = this, j = !1;
                this.scroll.update();
                var U = this.scroll.length();
                return this.scroll.batchStart(), A = W(A), A.reduce(function(C, P) {
                  var D = P.retain || P.delete || P.insert.length || 1, H = P.attributes || {};
                  if (P.insert != null) {
                    if (typeof P.insert == "string") {
                      var K = P.insert;
                      K.endsWith(`
`) && j && (j = !1, K = K.slice(0, -1)), C >= U && !K.endsWith(`
`) && (j = !0), L.scroll.insertAt(C, K);
                      var V = L.scroll.line(C), Q = q(V, 2), J = Q[0], tt = Q[1], it = (0, p.default)({}, (0, i.bubbleFormats)(J));
                      if (J instanceof f.default) {
                        var ot = J.descendant(e.default.Leaf, tt), ct = q(ot, 1), ft = ct[0];
                        it = (0, p.default)(it, (0, i.bubbleFormats)(ft));
                      }
                      H = o.default.attributes.diff(it, H) || {};
                    } else if (k(P.insert) === "object") {
                      var z = Object.keys(P.insert)[0];
                      if (z == null)
                        return C;
                      L.scroll.insertAt(C, z, P.insert[z]);
                    }
                    U += D;
                  }
                  return Object.keys(H).forEach(function(G) {
                    L.scroll.formatAt(C, D, G, H[G]);
                  }), C + D;
                }, 0), A.reduce(function(C, P) {
                  return typeof P.delete == "number" ? (L.scroll.deleteAt(C, P.delete), C) : C + (P.retain || P.insert.length || 1);
                }, 0), this.scroll.batchEnd(), this.update(A);
              }
            }, {
              key: "deleteText",
              value: function(A, L) {
                return this.scroll.deleteAt(A, L), this.update(new y.default().retain(A).delete(L));
              }
            }, {
              key: "formatLine",
              value: function(A, L) {
                var j = this, U = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                return this.scroll.update(), Object.keys(U).forEach(function(C) {
                  if (!(j.scroll.whitelist != null && !j.scroll.whitelist[C])) {
                    var P = j.scroll.lines(A, Math.max(L, 1)), D = L;
                    P.forEach(function(H) {
                      var K = H.length();
                      if (!(H instanceof a.default))
                        H.format(C, U[C]);
                      else {
                        var V = A - H.offset(j.scroll), Q = H.newlineIndex(V + D) - V + 1;
                        H.formatAt(V, Q, C, U[C]);
                      }
                      D -= K;
                    });
                  }
                }), this.scroll.optimize(), this.update(new y.default().retain(A).retain(L, (0, O.default)(U)));
              }
            }, {
              key: "formatText",
              value: function(A, L) {
                var j = this, U = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                return Object.keys(U).forEach(function(C) {
                  j.scroll.formatAt(A, L, C, U[C]);
                }), this.update(new y.default().retain(A).retain(L, (0, O.default)(U)));
              }
            }, {
              key: "getContents",
              value: function(A, L) {
                return this.delta.slice(A, A + L);
              }
            }, {
              key: "getDelta",
              value: function() {
                return this.scroll.lines().reduce(function(A, L) {
                  return A.concat(L.delta());
                }, new y.default());
              }
            }, {
              key: "getFormat",
              value: function(A) {
                var L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, j = [], U = [];
                L === 0 ? this.scroll.path(A).forEach(function(P) {
                  var D = q(P, 1), H = D[0];
                  H instanceof f.default ? j.push(H) : H instanceof e.default.Leaf && U.push(H);
                }) : (j = this.scroll.lines(A, L), U = this.scroll.descendants(e.default.Leaf, A, L));
                var C = [j, U].map(function(P) {
                  if (P.length === 0)
                    return {};
                  for (var D = (0, i.bubbleFormats)(P.shift()); Object.keys(D).length > 0; ) {
                    var H = P.shift();
                    if (H == null)
                      return D;
                    D = F((0, i.bubbleFormats)(H), D);
                  }
                  return D;
                });
                return p.default.apply(p.default, C);
              }
            }, {
              key: "getText",
              value: function(A, L) {
                return this.getContents(A, L).filter(function(j) {
                  return typeof j.insert == "string";
                }).map(function(j) {
                  return j.insert;
                }).join("");
              }
            }, {
              key: "insertEmbed",
              value: function(A, L, j) {
                return this.scroll.insertAt(A, L, j), this.update(new y.default().retain(A).insert(T({}, L, j)));
              }
            }, {
              key: "insertText",
              value: function(A, L) {
                var j = this, U = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                return L = L.replace(/\r\n/g, `
`).replace(/\r/g, `
`), this.scroll.insertAt(A, L), Object.keys(U).forEach(function(C) {
                  j.scroll.formatAt(A, L.length, C, U[C]);
                }), this.update(new y.default().retain(A).insert(L, (0, O.default)(U)));
              }
            }, {
              key: "isBlank",
              value: function() {
                if (this.scroll.children.length == 0)
                  return !0;
                if (this.scroll.children.length > 1)
                  return !1;
                var A = this.scroll.children.head;
                return A.statics.blotName !== f.default.blotName || A.children.length > 1 ? !1 : A.children.head instanceof c.default;
              }
            }, {
              key: "removeFormat",
              value: function(A, L) {
                var j = this.getText(A, L), U = this.scroll.line(A + L), C = q(U, 2), P = C[0], D = C[1], H = 0, K = new y.default();
                P != null && (P instanceof a.default ? H = P.newlineIndex(D) - D + 1 : H = P.length() - D, K = P.delta().slice(D, D + H - 1).insert(`
`));
                var V = this.getContents(A, L + H), Q = V.diff(new y.default().insert(j).concat(K)), J = new y.default().retain(A).concat(Q);
                return this.applyDelta(J);
              }
            }, {
              key: "update",
              value: function(A) {
                var L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], j = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0, U = this.delta;
                if (L.length === 1 && L[0].type === "characterData" && L[0].target.data.match(I) && e.default.find(L[0].target)) {
                  var C = e.default.find(L[0].target), P = (0, i.bubbleFormats)(C), D = C.offset(this.scroll), H = L[0].oldValue.replace(r.default.CONTENTS, ""), K = new y.default().insert(H), V = new y.default().insert(C.value()), Q = new y.default().retain(D).concat(K.diff(V, j));
                  A = Q.reduce(function(J, tt) {
                    return tt.insert ? J.insert(tt.insert, P) : J.push(tt);
                  }, new y.default()), this.delta = U.compose(A);
                } else
                  this.delta = this.getDelta(), (!A || !(0, x.default)(U.compose(A), this.delta)) && (A = U.diff(this.delta, j));
                return A;
              }
            }]), B;
          }();
          function F(B, M) {
            return Object.keys(M).reduce(function(A, L) {
              return B[L] == null || (M[L] === B[L] ? A[L] = M[L] : Array.isArray(M[L]) ? M[L].indexOf(B[L]) < 0 && (A[L] = M[L].concat([B[L]])) : A[L] = [M[L], B[L]]), A;
            }, {});
          }
          function W(B) {
            return B.reduce(function(M, A) {
              if (A.insert === 1) {
                var L = (0, O.default)(A.attributes);
                return delete L.image, M.insert({ image: A.attributes.image }, L);
              }
              if (A.attributes != null && (A.attributes.list === !0 || A.attributes.bullet === !0) && (A = (0, O.default)(A), A.attributes.list ? A.attributes.list = "ordered" : (A.attributes.list = "bullet", delete A.attributes.bullet)), typeof A.insert == "string") {
                var j = A.insert.replace(/\r\n/g, `
`).replace(/\r/g, `
`);
                return M.insert(j, A.attributes);
              }
              return M.push(A);
            }, new y.default());
          }
          s.default = $;
        },
        /* 15 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.default = s.Range = void 0;
          var k = /* @__PURE__ */ function() {
            function E(x, m) {
              var p = [], g = !0, T = !1, S = void 0;
              try {
                for (var I = x[Symbol.iterator](), $; !(g = ($ = I.next()).done) && (p.push($.value), !(m && p.length === m)); g = !0)
                  ;
              } catch (F) {
                T = !0, S = F;
              } finally {
                try {
                  !g && I.return && I.return();
                } finally {
                  if (T)
                    throw S;
                }
              }
              return p;
            }
            return function(x, m) {
              if (Array.isArray(x))
                return x;
              if (Symbol.iterator in Object(x))
                return E(x, m);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), q = /* @__PURE__ */ function() {
            function E(x, m) {
              for (var p = 0; p < m.length; p++) {
                var g = m[p];
                g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(x, g.key, g);
              }
            }
            return function(x, m, p) {
              return m && E(x.prototype, m), p && E(x, p), x;
            };
          }(), _ = d(0), v = r(_), y = d(21), h = r(y), o = d(11), t = r(o), e = d(8), u = r(e), a = d(10), l = r(a);
          function r(E) {
            return E && E.__esModule ? E : { default: E };
          }
          function i(E) {
            if (Array.isArray(E)) {
              for (var x = 0, m = Array(E.length); x < E.length; x++)
                m[x] = E[x];
              return m;
            } else
              return Array.from(E);
          }
          function f(E, x) {
            if (!(E instanceof x))
              throw new TypeError("Cannot call a class as a function");
          }
          var n = (0, l.default)("quill:selection"), c = function E(x) {
            var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            f(this, E), this.index = x, this.length = m;
          }, N = function() {
            function E(x, m) {
              var p = this;
              f(this, E), this.emitter = m, this.scroll = x, this.composing = !1, this.mouseDown = !1, this.root = this.scroll.domNode, this.cursor = v.default.create("cursor", this), this.lastRange = this.savedRange = new c(0, 0), this.handleComposition(), this.handleDragging(), this.emitter.listenDOM("selectionchange", document, function() {
                p.mouseDown || setTimeout(p.update.bind(p, u.default.sources.USER), 1);
              }), this.emitter.on(u.default.events.EDITOR_CHANGE, function(g, T) {
                g === u.default.events.TEXT_CHANGE && T.length() > 0 && p.update(u.default.sources.SILENT);
              }), this.emitter.on(u.default.events.SCROLL_BEFORE_UPDATE, function() {
                if (p.hasFocus()) {
                  var g = p.getNativeRange();
                  g != null && g.start.node !== p.cursor.textNode && p.emitter.once(u.default.events.SCROLL_UPDATE, function() {
                    try {
                      p.setNativeRange(g.start.node, g.start.offset, g.end.node, g.end.offset);
                    } catch {
                    }
                  });
                }
              }), this.emitter.on(u.default.events.SCROLL_OPTIMIZE, function(g, T) {
                if (T.range) {
                  var S = T.range, I = S.startNode, $ = S.startOffset, F = S.endNode, W = S.endOffset;
                  p.setNativeRange(I, $, F, W);
                }
              }), this.update(u.default.sources.SILENT);
            }
            return q(E, [{
              key: "handleComposition",
              value: function() {
                var m = this;
                this.root.addEventListener("compositionstart", function() {
                  m.composing = !0;
                }), this.root.addEventListener("compositionend", function() {
                  if (m.composing = !1, m.cursor.parent) {
                    var p = m.cursor.restore();
                    if (!p)
                      return;
                    setTimeout(function() {
                      m.setNativeRange(p.startNode, p.startOffset, p.endNode, p.endOffset);
                    }, 1);
                  }
                });
              }
            }, {
              key: "handleDragging",
              value: function() {
                var m = this;
                this.emitter.listenDOM("mousedown", document.body, function() {
                  m.mouseDown = !0;
                }), this.emitter.listenDOM("mouseup", document.body, function() {
                  m.mouseDown = !1, m.update(u.default.sources.USER);
                });
              }
            }, {
              key: "focus",
              value: function() {
                this.hasFocus() || (this.root.focus(), this.setRange(this.savedRange));
              }
            }, {
              key: "format",
              value: function(m, p) {
                if (!(this.scroll.whitelist != null && !this.scroll.whitelist[m])) {
                  this.scroll.update();
                  var g = this.getNativeRange();
                  if (!(g == null || !g.native.collapsed || v.default.query(m, v.default.Scope.BLOCK))) {
                    if (g.start.node !== this.cursor.textNode) {
                      var T = v.default.find(g.start.node, !1);
                      if (T == null)
                        return;
                      if (T instanceof v.default.Leaf) {
                        var S = T.split(g.start.offset);
                        T.parent.insertBefore(this.cursor, S);
                      } else
                        T.insertBefore(this.cursor, g.start.node);
                      this.cursor.attach();
                    }
                    this.cursor.format(m, p), this.scroll.optimize(), this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length), this.update();
                  }
                }
              }
            }, {
              key: "getBounds",
              value: function(m) {
                var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, g = this.scroll.length();
                m = Math.min(m, g - 1), p = Math.min(m + p, g - 1) - m;
                var T = void 0, S = this.scroll.leaf(m), I = k(S, 2), $ = I[0], F = I[1];
                if ($ == null)
                  return null;
                var W = $.position(F, !0), B = k(W, 2);
                T = B[0], F = B[1];
                var M = document.createRange();
                if (p > 0) {
                  M.setStart(T, F);
                  var A = this.scroll.leaf(m + p), L = k(A, 2);
                  if ($ = L[0], F = L[1], $ == null)
                    return null;
                  var j = $.position(F, !0), U = k(j, 2);
                  return T = U[0], F = U[1], M.setEnd(T, F), M.getBoundingClientRect();
                } else {
                  var C = "left", P = void 0;
                  return T instanceof Text ? (F < T.data.length ? (M.setStart(T, F), M.setEnd(T, F + 1)) : (M.setStart(T, F - 1), M.setEnd(T, F), C = "right"), P = M.getBoundingClientRect()) : (P = $.domNode.getBoundingClientRect(), F > 0 && (C = "right")), {
                    bottom: P.top + P.height,
                    height: P.height,
                    left: P[C],
                    right: P[C],
                    top: P.top,
                    width: 0
                  };
                }
              }
            }, {
              key: "getNativeRange",
              value: function() {
                var m = document.getSelection();
                if (m == null || m.rangeCount <= 0)
                  return null;
                var p = m.getRangeAt(0);
                if (p == null)
                  return null;
                var g = this.normalizeNative(p);
                return n.info("getNativeRange", g), g;
              }
            }, {
              key: "getRange",
              value: function() {
                var m = this.getNativeRange();
                if (m == null)
                  return [null, null];
                var p = this.normalizedToRange(m);
                return [p, m];
              }
            }, {
              key: "hasFocus",
              value: function() {
                return document.activeElement === this.root;
              }
            }, {
              key: "normalizedToRange",
              value: function(m) {
                var p = this, g = [[m.start.node, m.start.offset]];
                m.native.collapsed || g.push([m.end.node, m.end.offset]);
                var T = g.map(function($) {
                  var F = k($, 2), W = F[0], B = F[1], M = v.default.find(W, !0), A = M.offset(p.scroll);
                  return B === 0 ? A : M instanceof v.default.Container ? A + M.length() : A + M.index(W, B);
                }), S = Math.min(Math.max.apply(Math, i(T)), this.scroll.length() - 1), I = Math.min.apply(Math, [S].concat(i(T)));
                return new c(I, S - I);
              }
            }, {
              key: "normalizeNative",
              value: function(m) {
                if (!O(this.root, m.startContainer) || !m.collapsed && !O(this.root, m.endContainer))
                  return null;
                var p = {
                  start: { node: m.startContainer, offset: m.startOffset },
                  end: { node: m.endContainer, offset: m.endOffset },
                  native: m
                };
                return [p.start, p.end].forEach(function(g) {
                  for (var T = g.node, S = g.offset; !(T instanceof Text) && T.childNodes.length > 0; )
                    if (T.childNodes.length > S)
                      T = T.childNodes[S], S = 0;
                    else if (T.childNodes.length === S)
                      T = T.lastChild, S = T instanceof Text ? T.data.length : T.childNodes.length + 1;
                    else
                      break;
                  g.node = T, g.offset = S;
                }), p;
              }
            }, {
              key: "rangeToNative",
              value: function(m) {
                var p = this, g = m.collapsed ? [m.index] : [m.index, m.index + m.length], T = [], S = this.scroll.length();
                return g.forEach(function(I, $) {
                  I = Math.min(S - 1, I);
                  var F = void 0, W = p.scroll.leaf(I), B = k(W, 2), M = B[0], A = B[1], L = M.position(A, $ !== 0), j = k(L, 2);
                  F = j[0], A = j[1], T.push(F, A);
                }), T.length < 2 && (T = T.concat(T)), T;
              }
            }, {
              key: "scrollIntoView",
              value: function(m) {
                var p = this.lastRange;
                if (p != null) {
                  var g = this.getBounds(p.index, p.length);
                  if (g != null) {
                    var T = this.scroll.length() - 1, S = this.scroll.line(Math.min(p.index, T)), I = k(S, 1), $ = I[0], F = $;
                    if (p.length > 0) {
                      var W = this.scroll.line(Math.min(p.index + p.length, T)), B = k(W, 1);
                      F = B[0];
                    }
                    if (!($ == null || F == null)) {
                      var M = m.getBoundingClientRect();
                      g.top < M.top ? m.scrollTop -= M.top - g.top : g.bottom > M.bottom && (m.scrollTop += g.bottom - M.bottom);
                    }
                  }
                }
              }
            }, {
              key: "setNativeRange",
              value: function(m, p) {
                var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : m, T = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : p, S = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
                if (n.info("setNativeRange", m, p, g, T), !(m != null && (this.root.parentNode == null || m.parentNode == null || g.parentNode == null))) {
                  var I = document.getSelection();
                  if (I != null)
                    if (m != null) {
                      this.hasFocus() || this.root.focus();
                      var $ = (this.getNativeRange() || {}).native;
                      if ($ == null || S || m !== $.startContainer || p !== $.startOffset || g !== $.endContainer || T !== $.endOffset) {
                        m.tagName == "BR" && (p = [].indexOf.call(m.parentNode.childNodes, m), m = m.parentNode), g.tagName == "BR" && (T = [].indexOf.call(g.parentNode.childNodes, g), g = g.parentNode);
                        var F = document.createRange();
                        F.setStart(m, p), F.setEnd(g, T), I.removeAllRanges(), I.addRange(F);
                      }
                    } else
                      I.removeAllRanges(), this.root.blur(), document.body.focus();
                }
              }
            }, {
              key: "setRange",
              value: function(m) {
                var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : u.default.sources.API;
                if (typeof p == "string" && (g = p, p = !1), n.info("setRange", m), m != null) {
                  var T = this.rangeToNative(m);
                  this.setNativeRange.apply(this, i(T).concat([p]));
                } else
                  this.setNativeRange(null);
                this.update(g);
              }
            }, {
              key: "update",
              value: function() {
                var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : u.default.sources.USER, p = this.lastRange, g = this.getRange(), T = k(g, 2), S = T[0], I = T[1];
                if (this.lastRange = S, this.lastRange != null && (this.savedRange = this.lastRange), !(0, t.default)(p, this.lastRange)) {
                  var $;
                  !this.composing && I != null && I.native.collapsed && I.start.node !== this.cursor.textNode && this.cursor.restore();
                  var F = [u.default.events.SELECTION_CHANGE, (0, h.default)(this.lastRange), (0, h.default)(p), m];
                  if (($ = this.emitter).emit.apply($, [u.default.events.EDITOR_CHANGE].concat(F)), m !== u.default.sources.SILENT) {
                    var W;
                    (W = this.emitter).emit.apply(W, F);
                  }
                }
              }
            }]), E;
          }();
          function O(E, x) {
            try {
              x.parentNode;
            } catch {
              return !1;
            }
            return x instanceof Text && (x = x.parentNode), E.contains(x);
          }
          s.Range = c, s.default = N;
        },
        /* 16 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var k = /* @__PURE__ */ function() {
            function u(a, l) {
              for (var r = 0; r < l.length; r++) {
                var i = l[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(a, i.key, i);
              }
            }
            return function(a, l, r) {
              return l && u(a.prototype, l), r && u(a, r), a;
            };
          }(), q = function u(a, l, r) {
            a === null && (a = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(a, l);
            if (i === void 0) {
              var f = Object.getPrototypeOf(a);
              return f === null ? void 0 : u(f, l, r);
            } else {
              if ("value" in i)
                return i.value;
              var n = i.get;
              return n === void 0 ? void 0 : n.call(r);
            }
          }, _ = d(0), v = y(_);
          function y(u) {
            return u && u.__esModule ? u : { default: u };
          }
          function h(u, a) {
            if (!(u instanceof a))
              throw new TypeError("Cannot call a class as a function");
          }
          function o(u, a) {
            if (!u)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return a && (typeof a == "object" || typeof a == "function") ? a : u;
          }
          function t(u, a) {
            if (typeof a != "function" && a !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof a);
            u.prototype = Object.create(a && a.prototype, { constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 } }), a && (Object.setPrototypeOf ? Object.setPrototypeOf(u, a) : u.__proto__ = a);
          }
          var e = function(u) {
            t(a, u);
            function a() {
              return h(this, a), o(this, (a.__proto__ || Object.getPrototypeOf(a)).apply(this, arguments));
            }
            return k(a, [{
              key: "insertInto",
              value: function(r, i) {
                r.children.length === 0 ? q(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "insertInto", this).call(this, r, i) : this.remove();
              }
            }, {
              key: "length",
              value: function() {
                return 0;
              }
            }, {
              key: "value",
              value: function() {
                return "";
              }
            }], [{
              key: "value",
              value: function() {
              }
            }]), a;
          }(v.default.Embed);
          e.blotName = "break", e.tagName = "BR", s.default = e;
        },
        /* 17 */
        /***/
        function(b, s, d) {
          var k = this && this.__extends || function() {
            var o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, e) {
              t.__proto__ = e;
            } || function(t, e) {
              for (var u in e)
                e.hasOwnProperty(u) && (t[u] = e[u]);
            };
            return function(t, e) {
              o(t, e);
              function u() {
                this.constructor = t;
              }
              t.prototype = e === null ? Object.create(e) : (u.prototype = e.prototype, new u());
            };
          }();
          Object.defineProperty(s, "__esModule", { value: !0 });
          var q = d(44), _ = d(30), v = d(1), y = (
            /** @class */
            function(o) {
              k(t, o);
              function t(e) {
                var u = o.call(this, e) || this;
                return u.build(), u;
              }
              return t.prototype.appendChild = function(e) {
                this.insertBefore(e);
              }, t.prototype.attach = function() {
                o.prototype.attach.call(this), this.children.forEach(function(e) {
                  e.attach();
                });
              }, t.prototype.build = function() {
                var e = this;
                this.children = new q.default(), [].slice.call(this.domNode.childNodes).reverse().forEach(function(u) {
                  try {
                    var a = h(u);
                    e.insertBefore(a, e.children.head || void 0);
                  } catch (l) {
                    if (l instanceof v.ParchmentError)
                      return;
                    throw l;
                  }
                });
              }, t.prototype.deleteAt = function(e, u) {
                if (e === 0 && u === this.length())
                  return this.remove();
                this.children.forEachAt(e, u, function(a, l, r) {
                  a.deleteAt(l, r);
                });
              }, t.prototype.descendant = function(e, u) {
                var a = this.children.find(u), l = a[0], r = a[1];
                return e.blotName == null && e(l) || e.blotName != null && l instanceof e ? [l, r] : l instanceof t ? l.descendant(e, r) : [null, -1];
              }, t.prototype.descendants = function(e, u, a) {
                u === void 0 && (u = 0), a === void 0 && (a = Number.MAX_VALUE);
                var l = [], r = a;
                return this.children.forEachAt(u, a, function(i, f, n) {
                  (e.blotName == null && e(i) || e.blotName != null && i instanceof e) && l.push(i), i instanceof t && (l = l.concat(i.descendants(e, f, r))), r -= n;
                }), l;
              }, t.prototype.detach = function() {
                this.children.forEach(function(e) {
                  e.detach();
                }), o.prototype.detach.call(this);
              }, t.prototype.formatAt = function(e, u, a, l) {
                this.children.forEachAt(e, u, function(r, i, f) {
                  r.formatAt(i, f, a, l);
                });
              }, t.prototype.insertAt = function(e, u, a) {
                var l = this.children.find(e), r = l[0], i = l[1];
                if (r)
                  r.insertAt(i, u, a);
                else {
                  var f = a == null ? v.create("text", u) : v.create(u, a);
                  this.appendChild(f);
                }
              }, t.prototype.insertBefore = function(e, u) {
                if (this.statics.allowedChildren != null && !this.statics.allowedChildren.some(function(a) {
                  return e instanceof a;
                }))
                  throw new v.ParchmentError("Cannot insert " + e.statics.blotName + " into " + this.statics.blotName);
                e.insertInto(this, u);
              }, t.prototype.length = function() {
                return this.children.reduce(function(e, u) {
                  return e + u.length();
                }, 0);
              }, t.prototype.moveChildren = function(e, u) {
                this.children.forEach(function(a) {
                  e.insertBefore(a, u);
                });
              }, t.prototype.optimize = function(e) {
                if (o.prototype.optimize.call(this, e), this.children.length === 0)
                  if (this.statics.defaultChild != null) {
                    var u = v.create(this.statics.defaultChild);
                    this.appendChild(u), u.optimize(e);
                  } else
                    this.remove();
              }, t.prototype.path = function(e, u) {
                u === void 0 && (u = !1);
                var a = this.children.find(e, u), l = a[0], r = a[1], i = [[this, e]];
                return l instanceof t ? i.concat(l.path(r, u)) : (l != null && i.push([l, r]), i);
              }, t.prototype.removeChild = function(e) {
                this.children.remove(e);
              }, t.prototype.replace = function(e) {
                e instanceof t && e.moveChildren(this), o.prototype.replace.call(this, e);
              }, t.prototype.split = function(e, u) {
                if (u === void 0 && (u = !1), !u) {
                  if (e === 0)
                    return this;
                  if (e === this.length())
                    return this.next;
                }
                var a = this.clone();
                return this.parent.insertBefore(a, this.next), this.children.forEachAt(e, this.length(), function(l, r, i) {
                  l = l.split(r, u), a.appendChild(l);
                }), a;
              }, t.prototype.unwrap = function() {
                this.moveChildren(this.parent, this.next), this.remove();
              }, t.prototype.update = function(e, u) {
                var a = this, l = [], r = [];
                e.forEach(function(i) {
                  i.target === a.domNode && i.type === "childList" && (l.push.apply(l, i.addedNodes), r.push.apply(r, i.removedNodes));
                }), r.forEach(function(i) {
                  if (!(i.parentNode != null && // @ts-ignore
                  i.tagName !== "IFRAME" && document.body.compareDocumentPosition(i) & Node.DOCUMENT_POSITION_CONTAINED_BY)) {
                    var f = v.find(i);
                    f != null && (f.domNode.parentNode == null || f.domNode.parentNode === a.domNode) && f.detach();
                  }
                }), l.filter(function(i) {
                  return i.parentNode == a.domNode;
                }).sort(function(i, f) {
                  return i === f ? 0 : i.compareDocumentPosition(f) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1;
                }).forEach(function(i) {
                  var f = null;
                  i.nextSibling != null && (f = v.find(i.nextSibling));
                  var n = h(i);
                  (n.next != f || n.next == null) && (n.parent != null && n.parent.removeChild(a), a.insertBefore(n, f || void 0));
                });
              }, t;
            }(_.default)
          );
          function h(o) {
            var t = v.find(o);
            if (t == null)
              try {
                t = v.create(o);
              } catch {
                t = v.create(v.Scope.INLINE), [].slice.call(o.childNodes).forEach(function(u) {
                  t.domNode.appendChild(u);
                }), o.parentNode && o.parentNode.replaceChild(t.domNode, o), t.attach();
              }
            return t;
          }
          s.default = y;
        },
        /* 18 */
        /***/
        function(b, s, d) {
          var k = this && this.__extends || function() {
            var o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, e) {
              t.__proto__ = e;
            } || function(t, e) {
              for (var u in e)
                e.hasOwnProperty(u) && (t[u] = e[u]);
            };
            return function(t, e) {
              o(t, e);
              function u() {
                this.constructor = t;
              }
              t.prototype = e === null ? Object.create(e) : (u.prototype = e.prototype, new u());
            };
          }();
          Object.defineProperty(s, "__esModule", { value: !0 });
          var q = d(12), _ = d(31), v = d(17), y = d(1), h = (
            /** @class */
            function(o) {
              k(t, o);
              function t(e) {
                var u = o.call(this, e) || this;
                return u.attributes = new _.default(u.domNode), u;
              }
              return t.formats = function(e) {
                if (typeof this.tagName == "string")
                  return !0;
                if (Array.isArray(this.tagName))
                  return e.tagName.toLowerCase();
              }, t.prototype.format = function(e, u) {
                var a = y.query(e);
                a instanceof q.default ? this.attributes.attribute(a, u) : u && a != null && (e !== this.statics.blotName || this.formats()[e] !== u) && this.replaceWith(e, u);
              }, t.prototype.formats = function() {
                var e = this.attributes.values(), u = this.statics.formats(this.domNode);
                return u != null && (e[this.statics.blotName] = u), e;
              }, t.prototype.replaceWith = function(e, u) {
                var a = o.prototype.replaceWith.call(this, e, u);
                return this.attributes.copy(a), a;
              }, t.prototype.update = function(e, u) {
                var a = this;
                o.prototype.update.call(this, e, u), e.some(function(l) {
                  return l.target === a.domNode && l.type === "attributes";
                }) && this.attributes.build();
              }, t.prototype.wrap = function(e, u) {
                var a = o.prototype.wrap.call(this, e, u);
                return a instanceof t && a.statics.scope === this.statics.scope && this.attributes.move(a), a;
              }, t;
            }(v.default)
          );
          s.default = h;
        },
        /* 19 */
        /***/
        function(b, s, d) {
          var k = this && this.__extends || function() {
            var y = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(h, o) {
              h.__proto__ = o;
            } || function(h, o) {
              for (var t in o)
                o.hasOwnProperty(t) && (h[t] = o[t]);
            };
            return function(h, o) {
              y(h, o);
              function t() {
                this.constructor = h;
              }
              h.prototype = o === null ? Object.create(o) : (t.prototype = o.prototype, new t());
            };
          }();
          Object.defineProperty(s, "__esModule", { value: !0 });
          var q = d(30), _ = d(1), v = (
            /** @class */
            function(y) {
              k(h, y);
              function h() {
                return y !== null && y.apply(this, arguments) || this;
              }
              return h.value = function(o) {
                return !0;
              }, h.prototype.index = function(o, t) {
                return this.domNode === o || this.domNode.compareDocumentPosition(o) & Node.DOCUMENT_POSITION_CONTAINED_BY ? Math.min(t, 1) : -1;
              }, h.prototype.position = function(o, t) {
                var e = [].indexOf.call(this.parent.domNode.childNodes, this.domNode);
                return o > 0 && (e += 1), [this.parent.domNode, e];
              }, h.prototype.value = function() {
                var o;
                return o = {}, o[this.statics.blotName] = this.statics.value(this.domNode) || !0, o;
              }, h.scope = _.Scope.INLINE_BLOT, h;
            }(q.default)
          );
          s.default = v;
        },
        /* 20 */
        /***/
        function(b, s, d) {
          var k = d(11), q = d(3), _ = {
            attributes: {
              compose: function(y, h, o) {
                typeof y != "object" && (y = {}), typeof h != "object" && (h = {});
                var t = q(!0, {}, h);
                o || (t = Object.keys(t).reduce(function(u, a) {
                  return t[a] != null && (u[a] = t[a]), u;
                }, {}));
                for (var e in y)
                  y[e] !== void 0 && h[e] === void 0 && (t[e] = y[e]);
                return Object.keys(t).length > 0 ? t : void 0;
              },
              diff: function(y, h) {
                typeof y != "object" && (y = {}), typeof h != "object" && (h = {});
                var o = Object.keys(y).concat(Object.keys(h)).reduce(function(t, e) {
                  return k(y[e], h[e]) || (t[e] = h[e] === void 0 ? null : h[e]), t;
                }, {});
                return Object.keys(o).length > 0 ? o : void 0;
              },
              transform: function(y, h, o) {
                if (typeof y != "object")
                  return h;
                if (typeof h == "object") {
                  if (!o)
                    return h;
                  var t = Object.keys(h).reduce(function(e, u) {
                    return y[u] === void 0 && (e[u] = h[u]), e;
                  }, {});
                  return Object.keys(t).length > 0 ? t : void 0;
                }
              }
            },
            iterator: function(y) {
              return new v(y);
            },
            length: function(y) {
              return typeof y.delete == "number" ? y.delete : typeof y.retain == "number" ? y.retain : typeof y.insert == "string" ? y.insert.length : 1;
            }
          };
          function v(y) {
            this.ops = y, this.index = 0, this.offset = 0;
          }
          v.prototype.hasNext = function() {
            return this.peekLength() < 1 / 0;
          }, v.prototype.next = function(y) {
            y || (y = 1 / 0);
            var h = this.ops[this.index];
            if (h) {
              var o = this.offset, t = _.length(h);
              if (y >= t - o ? (y = t - o, this.index += 1, this.offset = 0) : this.offset += y, typeof h.delete == "number")
                return { delete: y };
              var e = {};
              return h.attributes && (e.attributes = h.attributes), typeof h.retain == "number" ? e.retain = y : typeof h.insert == "string" ? e.insert = h.insert.substr(o, y) : e.insert = h.insert, e;
            } else
              return { retain: 1 / 0 };
          }, v.prototype.peek = function() {
            return this.ops[this.index];
          }, v.prototype.peekLength = function() {
            return this.ops[this.index] ? _.length(this.ops[this.index]) - this.offset : 1 / 0;
          }, v.prototype.peekType = function() {
            return this.ops[this.index] ? typeof this.ops[this.index].delete == "number" ? "delete" : typeof this.ops[this.index].retain == "number" ? "retain" : "insert" : "retain";
          }, v.prototype.rest = function() {
            if (this.hasNext()) {
              if (this.offset === 0)
                return this.ops.slice(this.index);
              var y = this.offset, h = this.index, o = this.next(), t = this.ops.slice(this.index);
              return this.offset = y, this.index = h, [o].concat(t);
            } else
              return [];
          }, b.exports = _;
        },
        /* 21 */
        /***/
        function(b, s) {
          var d = function() {
            function k(a, l) {
              return l != null && a instanceof l;
            }
            var q;
            try {
              q = Map;
            } catch {
              q = function() {
              };
            }
            var _;
            try {
              _ = Set;
            } catch {
              _ = function() {
              };
            }
            var v;
            try {
              v = Promise;
            } catch {
              v = function() {
              };
            }
            function y(a, l, r, i, f) {
              typeof l == "object" && (r = l.depth, i = l.prototype, f = l.includeNonEnumerable, l = l.circular);
              var n = [], c = [], N = typeof Buffer < "u";
              typeof l > "u" && (l = !0), typeof r > "u" && (r = 1 / 0);
              function O(E, x) {
                if (E === null)
                  return null;
                if (x === 0)
                  return E;
                var m, p;
                if (typeof E != "object")
                  return E;
                if (k(E, q))
                  m = new q();
                else if (k(E, _))
                  m = new _();
                else if (k(E, v))
                  m = new v(function(M, A) {
                    E.then(function(L) {
                      M(O(L, x - 1));
                    }, function(L) {
                      A(O(L, x - 1));
                    });
                  });
                else if (y.__isArray(E))
                  m = [];
                else if (y.__isRegExp(E))
                  m = new RegExp(E.source, u(E)), E.lastIndex && (m.lastIndex = E.lastIndex);
                else if (y.__isDate(E))
                  m = new Date(E.getTime());
                else {
                  if (N && Buffer.isBuffer(E))
                    return Buffer.allocUnsafe ? m = Buffer.allocUnsafe(E.length) : m = new Buffer(E.length), E.copy(m), m;
                  k(E, Error) ? m = Object.create(E) : typeof i > "u" ? (p = Object.getPrototypeOf(E), m = Object.create(p)) : (m = Object.create(i), p = i);
                }
                if (l) {
                  var g = n.indexOf(E);
                  if (g != -1)
                    return c[g];
                  n.push(E), c.push(m);
                }
                k(E, q) && E.forEach(function(M, A) {
                  var L = O(A, x - 1), j = O(M, x - 1);
                  m.set(L, j);
                }), k(E, _) && E.forEach(function(M) {
                  var A = O(M, x - 1);
                  m.add(A);
                });
                for (var T in E) {
                  var S;
                  p && (S = Object.getOwnPropertyDescriptor(p, T)), !(S && S.set == null) && (m[T] = O(E[T], x - 1));
                }
                if (Object.getOwnPropertySymbols)
                  for (var I = Object.getOwnPropertySymbols(E), T = 0; T < I.length; T++) {
                    var $ = I[T], F = Object.getOwnPropertyDescriptor(E, $);
                    F && !F.enumerable && !f || (m[$] = O(E[$], x - 1), F.enumerable || Object.defineProperty(m, $, {
                      enumerable: !1
                    }));
                  }
                if (f)
                  for (var W = Object.getOwnPropertyNames(E), T = 0; T < W.length; T++) {
                    var B = W[T], F = Object.getOwnPropertyDescriptor(E, B);
                    F && F.enumerable || (m[B] = O(E[B], x - 1), Object.defineProperty(m, B, {
                      enumerable: !1
                    }));
                  }
                return m;
              }
              return O(a, r);
            }
            y.clonePrototype = function(l) {
              if (l === null)
                return null;
              var r = function() {
              };
              return r.prototype = l, new r();
            };
            function h(a) {
              return Object.prototype.toString.call(a);
            }
            y.__objToStr = h;
            function o(a) {
              return typeof a == "object" && h(a) === "[object Date]";
            }
            y.__isDate = o;
            function t(a) {
              return typeof a == "object" && h(a) === "[object Array]";
            }
            y.__isArray = t;
            function e(a) {
              return typeof a == "object" && h(a) === "[object RegExp]";
            }
            y.__isRegExp = e;
            function u(a) {
              var l = "";
              return a.global && (l += "g"), a.ignoreCase && (l += "i"), a.multiline && (l += "m"), l;
            }
            return y.__getRegExpFlags = u, y;
          }();
          typeof b == "object" && b.exports && (b.exports = d);
        },
        /* 22 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var k = /* @__PURE__ */ function() {
            function m(p, g) {
              var T = [], S = !0, I = !1, $ = void 0;
              try {
                for (var F = p[Symbol.iterator](), W; !(S = (W = F.next()).done) && (T.push(W.value), !(g && T.length === g)); S = !0)
                  ;
              } catch (B) {
                I = !0, $ = B;
              } finally {
                try {
                  !S && F.return && F.return();
                } finally {
                  if (I)
                    throw $;
                }
              }
              return T;
            }
            return function(p, g) {
              if (Array.isArray(p))
                return p;
              if (Symbol.iterator in Object(p))
                return m(p, g);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), q = /* @__PURE__ */ function() {
            function m(p, g) {
              for (var T = 0; T < g.length; T++) {
                var S = g[T];
                S.enumerable = S.enumerable || !1, S.configurable = !0, "value" in S && (S.writable = !0), Object.defineProperty(p, S.key, S);
              }
            }
            return function(p, g, T) {
              return g && m(p.prototype, g), T && m(p, T), p;
            };
          }(), _ = function m(p, g, T) {
            p === null && (p = Function.prototype);
            var S = Object.getOwnPropertyDescriptor(p, g);
            if (S === void 0) {
              var I = Object.getPrototypeOf(p);
              return I === null ? void 0 : m(I, g, T);
            } else {
              if ("value" in S)
                return S.value;
              var $ = S.get;
              return $ === void 0 ? void 0 : $.call(T);
            }
          }, v = d(0), y = n(v), h = d(8), o = n(h), t = d(4), e = n(t), u = d(16), a = n(u), l = d(13), r = n(l), i = d(25), f = n(i);
          function n(m) {
            return m && m.__esModule ? m : { default: m };
          }
          function c(m, p) {
            if (!(m instanceof p))
              throw new TypeError("Cannot call a class as a function");
          }
          function N(m, p) {
            if (!m)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return p && (typeof p == "object" || typeof p == "function") ? p : m;
          }
          function O(m, p) {
            if (typeof p != "function" && p !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof p);
            m.prototype = Object.create(p && p.prototype, { constructor: { value: m, enumerable: !1, writable: !0, configurable: !0 } }), p && (Object.setPrototypeOf ? Object.setPrototypeOf(m, p) : m.__proto__ = p);
          }
          function E(m) {
            return m instanceof e.default || m instanceof t.BlockEmbed;
          }
          var x = function(m) {
            O(p, m);
            function p(g, T) {
              c(this, p);
              var S = N(this, (p.__proto__ || Object.getPrototypeOf(p)).call(this, g));
              return S.emitter = T.emitter, Array.isArray(T.whitelist) && (S.whitelist = T.whitelist.reduce(function(I, $) {
                return I[$] = !0, I;
              }, {})), S.domNode.addEventListener("DOMNodeInserted", function() {
              }), S.optimize(), S.enable(), S;
            }
            return q(p, [{
              key: "batchStart",
              value: function() {
                this.batch = !0;
              }
            }, {
              key: "batchEnd",
              value: function() {
                this.batch = !1, this.optimize();
              }
            }, {
              key: "deleteAt",
              value: function(T, S) {
                var I = this.line(T), $ = k(I, 2), F = $[0], W = $[1], B = this.line(T + S), M = k(B, 1), A = M[0];
                if (_(p.prototype.__proto__ || Object.getPrototypeOf(p.prototype), "deleteAt", this).call(this, T, S), A != null && F !== A && W > 0) {
                  if (F instanceof t.BlockEmbed || A instanceof t.BlockEmbed) {
                    this.optimize();
                    return;
                  }
                  if (F instanceof r.default) {
                    var L = F.newlineIndex(F.length(), !0);
                    if (L > -1 && (F = F.split(L + 1), F === A)) {
                      this.optimize();
                      return;
                    }
                  } else if (A instanceof r.default) {
                    var j = A.newlineIndex(0);
                    j > -1 && A.split(j + 1);
                  }
                  var U = A.children.head instanceof a.default ? null : A.children.head;
                  F.moveChildren(A, U), F.remove();
                }
                this.optimize();
              }
            }, {
              key: "enable",
              value: function() {
                var T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
                this.domNode.setAttribute("contenteditable", T);
              }
            }, {
              key: "formatAt",
              value: function(T, S, I, $) {
                this.whitelist != null && !this.whitelist[I] || (_(p.prototype.__proto__ || Object.getPrototypeOf(p.prototype), "formatAt", this).call(this, T, S, I, $), this.optimize());
              }
            }, {
              key: "insertAt",
              value: function(T, S, I) {
                if (!(I != null && this.whitelist != null && !this.whitelist[S])) {
                  if (T >= this.length())
                    if (I == null || y.default.query(S, y.default.Scope.BLOCK) == null) {
                      var $ = y.default.create(this.statics.defaultChild);
                      this.appendChild($), I == null && S.endsWith(`
`) && (S = S.slice(0, -1)), $.insertAt(0, S, I);
                    } else {
                      var F = y.default.create(S, I);
                      this.appendChild(F);
                    }
                  else
                    _(p.prototype.__proto__ || Object.getPrototypeOf(p.prototype), "insertAt", this).call(this, T, S, I);
                  this.optimize();
                }
              }
            }, {
              key: "insertBefore",
              value: function(T, S) {
                if (T.statics.scope === y.default.Scope.INLINE_BLOT) {
                  var I = y.default.create(this.statics.defaultChild);
                  I.appendChild(T), T = I;
                }
                _(p.prototype.__proto__ || Object.getPrototypeOf(p.prototype), "insertBefore", this).call(this, T, S);
              }
            }, {
              key: "leaf",
              value: function(T) {
                return this.path(T).pop() || [null, -1];
              }
            }, {
              key: "line",
              value: function(T) {
                return T === this.length() ? this.line(T - 1) : this.descendant(E, T);
              }
            }, {
              key: "lines",
              value: function() {
                var T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE, I = function $(F, W, B) {
                  var M = [], A = B;
                  return F.children.forEachAt(W, B, function(L, j, U) {
                    E(L) ? M.push(L) : L instanceof y.default.Container && (M = M.concat($(L, j, A))), A -= U;
                  }), M;
                };
                return I(this, T, S);
              }
            }, {
              key: "optimize",
              value: function() {
                var T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                this.batch !== !0 && (_(p.prototype.__proto__ || Object.getPrototypeOf(p.prototype), "optimize", this).call(this, T, S), T.length > 0 && this.emitter.emit(o.default.events.SCROLL_OPTIMIZE, T, S));
              }
            }, {
              key: "path",
              value: function(T) {
                return _(p.prototype.__proto__ || Object.getPrototypeOf(p.prototype), "path", this).call(this, T).slice(1);
              }
            }, {
              key: "update",
              value: function(T) {
                if (this.batch !== !0) {
                  var S = o.default.sources.USER;
                  typeof T == "string" && (S = T), Array.isArray(T) || (T = this.observer.takeRecords()), T.length > 0 && this.emitter.emit(o.default.events.SCROLL_BEFORE_UPDATE, S, T), _(p.prototype.__proto__ || Object.getPrototypeOf(p.prototype), "update", this).call(this, T.concat([])), T.length > 0 && this.emitter.emit(o.default.events.SCROLL_UPDATE, S, T);
                }
              }
            }]), p;
          }(y.default.Scroll);
          x.blotName = "scroll", x.className = "ql-editor", x.tagName = "DIV", x.defaultChild = "block", x.allowedChildren = [e.default, t.BlockEmbed, f.default], s.default = x;
        },
        /* 23 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.SHORTKEY = s.default = void 0;
          var k = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(P) {
            return typeof P;
          } : function(P) {
            return P && typeof Symbol == "function" && P.constructor === Symbol && P !== Symbol.prototype ? "symbol" : typeof P;
          }, q = /* @__PURE__ */ function() {
            function P(D, H) {
              var K = [], V = !0, Q = !1, J = void 0;
              try {
                for (var tt = D[Symbol.iterator](), it; !(V = (it = tt.next()).done) && (K.push(it.value), !(H && K.length === H)); V = !0)
                  ;
              } catch (ot) {
                Q = !0, J = ot;
              } finally {
                try {
                  !V && tt.return && tt.return();
                } finally {
                  if (Q)
                    throw J;
                }
              }
              return K;
            }
            return function(D, H) {
              if (Array.isArray(D))
                return D;
              if (Symbol.iterator in Object(D))
                return P(D, H);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), _ = /* @__PURE__ */ function() {
            function P(D, H) {
              for (var K = 0; K < H.length; K++) {
                var V = H[K];
                V.enumerable = V.enumerable || !1, V.configurable = !0, "value" in V && (V.writable = !0), Object.defineProperty(D, V.key, V);
              }
            }
            return function(D, H, K) {
              return H && P(D.prototype, H), K && P(D, K), D;
            };
          }(), v = d(21), y = m(v), h = d(11), o = m(h), t = d(3), e = m(t), u = d(2), a = m(u), l = d(20), r = m(l), i = d(0), f = m(i), n = d(5), c = m(n), N = d(10), O = m(N), E = d(9), x = m(E);
          function m(P) {
            return P && P.__esModule ? P : { default: P };
          }
          function p(P, D, H) {
            return D in P ? Object.defineProperty(P, D, { value: H, enumerable: !0, configurable: !0, writable: !0 }) : P[D] = H, P;
          }
          function g(P, D) {
            if (!(P instanceof D))
              throw new TypeError("Cannot call a class as a function");
          }
          function T(P, D) {
            if (!P)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return D && (typeof D == "object" || typeof D == "function") ? D : P;
          }
          function S(P, D) {
            if (typeof D != "function" && D !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof D);
            P.prototype = Object.create(D && D.prototype, { constructor: { value: P, enumerable: !1, writable: !0, configurable: !0 } }), D && (Object.setPrototypeOf ? Object.setPrototypeOf(P, D) : P.__proto__ = D);
          }
          var I = (0, O.default)("quill:keyboard"), $ = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey", F = function(P) {
            S(D, P), _(D, null, [{
              key: "match",
              value: function(K, V) {
                return V = C(V), ["altKey", "ctrlKey", "metaKey", "shiftKey"].some(function(Q) {
                  return !!V[Q] !== K[Q] && V[Q] !== null;
                }) ? !1 : V.key === (K.which || K.keyCode);
              }
            }]);
            function D(H, K) {
              g(this, D);
              var V = T(this, (D.__proto__ || Object.getPrototypeOf(D)).call(this, H, K));
              return V.bindings = {}, Object.keys(V.options.bindings).forEach(function(Q) {
                Q === "list autofill" && H.scroll.whitelist != null && !H.scroll.whitelist.list || V.options.bindings[Q] && V.addBinding(V.options.bindings[Q]);
              }), V.addBinding({ key: D.keys.ENTER, shiftKey: null }, L), V.addBinding({ key: D.keys.ENTER, metaKey: null, ctrlKey: null, altKey: null }, function() {
              }), /Firefox/i.test(navigator.userAgent) ? (V.addBinding({ key: D.keys.BACKSPACE }, { collapsed: !0 }, B), V.addBinding({ key: D.keys.DELETE }, { collapsed: !0 }, M)) : (V.addBinding({ key: D.keys.BACKSPACE }, { collapsed: !0, prefix: /^.?$/ }, B), V.addBinding({ key: D.keys.DELETE }, { collapsed: !0, suffix: /^.?$/ }, M)), V.addBinding({ key: D.keys.BACKSPACE }, { collapsed: !1 }, A), V.addBinding({ key: D.keys.DELETE }, { collapsed: !1 }, A), V.addBinding({ key: D.keys.BACKSPACE, altKey: null, ctrlKey: null, metaKey: null, shiftKey: null }, { collapsed: !0, offset: 0 }, B), V.listen(), V;
            }
            return _(D, [{
              key: "addBinding",
              value: function(K) {
                var V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, Q = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, J = C(K);
                if (J == null || J.key == null)
                  return I.warn("Attempted to add invalid keyboard binding", J);
                typeof V == "function" && (V = { handler: V }), typeof Q == "function" && (Q = { handler: Q }), J = (0, e.default)(J, V, Q), this.bindings[J.key] = this.bindings[J.key] || [], this.bindings[J.key].push(J);
              }
            }, {
              key: "listen",
              value: function() {
                var K = this;
                this.quill.root.addEventListener("keydown", function(V) {
                  if (!V.defaultPrevented) {
                    var Q = V.which || V.keyCode, J = (K.bindings[Q] || []).filter(function(st) {
                      return D.match(V, st);
                    });
                    if (J.length !== 0) {
                      var tt = K.quill.getSelection();
                      if (!(tt == null || !K.quill.hasFocus())) {
                        var it = K.quill.getLine(tt.index), ot = q(it, 2), ct = ot[0], ft = ot[1], z = K.quill.getLeaf(tt.index), G = q(z, 2), Y = G[0], X = G[1], Z = tt.length === 0 ? [Y, X] : K.quill.getLeaf(tt.index + tt.length), et = q(Z, 2), nt = et[0], rt = et[1], dt = Y instanceof f.default.Text ? Y.value().slice(0, X) : "", pt = nt instanceof f.default.Text ? nt.value().slice(rt) : "", ut = {
                          collapsed: tt.length === 0,
                          empty: tt.length === 0 && ct.length() <= 1,
                          format: K.quill.getFormat(tt),
                          offset: ft,
                          prefix: dt,
                          suffix: pt
                        }, Fe = J.some(function(st) {
                          if (st.collapsed != null && st.collapsed !== ut.collapsed || st.empty != null && st.empty !== ut.empty || st.offset != null && st.offset !== ut.offset)
                            return !1;
                          if (Array.isArray(st.format)) {
                            if (st.format.every(function(gt) {
                              return ut.format[gt] == null;
                            }))
                              return !1;
                          } else if (k(st.format) === "object" && !Object.keys(st.format).every(function(gt) {
                            return st.format[gt] === !0 ? ut.format[gt] != null : st.format[gt] === !1 ? ut.format[gt] == null : (0, o.default)(st.format[gt], ut.format[gt]);
                          }))
                            return !1;
                          return st.prefix != null && !st.prefix.test(ut.prefix) || st.suffix != null && !st.suffix.test(ut.suffix) ? !1 : st.handler.call(K, tt, ut) !== !0;
                        });
                        Fe && V.preventDefault();
                      }
                    }
                  }
                });
              }
            }]), D;
          }(x.default);
          F.keys = {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            ESCAPE: 27,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            DELETE: 46
          }, F.DEFAULTS = {
            bindings: {
              bold: U("bold"),
              italic: U("italic"),
              underline: U("underline"),
              indent: {
                // highlight tab or tab at beginning of list, indent or blockquote
                key: F.keys.TAB,
                format: ["blockquote", "indent", "list"],
                handler: function(D, H) {
                  if (H.collapsed && H.offset !== 0)
                    return !0;
                  this.quill.format("indent", "+1", c.default.sources.USER);
                }
              },
              outdent: {
                key: F.keys.TAB,
                shiftKey: !0,
                format: ["blockquote", "indent", "list"],
                // highlight tab or tab at beginning of list, indent or blockquote
                handler: function(D, H) {
                  if (H.collapsed && H.offset !== 0)
                    return !0;
                  this.quill.format("indent", "-1", c.default.sources.USER);
                }
              },
              "outdent backspace": {
                key: F.keys.BACKSPACE,
                collapsed: !0,
                shiftKey: null,
                metaKey: null,
                ctrlKey: null,
                altKey: null,
                format: ["indent", "list"],
                offset: 0,
                handler: function(D, H) {
                  H.format.indent != null ? this.quill.format("indent", "-1", c.default.sources.USER) : H.format.list != null && this.quill.format("list", !1, c.default.sources.USER);
                }
              },
              "indent code-block": j(!0),
              "outdent code-block": j(!1),
              "remove tab": {
                key: F.keys.TAB,
                shiftKey: !0,
                collapsed: !0,
                prefix: /\t$/,
                handler: function(D) {
                  this.quill.deleteText(D.index - 1, 1, c.default.sources.USER);
                }
              },
              tab: {
                key: F.keys.TAB,
                handler: function(D) {
                  this.quill.history.cutoff();
                  var H = new a.default().retain(D.index).delete(D.length).insert("	");
                  this.quill.updateContents(H, c.default.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(D.index + 1, c.default.sources.SILENT);
                }
              },
              "list empty enter": {
                key: F.keys.ENTER,
                collapsed: !0,
                format: ["list"],
                empty: !0,
                handler: function(D, H) {
                  this.quill.format("list", !1, c.default.sources.USER), H.format.indent && this.quill.format("indent", !1, c.default.sources.USER);
                }
              },
              "checklist enter": {
                key: F.keys.ENTER,
                collapsed: !0,
                format: { list: "checked" },
                handler: function(D) {
                  var H = this.quill.getLine(D.index), K = q(H, 2), V = K[0], Q = K[1], J = (0, e.default)({}, V.formats(), { list: "checked" }), tt = new a.default().retain(D.index).insert(`
`, J).retain(V.length() - Q - 1).retain(1, { list: "unchecked" });
                  this.quill.updateContents(tt, c.default.sources.USER), this.quill.setSelection(D.index + 1, c.default.sources.SILENT), this.quill.scrollIntoView();
                }
              },
              "header enter": {
                key: F.keys.ENTER,
                collapsed: !0,
                format: ["header"],
                suffix: /^$/,
                handler: function(D, H) {
                  var K = this.quill.getLine(D.index), V = q(K, 2), Q = V[0], J = V[1], tt = new a.default().retain(D.index).insert(`
`, H.format).retain(Q.length() - J - 1).retain(1, { header: null });
                  this.quill.updateContents(tt, c.default.sources.USER), this.quill.setSelection(D.index + 1, c.default.sources.SILENT), this.quill.scrollIntoView();
                }
              },
              "list autofill": {
                key: " ",
                collapsed: !0,
                format: { list: !1 },
                prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
                handler: function(D, H) {
                  var K = H.prefix.length, V = this.quill.getLine(D.index), Q = q(V, 2), J = Q[0], tt = Q[1];
                  if (tt > K)
                    return !0;
                  var it = void 0;
                  switch (H.prefix.trim()) {
                    case "[]":
                    case "[ ]":
                      it = "unchecked";
                      break;
                    case "[x]":
                      it = "checked";
                      break;
                    case "-":
                    case "*":
                      it = "bullet";
                      break;
                    default:
                      it = "ordered";
                  }
                  this.quill.insertText(D.index, " ", c.default.sources.USER), this.quill.history.cutoff();
                  var ot = new a.default().retain(D.index - tt).delete(K + 1).retain(J.length() - 2 - tt).retain(1, { list: it });
                  this.quill.updateContents(ot, c.default.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(D.index - K, c.default.sources.SILENT);
                }
              },
              "code exit": {
                key: F.keys.ENTER,
                collapsed: !0,
                format: ["code-block"],
                prefix: /\n\n$/,
                suffix: /^\s+$/,
                handler: function(D) {
                  var H = this.quill.getLine(D.index), K = q(H, 2), V = K[0], Q = K[1], J = new a.default().retain(D.index + V.length() - Q - 2).retain(1, { "code-block": null }).delete(1);
                  this.quill.updateContents(J, c.default.sources.USER);
                }
              },
              "embed left": W(F.keys.LEFT, !1),
              "embed left shift": W(F.keys.LEFT, !0),
              "embed right": W(F.keys.RIGHT, !1),
              "embed right shift": W(F.keys.RIGHT, !0)
            }
          };
          function W(P, D) {
            var H, K = P === F.keys.LEFT ? "prefix" : "suffix";
            return H = {
              key: P,
              shiftKey: D,
              altKey: null
            }, p(H, K, /^$/), p(H, "handler", function(Q) {
              var J = Q.index;
              P === F.keys.RIGHT && (J += Q.length + 1);
              var tt = this.quill.getLeaf(J), it = q(tt, 1), ot = it[0];
              return ot instanceof f.default.Embed ? (P === F.keys.LEFT ? D ? this.quill.setSelection(Q.index - 1, Q.length + 1, c.default.sources.USER) : this.quill.setSelection(Q.index - 1, c.default.sources.USER) : D ? this.quill.setSelection(Q.index, Q.length + 1, c.default.sources.USER) : this.quill.setSelection(Q.index + Q.length + 1, c.default.sources.USER), !1) : !0;
            }), H;
          }
          function B(P, D) {
            if (!(P.index === 0 || this.quill.getLength() <= 1)) {
              var H = this.quill.getLine(P.index), K = q(H, 1), V = K[0], Q = {};
              if (D.offset === 0) {
                var J = this.quill.getLine(P.index - 1), tt = q(J, 1), it = tt[0];
                if (it != null && it.length() > 1) {
                  var ot = V.formats(), ct = this.quill.getFormat(P.index - 1, 1);
                  Q = r.default.attributes.diff(ot, ct) || {};
                }
              }
              var ft = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(D.prefix) ? 2 : 1;
              this.quill.deleteText(P.index - ft, ft, c.default.sources.USER), Object.keys(Q).length > 0 && this.quill.formatLine(P.index - ft, ft, Q, c.default.sources.USER), this.quill.focus();
            }
          }
          function M(P, D) {
            var H = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(D.suffix) ? 2 : 1;
            if (!(P.index >= this.quill.getLength() - H)) {
              var K = {}, V = 0, Q = this.quill.getLine(P.index), J = q(Q, 1), tt = J[0];
              if (D.offset >= tt.length() - 1) {
                var it = this.quill.getLine(P.index + 1), ot = q(it, 1), ct = ot[0];
                if (ct) {
                  var ft = tt.formats(), z = this.quill.getFormat(P.index, 1);
                  K = r.default.attributes.diff(ft, z) || {}, V = ct.length();
                }
              }
              this.quill.deleteText(P.index, H, c.default.sources.USER), Object.keys(K).length > 0 && this.quill.formatLine(P.index + V - 1, H, K, c.default.sources.USER);
            }
          }
          function A(P) {
            var D = this.quill.getLines(P), H = {};
            if (D.length > 1) {
              var K = D[0].formats(), V = D[D.length - 1].formats();
              H = r.default.attributes.diff(V, K) || {};
            }
            this.quill.deleteText(P, c.default.sources.USER), Object.keys(H).length > 0 && this.quill.formatLine(P.index, 1, H, c.default.sources.USER), this.quill.setSelection(P.index, c.default.sources.SILENT), this.quill.focus();
          }
          function L(P, D) {
            var H = this;
            P.length > 0 && this.quill.scroll.deleteAt(P.index, P.length);
            var K = Object.keys(D.format).reduce(function(V, Q) {
              return f.default.query(Q, f.default.Scope.BLOCK) && !Array.isArray(D.format[Q]) && (V[Q] = D.format[Q]), V;
            }, {});
            this.quill.insertText(P.index, `
`, K, c.default.sources.USER), this.quill.setSelection(P.index + 1, c.default.sources.SILENT), this.quill.focus(), Object.keys(D.format).forEach(function(V) {
              K[V] == null && (Array.isArray(D.format[V]) || V !== "link" && H.quill.format(V, D.format[V], c.default.sources.USER));
            });
          }
          function j(P) {
            return {
              key: F.keys.TAB,
              shiftKey: !P,
              format: { "code-block": !0 },
              handler: function(H) {
                var K = f.default.query("code-block"), V = H.index, Q = H.length, J = this.quill.scroll.descendant(K, V), tt = q(J, 2), it = tt[0], ot = tt[1];
                if (it != null) {
                  var ct = this.quill.getIndex(it), ft = it.newlineIndex(ot, !0) + 1, z = it.newlineIndex(ct + ot + Q), G = it.domNode.textContent.slice(ft, z).split(`
`);
                  ot = 0, G.forEach(function(Y, X) {
                    P ? (it.insertAt(ft + ot, K.TAB), ot += K.TAB.length, X === 0 ? V += K.TAB.length : Q += K.TAB.length) : Y.startsWith(K.TAB) && (it.deleteAt(ft + ot, K.TAB.length), ot -= K.TAB.length, X === 0 ? V -= K.TAB.length : Q -= K.TAB.length), ot += Y.length + 1;
                  }), this.quill.update(c.default.sources.USER), this.quill.setSelection(V, Q, c.default.sources.SILENT);
                }
              }
            };
          }
          function U(P) {
            return {
              key: P[0].toUpperCase(),
              shortKey: !0,
              handler: function(H, K) {
                this.quill.format(P, !K.format[P], c.default.sources.USER);
              }
            };
          }
          function C(P) {
            if (typeof P == "string" || typeof P == "number")
              return C({ key: P });
            if ((typeof P > "u" ? "undefined" : k(P)) === "object" && (P = (0, y.default)(P, !1)), typeof P.key == "string")
              if (F.keys[P.key.toUpperCase()] != null)
                P.key = F.keys[P.key.toUpperCase()];
              else if (P.key.length === 1)
                P.key = P.key.toUpperCase().charCodeAt(0);
              else
                return null;
            return P.shortKey && (P[$] = P.shortKey, delete P.shortKey), P;
          }
          s.default = F, s.SHORTKEY = $;
        },
        /* 24 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var k = /* @__PURE__ */ function() {
            function r(i, f) {
              var n = [], c = !0, N = !1, O = void 0;
              try {
                for (var E = i[Symbol.iterator](), x; !(c = (x = E.next()).done) && (n.push(x.value), !(f && n.length === f)); c = !0)
                  ;
              } catch (m) {
                N = !0, O = m;
              } finally {
                try {
                  !c && E.return && E.return();
                } finally {
                  if (N)
                    throw O;
                }
              }
              return n;
            }
            return function(i, f) {
              if (Array.isArray(i))
                return i;
              if (Symbol.iterator in Object(i))
                return r(i, f);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), q = function r(i, f, n) {
            i === null && (i = Function.prototype);
            var c = Object.getOwnPropertyDescriptor(i, f);
            if (c === void 0) {
              var N = Object.getPrototypeOf(i);
              return N === null ? void 0 : r(N, f, n);
            } else {
              if ("value" in c)
                return c.value;
              var O = c.get;
              return O === void 0 ? void 0 : O.call(n);
            }
          }, _ = /* @__PURE__ */ function() {
            function r(i, f) {
              for (var n = 0; n < f.length; n++) {
                var c = f[n];
                c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(i, c.key, c);
              }
            }
            return function(i, f, n) {
              return f && r(i.prototype, f), n && r(i, n), i;
            };
          }(), v = d(0), y = t(v), h = d(7), o = t(h);
          function t(r) {
            return r && r.__esModule ? r : { default: r };
          }
          function e(r, i) {
            if (!(r instanceof i))
              throw new TypeError("Cannot call a class as a function");
          }
          function u(r, i) {
            if (!r)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return i && (typeof i == "object" || typeof i == "function") ? i : r;
          }
          function a(r, i) {
            if (typeof i != "function" && i !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof i);
            r.prototype = Object.create(i && i.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } }), i && (Object.setPrototypeOf ? Object.setPrototypeOf(r, i) : r.__proto__ = i);
          }
          var l = function(r) {
            a(i, r), _(i, null, [{
              key: "value",
              value: function() {
              }
            }]);
            function i(f, n) {
              e(this, i);
              var c = u(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, f));
              return c.selection = n, c.textNode = document.createTextNode(i.CONTENTS), c.domNode.appendChild(c.textNode), c._length = 0, c;
            }
            return _(i, [{
              key: "detach",
              value: function() {
                this.parent != null && this.parent.removeChild(this);
              }
            }, {
              key: "format",
              value: function(n, c) {
                if (this._length !== 0)
                  return q(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "format", this).call(this, n, c);
                for (var N = this, O = 0; N != null && N.statics.scope !== y.default.Scope.BLOCK_BLOT; )
                  O += N.offset(N.parent), N = N.parent;
                N != null && (this._length = i.CONTENTS.length, N.optimize(), N.formatAt(O, i.CONTENTS.length, n, c), this._length = 0);
              }
            }, {
              key: "index",
              value: function(n, c) {
                return n === this.textNode ? 0 : q(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "index", this).call(this, n, c);
              }
            }, {
              key: "length",
              value: function() {
                return this._length;
              }
            }, {
              key: "position",
              value: function() {
                return [this.textNode, this.textNode.data.length];
              }
            }, {
              key: "remove",
              value: function() {
                q(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "remove", this).call(this), this.parent = null;
              }
            }, {
              key: "restore",
              value: function() {
                if (!(this.selection.composing || this.parent == null)) {
                  var n = this.textNode, c = this.selection.getNativeRange(), N = void 0, O = void 0, E = void 0;
                  if (c != null && c.start.node === n && c.end.node === n) {
                    var x = [n, c.start.offset, c.end.offset];
                    N = x[0], O = x[1], E = x[2];
                  }
                  for (; this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode; )
                    this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
                  if (this.textNode.data !== i.CONTENTS) {
                    var m = this.textNode.data.split(i.CONTENTS).join("");
                    this.next instanceof o.default ? (N = this.next.domNode, this.next.insertAt(0, m), this.textNode.data = i.CONTENTS) : (this.textNode.data = m, this.parent.insertBefore(y.default.create(this.textNode), this), this.textNode = document.createTextNode(i.CONTENTS), this.domNode.appendChild(this.textNode));
                  }
                  if (this.remove(), O != null) {
                    var p = [O, E].map(function(T) {
                      return Math.max(0, Math.min(N.data.length, T - 1));
                    }), g = k(p, 2);
                    return O = g[0], E = g[1], {
                      startNode: N,
                      startOffset: O,
                      endNode: N,
                      endOffset: E
                    };
                  }
                }
              }
            }, {
              key: "update",
              value: function(n, c) {
                var N = this;
                if (n.some(function(E) {
                  return E.type === "characterData" && E.target === N.textNode;
                })) {
                  var O = this.restore();
                  O && (c.range = O);
                }
              }
            }, {
              key: "value",
              value: function() {
                return "";
              }
            }]), i;
          }(y.default.Embed);
          l.blotName = "cursor", l.className = "ql-cursor", l.tagName = "span", l.CONTENTS = "\uFEFF", s.default = l;
        },
        /* 25 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var k = d(0), q = y(k), _ = d(4), v = y(_);
          function y(u) {
            return u && u.__esModule ? u : { default: u };
          }
          function h(u, a) {
            if (!(u instanceof a))
              throw new TypeError("Cannot call a class as a function");
          }
          function o(u, a) {
            if (!u)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return a && (typeof a == "object" || typeof a == "function") ? a : u;
          }
          function t(u, a) {
            if (typeof a != "function" && a !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof a);
            u.prototype = Object.create(a && a.prototype, { constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 } }), a && (Object.setPrototypeOf ? Object.setPrototypeOf(u, a) : u.__proto__ = a);
          }
          var e = function(u) {
            t(a, u);
            function a() {
              return h(this, a), o(this, (a.__proto__ || Object.getPrototypeOf(a)).apply(this, arguments));
            }
            return a;
          }(q.default.Container);
          e.allowedChildren = [v.default, _.BlockEmbed, e], s.default = e;
        },
        /* 26 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.ColorStyle = s.ColorClass = s.ColorAttributor = void 0;
          var k = /* @__PURE__ */ function() {
            function l(r, i) {
              for (var f = 0; f < i.length; f++) {
                var n = i[f];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n);
              }
            }
            return function(r, i, f) {
              return i && l(r.prototype, i), f && l(r, f), r;
            };
          }(), q = function l(r, i, f) {
            r === null && (r = Function.prototype);
            var n = Object.getOwnPropertyDescriptor(r, i);
            if (n === void 0) {
              var c = Object.getPrototypeOf(r);
              return c === null ? void 0 : l(c, i, f);
            } else {
              if ("value" in n)
                return n.value;
              var N = n.get;
              return N === void 0 ? void 0 : N.call(f);
            }
          }, _ = d(0), v = y(_);
          function y(l) {
            return l && l.__esModule ? l : { default: l };
          }
          function h(l, r) {
            if (!(l instanceof r))
              throw new TypeError("Cannot call a class as a function");
          }
          function o(l, r) {
            if (!l)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return r && (typeof r == "object" || typeof r == "function") ? r : l;
          }
          function t(l, r) {
            if (typeof r != "function" && r !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof r);
            l.prototype = Object.create(r && r.prototype, { constructor: { value: l, enumerable: !1, writable: !0, configurable: !0 } }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(l, r) : l.__proto__ = r);
          }
          var e = function(l) {
            t(r, l);
            function r() {
              return h(this, r), o(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
            }
            return k(r, [{
              key: "value",
              value: function(f) {
                var n = q(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "value", this).call(this, f);
                return n.startsWith("rgb(") ? (n = n.replace(/^[^\d]+/, "").replace(/[^\d]+$/, ""), "#" + n.split(",").map(function(c) {
                  return ("00" + parseInt(c).toString(16)).slice(-2);
                }).join("")) : n;
              }
            }]), r;
          }(v.default.Attributor.Style), u = new v.default.Attributor.Class("color", "ql-color", {
            scope: v.default.Scope.INLINE
          }), a = new e("color", "color", {
            scope: v.default.Scope.INLINE
          });
          s.ColorAttributor = e, s.ColorClass = u, s.ColorStyle = a;
        },
        /* 27 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.sanitize = s.default = void 0;
          var k = /* @__PURE__ */ function() {
            function a(l, r) {
              for (var i = 0; i < r.length; i++) {
                var f = r[i];
                f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(l, f.key, f);
              }
            }
            return function(l, r, i) {
              return r && a(l.prototype, r), i && a(l, i), l;
            };
          }(), q = function a(l, r, i) {
            l === null && (l = Function.prototype);
            var f = Object.getOwnPropertyDescriptor(l, r);
            if (f === void 0) {
              var n = Object.getPrototypeOf(l);
              return n === null ? void 0 : a(n, r, i);
            } else {
              if ("value" in f)
                return f.value;
              var c = f.get;
              return c === void 0 ? void 0 : c.call(i);
            }
          }, _ = d(6), v = y(_);
          function y(a) {
            return a && a.__esModule ? a : { default: a };
          }
          function h(a, l) {
            if (!(a instanceof l))
              throw new TypeError("Cannot call a class as a function");
          }
          function o(a, l) {
            if (!a)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return l && (typeof l == "object" || typeof l == "function") ? l : a;
          }
          function t(a, l) {
            if (typeof l != "function" && l !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof l);
            a.prototype = Object.create(l && l.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), l && (Object.setPrototypeOf ? Object.setPrototypeOf(a, l) : a.__proto__ = l);
          }
          var e = function(a) {
            t(l, a);
            function l() {
              return h(this, l), o(this, (l.__proto__ || Object.getPrototypeOf(l)).apply(this, arguments));
            }
            return k(l, [{
              key: "format",
              value: function(i, f) {
                if (i !== this.statics.blotName || !f)
                  return q(l.prototype.__proto__ || Object.getPrototypeOf(l.prototype), "format", this).call(this, i, f);
                f = this.constructor.sanitize(f), this.domNode.setAttribute("href", f);
              }
            }], [{
              key: "create",
              value: function(i) {
                var f = q(l.__proto__ || Object.getPrototypeOf(l), "create", this).call(this, i);
                return i = this.sanitize(i), f.setAttribute("href", i), f.setAttribute("rel", "noopener noreferrer"), f.setAttribute("target", "_blank"), f;
              }
            }, {
              key: "formats",
              value: function(i) {
                return i.getAttribute("href");
              }
            }, {
              key: "sanitize",
              value: function(i) {
                return u(i, this.PROTOCOL_WHITELIST) ? i : this.SANITIZED_URL;
              }
            }]), l;
          }(v.default);
          e.blotName = "link", e.tagName = "A", e.SANITIZED_URL = "about:blank", e.PROTOCOL_WHITELIST = ["http", "https", "mailto", "tel"];
          function u(a, l) {
            var r = document.createElement("a");
            r.href = a;
            var i = r.href.slice(0, r.href.indexOf(":"));
            return l.indexOf(i) > -1;
          }
          s.default = e, s.sanitize = u;
        },
        /* 28 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var k = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(l) {
            return typeof l;
          } : function(l) {
            return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l;
          }, q = /* @__PURE__ */ function() {
            function l(r, i) {
              for (var f = 0; f < i.length; f++) {
                var n = i[f];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n);
              }
            }
            return function(r, i, f) {
              return i && l(r.prototype, i), f && l(r, f), r;
            };
          }(), _ = d(23), v = o(_), y = d(107), h = o(y);
          function o(l) {
            return l && l.__esModule ? l : { default: l };
          }
          function t(l, r) {
            if (!(l instanceof r))
              throw new TypeError("Cannot call a class as a function");
          }
          var e = 0;
          function u(l, r) {
            l.setAttribute(r, l.getAttribute(r) !== "true");
          }
          var a = function() {
            function l(r) {
              var i = this;
              t(this, l), this.select = r, this.container = document.createElement("span"), this.buildPicker(), this.select.style.display = "none", this.select.parentNode.insertBefore(this.container, this.select), this.label.addEventListener("mousedown", function() {
                i.togglePicker();
              }), this.label.addEventListener("keydown", function(f) {
                switch (f.keyCode) {
                  case v.default.keys.ENTER:
                    i.togglePicker();
                    break;
                  case v.default.keys.ESCAPE:
                    i.escape(), f.preventDefault();
                    break;
                }
              }), this.select.addEventListener("change", this.update.bind(this));
            }
            return q(l, [{
              key: "togglePicker",
              value: function() {
                this.container.classList.toggle("ql-expanded"), u(this.label, "aria-expanded"), u(this.options, "aria-hidden");
              }
            }, {
              key: "buildItem",
              value: function(i) {
                var f = this, n = document.createElement("span");
                return n.tabIndex = "0", n.setAttribute("role", "button"), n.classList.add("ql-picker-item"), i.hasAttribute("value") && n.setAttribute("data-value", i.getAttribute("value")), i.textContent && n.setAttribute("data-label", i.textContent), n.addEventListener("click", function() {
                  f.selectItem(n, !0);
                }), n.addEventListener("keydown", function(c) {
                  switch (c.keyCode) {
                    case v.default.keys.ENTER:
                      f.selectItem(n, !0), c.preventDefault();
                      break;
                    case v.default.keys.ESCAPE:
                      f.escape(), c.preventDefault();
                      break;
                  }
                }), n;
              }
            }, {
              key: "buildLabel",
              value: function() {
                var i = document.createElement("span");
                return i.classList.add("ql-picker-label"), i.innerHTML = h.default, i.tabIndex = "0", i.setAttribute("role", "button"), i.setAttribute("aria-expanded", "false"), this.container.appendChild(i), i;
              }
            }, {
              key: "buildOptions",
              value: function() {
                var i = this, f = document.createElement("span");
                f.classList.add("ql-picker-options"), f.setAttribute("aria-hidden", "true"), f.tabIndex = "-1", f.id = "ql-picker-options-" + e, e += 1, this.label.setAttribute("aria-controls", f.id), this.options = f, [].slice.call(this.select.options).forEach(function(n) {
                  var c = i.buildItem(n);
                  f.appendChild(c), n.selected === !0 && i.selectItem(c);
                }), this.container.appendChild(f);
              }
            }, {
              key: "buildPicker",
              value: function() {
                var i = this;
                [].slice.call(this.select.attributes).forEach(function(f) {
                  i.container.setAttribute(f.name, f.value);
                }), this.container.classList.add("ql-picker"), this.label = this.buildLabel(), this.buildOptions();
              }
            }, {
              key: "escape",
              value: function() {
                var i = this;
                this.close(), setTimeout(function() {
                  return i.label.focus();
                }, 1);
              }
            }, {
              key: "close",
              value: function() {
                this.container.classList.remove("ql-expanded"), this.label.setAttribute("aria-expanded", "false"), this.options.setAttribute("aria-hidden", "true");
              }
            }, {
              key: "selectItem",
              value: function(i) {
                var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = this.container.querySelector(".ql-selected");
                if (i !== n && (n != null && n.classList.remove("ql-selected"), i != null && (i.classList.add("ql-selected"), this.select.selectedIndex = [].indexOf.call(i.parentNode.children, i), i.hasAttribute("data-value") ? this.label.setAttribute("data-value", i.getAttribute("data-value")) : this.label.removeAttribute("data-value"), i.hasAttribute("data-label") ? this.label.setAttribute("data-label", i.getAttribute("data-label")) : this.label.removeAttribute("data-label"), f))) {
                  if (typeof Event == "function")
                    this.select.dispatchEvent(new Event("change"));
                  else if ((typeof Event > "u" ? "undefined" : k(Event)) === "object") {
                    var c = document.createEvent("Event");
                    c.initEvent("change", !0, !0), this.select.dispatchEvent(c);
                  }
                  this.close();
                }
              }
            }, {
              key: "update",
              value: function() {
                var i = void 0;
                if (this.select.selectedIndex > -1) {
                  var f = this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];
                  i = this.select.options[this.select.selectedIndex], this.selectItem(f);
                } else
                  this.selectItem(null);
                var n = i != null && i !== this.select.querySelector("option[selected]");
                this.label.classList.toggle("ql-active", n);
              }
            }]), l;
          }();
          s.default = a;
        },
        /* 29 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var k = d(0), q = I(k), _ = d(5), v = I(_), y = d(4), h = I(y), o = d(16), t = I(o), e = d(25), u = I(e), a = d(24), l = I(a), r = d(35), i = I(r), f = d(6), n = I(f), c = d(22), N = I(c), O = d(7), E = I(O), x = d(55), m = I(x), p = d(42), g = I(p), T = d(23), S = I(T);
          function I($) {
            return $ && $.__esModule ? $ : { default: $ };
          }
          v.default.register({
            "blots/block": h.default,
            "blots/block/embed": y.BlockEmbed,
            "blots/break": t.default,
            "blots/container": u.default,
            "blots/cursor": l.default,
            "blots/embed": i.default,
            "blots/inline": n.default,
            "blots/scroll": N.default,
            "blots/text": E.default,
            "modules/clipboard": m.default,
            "modules/history": g.default,
            "modules/keyboard": S.default
          }), q.default.register(h.default, t.default, l.default, n.default, N.default, E.default), s.default = v.default;
        },
        /* 30 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", { value: !0 });
          var k = d(1), q = (
            /** @class */
            function() {
              function _(v) {
                this.domNode = v, this.domNode[k.DATA_KEY] = { blot: this };
              }
              return Object.defineProperty(_.prototype, "statics", {
                // Hack for accessing inherited static methods
                get: function() {
                  return this.constructor;
                },
                enumerable: !0,
                configurable: !0
              }), _.create = function(v) {
                if (this.tagName == null)
                  throw new k.ParchmentError("Blot definition missing tagName");
                var y;
                return Array.isArray(this.tagName) ? (typeof v == "string" && (v = v.toUpperCase(), parseInt(v).toString() === v && (v = parseInt(v))), typeof v == "number" ? y = document.createElement(this.tagName[v - 1]) : this.tagName.indexOf(v) > -1 ? y = document.createElement(v) : y = document.createElement(this.tagName[0])) : y = document.createElement(this.tagName), this.className && y.classList.add(this.className), y;
              }, _.prototype.attach = function() {
                this.parent != null && (this.scroll = this.parent.scroll);
              }, _.prototype.clone = function() {
                var v = this.domNode.cloneNode(!1);
                return k.create(v);
              }, _.prototype.detach = function() {
                this.parent != null && this.parent.removeChild(this), delete this.domNode[k.DATA_KEY];
              }, _.prototype.deleteAt = function(v, y) {
                var h = this.isolate(v, y);
                h.remove();
              }, _.prototype.formatAt = function(v, y, h, o) {
                var t = this.isolate(v, y);
                if (k.query(h, k.Scope.BLOT) != null && o)
                  t.wrap(h, o);
                else if (k.query(h, k.Scope.ATTRIBUTE) != null) {
                  var e = k.create(this.statics.scope);
                  t.wrap(e), e.format(h, o);
                }
              }, _.prototype.insertAt = function(v, y, h) {
                var o = h == null ? k.create("text", y) : k.create(y, h), t = this.split(v);
                this.parent.insertBefore(o, t);
              }, _.prototype.insertInto = function(v, y) {
                y === void 0 && (y = null), this.parent != null && this.parent.children.remove(this);
                var h = null;
                v.children.insertBefore(this, y), y != null && (h = y.domNode), (this.domNode.parentNode != v.domNode || this.domNode.nextSibling != h) && v.domNode.insertBefore(this.domNode, h), this.parent = v, this.attach();
              }, _.prototype.isolate = function(v, y) {
                var h = this.split(v);
                return h.split(y), h;
              }, _.prototype.length = function() {
                return 1;
              }, _.prototype.offset = function(v) {
                return v === void 0 && (v = this.parent), this.parent == null || this == v ? 0 : this.parent.children.offset(this) + this.parent.offset(v);
              }, _.prototype.optimize = function(v) {
                this.domNode[k.DATA_KEY] != null && delete this.domNode[k.DATA_KEY].mutations;
              }, _.prototype.remove = function() {
                this.domNode.parentNode != null && this.domNode.parentNode.removeChild(this.domNode), this.detach();
              }, _.prototype.replace = function(v) {
                v.parent != null && (v.parent.insertBefore(this, v.next), v.remove());
              }, _.prototype.replaceWith = function(v, y) {
                var h = typeof v == "string" ? k.create(v, y) : v;
                return h.replace(this), h;
              }, _.prototype.split = function(v, y) {
                return v === 0 ? this : this.next;
              }, _.prototype.update = function(v, y) {
              }, _.prototype.wrap = function(v, y) {
                var h = typeof v == "string" ? k.create(v, y) : v;
                return this.parent != null && this.parent.insertBefore(h, this.next), h.appendChild(this), h;
              }, _.blotName = "abstract", _;
            }()
          );
          s.default = q;
        },
        /* 31 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", { value: !0 });
          var k = d(12), q = d(32), _ = d(33), v = d(1), y = (
            /** @class */
            function() {
              function h(o) {
                this.attributes = {}, this.domNode = o, this.build();
              }
              return h.prototype.attribute = function(o, t) {
                t ? o.add(this.domNode, t) && (o.value(this.domNode) != null ? this.attributes[o.attrName] = o : delete this.attributes[o.attrName]) : (o.remove(this.domNode), delete this.attributes[o.attrName]);
              }, h.prototype.build = function() {
                var o = this;
                this.attributes = {};
                var t = k.default.keys(this.domNode), e = q.default.keys(this.domNode), u = _.default.keys(this.domNode);
                t.concat(e).concat(u).forEach(function(a) {
                  var l = v.query(a, v.Scope.ATTRIBUTE);
                  l instanceof k.default && (o.attributes[l.attrName] = l);
                });
              }, h.prototype.copy = function(o) {
                var t = this;
                Object.keys(this.attributes).forEach(function(e) {
                  var u = t.attributes[e].value(t.domNode);
                  o.format(e, u);
                });
              }, h.prototype.move = function(o) {
                var t = this;
                this.copy(o), Object.keys(this.attributes).forEach(function(e) {
                  t.attributes[e].remove(t.domNode);
                }), this.attributes = {};
              }, h.prototype.values = function() {
                var o = this;
                return Object.keys(this.attributes).reduce(function(t, e) {
                  return t[e] = o.attributes[e].value(o.domNode), t;
                }, {});
              }, h;
            }()
          );
          s.default = y;
        },
        /* 32 */
        /***/
        function(b, s, d) {
          var k = this && this.__extends || function() {
            var y = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(h, o) {
              h.__proto__ = o;
            } || function(h, o) {
              for (var t in o)
                o.hasOwnProperty(t) && (h[t] = o[t]);
            };
            return function(h, o) {
              y(h, o);
              function t() {
                this.constructor = h;
              }
              h.prototype = o === null ? Object.create(o) : (t.prototype = o.prototype, new t());
            };
          }();
          Object.defineProperty(s, "__esModule", { value: !0 });
          var q = d(12);
          function _(y, h) {
            var o = y.getAttribute("class") || "";
            return o.split(/\s+/).filter(function(t) {
              return t.indexOf(h + "-") === 0;
            });
          }
          var v = (
            /** @class */
            function(y) {
              k(h, y);
              function h() {
                return y !== null && y.apply(this, arguments) || this;
              }
              return h.keys = function(o) {
                return (o.getAttribute("class") || "").split(/\s+/).map(function(t) {
                  return t.split("-").slice(0, -1).join("-");
                });
              }, h.prototype.add = function(o, t) {
                return this.canAdd(o, t) ? (this.remove(o), o.classList.add(this.keyName + "-" + t), !0) : !1;
              }, h.prototype.remove = function(o) {
                var t = _(o, this.keyName);
                t.forEach(function(e) {
                  o.classList.remove(e);
                }), o.classList.length === 0 && o.removeAttribute("class");
              }, h.prototype.value = function(o) {
                var t = _(o, this.keyName)[0] || "", e = t.slice(this.keyName.length + 1);
                return this.canAdd(o, e) ? e : "";
              }, h;
            }(q.default)
          );
          s.default = v;
        },
        /* 33 */
        /***/
        function(b, s, d) {
          var k = this && this.__extends || function() {
            var y = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(h, o) {
              h.__proto__ = o;
            } || function(h, o) {
              for (var t in o)
                o.hasOwnProperty(t) && (h[t] = o[t]);
            };
            return function(h, o) {
              y(h, o);
              function t() {
                this.constructor = h;
              }
              h.prototype = o === null ? Object.create(o) : (t.prototype = o.prototype, new t());
            };
          }();
          Object.defineProperty(s, "__esModule", { value: !0 });
          var q = d(12);
          function _(y) {
            var h = y.split("-"), o = h.slice(1).map(function(t) {
              return t[0].toUpperCase() + t.slice(1);
            }).join("");
            return h[0] + o;
          }
          var v = (
            /** @class */
            function(y) {
              k(h, y);
              function h() {
                return y !== null && y.apply(this, arguments) || this;
              }
              return h.keys = function(o) {
                return (o.getAttribute("style") || "").split(";").map(function(t) {
                  var e = t.split(":");
                  return e[0].trim();
                });
              }, h.prototype.add = function(o, t) {
                return this.canAdd(o, t) ? (o.style[_(this.keyName)] = t, !0) : !1;
              }, h.prototype.remove = function(o) {
                o.style[_(this.keyName)] = "", o.getAttribute("style") || o.removeAttribute("style");
              }, h.prototype.value = function(o) {
                var t = o.style[_(this.keyName)];
                return this.canAdd(o, t) ? t : "";
              }, h;
            }(q.default)
          );
          s.default = v;
        },
        /* 34 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var k = /* @__PURE__ */ function() {
            function v(y, h) {
              for (var o = 0; o < h.length; o++) {
                var t = h[o];
                t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(y, t.key, t);
              }
            }
            return function(y, h, o) {
              return h && v(y.prototype, h), o && v(y, o), y;
            };
          }();
          function q(v, y) {
            if (!(v instanceof y))
              throw new TypeError("Cannot call a class as a function");
          }
          var _ = function() {
            function v(y, h) {
              q(this, v), this.quill = y, this.options = h, this.modules = {};
            }
            return k(v, [{
              key: "init",
              value: function() {
                var h = this;
                Object.keys(this.options.modules).forEach(function(o) {
                  h.modules[o] == null && h.addModule(o);
                });
              }
            }, {
              key: "addModule",
              value: function(h) {
                var o = this.quill.constructor.import("modules/" + h);
                return this.modules[h] = new o(this.quill, this.options.modules[h] || {}), this.modules[h];
              }
            }]), v;
          }();
          _.DEFAULTS = {
            modules: {}
          }, _.themes = {
            default: _
          }, s.default = _;
        },
        /* 35 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var k = /* @__PURE__ */ function() {
            function r(i, f) {
              for (var n = 0; n < f.length; n++) {
                var c = f[n];
                c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(i, c.key, c);
              }
            }
            return function(i, f, n) {
              return f && r(i.prototype, f), n && r(i, n), i;
            };
          }(), q = function r(i, f, n) {
            i === null && (i = Function.prototype);
            var c = Object.getOwnPropertyDescriptor(i, f);
            if (c === void 0) {
              var N = Object.getPrototypeOf(i);
              return N === null ? void 0 : r(N, f, n);
            } else {
              if ("value" in c)
                return c.value;
              var O = c.get;
              return O === void 0 ? void 0 : O.call(n);
            }
          }, _ = d(0), v = o(_), y = d(7), h = o(y);
          function o(r) {
            return r && r.__esModule ? r : { default: r };
          }
          function t(r, i) {
            if (!(r instanceof i))
              throw new TypeError("Cannot call a class as a function");
          }
          function e(r, i) {
            if (!r)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return i && (typeof i == "object" || typeof i == "function") ? i : r;
          }
          function u(r, i) {
            if (typeof i != "function" && i !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof i);
            r.prototype = Object.create(i && i.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } }), i && (Object.setPrototypeOf ? Object.setPrototypeOf(r, i) : r.__proto__ = i);
          }
          var a = "\uFEFF", l = function(r) {
            u(i, r);
            function i(f) {
              t(this, i);
              var n = e(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, f));
              return n.contentNode = document.createElement("span"), n.contentNode.setAttribute("contenteditable", !1), [].slice.call(n.domNode.childNodes).forEach(function(c) {
                n.contentNode.appendChild(c);
              }), n.leftGuard = document.createTextNode(a), n.rightGuard = document.createTextNode(a), n.domNode.appendChild(n.leftGuard), n.domNode.appendChild(n.contentNode), n.domNode.appendChild(n.rightGuard), n;
            }
            return k(i, [{
              key: "index",
              value: function(n, c) {
                return n === this.leftGuard ? 0 : n === this.rightGuard ? 1 : q(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "index", this).call(this, n, c);
              }
            }, {
              key: "restore",
              value: function(n) {
                var c = void 0, N = void 0, O = n.data.split(a).join("");
                if (n === this.leftGuard)
                  if (this.prev instanceof h.default) {
                    var E = this.prev.length();
                    this.prev.insertAt(E, O), c = {
                      startNode: this.prev.domNode,
                      startOffset: E + O.length
                    };
                  } else
                    N = document.createTextNode(O), this.parent.insertBefore(v.default.create(N), this), c = {
                      startNode: N,
                      startOffset: O.length
                    };
                else
                  n === this.rightGuard && (this.next instanceof h.default ? (this.next.insertAt(0, O), c = {
                    startNode: this.next.domNode,
                    startOffset: O.length
                  }) : (N = document.createTextNode(O), this.parent.insertBefore(v.default.create(N), this.next), c = {
                    startNode: N,
                    startOffset: O.length
                  }));
                return n.data = a, c;
              }
            }, {
              key: "update",
              value: function(n, c) {
                var N = this;
                n.forEach(function(O) {
                  if (O.type === "characterData" && (O.target === N.leftGuard || O.target === N.rightGuard)) {
                    var E = N.restore(O.target);
                    E && (c.range = E);
                  }
                });
              }
            }]), i;
          }(v.default.Embed);
          s.default = l;
        },
        /* 36 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.AlignStyle = s.AlignClass = s.AlignAttribute = void 0;
          var k = d(0), q = _(k);
          function _(t) {
            return t && t.__esModule ? t : { default: t };
          }
          var v = {
            scope: q.default.Scope.BLOCK,
            whitelist: ["right", "center", "justify"]
          }, y = new q.default.Attributor.Attribute("align", "align", v), h = new q.default.Attributor.Class("align", "ql-align", v), o = new q.default.Attributor.Style("align", "text-align", v);
          s.AlignAttribute = y, s.AlignClass = h, s.AlignStyle = o;
        },
        /* 37 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.BackgroundStyle = s.BackgroundClass = void 0;
          var k = d(0), q = v(k), _ = d(26);
          function v(o) {
            return o && o.__esModule ? o : { default: o };
          }
          var y = new q.default.Attributor.Class("background", "ql-bg", {
            scope: q.default.Scope.INLINE
          }), h = new _.ColorAttributor("background", "background-color", {
            scope: q.default.Scope.INLINE
          });
          s.BackgroundClass = y, s.BackgroundStyle = h;
        },
        /* 38 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.DirectionStyle = s.DirectionClass = s.DirectionAttribute = void 0;
          var k = d(0), q = _(k);
          function _(t) {
            return t && t.__esModule ? t : { default: t };
          }
          var v = {
            scope: q.default.Scope.BLOCK,
            whitelist: ["rtl"]
          }, y = new q.default.Attributor.Attribute("direction", "dir", v), h = new q.default.Attributor.Class("direction", "ql-direction", v), o = new q.default.Attributor.Style("direction", "direction", v);
          s.DirectionAttribute = y, s.DirectionClass = h, s.DirectionStyle = o;
        },
        /* 39 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.FontClass = s.FontStyle = void 0;
          var k = /* @__PURE__ */ function() {
            function r(i, f) {
              for (var n = 0; n < f.length; n++) {
                var c = f[n];
                c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(i, c.key, c);
              }
            }
            return function(i, f, n) {
              return f && r(i.prototype, f), n && r(i, n), i;
            };
          }(), q = function r(i, f, n) {
            i === null && (i = Function.prototype);
            var c = Object.getOwnPropertyDescriptor(i, f);
            if (c === void 0) {
              var N = Object.getPrototypeOf(i);
              return N === null ? void 0 : r(N, f, n);
            } else {
              if ("value" in c)
                return c.value;
              var O = c.get;
              return O === void 0 ? void 0 : O.call(n);
            }
          }, _ = d(0), v = y(_);
          function y(r) {
            return r && r.__esModule ? r : { default: r };
          }
          function h(r, i) {
            if (!(r instanceof i))
              throw new TypeError("Cannot call a class as a function");
          }
          function o(r, i) {
            if (!r)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return i && (typeof i == "object" || typeof i == "function") ? i : r;
          }
          function t(r, i) {
            if (typeof i != "function" && i !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof i);
            r.prototype = Object.create(i && i.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } }), i && (Object.setPrototypeOf ? Object.setPrototypeOf(r, i) : r.__proto__ = i);
          }
          var e = {
            scope: v.default.Scope.INLINE,
            whitelist: ["serif", "monospace"]
          }, u = new v.default.Attributor.Class("font", "ql-font", e), a = function(r) {
            t(i, r);
            function i() {
              return h(this, i), o(this, (i.__proto__ || Object.getPrototypeOf(i)).apply(this, arguments));
            }
            return k(i, [{
              key: "value",
              value: function(n) {
                return q(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "value", this).call(this, n).replace(/["']/g, "");
              }
            }]), i;
          }(v.default.Attributor.Style), l = new a("font", "font-family", e);
          s.FontStyle = l, s.FontClass = u;
        },
        /* 40 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.SizeStyle = s.SizeClass = void 0;
          var k = d(0), q = _(k);
          function _(h) {
            return h && h.__esModule ? h : { default: h };
          }
          var v = new q.default.Attributor.Class("size", "ql-size", {
            scope: q.default.Scope.INLINE,
            whitelist: ["small", "large", "huge"]
          }), y = new q.default.Attributor.Style("size", "font-size", {
            scope: q.default.Scope.INLINE,
            whitelist: ["10px", "18px", "32px"]
          });
          s.SizeClass = v, s.SizeStyle = y;
        },
        /* 41 */
        /***/
        function(b, s, d) {
          b.exports = {
            align: {
              "": d(76),
              center: d(77),
              right: d(78),
              justify: d(79)
            },
            background: d(80),
            blockquote: d(81),
            bold: d(82),
            clean: d(83),
            code: d(58),
            "code-block": d(58),
            color: d(84),
            direction: {
              "": d(85),
              rtl: d(86)
            },
            float: {
              center: d(87),
              full: d(88),
              left: d(89),
              right: d(90)
            },
            formula: d(91),
            header: {
              1: d(92),
              2: d(93)
            },
            italic: d(94),
            image: d(95),
            indent: {
              "+1": d(96),
              "-1": d(97)
            },
            link: d(98),
            list: {
              ordered: d(99),
              bullet: d(100),
              check: d(101)
            },
            script: {
              sub: d(102),
              super: d(103)
            },
            strike: d(104),
            underline: d(105),
            video: d(106)
          };
        },
        /* 42 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.getLastChangeIndex = s.default = void 0;
          var k = /* @__PURE__ */ function() {
            function f(n, c) {
              for (var N = 0; N < c.length; N++) {
                var O = c[N];
                O.enumerable = O.enumerable || !1, O.configurable = !0, "value" in O && (O.writable = !0), Object.defineProperty(n, O.key, O);
              }
            }
            return function(n, c, N) {
              return c && f(n.prototype, c), N && f(n, N), n;
            };
          }(), q = d(0), _ = t(q), v = d(5), y = t(v), h = d(9), o = t(h);
          function t(f) {
            return f && f.__esModule ? f : { default: f };
          }
          function e(f, n) {
            if (!(f instanceof n))
              throw new TypeError("Cannot call a class as a function");
          }
          function u(f, n) {
            if (!f)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return n && (typeof n == "object" || typeof n == "function") ? n : f;
          }
          function a(f, n) {
            if (typeof n != "function" && n !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof n);
            f.prototype = Object.create(n && n.prototype, { constructor: { value: f, enumerable: !1, writable: !0, configurable: !0 } }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(f, n) : f.__proto__ = n);
          }
          var l = function(f) {
            a(n, f);
            function n(c, N) {
              e(this, n);
              var O = u(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, c, N));
              return O.lastRecorded = 0, O.ignoreChange = !1, O.clear(), O.quill.on(y.default.events.EDITOR_CHANGE, function(E, x, m, p) {
                E !== y.default.events.TEXT_CHANGE || O.ignoreChange || (!O.options.userOnly || p === y.default.sources.USER ? O.record(x, m) : O.transform(x));
              }), O.quill.keyboard.addBinding({ key: "Z", shortKey: !0 }, O.undo.bind(O)), O.quill.keyboard.addBinding({ key: "Z", shortKey: !0, shiftKey: !0 }, O.redo.bind(O)), /Win/i.test(navigator.platform) && O.quill.keyboard.addBinding({ key: "Y", shortKey: !0 }, O.redo.bind(O)), O;
            }
            return k(n, [{
              key: "change",
              value: function(N, O) {
                if (this.stack[N].length !== 0) {
                  var E = this.stack[N].pop();
                  this.stack[O].push(E), this.lastRecorded = 0, this.ignoreChange = !0, this.quill.updateContents(E[N], y.default.sources.USER), this.ignoreChange = !1;
                  var x = i(E[N]);
                  this.quill.setSelection(x);
                }
              }
            }, {
              key: "clear",
              value: function() {
                this.stack = { undo: [], redo: [] };
              }
            }, {
              key: "cutoff",
              value: function() {
                this.lastRecorded = 0;
              }
            }, {
              key: "record",
              value: function(N, O) {
                if (N.ops.length !== 0) {
                  this.stack.redo = [];
                  var E = this.quill.getContents().diff(O), x = Date.now();
                  if (this.lastRecorded + this.options.delay > x && this.stack.undo.length > 0) {
                    var m = this.stack.undo.pop();
                    E = E.compose(m.undo), N = m.redo.compose(N);
                  } else
                    this.lastRecorded = x;
                  this.stack.undo.push({
                    redo: N,
                    undo: E
                  }), this.stack.undo.length > this.options.maxStack && this.stack.undo.shift();
                }
              }
            }, {
              key: "redo",
              value: function() {
                this.change("redo", "undo");
              }
            }, {
              key: "transform",
              value: function(N) {
                this.stack.undo.forEach(function(O) {
                  O.undo = N.transform(O.undo, !0), O.redo = N.transform(O.redo, !0);
                }), this.stack.redo.forEach(function(O) {
                  O.undo = N.transform(O.undo, !0), O.redo = N.transform(O.redo, !0);
                });
              }
            }, {
              key: "undo",
              value: function() {
                this.change("undo", "redo");
              }
            }]), n;
          }(o.default);
          l.DEFAULTS = {
            delay: 1e3,
            maxStack: 100,
            userOnly: !1
          };
          function r(f) {
            var n = f.ops[f.ops.length - 1];
            return n == null ? !1 : n.insert != null ? typeof n.insert == "string" && n.insert.endsWith(`
`) : n.attributes != null ? Object.keys(n.attributes).some(function(c) {
              return _.default.query(c, _.default.Scope.BLOCK) != null;
            }) : !1;
          }
          function i(f) {
            var n = f.reduce(function(N, O) {
              return N += O.delete || 0, N;
            }, 0), c = f.length() - n;
            return r(f) && (c -= 1), c;
          }
          s.default = l, s.getLastChangeIndex = i;
        },
        /* 43 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.default = s.BaseTooltip = void 0;
          var k = /* @__PURE__ */ function() {
            function L(j, U) {
              for (var C = 0; C < U.length; C++) {
                var P = U[C];
                P.enumerable = P.enumerable || !1, P.configurable = !0, "value" in P && (P.writable = !0), Object.defineProperty(j, P.key, P);
              }
            }
            return function(j, U, C) {
              return U && L(j.prototype, U), C && L(j, C), j;
            };
          }(), q = function L(j, U, C) {
            j === null && (j = Function.prototype);
            var P = Object.getOwnPropertyDescriptor(j, U);
            if (P === void 0) {
              var D = Object.getPrototypeOf(j);
              return D === null ? void 0 : L(D, U, C);
            } else {
              if ("value" in P)
                return P.value;
              var H = P.get;
              return H === void 0 ? void 0 : H.call(C);
            }
          }, _ = d(3), v = x(_), y = d(2), h = x(y), o = d(8), t = x(o), e = d(23), u = x(e), a = d(34), l = x(a), r = d(59), i = x(r), f = d(60), n = x(f), c = d(28), N = x(c), O = d(61), E = x(O);
          function x(L) {
            return L && L.__esModule ? L : { default: L };
          }
          function m(L, j) {
            if (!(L instanceof j))
              throw new TypeError("Cannot call a class as a function");
          }
          function p(L, j) {
            if (!L)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return j && (typeof j == "object" || typeof j == "function") ? j : L;
          }
          function g(L, j) {
            if (typeof j != "function" && j !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof j);
            L.prototype = Object.create(j && j.prototype, { constructor: { value: L, enumerable: !1, writable: !0, configurable: !0 } }), j && (Object.setPrototypeOf ? Object.setPrototypeOf(L, j) : L.__proto__ = j);
          }
          var T = [!1, "center", "right", "justify"], S = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"], I = [!1, "serif", "monospace"], $ = ["1", "2", "3", !1], F = ["small", !1, "large", "huge"], W = function(L) {
            g(j, L);
            function j(U, C) {
              m(this, j);
              var P = p(this, (j.__proto__ || Object.getPrototypeOf(j)).call(this, U, C)), D = function H(K) {
                if (!document.body.contains(U.root))
                  return document.body.removeEventListener("click", H);
                P.tooltip != null && !P.tooltip.root.contains(K.target) && document.activeElement !== P.tooltip.textbox && !P.quill.hasFocus() && P.tooltip.hide(), P.pickers != null && P.pickers.forEach(function(V) {
                  V.container.contains(K.target) || V.close();
                });
              };
              return U.emitter.listenDOM("click", document.body, D), P;
            }
            return k(j, [{
              key: "addModule",
              value: function(C) {
                var P = q(j.prototype.__proto__ || Object.getPrototypeOf(j.prototype), "addModule", this).call(this, C);
                return C === "toolbar" && this.extendToolbar(P), P;
              }
            }, {
              key: "buildButtons",
              value: function(C, P) {
                C.forEach(function(D) {
                  var H = D.getAttribute("class") || "";
                  H.split(/\s+/).forEach(function(K) {
                    if (K.startsWith("ql-") && (K = K.slice(3), P[K] != null))
                      if (K === "direction")
                        D.innerHTML = P[K][""] + P[K].rtl;
                      else if (typeof P[K] == "string")
                        D.innerHTML = P[K];
                      else {
                        var V = D.value || "";
                        V != null && P[K][V] && (D.innerHTML = P[K][V]);
                      }
                  });
                });
              }
            }, {
              key: "buildPickers",
              value: function(C, P) {
                var D = this;
                this.pickers = C.map(function(K) {
                  if (K.classList.contains("ql-align"))
                    return K.querySelector("option") == null && A(K, T), new n.default(K, P.align);
                  if (K.classList.contains("ql-background") || K.classList.contains("ql-color")) {
                    var V = K.classList.contains("ql-background") ? "background" : "color";
                    return K.querySelector("option") == null && A(K, S, V === "background" ? "#ffffff" : "#000000"), new i.default(K, P[V]);
                  } else
                    return K.querySelector("option") == null && (K.classList.contains("ql-font") ? A(K, I) : K.classList.contains("ql-header") ? A(K, $) : K.classList.contains("ql-size") && A(K, F)), new N.default(K);
                });
                var H = function() {
                  D.pickers.forEach(function(V) {
                    V.update();
                  });
                };
                this.quill.on(t.default.events.EDITOR_CHANGE, H);
              }
            }]), j;
          }(l.default);
          W.DEFAULTS = (0, v.default)(!0, {}, l.default.DEFAULTS, {
            modules: {
              toolbar: {
                handlers: {
                  formula: function() {
                    this.quill.theme.tooltip.edit("formula");
                  },
                  image: function() {
                    var j = this, U = this.container.querySelector("input.ql-image[type=file]");
                    U == null && (U = document.createElement("input"), U.setAttribute("type", "file"), U.setAttribute("accept", "image/png, image/gif, image/jpeg, image/bmp, image/x-icon"), U.classList.add("ql-image"), U.addEventListener("change", function() {
                      if (U.files != null && U.files[0] != null) {
                        var C = new FileReader();
                        C.onload = function(P) {
                          var D = j.quill.getSelection(!0);
                          j.quill.updateContents(new h.default().retain(D.index).delete(D.length).insert({ image: P.target.result }), t.default.sources.USER), j.quill.setSelection(D.index + 1, t.default.sources.SILENT), U.value = "";
                        }, C.readAsDataURL(U.files[0]);
                      }
                    }), this.container.appendChild(U)), U.click();
                  },
                  video: function() {
                    this.quill.theme.tooltip.edit("video");
                  }
                }
              }
            }
          });
          var B = function(L) {
            g(j, L);
            function j(U, C) {
              m(this, j);
              var P = p(this, (j.__proto__ || Object.getPrototypeOf(j)).call(this, U, C));
              return P.textbox = P.root.querySelector('input[type="text"]'), P.listen(), P;
            }
            return k(j, [{
              key: "listen",
              value: function() {
                var C = this;
                this.textbox.addEventListener("keydown", function(P) {
                  u.default.match(P, "enter") ? (C.save(), P.preventDefault()) : u.default.match(P, "escape") && (C.cancel(), P.preventDefault());
                });
              }
            }, {
              key: "cancel",
              value: function() {
                this.hide();
              }
            }, {
              key: "edit",
              value: function() {
                var C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "link", P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                this.root.classList.remove("ql-hidden"), this.root.classList.add("ql-editing"), P != null ? this.textbox.value = P : C !== this.root.getAttribute("data-mode") && (this.textbox.value = ""), this.position(this.quill.getBounds(this.quill.selection.savedRange)), this.textbox.select(), this.textbox.setAttribute("placeholder", this.textbox.getAttribute("data-" + C) || ""), this.root.setAttribute("data-mode", C);
              }
            }, {
              key: "restoreFocus",
              value: function() {
                var C = this.quill.scrollingContainer.scrollTop;
                this.quill.focus(), this.quill.scrollingContainer.scrollTop = C;
              }
            }, {
              key: "save",
              value: function() {
                var C = this.textbox.value;
                switch (this.root.getAttribute("data-mode")) {
                  case "link": {
                    var P = this.quill.root.scrollTop;
                    this.linkRange ? (this.quill.formatText(this.linkRange, "link", C, t.default.sources.USER), delete this.linkRange) : (this.restoreFocus(), this.quill.format("link", C, t.default.sources.USER)), this.quill.root.scrollTop = P;
                    break;
                  }
                  case "video":
                    C = M(C);
                  case "formula": {
                    if (!C)
                      break;
                    var D = this.quill.getSelection(!0);
                    if (D != null) {
                      var H = D.index + D.length;
                      this.quill.insertEmbed(H, this.root.getAttribute("data-mode"), C, t.default.sources.USER), this.root.getAttribute("data-mode") === "formula" && this.quill.insertText(H + 1, " ", t.default.sources.USER), this.quill.setSelection(H + 2, t.default.sources.USER);
                    }
                    break;
                  }
                }
                this.textbox.value = "", this.hide();
              }
            }]), j;
          }(E.default);
          function M(L) {
            var j = L.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || L.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
            return j ? (j[1] || "https") + "://www.youtube.com/embed/" + j[2] + "?showinfo=0" : (j = L.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) ? (j[1] || "https") + "://player.vimeo.com/video/" + j[2] + "/" : L;
          }
          function A(L, j) {
            var U = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            j.forEach(function(C) {
              var P = document.createElement("option");
              C === U ? P.setAttribute("selected", "selected") : P.setAttribute("value", C), L.appendChild(P);
            });
          }
          s.BaseTooltip = B, s.default = W;
        },
        /* 44 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", { value: !0 });
          var k = (
            /** @class */
            function() {
              function q() {
                this.head = this.tail = null, this.length = 0;
              }
              return q.prototype.append = function() {
                for (var _ = [], v = 0; v < arguments.length; v++)
                  _[v] = arguments[v];
                this.insertBefore(_[0], null), _.length > 1 && this.append.apply(this, _.slice(1));
              }, q.prototype.contains = function(_) {
                for (var v, y = this.iterator(); v = y(); )
                  if (v === _)
                    return !0;
                return !1;
              }, q.prototype.insertBefore = function(_, v) {
                _ && (_.next = v, v != null ? (_.prev = v.prev, v.prev != null && (v.prev.next = _), v.prev = _, v === this.head && (this.head = _)) : this.tail != null ? (this.tail.next = _, _.prev = this.tail, this.tail = _) : (_.prev = null, this.head = this.tail = _), this.length += 1);
              }, q.prototype.offset = function(_) {
                for (var v = 0, y = this.head; y != null; ) {
                  if (y === _)
                    return v;
                  v += y.length(), y = y.next;
                }
                return -1;
              }, q.prototype.remove = function(_) {
                this.contains(_) && (_.prev != null && (_.prev.next = _.next), _.next != null && (_.next.prev = _.prev), _ === this.head && (this.head = _.next), _ === this.tail && (this.tail = _.prev), this.length -= 1);
              }, q.prototype.iterator = function(_) {
                return _ === void 0 && (_ = this.head), function() {
                  var v = _;
                  return _ != null && (_ = _.next), v;
                };
              }, q.prototype.find = function(_, v) {
                v === void 0 && (v = !1);
                for (var y, h = this.iterator(); y = h(); ) {
                  var o = y.length();
                  if (_ < o || v && _ === o && (y.next == null || y.next.length() !== 0))
                    return [y, _];
                  _ -= o;
                }
                return [null, 0];
              }, q.prototype.forEach = function(_) {
                for (var v, y = this.iterator(); v = y(); )
                  _(v);
              }, q.prototype.forEachAt = function(_, v, y) {
                if (!(v <= 0))
                  for (var h = this.find(_), o = h[0], t = h[1], e, u = _ - t, a = this.iterator(o); (e = a()) && u < _ + v; ) {
                    var l = e.length();
                    _ > u ? y(e, _ - u, Math.min(v, u + l - _)) : y(e, 0, Math.min(l, _ + v - u)), u += l;
                  }
              }, q.prototype.map = function(_) {
                return this.reduce(function(v, y) {
                  return v.push(_(y)), v;
                }, []);
              }, q.prototype.reduce = function(_, v) {
                for (var y, h = this.iterator(); y = h(); )
                  v = _(v, y);
                return v;
              }, q;
            }()
          );
          s.default = k;
        },
        /* 45 */
        /***/
        function(b, s, d) {
          var k = this && this.__extends || function() {
            var o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, e) {
              t.__proto__ = e;
            } || function(t, e) {
              for (var u in e)
                e.hasOwnProperty(u) && (t[u] = e[u]);
            };
            return function(t, e) {
              o(t, e);
              function u() {
                this.constructor = t;
              }
              t.prototype = e === null ? Object.create(e) : (u.prototype = e.prototype, new u());
            };
          }();
          Object.defineProperty(s, "__esModule", { value: !0 });
          var q = d(17), _ = d(1), v = {
            attributes: !0,
            characterData: !0,
            characterDataOldValue: !0,
            childList: !0,
            subtree: !0
          }, y = 100, h = (
            /** @class */
            function(o) {
              k(t, o);
              function t(e) {
                var u = o.call(this, e) || this;
                return u.scroll = u, u.observer = new MutationObserver(function(a) {
                  u.update(a);
                }), u.observer.observe(u.domNode, v), u.attach(), u;
              }
              return t.prototype.detach = function() {
                o.prototype.detach.call(this), this.observer.disconnect();
              }, t.prototype.deleteAt = function(e, u) {
                this.update(), e === 0 && u === this.length() ? this.children.forEach(function(a) {
                  a.remove();
                }) : o.prototype.deleteAt.call(this, e, u);
              }, t.prototype.formatAt = function(e, u, a, l) {
                this.update(), o.prototype.formatAt.call(this, e, u, a, l);
              }, t.prototype.insertAt = function(e, u, a) {
                this.update(), o.prototype.insertAt.call(this, e, u, a);
              }, t.prototype.optimize = function(e, u) {
                var a = this;
                e === void 0 && (e = []), u === void 0 && (u = {}), o.prototype.optimize.call(this, u);
                for (var l = [].slice.call(this.observer.takeRecords()); l.length > 0; )
                  e.push(l.pop());
                for (var r = function(c, N) {
                  N === void 0 && (N = !0), !(c == null || c === a) && c.domNode.parentNode != null && (c.domNode[_.DATA_KEY].mutations == null && (c.domNode[_.DATA_KEY].mutations = []), N && r(c.parent));
                }, i = function(c) {
                  // @ts-ignore
                  c.domNode[_.DATA_KEY] == null || // @ts-ignore
                  c.domNode[_.DATA_KEY].mutations == null || (c instanceof q.default && c.children.forEach(i), c.optimize(u));
                }, f = e, n = 0; f.length > 0; n += 1) {
                  if (n >= y)
                    throw new Error("[Parchment] Maximum optimize iterations reached");
                  for (f.forEach(function(c) {
                    var N = _.find(c.target, !0);
                    N != null && (N.domNode === c.target && (c.type === "childList" ? (r(_.find(c.previousSibling, !1)), [].forEach.call(c.addedNodes, function(O) {
                      var E = _.find(O, !1);
                      r(E, !1), E instanceof q.default && E.children.forEach(function(x) {
                        r(x, !1);
                      });
                    })) : c.type === "attributes" && r(N.prev)), r(N));
                  }), this.children.forEach(i), f = [].slice.call(this.observer.takeRecords()), l = f.slice(); l.length > 0; )
                    e.push(l.pop());
                }
              }, t.prototype.update = function(e, u) {
                var a = this;
                u === void 0 && (u = {}), e = e || this.observer.takeRecords(), e.map(function(l) {
                  var r = _.find(l.target, !0);
                  return r == null ? null : r.domNode[_.DATA_KEY].mutations == null ? (r.domNode[_.DATA_KEY].mutations = [l], r) : (r.domNode[_.DATA_KEY].mutations.push(l), null);
                }).forEach(function(l) {
                  l == null || l === a || //@ts-ignore
                  l.domNode[_.DATA_KEY] == null || l.update(l.domNode[_.DATA_KEY].mutations || [], u);
                }), this.domNode[_.DATA_KEY].mutations != null && o.prototype.update.call(this, this.domNode[_.DATA_KEY].mutations, u), this.optimize(e, u);
              }, t.blotName = "scroll", t.defaultChild = "block", t.scope = _.Scope.BLOCK_BLOT, t.tagName = "DIV", t;
            }(q.default)
          );
          s.default = h;
        },
        /* 46 */
        /***/
        function(b, s, d) {
          var k = this && this.__extends || function() {
            var h = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, t) {
              o.__proto__ = t;
            } || function(o, t) {
              for (var e in t)
                t.hasOwnProperty(e) && (o[e] = t[e]);
            };
            return function(o, t) {
              h(o, t);
              function e() {
                this.constructor = o;
              }
              o.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e());
            };
          }();
          Object.defineProperty(s, "__esModule", { value: !0 });
          var q = d(18), _ = d(1);
          function v(h, o) {
            if (Object.keys(h).length !== Object.keys(o).length)
              return !1;
            for (var t in h)
              if (h[t] !== o[t])
                return !1;
            return !0;
          }
          var y = (
            /** @class */
            function(h) {
              k(o, h);
              function o() {
                return h !== null && h.apply(this, arguments) || this;
              }
              return o.formats = function(t) {
                if (t.tagName !== o.tagName)
                  return h.formats.call(this, t);
              }, o.prototype.format = function(t, e) {
                var u = this;
                t === this.statics.blotName && !e ? (this.children.forEach(function(a) {
                  a instanceof q.default || (a = a.wrap(o.blotName, !0)), u.attributes.copy(a);
                }), this.unwrap()) : h.prototype.format.call(this, t, e);
              }, o.prototype.formatAt = function(t, e, u, a) {
                if (this.formats()[u] != null || _.query(u, _.Scope.ATTRIBUTE)) {
                  var l = this.isolate(t, e);
                  l.format(u, a);
                } else
                  h.prototype.formatAt.call(this, t, e, u, a);
              }, o.prototype.optimize = function(t) {
                h.prototype.optimize.call(this, t);
                var e = this.formats();
                if (Object.keys(e).length === 0)
                  return this.unwrap();
                var u = this.next;
                u instanceof o && u.prev === this && v(e, u.formats()) && (u.moveChildren(this), u.remove());
              }, o.blotName = "inline", o.scope = _.Scope.INLINE_BLOT, o.tagName = "SPAN", o;
            }(q.default)
          );
          s.default = y;
        },
        /* 47 */
        /***/
        function(b, s, d) {
          var k = this && this.__extends || function() {
            var y = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(h, o) {
              h.__proto__ = o;
            } || function(h, o) {
              for (var t in o)
                o.hasOwnProperty(t) && (h[t] = o[t]);
            };
            return function(h, o) {
              y(h, o);
              function t() {
                this.constructor = h;
              }
              h.prototype = o === null ? Object.create(o) : (t.prototype = o.prototype, new t());
            };
          }();
          Object.defineProperty(s, "__esModule", { value: !0 });
          var q = d(18), _ = d(1), v = (
            /** @class */
            function(y) {
              k(h, y);
              function h() {
                return y !== null && y.apply(this, arguments) || this;
              }
              return h.formats = function(o) {
                var t = _.query(h.blotName).tagName;
                if (o.tagName !== t)
                  return y.formats.call(this, o);
              }, h.prototype.format = function(o, t) {
                _.query(o, _.Scope.BLOCK) != null && (o === this.statics.blotName && !t ? this.replaceWith(h.blotName) : y.prototype.format.call(this, o, t));
              }, h.prototype.formatAt = function(o, t, e, u) {
                _.query(e, _.Scope.BLOCK) != null ? this.format(e, u) : y.prototype.formatAt.call(this, o, t, e, u);
              }, h.prototype.insertAt = function(o, t, e) {
                if (e == null || _.query(t, _.Scope.INLINE) != null)
                  y.prototype.insertAt.call(this, o, t, e);
                else {
                  var u = this.split(o), a = _.create(t, e);
                  u.parent.insertBefore(a, u);
                }
              }, h.prototype.update = function(o, t) {
                navigator.userAgent.match(/Trident/) ? this.build() : y.prototype.update.call(this, o, t);
              }, h.blotName = "block", h.scope = _.Scope.BLOCK_BLOT, h.tagName = "P", h;
            }(q.default)
          );
          s.default = v;
        },
        /* 48 */
        /***/
        function(b, s, d) {
          var k = this && this.__extends || function() {
            var v = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(y, h) {
              y.__proto__ = h;
            } || function(y, h) {
              for (var o in h)
                h.hasOwnProperty(o) && (y[o] = h[o]);
            };
            return function(y, h) {
              v(y, h);
              function o() {
                this.constructor = y;
              }
              y.prototype = h === null ? Object.create(h) : (o.prototype = h.prototype, new o());
            };
          }();
          Object.defineProperty(s, "__esModule", { value: !0 });
          var q = d(19), _ = (
            /** @class */
            function(v) {
              k(y, v);
              function y() {
                return v !== null && v.apply(this, arguments) || this;
              }
              return y.formats = function(h) {
              }, y.prototype.format = function(h, o) {
                v.prototype.formatAt.call(this, 0, this.length(), h, o);
              }, y.prototype.formatAt = function(h, o, t, e) {
                h === 0 && o === this.length() ? this.format(t, e) : v.prototype.formatAt.call(this, h, o, t, e);
              }, y.prototype.formats = function() {
                return this.statics.formats(this.domNode);
              }, y;
            }(q.default)
          );
          s.default = _;
        },
        /* 49 */
        /***/
        function(b, s, d) {
          var k = this && this.__extends || function() {
            var y = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(h, o) {
              h.__proto__ = o;
            } || function(h, o) {
              for (var t in o)
                o.hasOwnProperty(t) && (h[t] = o[t]);
            };
            return function(h, o) {
              y(h, o);
              function t() {
                this.constructor = h;
              }
              h.prototype = o === null ? Object.create(o) : (t.prototype = o.prototype, new t());
            };
          }();
          Object.defineProperty(s, "__esModule", { value: !0 });
          var q = d(19), _ = d(1), v = (
            /** @class */
            function(y) {
              k(h, y);
              function h(o) {
                var t = y.call(this, o) || this;
                return t.text = t.statics.value(t.domNode), t;
              }
              return h.create = function(o) {
                return document.createTextNode(o);
              }, h.value = function(o) {
                var t = o.data;
                return t.normalize && (t = t.normalize()), t;
              }, h.prototype.deleteAt = function(o, t) {
                this.domNode.data = this.text = this.text.slice(0, o) + this.text.slice(o + t);
              }, h.prototype.index = function(o, t) {
                return this.domNode === o ? t : -1;
              }, h.prototype.insertAt = function(o, t, e) {
                e == null ? (this.text = this.text.slice(0, o) + t + this.text.slice(o), this.domNode.data = this.text) : y.prototype.insertAt.call(this, o, t, e);
              }, h.prototype.length = function() {
                return this.text.length;
              }, h.prototype.optimize = function(o) {
                y.prototype.optimize.call(this, o), this.text = this.statics.value(this.domNode), this.text.length === 0 ? this.remove() : this.next instanceof h && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove());
              }, h.prototype.position = function(o, t) {
                return [this.domNode, o];
              }, h.prototype.split = function(o, t) {
                if (t === void 0 && (t = !1), !t) {
                  if (o === 0)
                    return this;
                  if (o === this.length())
                    return this.next;
                }
                var e = _.create(this.domNode.splitText(o));
                return this.parent.insertBefore(e, this.next), this.text = this.statics.value(this.domNode), e;
              }, h.prototype.update = function(o, t) {
                var e = this;
                o.some(function(u) {
                  return u.type === "characterData" && u.target === e.domNode;
                }) && (this.text = this.statics.value(this.domNode));
              }, h.prototype.value = function() {
                return this.text;
              }, h.blotName = "text", h.scope = _.Scope.INLINE_BLOT, h;
            }(q.default)
          );
          s.default = v;
        },
        /* 50 */
        /***/
        function(b, s, d) {
          var k = document.createElement("div");
          if (k.classList.toggle("test-class", !1), k.classList.contains("test-class")) {
            var q = DOMTokenList.prototype.toggle;
            DOMTokenList.prototype.toggle = function(_, v) {
              return arguments.length > 1 && !this.contains(_) == !v ? v : q.call(this, _);
            };
          }
          String.prototype.startsWith || (String.prototype.startsWith = function(_, v) {
            return v = v || 0, this.substr(v, _.length) === _;
          }), String.prototype.endsWith || (String.prototype.endsWith = function(_, v) {
            var y = this.toString();
            (typeof v != "number" || !isFinite(v) || Math.floor(v) !== v || v > y.length) && (v = y.length), v -= _.length;
            var h = y.indexOf(_, v);
            return h !== -1 && h === v;
          }), Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
            value: function(v) {
              if (this === null)
                throw new TypeError("Array.prototype.find called on null or undefined");
              if (typeof v != "function")
                throw new TypeError("predicate must be a function");
              for (var y = Object(this), h = y.length >>> 0, o = arguments[1], t, e = 0; e < h; e++)
                if (t = y[e], v.call(o, t, e, y))
                  return t;
            }
          }), document.addEventListener("DOMContentLoaded", function() {
            document.execCommand("enableObjectResizing", !1, !1), document.execCommand("autoUrlDetect", !1, !1);
          });
        },
        /* 51 */
        /***/
        function(b, s) {
          var d = -1, k = 1, q = 0;
          function _(n, c, N) {
            if (n == c)
              return n ? [[q, n]] : [];
            (N < 0 || n.length < N) && (N = null);
            var O = o(n, c), E = n.substring(0, O);
            n = n.substring(O), c = c.substring(O), O = t(n, c);
            var x = n.substring(n.length - O);
            n = n.substring(0, n.length - O), c = c.substring(0, c.length - O);
            var m = v(n, c);
            return E && m.unshift([q, E]), x && m.push([q, x]), u(m), N != null && (m = r(m, N)), m = i(m), m;
          }
          function v(n, c) {
            var N;
            if (!n)
              return [[k, c]];
            if (!c)
              return [[d, n]];
            var O = n.length > c.length ? n : c, E = n.length > c.length ? c : n, x = O.indexOf(E);
            if (x != -1)
              return N = [
                [k, O.substring(0, x)],
                [q, E],
                [k, O.substring(x + E.length)]
              ], n.length > c.length && (N[0][0] = N[2][0] = d), N;
            if (E.length == 1)
              return [[d, n], [k, c]];
            var m = e(n, c);
            if (m) {
              var p = m[0], g = m[1], T = m[2], S = m[3], I = m[4], $ = _(p, T), F = _(g, S);
              return $.concat([[q, I]], F);
            }
            return y(n, c);
          }
          function y(n, c) {
            for (var N = n.length, O = c.length, E = Math.ceil((N + O) / 2), x = E, m = 2 * E, p = new Array(m), g = new Array(m), T = 0; T < m; T++)
              p[T] = -1, g[T] = -1;
            p[x + 1] = 0, g[x + 1] = 0;
            for (var S = N - O, I = S % 2 != 0, $ = 0, F = 0, W = 0, B = 0, M = 0; M < E; M++) {
              for (var A = -M + $; A <= M - F; A += 2) {
                var L = x + A, j;
                A == -M || A != M && p[L - 1] < p[L + 1] ? j = p[L + 1] : j = p[L - 1] + 1;
                for (var U = j - A; j < N && U < O && n.charAt(j) == c.charAt(U); )
                  j++, U++;
                if (p[L] = j, j > N)
                  F += 2;
                else if (U > O)
                  $ += 2;
                else if (I) {
                  var C = x + S - A;
                  if (C >= 0 && C < m && g[C] != -1) {
                    var P = N - g[C];
                    if (j >= P)
                      return h(n, c, j, U);
                  }
                }
              }
              for (var D = -M + W; D <= M - B; D += 2) {
                var C = x + D, P;
                D == -M || D != M && g[C - 1] < g[C + 1] ? P = g[C + 1] : P = g[C - 1] + 1;
                for (var H = P - D; P < N && H < O && n.charAt(N - P - 1) == c.charAt(O - H - 1); )
                  P++, H++;
                if (g[C] = P, P > N)
                  B += 2;
                else if (H > O)
                  W += 2;
                else if (!I) {
                  var L = x + S - D;
                  if (L >= 0 && L < m && p[L] != -1) {
                    var j = p[L], U = x + j - L;
                    if (P = N - P, j >= P)
                      return h(n, c, j, U);
                  }
                }
              }
            }
            return [[d, n], [k, c]];
          }
          function h(n, c, N, O) {
            var E = n.substring(0, N), x = c.substring(0, O), m = n.substring(N), p = c.substring(O), g = _(E, x), T = _(m, p);
            return g.concat(T);
          }
          function o(n, c) {
            if (!n || !c || n.charAt(0) != c.charAt(0))
              return 0;
            for (var N = 0, O = Math.min(n.length, c.length), E = O, x = 0; N < E; )
              n.substring(x, E) == c.substring(x, E) ? (N = E, x = N) : O = E, E = Math.floor((O - N) / 2 + N);
            return E;
          }
          function t(n, c) {
            if (!n || !c || n.charAt(n.length - 1) != c.charAt(c.length - 1))
              return 0;
            for (var N = 0, O = Math.min(n.length, c.length), E = O, x = 0; N < E; )
              n.substring(n.length - E, n.length - x) == c.substring(c.length - E, c.length - x) ? (N = E, x = N) : O = E, E = Math.floor((O - N) / 2 + N);
            return E;
          }
          function e(n, c) {
            var N = n.length > c.length ? n : c, O = n.length > c.length ? c : n;
            if (N.length < 4 || O.length * 2 < N.length)
              return null;
            function E(F, W, B) {
              for (var M = F.substring(B, B + Math.floor(F.length / 4)), A = -1, L = "", j, U, C, P; (A = W.indexOf(M, A + 1)) != -1; ) {
                var D = o(
                  F.substring(B),
                  W.substring(A)
                ), H = t(
                  F.substring(0, B),
                  W.substring(0, A)
                );
                L.length < H + D && (L = W.substring(A - H, A) + W.substring(A, A + D), j = F.substring(0, B - H), U = F.substring(B + D), C = W.substring(0, A - H), P = W.substring(A + D));
              }
              return L.length * 2 >= F.length ? [
                j,
                U,
                C,
                P,
                L
              ] : null;
            }
            var x = E(
              N,
              O,
              Math.ceil(N.length / 4)
            ), m = E(
              N,
              O,
              Math.ceil(N.length / 2)
            ), p;
            if (!x && !m)
              return null;
            m ? x ? p = x[4].length > m[4].length ? x : m : p = m : p = x;
            var g, T, S, I;
            n.length > c.length ? (g = p[0], T = p[1], S = p[2], I = p[3]) : (S = p[0], I = p[1], g = p[2], T = p[3]);
            var $ = p[4];
            return [g, T, S, I, $];
          }
          function u(n) {
            n.push([q, ""]);
            for (var c = 0, N = 0, O = 0, E = "", x = "", m; c < n.length; )
              switch (n[c][0]) {
                case k:
                  O++, x += n[c][1], c++;
                  break;
                case d:
                  N++, E += n[c][1], c++;
                  break;
                case q:
                  N + O > 1 ? (N !== 0 && O !== 0 && (m = o(x, E), m !== 0 && (c - N - O > 0 && n[c - N - O - 1][0] == q ? n[c - N - O - 1][1] += x.substring(0, m) : (n.splice(0, 0, [
                    q,
                    x.substring(0, m)
                  ]), c++), x = x.substring(m), E = E.substring(m)), m = t(x, E), m !== 0 && (n[c][1] = x.substring(x.length - m) + n[c][1], x = x.substring(0, x.length - m), E = E.substring(0, E.length - m))), N === 0 ? n.splice(
                    c - O,
                    N + O,
                    [k, x]
                  ) : O === 0 ? n.splice(
                    c - N,
                    N + O,
                    [d, E]
                  ) : n.splice(
                    c - N - O,
                    N + O,
                    [d, E],
                    [k, x]
                  ), c = c - N - O + (N ? 1 : 0) + (O ? 1 : 0) + 1) : c !== 0 && n[c - 1][0] == q ? (n[c - 1][1] += n[c][1], n.splice(c, 1)) : c++, O = 0, N = 0, E = "", x = "";
                  break;
              }
            n[n.length - 1][1] === "" && n.pop();
            var p = !1;
            for (c = 1; c < n.length - 1; )
              n[c - 1][0] == q && n[c + 1][0] == q && (n[c][1].substring(n[c][1].length - n[c - 1][1].length) == n[c - 1][1] ? (n[c][1] = n[c - 1][1] + n[c][1].substring(0, n[c][1].length - n[c - 1][1].length), n[c + 1][1] = n[c - 1][1] + n[c + 1][1], n.splice(c - 1, 1), p = !0) : n[c][1].substring(0, n[c + 1][1].length) == n[c + 1][1] && (n[c - 1][1] += n[c + 1][1], n[c][1] = n[c][1].substring(n[c + 1][1].length) + n[c + 1][1], n.splice(c + 1, 1), p = !0)), c++;
            p && u(n);
          }
          var a = _;
          a.INSERT = k, a.DELETE = d, a.EQUAL = q, b.exports = a;
          function l(n, c) {
            if (c === 0)
              return [q, n];
            for (var N = 0, O = 0; O < n.length; O++) {
              var E = n[O];
              if (E[0] === d || E[0] === q) {
                var x = N + E[1].length;
                if (c === x)
                  return [O + 1, n];
                if (c < x) {
                  n = n.slice();
                  var m = c - N, p = [E[0], E[1].slice(0, m)], g = [E[0], E[1].slice(m)];
                  return n.splice(O, 1, p, g), [O + 1, n];
                } else
                  N = x;
              }
            }
            throw new Error("cursor_pos is out of bounds!");
          }
          function r(n, c) {
            var N = l(n, c), O = N[1], E = N[0], x = O[E], m = O[E + 1];
            if (x == null)
              return n;
            if (x[0] !== q)
              return n;
            if (m != null && x[1] + m[1] === m[1] + x[1])
              return O.splice(E, 2, m, x), f(O, E, 2);
            if (m != null && m[1].indexOf(x[1]) === 0) {
              O.splice(E, 2, [m[0], x[1]], [0, x[1]]);
              var p = m[1].slice(x[1].length);
              return p.length > 0 && O.splice(E + 2, 0, [m[0], p]), f(O, E, 3);
            } else
              return n;
          }
          function i(n) {
            for (var c = !1, N = function(m) {
              return m.charCodeAt(0) >= 56320 && m.charCodeAt(0) <= 57343;
            }, O = function(m) {
              return m.charCodeAt(m.length - 1) >= 55296 && m.charCodeAt(m.length - 1) <= 56319;
            }, E = 2; E < n.length; E += 1)
              n[E - 2][0] === q && O(n[E - 2][1]) && n[E - 1][0] === d && N(n[E - 1][1]) && n[E][0] === k && N(n[E][1]) && (c = !0, n[E - 1][1] = n[E - 2][1].slice(-1) + n[E - 1][1], n[E][1] = n[E - 2][1].slice(-1) + n[E][1], n[E - 2][1] = n[E - 2][1].slice(0, -1));
            if (!c)
              return n;
            for (var x = [], E = 0; E < n.length; E += 1)
              n[E][1].length > 0 && x.push(n[E]);
            return x;
          }
          function f(n, c, N) {
            for (var O = c + N - 1; O >= 0 && O >= c - 1; O--)
              if (O + 1 < n.length) {
                var E = n[O], x = n[O + 1];
                E[0] === x[1] && n.splice(O, 2, [E[0], E[1] + x[1]]);
              }
            return n;
          }
        },
        /* 52 */
        /***/
        function(b, s) {
          s = b.exports = typeof Object.keys == "function" ? Object.keys : d, s.shim = d;
          function d(k) {
            var q = [];
            for (var _ in k)
              q.push(_);
            return q;
          }
        },
        /* 53 */
        /***/
        function(b, s) {
          var d = function() {
            return Object.prototype.toString.call(arguments);
          }() == "[object Arguments]";
          s = b.exports = d ? k : q, s.supported = k;
          function k(_) {
            return Object.prototype.toString.call(_) == "[object Arguments]";
          }
          s.unsupported = q;
          function q(_) {
            return _ && typeof _ == "object" && typeof _.length == "number" && Object.prototype.hasOwnProperty.call(_, "callee") && !Object.prototype.propertyIsEnumerable.call(_, "callee") || !1;
          }
        },
        /* 54 */
        /***/
        function(b, s) {
          var d = Object.prototype.hasOwnProperty, k = "~";
          function q() {
          }
          Object.create && (q.prototype = /* @__PURE__ */ Object.create(null), new q().__proto__ || (k = !1));
          function _(y, h, o) {
            this.fn = y, this.context = h, this.once = o || !1;
          }
          function v() {
            this._events = new q(), this._eventsCount = 0;
          }
          v.prototype.eventNames = function() {
            var h = [], o, t;
            if (this._eventsCount === 0)
              return h;
            for (t in o = this._events)
              d.call(o, t) && h.push(k ? t.slice(1) : t);
            return Object.getOwnPropertySymbols ? h.concat(Object.getOwnPropertySymbols(o)) : h;
          }, v.prototype.listeners = function(h, o) {
            var t = k ? k + h : h, e = this._events[t];
            if (o)
              return !!e;
            if (!e)
              return [];
            if (e.fn)
              return [e.fn];
            for (var u = 0, a = e.length, l = new Array(a); u < a; u++)
              l[u] = e[u].fn;
            return l;
          }, v.prototype.emit = function(h, o, t, e, u, a) {
            var l = k ? k + h : h;
            if (!this._events[l])
              return !1;
            var r = this._events[l], i = arguments.length, f, n;
            if (r.fn) {
              switch (r.once && this.removeListener(h, r.fn, void 0, !0), i) {
                case 1:
                  return r.fn.call(r.context), !0;
                case 2:
                  return r.fn.call(r.context, o), !0;
                case 3:
                  return r.fn.call(r.context, o, t), !0;
                case 4:
                  return r.fn.call(r.context, o, t, e), !0;
                case 5:
                  return r.fn.call(r.context, o, t, e, u), !0;
                case 6:
                  return r.fn.call(r.context, o, t, e, u, a), !0;
              }
              for (n = 1, f = new Array(i - 1); n < i; n++)
                f[n - 1] = arguments[n];
              r.fn.apply(r.context, f);
            } else {
              var c = r.length, N;
              for (n = 0; n < c; n++)
                switch (r[n].once && this.removeListener(h, r[n].fn, void 0, !0), i) {
                  case 1:
                    r[n].fn.call(r[n].context);
                    break;
                  case 2:
                    r[n].fn.call(r[n].context, o);
                    break;
                  case 3:
                    r[n].fn.call(r[n].context, o, t);
                    break;
                  case 4:
                    r[n].fn.call(r[n].context, o, t, e);
                    break;
                  default:
                    if (!f)
                      for (N = 1, f = new Array(i - 1); N < i; N++)
                        f[N - 1] = arguments[N];
                    r[n].fn.apply(r[n].context, f);
                }
            }
            return !0;
          }, v.prototype.on = function(h, o, t) {
            var e = new _(o, t || this), u = k ? k + h : h;
            return this._events[u] ? this._events[u].fn ? this._events[u] = [this._events[u], e] : this._events[u].push(e) : (this._events[u] = e, this._eventsCount++), this;
          }, v.prototype.once = function(h, o, t) {
            var e = new _(o, t || this, !0), u = k ? k + h : h;
            return this._events[u] ? this._events[u].fn ? this._events[u] = [this._events[u], e] : this._events[u].push(e) : (this._events[u] = e, this._eventsCount++), this;
          }, v.prototype.removeListener = function(h, o, t, e) {
            var u = k ? k + h : h;
            if (!this._events[u])
              return this;
            if (!o)
              return --this._eventsCount === 0 ? this._events = new q() : delete this._events[u], this;
            var a = this._events[u];
            if (a.fn)
              a.fn === o && (!e || a.once) && (!t || a.context === t) && (--this._eventsCount === 0 ? this._events = new q() : delete this._events[u]);
            else {
              for (var l = 0, r = [], i = a.length; l < i; l++)
                (a[l].fn !== o || e && !a[l].once || t && a[l].context !== t) && r.push(a[l]);
              r.length ? this._events[u] = r.length === 1 ? r[0] : r : --this._eventsCount === 0 ? this._events = new q() : delete this._events[u];
            }
            return this;
          }, v.prototype.removeAllListeners = function(h) {
            var o;
            return h ? (o = k ? k + h : h, this._events[o] && (--this._eventsCount === 0 ? this._events = new q() : delete this._events[o])) : (this._events = new q(), this._eventsCount = 0), this;
          }, v.prototype.off = v.prototype.removeListener, v.prototype.addListener = v.prototype.on, v.prototype.setMaxListeners = function() {
            return this;
          }, v.prefixed = k, v.EventEmitter = v, typeof b < "u" && (b.exports = v);
        },
        /* 55 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.matchText = s.matchSpacing = s.matchNewline = s.matchBlot = s.matchAttributor = s.default = void 0;
          var k = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(z) {
            return typeof z;
          } : function(z) {
            return z && typeof Symbol == "function" && z.constructor === Symbol && z !== Symbol.prototype ? "symbol" : typeof z;
          }, q = /* @__PURE__ */ function() {
            function z(G, Y) {
              var X = [], Z = !0, et = !1, nt = void 0;
              try {
                for (var rt = G[Symbol.iterator](), dt; !(Z = (dt = rt.next()).done) && (X.push(dt.value), !(Y && X.length === Y)); Z = !0)
                  ;
              } catch (pt) {
                et = !0, nt = pt;
              } finally {
                try {
                  !Z && rt.return && rt.return();
                } finally {
                  if (et)
                    throw nt;
                }
              }
              return X;
            }
            return function(G, Y) {
              if (Array.isArray(G))
                return G;
              if (Symbol.iterator in Object(G))
                return z(G, Y);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), _ = /* @__PURE__ */ function() {
            function z(G, Y) {
              for (var X = 0; X < Y.length; X++) {
                var Z = Y[X];
                Z.enumerable = Z.enumerable || !1, Z.configurable = !0, "value" in Z && (Z.writable = !0), Object.defineProperty(G, Z.key, Z);
              }
            }
            return function(G, Y, X) {
              return Y && z(G.prototype, Y), X && z(G, X), G;
            };
          }(), v = d(3), y = g(v), h = d(2), o = g(h), t = d(0), e = g(t), u = d(5), a = g(u), l = d(10), r = g(l), i = d(9), f = g(i), n = d(36), c = d(37), N = d(13), O = g(N), E = d(26), x = d(38), m = d(39), p = d(40);
          function g(z) {
            return z && z.__esModule ? z : { default: z };
          }
          function T(z, G, Y) {
            return G in z ? Object.defineProperty(z, G, { value: Y, enumerable: !0, configurable: !0, writable: !0 }) : z[G] = Y, z;
          }
          function S(z, G) {
            if (!(z instanceof G))
              throw new TypeError("Cannot call a class as a function");
          }
          function I(z, G) {
            if (!z)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return G && (typeof G == "object" || typeof G == "function") ? G : z;
          }
          function $(z, G) {
            if (typeof G != "function" && G !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof G);
            z.prototype = Object.create(G && G.prototype, { constructor: { value: z, enumerable: !1, writable: !0, configurable: !0 } }), G && (Object.setPrototypeOf ? Object.setPrototypeOf(z, G) : z.__proto__ = G);
          }
          var F = (0, r.default)("quill:clipboard"), W = "__ql-matcher", B = [[Node.TEXT_NODE, ft], [Node.TEXT_NODE, it], ["br", Q], [Node.ELEMENT_NODE, it], [Node.ELEMENT_NODE, V], [Node.ELEMENT_NODE, ot], [Node.ELEMENT_NODE, K], [Node.ELEMENT_NODE, ct], ["li", tt], ["b", H.bind(H, "bold")], ["i", H.bind(H, "italic")], ["style", J]], M = [n.AlignAttribute, x.DirectionAttribute].reduce(function(z, G) {
            return z[G.keyName] = G, z;
          }, {}), A = [n.AlignStyle, c.BackgroundStyle, E.ColorStyle, x.DirectionStyle, m.FontStyle, p.SizeStyle].reduce(function(z, G) {
            return z[G.keyName] = G, z;
          }, {}), L = function(z) {
            $(G, z);
            function G(Y, X) {
              S(this, G);
              var Z = I(this, (G.__proto__ || Object.getPrototypeOf(G)).call(this, Y, X));
              return Z.quill.root.addEventListener("paste", Z.onPaste.bind(Z)), Z.container = Z.quill.addContainer("ql-clipboard"), Z.container.setAttribute("contenteditable", !0), Z.container.setAttribute("tabindex", -1), Z.matchers = [], B.concat(Z.options.matchers).forEach(function(et) {
                var nt = q(et, 2), rt = nt[0], dt = nt[1];
                !X.matchVisual && dt === ot || Z.addMatcher(rt, dt);
              }), Z;
            }
            return _(G, [{
              key: "addMatcher",
              value: function(X, Z) {
                this.matchers.push([X, Z]);
              }
            }, {
              key: "convert",
              value: function(X) {
                if (typeof X == "string")
                  return this.container.innerHTML = X.replace(/\>\r?\n +\</g, "><"), this.convert();
                var Z = this.quill.getFormat(this.quill.selection.savedRange.index);
                if (Z[O.default.blotName]) {
                  var et = this.container.innerText;
                  return this.container.innerHTML = "", new o.default().insert(et, T({}, O.default.blotName, Z[O.default.blotName]));
                }
                var nt = this.prepareMatching(), rt = q(nt, 2), dt = rt[0], pt = rt[1], ut = D(this.container, dt, pt);
                return C(ut, `
`) && ut.ops[ut.ops.length - 1].attributes == null && (ut = ut.compose(new o.default().retain(ut.length() - 1).delete(1))), F.log("convert", this.container.innerHTML, ut), this.container.innerHTML = "", ut;
              }
            }, {
              key: "dangerouslyPasteHTML",
              value: function(X, Z) {
                var et = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : a.default.sources.API;
                if (typeof X == "string")
                  this.quill.setContents(this.convert(X), Z), this.quill.setSelection(0, a.default.sources.SILENT);
                else {
                  var nt = this.convert(Z);
                  this.quill.updateContents(new o.default().retain(X).concat(nt), et), this.quill.setSelection(X + nt.length(), a.default.sources.SILENT);
                }
              }
            }, {
              key: "onPaste",
              value: function(X) {
                var Z = this;
                if (!(X.defaultPrevented || !this.quill.isEnabled())) {
                  var et = this.quill.getSelection(), nt = new o.default().retain(et.index), rt = this.quill.scrollingContainer.scrollTop;
                  this.container.focus(), this.quill.selection.update(a.default.sources.SILENT), setTimeout(function() {
                    nt = nt.concat(Z.convert()).delete(et.length), Z.quill.updateContents(nt, a.default.sources.USER), Z.quill.setSelection(nt.length() - et.length, a.default.sources.SILENT), Z.quill.scrollingContainer.scrollTop = rt, Z.quill.focus();
                  }, 1);
                }
              }
            }, {
              key: "prepareMatching",
              value: function() {
                var X = this, Z = [], et = [];
                return this.matchers.forEach(function(nt) {
                  var rt = q(nt, 2), dt = rt[0], pt = rt[1];
                  switch (dt) {
                    case Node.TEXT_NODE:
                      et.push(pt);
                      break;
                    case Node.ELEMENT_NODE:
                      Z.push(pt);
                      break;
                    default:
                      [].forEach.call(X.container.querySelectorAll(dt), function(ut) {
                        ut[W] = ut[W] || [], ut[W].push(pt);
                      });
                      break;
                  }
                }), [Z, et];
              }
            }]), G;
          }(f.default);
          L.DEFAULTS = {
            matchers: [],
            matchVisual: !0
          };
          function j(z, G, Y) {
            return (typeof G > "u" ? "undefined" : k(G)) === "object" ? Object.keys(G).reduce(function(X, Z) {
              return j(X, Z, G[Z]);
            }, z) : z.reduce(function(X, Z) {
              return Z.attributes && Z.attributes[G] ? X.push(Z) : X.insert(Z.insert, (0, y.default)({}, T({}, G, Y), Z.attributes));
            }, new o.default());
          }
          function U(z) {
            if (z.nodeType !== Node.ELEMENT_NODE)
              return {};
            var G = "__ql-computed-style";
            return z[G] || (z[G] = window.getComputedStyle(z));
          }
          function C(z, G) {
            for (var Y = "", X = z.ops.length - 1; X >= 0 && Y.length < G.length; --X) {
              var Z = z.ops[X];
              if (typeof Z.insert != "string")
                break;
              Y = Z.insert + Y;
            }
            return Y.slice(-1 * G.length) === G;
          }
          function P(z) {
            if (z.childNodes.length === 0)
              return !1;
            var G = U(z);
            return ["block", "list-item"].indexOf(G.display) > -1;
          }
          function D(z, G, Y) {
            return z.nodeType === z.TEXT_NODE ? Y.reduce(function(X, Z) {
              return Z(z, X);
            }, new o.default()) : z.nodeType === z.ELEMENT_NODE ? [].reduce.call(z.childNodes || [], function(X, Z) {
              var et = D(Z, G, Y);
              return Z.nodeType === z.ELEMENT_NODE && (et = G.reduce(function(nt, rt) {
                return rt(Z, nt);
              }, et), et = (Z[W] || []).reduce(function(nt, rt) {
                return rt(Z, nt);
              }, et)), X.concat(et);
            }, new o.default()) : new o.default();
          }
          function H(z, G, Y) {
            return j(Y, z, !0);
          }
          function K(z, G) {
            var Y = e.default.Attributor.Attribute.keys(z), X = e.default.Attributor.Class.keys(z), Z = e.default.Attributor.Style.keys(z), et = {};
            return Y.concat(X).concat(Z).forEach(function(nt) {
              var rt = e.default.query(nt, e.default.Scope.ATTRIBUTE);
              rt != null && (et[rt.attrName] = rt.value(z), et[rt.attrName]) || (rt = M[nt], rt != null && (rt.attrName === nt || rt.keyName === nt) && (et[rt.attrName] = rt.value(z) || void 0), rt = A[nt], rt != null && (rt.attrName === nt || rt.keyName === nt) && (rt = A[nt], et[rt.attrName] = rt.value(z) || void 0));
            }), Object.keys(et).length > 0 && (G = j(G, et)), G;
          }
          function V(z, G) {
            var Y = e.default.query(z);
            if (Y == null)
              return G;
            if (Y.prototype instanceof e.default.Embed) {
              var X = {}, Z = Y.value(z);
              Z != null && (X[Y.blotName] = Z, G = new o.default().insert(X, Y.formats(z)));
            } else
              typeof Y.formats == "function" && (G = j(G, Y.blotName, Y.formats(z)));
            return G;
          }
          function Q(z, G) {
            return C(G, `
`) || G.insert(`
`), G;
          }
          function J() {
            return new o.default();
          }
          function tt(z, G) {
            var Y = e.default.query(z);
            if (Y == null || Y.blotName !== "list-item" || !C(G, `
`))
              return G;
            for (var X = -1, Z = z.parentNode; !Z.classList.contains("ql-clipboard"); )
              (e.default.query(Z) || {}).blotName === "list" && (X += 1), Z = Z.parentNode;
            return X <= 0 ? G : G.compose(new o.default().retain(G.length() - 1).retain(1, { indent: X }));
          }
          function it(z, G) {
            return C(G, `
`) || (P(z) || G.length() > 0 && z.nextSibling && P(z.nextSibling)) && G.insert(`
`), G;
          }
          function ot(z, G) {
            if (P(z) && z.nextElementSibling != null && !C(G, `

`)) {
              var Y = z.offsetHeight + parseFloat(U(z).marginTop) + parseFloat(U(z).marginBottom);
              z.nextElementSibling.offsetTop > z.offsetTop + Y * 1.5 && G.insert(`
`);
            }
            return G;
          }
          function ct(z, G) {
            var Y = {}, X = z.style || {};
            return X.fontStyle && U(z).fontStyle === "italic" && (Y.italic = !0), X.fontWeight && (U(z).fontWeight.startsWith("bold") || parseInt(U(z).fontWeight) >= 700) && (Y.bold = !0), Object.keys(Y).length > 0 && (G = j(G, Y)), parseFloat(X.textIndent || 0) > 0 && (G = new o.default().insert("	").concat(G)), G;
          }
          function ft(z, G) {
            var Y = z.data;
            if (z.parentNode.tagName === "O:P")
              return G.insert(Y.trim());
            if (Y.trim().length === 0 && z.parentNode.classList.contains("ql-clipboard"))
              return G;
            if (!U(z.parentNode).whiteSpace.startsWith("pre")) {
              var X = function(et, nt) {
                return nt = nt.replace(/[^\u00a0]/g, ""), nt.length < 1 && et ? " " : nt;
              };
              Y = Y.replace(/\r\n/g, " ").replace(/\n/g, " "), Y = Y.replace(/\s\s+/g, X.bind(X, !0)), (z.previousSibling == null && P(z.parentNode) || z.previousSibling != null && P(z.previousSibling)) && (Y = Y.replace(/^\s+/, X.bind(X, !1))), (z.nextSibling == null && P(z.parentNode) || z.nextSibling != null && P(z.nextSibling)) && (Y = Y.replace(/\s+$/, X.bind(X, !1)));
            }
            return G.insert(Y);
          }
          s.default = L, s.matchAttributor = K, s.matchBlot = V, s.matchNewline = it, s.matchSpacing = ot, s.matchText = ft;
        },
        /* 56 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var k = /* @__PURE__ */ function() {
            function u(a, l) {
              for (var r = 0; r < l.length; r++) {
                var i = l[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(a, i.key, i);
              }
            }
            return function(a, l, r) {
              return l && u(a.prototype, l), r && u(a, r), a;
            };
          }(), q = function u(a, l, r) {
            a === null && (a = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(a, l);
            if (i === void 0) {
              var f = Object.getPrototypeOf(a);
              return f === null ? void 0 : u(f, l, r);
            } else {
              if ("value" in i)
                return i.value;
              var n = i.get;
              return n === void 0 ? void 0 : n.call(r);
            }
          }, _ = d(6), v = y(_);
          function y(u) {
            return u && u.__esModule ? u : { default: u };
          }
          function h(u, a) {
            if (!(u instanceof a))
              throw new TypeError("Cannot call a class as a function");
          }
          function o(u, a) {
            if (!u)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return a && (typeof a == "object" || typeof a == "function") ? a : u;
          }
          function t(u, a) {
            if (typeof a != "function" && a !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof a);
            u.prototype = Object.create(a && a.prototype, { constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 } }), a && (Object.setPrototypeOf ? Object.setPrototypeOf(u, a) : u.__proto__ = a);
          }
          var e = function(u) {
            t(a, u);
            function a() {
              return h(this, a), o(this, (a.__proto__ || Object.getPrototypeOf(a)).apply(this, arguments));
            }
            return k(a, [{
              key: "optimize",
              value: function(r) {
                q(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "optimize", this).call(this, r), this.domNode.tagName !== this.statics.tagName[0] && this.replaceWith(this.statics.blotName);
              }
            }], [{
              key: "create",
              value: function() {
                return q(a.__proto__ || Object.getPrototypeOf(a), "create", this).call(this);
              }
            }, {
              key: "formats",
              value: function() {
                return !0;
              }
            }]), a;
          }(v.default);
          e.blotName = "bold", e.tagName = ["STRONG", "B"], s.default = e;
        },
        /* 57 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.addControls = s.default = void 0;
          var k = /* @__PURE__ */ function() {
            function p(g, T) {
              var S = [], I = !0, $ = !1, F = void 0;
              try {
                for (var W = g[Symbol.iterator](), B; !(I = (B = W.next()).done) && (S.push(B.value), !(T && S.length === T)); I = !0)
                  ;
              } catch (M) {
                $ = !0, F = M;
              } finally {
                try {
                  !I && W.return && W.return();
                } finally {
                  if ($)
                    throw F;
                }
              }
              return S;
            }
            return function(g, T) {
              if (Array.isArray(g))
                return g;
              if (Symbol.iterator in Object(g))
                return p(g, T);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), q = /* @__PURE__ */ function() {
            function p(g, T) {
              for (var S = 0; S < T.length; S++) {
                var I = T[S];
                I.enumerable = I.enumerable || !1, I.configurable = !0, "value" in I && (I.writable = !0), Object.defineProperty(g, I.key, I);
              }
            }
            return function(g, T, S) {
              return T && p(g.prototype, T), S && p(g, S), g;
            };
          }(), _ = d(2), v = r(_), y = d(0), h = r(y), o = d(5), t = r(o), e = d(10), u = r(e), a = d(9), l = r(a);
          function r(p) {
            return p && p.__esModule ? p : { default: p };
          }
          function i(p, g, T) {
            return g in p ? Object.defineProperty(p, g, { value: T, enumerable: !0, configurable: !0, writable: !0 }) : p[g] = T, p;
          }
          function f(p, g) {
            if (!(p instanceof g))
              throw new TypeError("Cannot call a class as a function");
          }
          function n(p, g) {
            if (!p)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return g && (typeof g == "object" || typeof g == "function") ? g : p;
          }
          function c(p, g) {
            if (typeof g != "function" && g !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof g);
            p.prototype = Object.create(g && g.prototype, { constructor: { value: p, enumerable: !1, writable: !0, configurable: !0 } }), g && (Object.setPrototypeOf ? Object.setPrototypeOf(p, g) : p.__proto__ = g);
          }
          var N = (0, u.default)("quill:toolbar"), O = function(p) {
            c(g, p);
            function g(T, S) {
              f(this, g);
              var I = n(this, (g.__proto__ || Object.getPrototypeOf(g)).call(this, T, S));
              if (Array.isArray(I.options.container)) {
                var $ = document.createElement("div");
                x($, I.options.container), T.container.parentNode.insertBefore($, T.container), I.container = $;
              } else
                typeof I.options.container == "string" ? I.container = document.querySelector(I.options.container) : I.container = I.options.container;
              if (!(I.container instanceof HTMLElement)) {
                var F;
                return F = N.error("Container required for toolbar", I.options), n(I, F);
              }
              return I.container.classList.add("ql-toolbar"), I.controls = [], I.handlers = {}, Object.keys(I.options.handlers).forEach(function(W) {
                I.addHandler(W, I.options.handlers[W]);
              }), [].forEach.call(I.container.querySelectorAll("button, select"), function(W) {
                I.attach(W);
              }), I.quill.on(t.default.events.EDITOR_CHANGE, function(W, B) {
                W === t.default.events.SELECTION_CHANGE && I.update(B);
              }), I.quill.on(t.default.events.SCROLL_OPTIMIZE, function() {
                var W = I.quill.selection.getRange(), B = k(W, 1), M = B[0];
                I.update(M);
              }), I;
            }
            return q(g, [{
              key: "addHandler",
              value: function(S, I) {
                this.handlers[S] = I;
              }
            }, {
              key: "attach",
              value: function(S) {
                var I = this, $ = [].find.call(S.classList, function(W) {
                  return W.indexOf("ql-") === 0;
                });
                if ($) {
                  if ($ = $.slice(3), S.tagName === "BUTTON" && S.setAttribute("type", "button"), this.handlers[$] == null) {
                    if (this.quill.scroll.whitelist != null && this.quill.scroll.whitelist[$] == null) {
                      N.warn("ignoring attaching to disabled format", $, S);
                      return;
                    }
                    if (h.default.query($) == null) {
                      N.warn("ignoring attaching to nonexistent format", $, S);
                      return;
                    }
                  }
                  var F = S.tagName === "SELECT" ? "change" : "click";
                  S.addEventListener(F, function(W) {
                    var B = void 0;
                    if (S.tagName === "SELECT") {
                      if (S.selectedIndex < 0)
                        return;
                      var M = S.options[S.selectedIndex];
                      M.hasAttribute("selected") ? B = !1 : B = M.value || !1;
                    } else
                      S.classList.contains("ql-active") ? B = !1 : B = S.value || !S.hasAttribute("value"), W.preventDefault();
                    I.quill.focus();
                    var A = I.quill.selection.getRange(), L = k(A, 1), j = L[0];
                    if (I.handlers[$] != null)
                      I.handlers[$].call(I, B);
                    else if (h.default.query($).prototype instanceof h.default.Embed) {
                      if (B = prompt("Enter " + $), !B)
                        return;
                      I.quill.updateContents(new v.default().retain(j.index).delete(j.length).insert(i({}, $, B)), t.default.sources.USER);
                    } else
                      I.quill.format($, B, t.default.sources.USER);
                    I.update(j);
                  }), this.controls.push([$, S]);
                }
              }
            }, {
              key: "update",
              value: function(S) {
                var I = S == null ? {} : this.quill.getFormat(S);
                this.controls.forEach(function($) {
                  var F = k($, 2), W = F[0], B = F[1];
                  if (B.tagName === "SELECT") {
                    var M = void 0;
                    if (S == null)
                      M = null;
                    else if (I[W] == null)
                      M = B.querySelector("option[selected]");
                    else if (!Array.isArray(I[W])) {
                      var A = I[W];
                      typeof A == "string" && (A = A.replace(/\"/g, '\\"')), M = B.querySelector('option[value="' + A + '"]');
                    }
                    M == null ? (B.value = "", B.selectedIndex = -1) : M.selected = !0;
                  } else if (S == null)
                    B.classList.remove("ql-active");
                  else if (B.hasAttribute("value")) {
                    var L = I[W] === B.getAttribute("value") || I[W] != null && I[W].toString() === B.getAttribute("value") || I[W] == null && !B.getAttribute("value");
                    B.classList.toggle("ql-active", L);
                  } else
                    B.classList.toggle("ql-active", I[W] != null);
                });
              }
            }]), g;
          }(l.default);
          O.DEFAULTS = {};
          function E(p, g, T) {
            var S = document.createElement("button");
            S.setAttribute("type", "button"), S.classList.add("ql-" + g), T != null && (S.value = T), p.appendChild(S);
          }
          function x(p, g) {
            Array.isArray(g[0]) || (g = [g]), g.forEach(function(T) {
              var S = document.createElement("span");
              S.classList.add("ql-formats"), T.forEach(function(I) {
                if (typeof I == "string")
                  E(S, I);
                else {
                  var $ = Object.keys(I)[0], F = I[$];
                  Array.isArray(F) ? m(S, $, F) : E(S, $, F);
                }
              }), p.appendChild(S);
            });
          }
          function m(p, g, T) {
            var S = document.createElement("select");
            S.classList.add("ql-" + g), T.forEach(function(I) {
              var $ = document.createElement("option");
              I !== !1 ? $.setAttribute("value", I) : $.setAttribute("selected", "selected"), S.appendChild($);
            }), p.appendChild(S);
          }
          O.DEFAULTS = {
            container: null,
            handlers: {
              clean: function() {
                var g = this, T = this.quill.getSelection();
                if (T != null)
                  if (T.length == 0) {
                    var S = this.quill.getFormat();
                    Object.keys(S).forEach(function(I) {
                      h.default.query(I, h.default.Scope.INLINE) != null && g.quill.format(I, !1);
                    });
                  } else
                    this.quill.removeFormat(T, t.default.sources.USER);
              },
              direction: function(g) {
                var T = this.quill.getFormat().align;
                g === "rtl" && T == null ? this.quill.format("align", "right", t.default.sources.USER) : !g && T === "right" && this.quill.format("align", !1, t.default.sources.USER), this.quill.format("direction", g, t.default.sources.USER);
              },
              indent: function(g) {
                var T = this.quill.getSelection(), S = this.quill.getFormat(T), I = parseInt(S.indent || 0);
                if (g === "+1" || g === "-1") {
                  var $ = g === "+1" ? 1 : -1;
                  S.direction === "rtl" && ($ *= -1), this.quill.format("indent", I + $, t.default.sources.USER);
                }
              },
              link: function(g) {
                g === !0 && (g = prompt("Enter link URL:")), this.quill.format("link", g, t.default.sources.USER);
              },
              list: function(g) {
                var T = this.quill.getSelection(), S = this.quill.getFormat(T);
                g === "check" ? S.list === "checked" || S.list === "unchecked" ? this.quill.format("list", !1, t.default.sources.USER) : this.quill.format("list", "unchecked", t.default.sources.USER) : this.quill.format("list", g, t.default.sources.USER);
              }
            }
          }, s.default = O, s.addControls = x;
        },
        /* 58 */
        /***/
        function(b, s) {
          b.exports = '<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>';
        },
        /* 59 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var k = /* @__PURE__ */ function() {
            function u(a, l) {
              for (var r = 0; r < l.length; r++) {
                var i = l[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(a, i.key, i);
              }
            }
            return function(a, l, r) {
              return l && u(a.prototype, l), r && u(a, r), a;
            };
          }(), q = function u(a, l, r) {
            a === null && (a = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(a, l);
            if (i === void 0) {
              var f = Object.getPrototypeOf(a);
              return f === null ? void 0 : u(f, l, r);
            } else {
              if ("value" in i)
                return i.value;
              var n = i.get;
              return n === void 0 ? void 0 : n.call(r);
            }
          }, _ = d(28), v = y(_);
          function y(u) {
            return u && u.__esModule ? u : { default: u };
          }
          function h(u, a) {
            if (!(u instanceof a))
              throw new TypeError("Cannot call a class as a function");
          }
          function o(u, a) {
            if (!u)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return a && (typeof a == "object" || typeof a == "function") ? a : u;
          }
          function t(u, a) {
            if (typeof a != "function" && a !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof a);
            u.prototype = Object.create(a && a.prototype, { constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 } }), a && (Object.setPrototypeOf ? Object.setPrototypeOf(u, a) : u.__proto__ = a);
          }
          var e = function(u) {
            t(a, u);
            function a(l, r) {
              h(this, a);
              var i = o(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, l));
              return i.label.innerHTML = r, i.container.classList.add("ql-color-picker"), [].slice.call(i.container.querySelectorAll(".ql-picker-item"), 0, 7).forEach(function(f) {
                f.classList.add("ql-primary");
              }), i;
            }
            return k(a, [{
              key: "buildItem",
              value: function(r) {
                var i = q(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "buildItem", this).call(this, r);
                return i.style.backgroundColor = r.getAttribute("value") || "", i;
              }
            }, {
              key: "selectItem",
              value: function(r, i) {
                q(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "selectItem", this).call(this, r, i);
                var f = this.label.querySelector(".ql-color-label"), n = r && r.getAttribute("data-value") || "";
                f && (f.tagName === "line" ? f.style.stroke = n : f.style.fill = n);
              }
            }]), a;
          }(v.default);
          s.default = e;
        },
        /* 60 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var k = /* @__PURE__ */ function() {
            function u(a, l) {
              for (var r = 0; r < l.length; r++) {
                var i = l[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(a, i.key, i);
              }
            }
            return function(a, l, r) {
              return l && u(a.prototype, l), r && u(a, r), a;
            };
          }(), q = function u(a, l, r) {
            a === null && (a = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(a, l);
            if (i === void 0) {
              var f = Object.getPrototypeOf(a);
              return f === null ? void 0 : u(f, l, r);
            } else {
              if ("value" in i)
                return i.value;
              var n = i.get;
              return n === void 0 ? void 0 : n.call(r);
            }
          }, _ = d(28), v = y(_);
          function y(u) {
            return u && u.__esModule ? u : { default: u };
          }
          function h(u, a) {
            if (!(u instanceof a))
              throw new TypeError("Cannot call a class as a function");
          }
          function o(u, a) {
            if (!u)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return a && (typeof a == "object" || typeof a == "function") ? a : u;
          }
          function t(u, a) {
            if (typeof a != "function" && a !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof a);
            u.prototype = Object.create(a && a.prototype, { constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 } }), a && (Object.setPrototypeOf ? Object.setPrototypeOf(u, a) : u.__proto__ = a);
          }
          var e = function(u) {
            t(a, u);
            function a(l, r) {
              h(this, a);
              var i = o(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, l));
              return i.container.classList.add("ql-icon-picker"), [].forEach.call(i.container.querySelectorAll(".ql-picker-item"), function(f) {
                f.innerHTML = r[f.getAttribute("data-value") || ""];
              }), i.defaultItem = i.container.querySelector(".ql-selected"), i.selectItem(i.defaultItem), i;
            }
            return k(a, [{
              key: "selectItem",
              value: function(r, i) {
                q(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "selectItem", this).call(this, r, i), r = r || this.defaultItem, this.label.innerHTML = r.innerHTML;
              }
            }]), a;
          }(v.default);
          s.default = e;
        },
        /* 61 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var k = /* @__PURE__ */ function() {
            function v(y, h) {
              for (var o = 0; o < h.length; o++) {
                var t = h[o];
                t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(y, t.key, t);
              }
            }
            return function(y, h, o) {
              return h && v(y.prototype, h), o && v(y, o), y;
            };
          }();
          function q(v, y) {
            if (!(v instanceof y))
              throw new TypeError("Cannot call a class as a function");
          }
          var _ = function() {
            function v(y, h) {
              var o = this;
              q(this, v), this.quill = y, this.boundsContainer = h || document.body, this.root = y.addContainer("ql-tooltip"), this.root.innerHTML = this.constructor.TEMPLATE, this.quill.root === this.quill.scrollingContainer && this.quill.root.addEventListener("scroll", function() {
                o.root.style.marginTop = -1 * o.quill.root.scrollTop + "px";
              }), this.hide();
            }
            return k(v, [{
              key: "hide",
              value: function() {
                this.root.classList.add("ql-hidden");
              }
            }, {
              key: "position",
              value: function(h) {
                var o = h.left + h.width / 2 - this.root.offsetWidth / 2, t = h.bottom + this.quill.root.scrollTop;
                this.root.style.left = o + "px", this.root.style.top = t + "px", this.root.classList.remove("ql-flip");
                var e = this.boundsContainer.getBoundingClientRect(), u = this.root.getBoundingClientRect(), a = 0;
                if (u.right > e.right && (a = e.right - u.right, this.root.style.left = o + a + "px"), u.left < e.left && (a = e.left - u.left, this.root.style.left = o + a + "px"), u.bottom > e.bottom) {
                  var l = u.bottom - u.top, r = h.bottom - h.top + l;
                  this.root.style.top = t - r + "px", this.root.classList.add("ql-flip");
                }
                return a;
              }
            }, {
              key: "show",
              value: function() {
                this.root.classList.remove("ql-editing"), this.root.classList.remove("ql-hidden");
              }
            }]), v;
          }();
          s.default = _;
        },
        /* 62 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var k = /* @__PURE__ */ function() {
            function m(p, g) {
              var T = [], S = !0, I = !1, $ = void 0;
              try {
                for (var F = p[Symbol.iterator](), W; !(S = (W = F.next()).done) && (T.push(W.value), !(g && T.length === g)); S = !0)
                  ;
              } catch (B) {
                I = !0, $ = B;
              } finally {
                try {
                  !S && F.return && F.return();
                } finally {
                  if (I)
                    throw $;
                }
              }
              return T;
            }
            return function(p, g) {
              if (Array.isArray(p))
                return p;
              if (Symbol.iterator in Object(p))
                return m(p, g);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), q = function m(p, g, T) {
            p === null && (p = Function.prototype);
            var S = Object.getOwnPropertyDescriptor(p, g);
            if (S === void 0) {
              var I = Object.getPrototypeOf(p);
              return I === null ? void 0 : m(I, g, T);
            } else {
              if ("value" in S)
                return S.value;
              var $ = S.get;
              return $ === void 0 ? void 0 : $.call(T);
            }
          }, _ = /* @__PURE__ */ function() {
            function m(p, g) {
              for (var T = 0; T < g.length; T++) {
                var S = g[T];
                S.enumerable = S.enumerable || !1, S.configurable = !0, "value" in S && (S.writable = !0), Object.defineProperty(p, S.key, S);
              }
            }
            return function(p, g, T) {
              return g && m(p.prototype, g), T && m(p, T), p;
            };
          }(), v = d(3), y = f(v), h = d(8), o = f(h), t = d(43), e = f(t), u = d(27), a = f(u), l = d(15), r = d(41), i = f(r);
          function f(m) {
            return m && m.__esModule ? m : { default: m };
          }
          function n(m, p) {
            if (!(m instanceof p))
              throw new TypeError("Cannot call a class as a function");
          }
          function c(m, p) {
            if (!m)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return p && (typeof p == "object" || typeof p == "function") ? p : m;
          }
          function N(m, p) {
            if (typeof p != "function" && p !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof p);
            m.prototype = Object.create(p && p.prototype, { constructor: { value: m, enumerable: !1, writable: !0, configurable: !0 } }), p && (Object.setPrototypeOf ? Object.setPrototypeOf(m, p) : m.__proto__ = p);
          }
          var O = [[{ header: ["1", "2", "3", !1] }], ["bold", "italic", "underline", "link"], [{ list: "ordered" }, { list: "bullet" }], ["clean"]], E = function(m) {
            N(p, m);
            function p(g, T) {
              n(this, p), T.modules.toolbar != null && T.modules.toolbar.container == null && (T.modules.toolbar.container = O);
              var S = c(this, (p.__proto__ || Object.getPrototypeOf(p)).call(this, g, T));
              return S.quill.container.classList.add("ql-snow"), S;
            }
            return _(p, [{
              key: "extendToolbar",
              value: function(T) {
                T.container.classList.add("ql-snow"), this.buildButtons([].slice.call(T.container.querySelectorAll("button")), i.default), this.buildPickers([].slice.call(T.container.querySelectorAll("select")), i.default), this.tooltip = new x(this.quill, this.options.bounds), T.container.querySelector(".ql-link") && this.quill.keyboard.addBinding({ key: "K", shortKey: !0 }, function(S, I) {
                  T.handlers.link.call(T, !I.format.link);
                });
              }
            }]), p;
          }(e.default);
          E.DEFAULTS = (0, y.default)(!0, {}, e.default.DEFAULTS, {
            modules: {
              toolbar: {
                handlers: {
                  link: function(p) {
                    if (p) {
                      var g = this.quill.getSelection();
                      if (g == null || g.length == 0)
                        return;
                      var T = this.quill.getText(g);
                      /^\S+@\S+\.\S+$/.test(T) && T.indexOf("mailto:") !== 0 && (T = "mailto:" + T);
                      var S = this.quill.theme.tooltip;
                      S.edit("link", T);
                    } else
                      this.quill.format("link", !1);
                  }
                }
              }
            }
          });
          var x = function(m) {
            N(p, m);
            function p(g, T) {
              n(this, p);
              var S = c(this, (p.__proto__ || Object.getPrototypeOf(p)).call(this, g, T));
              return S.preview = S.root.querySelector("a.ql-preview"), S;
            }
            return _(p, [{
              key: "listen",
              value: function() {
                var T = this;
                q(p.prototype.__proto__ || Object.getPrototypeOf(p.prototype), "listen", this).call(this), this.root.querySelector("a.ql-action").addEventListener("click", function(S) {
                  T.root.classList.contains("ql-editing") ? T.save() : T.edit("link", T.preview.textContent), S.preventDefault();
                }), this.root.querySelector("a.ql-remove").addEventListener("click", function(S) {
                  if (T.linkRange != null) {
                    var I = T.linkRange;
                    T.restoreFocus(), T.quill.formatText(I, "link", !1, o.default.sources.USER), delete T.linkRange;
                  }
                  S.preventDefault(), T.hide();
                }), this.quill.on(o.default.events.SELECTION_CHANGE, function(S, I, $) {
                  if (S != null) {
                    if (S.length === 0 && $ === o.default.sources.USER) {
                      var F = T.quill.scroll.descendant(a.default, S.index), W = k(F, 2), B = W[0], M = W[1];
                      if (B != null) {
                        T.linkRange = new l.Range(S.index - M, B.length());
                        var A = a.default.formats(B.domNode);
                        T.preview.textContent = A, T.preview.setAttribute("href", A), T.show(), T.position(T.quill.getBounds(T.linkRange));
                        return;
                      }
                    } else
                      delete T.linkRange;
                    T.hide();
                  }
                });
              }
            }, {
              key: "show",
              value: function() {
                q(p.prototype.__proto__ || Object.getPrototypeOf(p.prototype), "show", this).call(this), this.root.removeAttribute("data-mode");
              }
            }]), p;
          }(t.BaseTooltip);
          x.TEMPLATE = ['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join(""), s.default = E;
        },
        /* 63 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var k = d(29), q = Z(k), _ = d(36), v = d(38), y = d(64), h = d(65), o = Z(h), t = d(66), e = Z(t), u = d(67), a = Z(u), l = d(37), r = d(26), i = d(39), f = d(40), n = d(56), c = Z(n), N = d(68), O = Z(N), E = d(27), x = Z(E), m = d(69), p = Z(m), g = d(70), T = Z(g), S = d(71), I = Z(S), $ = d(72), F = Z($), W = d(73), B = Z(W), M = d(13), A = Z(M), L = d(74), j = Z(L), U = d(75), C = Z(U), P = d(57), D = Z(P), H = d(41), K = Z(H), V = d(28), Q = Z(V), J = d(59), tt = Z(J), it = d(60), ot = Z(it), ct = d(61), ft = Z(ct), z = d(108), G = Z(z), Y = d(62), X = Z(Y);
          function Z(et) {
            return et && et.__esModule ? et : { default: et };
          }
          q.default.register({
            "attributors/attribute/direction": v.DirectionAttribute,
            "attributors/class/align": _.AlignClass,
            "attributors/class/background": l.BackgroundClass,
            "attributors/class/color": r.ColorClass,
            "attributors/class/direction": v.DirectionClass,
            "attributors/class/font": i.FontClass,
            "attributors/class/size": f.SizeClass,
            "attributors/style/align": _.AlignStyle,
            "attributors/style/background": l.BackgroundStyle,
            "attributors/style/color": r.ColorStyle,
            "attributors/style/direction": v.DirectionStyle,
            "attributors/style/font": i.FontStyle,
            "attributors/style/size": f.SizeStyle
          }, !0), q.default.register({
            "formats/align": _.AlignClass,
            "formats/direction": v.DirectionClass,
            "formats/indent": y.IndentClass,
            "formats/background": l.BackgroundStyle,
            "formats/color": r.ColorStyle,
            "formats/font": i.FontClass,
            "formats/size": f.SizeClass,
            "formats/blockquote": o.default,
            "formats/code-block": A.default,
            "formats/header": e.default,
            "formats/list": a.default,
            "formats/bold": c.default,
            "formats/code": M.Code,
            "formats/italic": O.default,
            "formats/link": x.default,
            "formats/script": p.default,
            "formats/strike": T.default,
            "formats/underline": I.default,
            "formats/image": F.default,
            "formats/video": B.default,
            "formats/list/item": u.ListItem,
            "modules/formula": j.default,
            "modules/syntax": C.default,
            "modules/toolbar": D.default,
            "themes/bubble": G.default,
            "themes/snow": X.default,
            "ui/icons": K.default,
            "ui/picker": Q.default,
            "ui/icon-picker": ot.default,
            "ui/color-picker": tt.default,
            "ui/tooltip": ft.default
          }, !0), s.default = q.default;
        },
        /* 64 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.IndentClass = void 0;
          var k = /* @__PURE__ */ function() {
            function a(l, r) {
              for (var i = 0; i < r.length; i++) {
                var f = r[i];
                f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(l, f.key, f);
              }
            }
            return function(l, r, i) {
              return r && a(l.prototype, r), i && a(l, i), l;
            };
          }(), q = function a(l, r, i) {
            l === null && (l = Function.prototype);
            var f = Object.getOwnPropertyDescriptor(l, r);
            if (f === void 0) {
              var n = Object.getPrototypeOf(l);
              return n === null ? void 0 : a(n, r, i);
            } else {
              if ("value" in f)
                return f.value;
              var c = f.get;
              return c === void 0 ? void 0 : c.call(i);
            }
          }, _ = d(0), v = y(_);
          function y(a) {
            return a && a.__esModule ? a : { default: a };
          }
          function h(a, l) {
            if (!(a instanceof l))
              throw new TypeError("Cannot call a class as a function");
          }
          function o(a, l) {
            if (!a)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return l && (typeof l == "object" || typeof l == "function") ? l : a;
          }
          function t(a, l) {
            if (typeof l != "function" && l !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof l);
            a.prototype = Object.create(l && l.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), l && (Object.setPrototypeOf ? Object.setPrototypeOf(a, l) : a.__proto__ = l);
          }
          var e = function(a) {
            t(l, a);
            function l() {
              return h(this, l), o(this, (l.__proto__ || Object.getPrototypeOf(l)).apply(this, arguments));
            }
            return k(l, [{
              key: "add",
              value: function(i, f) {
                if (f === "+1" || f === "-1") {
                  var n = this.value(i) || 0;
                  f = f === "+1" ? n + 1 : n - 1;
                }
                return f === 0 ? (this.remove(i), !0) : q(l.prototype.__proto__ || Object.getPrototypeOf(l.prototype), "add", this).call(this, i, f);
              }
            }, {
              key: "canAdd",
              value: function(i, f) {
                return q(l.prototype.__proto__ || Object.getPrototypeOf(l.prototype), "canAdd", this).call(this, i, f) || q(l.prototype.__proto__ || Object.getPrototypeOf(l.prototype), "canAdd", this).call(this, i, parseInt(f));
              }
            }, {
              key: "value",
              value: function(i) {
                return parseInt(q(l.prototype.__proto__ || Object.getPrototypeOf(l.prototype), "value", this).call(this, i)) || void 0;
              }
            }]), l;
          }(v.default.Attributor.Class), u = new e("indent", "ql-indent", {
            scope: v.default.Scope.BLOCK,
            whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
          });
          s.IndentClass = u;
        },
        /* 65 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var k = d(4), q = _(k);
          function _(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function v(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          }
          function y(t, e) {
            if (!t)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e && (typeof e == "object" || typeof e == "function") ? e : t;
          }
          function h(t, e) {
            if (typeof e != "function" && e !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          }
          var o = function(t) {
            h(e, t);
            function e() {
              return v(this, e), y(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
            }
            return e;
          }(q.default);
          o.blotName = "blockquote", o.tagName = "blockquote", s.default = o;
        },
        /* 66 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var k = /* @__PURE__ */ function() {
            function e(u, a) {
              for (var l = 0; l < a.length; l++) {
                var r = a[l];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(u, r.key, r);
              }
            }
            return function(u, a, l) {
              return a && e(u.prototype, a), l && e(u, l), u;
            };
          }(), q = d(4), _ = v(q);
          function v(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function y(e, u) {
            if (!(e instanceof u))
              throw new TypeError("Cannot call a class as a function");
          }
          function h(e, u) {
            if (!e)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return u && (typeof u == "object" || typeof u == "function") ? u : e;
          }
          function o(e, u) {
            if (typeof u != "function" && u !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof u);
            e.prototype = Object.create(u && u.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), u && (Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : e.__proto__ = u);
          }
          var t = function(e) {
            o(u, e);
            function u() {
              return y(this, u), h(this, (u.__proto__ || Object.getPrototypeOf(u)).apply(this, arguments));
            }
            return k(u, null, [{
              key: "formats",
              value: function(l) {
                return this.tagName.indexOf(l.tagName) + 1;
              }
            }]), u;
          }(_.default);
          t.blotName = "header", t.tagName = ["H1", "H2", "H3", "H4", "H5", "H6"], s.default = t;
        },
        /* 67 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.default = s.ListItem = void 0;
          var k = /* @__PURE__ */ function() {
            function n(c, N) {
              for (var O = 0; O < N.length; O++) {
                var E = N[O];
                E.enumerable = E.enumerable || !1, E.configurable = !0, "value" in E && (E.writable = !0), Object.defineProperty(c, E.key, E);
              }
            }
            return function(c, N, O) {
              return N && n(c.prototype, N), O && n(c, O), c;
            };
          }(), q = function n(c, N, O) {
            c === null && (c = Function.prototype);
            var E = Object.getOwnPropertyDescriptor(c, N);
            if (E === void 0) {
              var x = Object.getPrototypeOf(c);
              return x === null ? void 0 : n(x, N, O);
            } else {
              if ("value" in E)
                return E.value;
              var m = E.get;
              return m === void 0 ? void 0 : m.call(O);
            }
          }, _ = d(0), v = e(_), y = d(4), h = e(y), o = d(25), t = e(o);
          function e(n) {
            return n && n.__esModule ? n : { default: n };
          }
          function u(n, c, N) {
            return c in n ? Object.defineProperty(n, c, { value: N, enumerable: !0, configurable: !0, writable: !0 }) : n[c] = N, n;
          }
          function a(n, c) {
            if (!(n instanceof c))
              throw new TypeError("Cannot call a class as a function");
          }
          function l(n, c) {
            if (!n)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return c && (typeof c == "object" || typeof c == "function") ? c : n;
          }
          function r(n, c) {
            if (typeof c != "function" && c !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof c);
            n.prototype = Object.create(c && c.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } }), c && (Object.setPrototypeOf ? Object.setPrototypeOf(n, c) : n.__proto__ = c);
          }
          var i = function(n) {
            r(c, n);
            function c() {
              return a(this, c), l(this, (c.__proto__ || Object.getPrototypeOf(c)).apply(this, arguments));
            }
            return k(c, [{
              key: "format",
              value: function(O, E) {
                O === f.blotName && !E ? this.replaceWith(v.default.create(this.statics.scope)) : q(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), "format", this).call(this, O, E);
              }
            }, {
              key: "remove",
              value: function() {
                this.prev == null && this.next == null ? this.parent.remove() : q(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), "remove", this).call(this);
              }
            }, {
              key: "replaceWith",
              value: function(O, E) {
                return this.parent.isolate(this.offset(this.parent), this.length()), O === this.parent.statics.blotName ? (this.parent.replaceWith(O, E), this) : (this.parent.unwrap(), q(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), "replaceWith", this).call(this, O, E));
              }
            }], [{
              key: "formats",
              value: function(O) {
                return O.tagName === this.tagName ? void 0 : q(c.__proto__ || Object.getPrototypeOf(c), "formats", this).call(this, O);
              }
            }]), c;
          }(h.default);
          i.blotName = "list-item", i.tagName = "LI";
          var f = function(n) {
            r(c, n), k(c, null, [{
              key: "create",
              value: function(O) {
                var E = O === "ordered" ? "OL" : "UL", x = q(c.__proto__ || Object.getPrototypeOf(c), "create", this).call(this, E);
                return (O === "checked" || O === "unchecked") && x.setAttribute("data-checked", O === "checked"), x;
              }
            }, {
              key: "formats",
              value: function(O) {
                if (O.tagName === "OL")
                  return "ordered";
                if (O.tagName === "UL")
                  return O.hasAttribute("data-checked") ? O.getAttribute("data-checked") === "true" ? "checked" : "unchecked" : "bullet";
              }
            }]);
            function c(N) {
              a(this, c);
              var O = l(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this, N)), E = function(m) {
                if (m.target.parentNode === N) {
                  var p = O.statics.formats(N), g = v.default.find(m.target);
                  p === "checked" ? g.format("list", "unchecked") : p === "unchecked" && g.format("list", "checked");
                }
              };
              return N.addEventListener("touchstart", E), N.addEventListener("mousedown", E), O;
            }
            return k(c, [{
              key: "format",
              value: function(O, E) {
                this.children.length > 0 && this.children.tail.format(O, E);
              }
            }, {
              key: "formats",
              value: function() {
                return u({}, this.statics.blotName, this.statics.formats(this.domNode));
              }
            }, {
              key: "insertBefore",
              value: function(O, E) {
                if (O instanceof i)
                  q(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), "insertBefore", this).call(this, O, E);
                else {
                  var x = E == null ? this.length() : E.offset(this), m = this.split(x);
                  m.parent.insertBefore(O, m);
                }
              }
            }, {
              key: "optimize",
              value: function(O) {
                q(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), "optimize", this).call(this, O);
                var E = this.next;
                E != null && E.prev === this && E.statics.blotName === this.statics.blotName && E.domNode.tagName === this.domNode.tagName && E.domNode.getAttribute("data-checked") === this.domNode.getAttribute("data-checked") && (E.moveChildren(this), E.remove());
              }
            }, {
              key: "replace",
              value: function(O) {
                if (O.statics.blotName !== this.statics.blotName) {
                  var E = v.default.create(this.statics.defaultChild);
                  O.moveChildren(E), this.appendChild(E);
                }
                q(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), "replace", this).call(this, O);
              }
            }]), c;
          }(t.default);
          f.blotName = "list", f.scope = v.default.Scope.BLOCK_BLOT, f.tagName = ["OL", "UL"], f.defaultChild = "list-item", f.allowedChildren = [i], s.ListItem = i, s.default = f;
        },
        /* 68 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var k = d(56), q = _(k);
          function _(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function v(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          }
          function y(t, e) {
            if (!t)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e && (typeof e == "object" || typeof e == "function") ? e : t;
          }
          function h(t, e) {
            if (typeof e != "function" && e !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          }
          var o = function(t) {
            h(e, t);
            function e() {
              return v(this, e), y(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
            }
            return e;
          }(q.default);
          o.blotName = "italic", o.tagName = ["EM", "I"], s.default = o;
        },
        /* 69 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var k = /* @__PURE__ */ function() {
            function u(a, l) {
              for (var r = 0; r < l.length; r++) {
                var i = l[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(a, i.key, i);
              }
            }
            return function(a, l, r) {
              return l && u(a.prototype, l), r && u(a, r), a;
            };
          }(), q = function u(a, l, r) {
            a === null && (a = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(a, l);
            if (i === void 0) {
              var f = Object.getPrototypeOf(a);
              return f === null ? void 0 : u(f, l, r);
            } else {
              if ("value" in i)
                return i.value;
              var n = i.get;
              return n === void 0 ? void 0 : n.call(r);
            }
          }, _ = d(6), v = y(_);
          function y(u) {
            return u && u.__esModule ? u : { default: u };
          }
          function h(u, a) {
            if (!(u instanceof a))
              throw new TypeError("Cannot call a class as a function");
          }
          function o(u, a) {
            if (!u)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return a && (typeof a == "object" || typeof a == "function") ? a : u;
          }
          function t(u, a) {
            if (typeof a != "function" && a !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof a);
            u.prototype = Object.create(a && a.prototype, { constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 } }), a && (Object.setPrototypeOf ? Object.setPrototypeOf(u, a) : u.__proto__ = a);
          }
          var e = function(u) {
            t(a, u);
            function a() {
              return h(this, a), o(this, (a.__proto__ || Object.getPrototypeOf(a)).apply(this, arguments));
            }
            return k(a, null, [{
              key: "create",
              value: function(r) {
                return r === "super" ? document.createElement("sup") : r === "sub" ? document.createElement("sub") : q(a.__proto__ || Object.getPrototypeOf(a), "create", this).call(this, r);
              }
            }, {
              key: "formats",
              value: function(r) {
                if (r.tagName === "SUB")
                  return "sub";
                if (r.tagName === "SUP")
                  return "super";
              }
            }]), a;
          }(v.default);
          e.blotName = "script", e.tagName = ["SUB", "SUP"], s.default = e;
        },
        /* 70 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var k = d(6), q = _(k);
          function _(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function v(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          }
          function y(t, e) {
            if (!t)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e && (typeof e == "object" || typeof e == "function") ? e : t;
          }
          function h(t, e) {
            if (typeof e != "function" && e !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          }
          var o = function(t) {
            h(e, t);
            function e() {
              return v(this, e), y(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
            }
            return e;
          }(q.default);
          o.blotName = "strike", o.tagName = "S", s.default = o;
        },
        /* 71 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var k = d(6), q = _(k);
          function _(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function v(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          }
          function y(t, e) {
            if (!t)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e && (typeof e == "object" || typeof e == "function") ? e : t;
          }
          function h(t, e) {
            if (typeof e != "function" && e !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          }
          var o = function(t) {
            h(e, t);
            function e() {
              return v(this, e), y(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
            }
            return e;
          }(q.default);
          o.blotName = "underline", o.tagName = "U", s.default = o;
        },
        /* 72 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var k = /* @__PURE__ */ function() {
            function l(r, i) {
              for (var f = 0; f < i.length; f++) {
                var n = i[f];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n);
              }
            }
            return function(r, i, f) {
              return i && l(r.prototype, i), f && l(r, f), r;
            };
          }(), q = function l(r, i, f) {
            r === null && (r = Function.prototype);
            var n = Object.getOwnPropertyDescriptor(r, i);
            if (n === void 0) {
              var c = Object.getPrototypeOf(r);
              return c === null ? void 0 : l(c, i, f);
            } else {
              if ("value" in n)
                return n.value;
              var N = n.get;
              return N === void 0 ? void 0 : N.call(f);
            }
          }, _ = d(0), v = h(_), y = d(27);
          function h(l) {
            return l && l.__esModule ? l : { default: l };
          }
          function o(l, r) {
            if (!(l instanceof r))
              throw new TypeError("Cannot call a class as a function");
          }
          function t(l, r) {
            if (!l)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return r && (typeof r == "object" || typeof r == "function") ? r : l;
          }
          function e(l, r) {
            if (typeof r != "function" && r !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof r);
            l.prototype = Object.create(r && r.prototype, { constructor: { value: l, enumerable: !1, writable: !0, configurable: !0 } }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(l, r) : l.__proto__ = r);
          }
          var u = ["alt", "height", "width"], a = function(l) {
            e(r, l);
            function r() {
              return o(this, r), t(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
            }
            return k(r, [{
              key: "format",
              value: function(f, n) {
                u.indexOf(f) > -1 ? n ? this.domNode.setAttribute(f, n) : this.domNode.removeAttribute(f) : q(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "format", this).call(this, f, n);
              }
            }], [{
              key: "create",
              value: function(f) {
                var n = q(r.__proto__ || Object.getPrototypeOf(r), "create", this).call(this, f);
                return typeof f == "string" && n.setAttribute("src", this.sanitize(f)), n;
              }
            }, {
              key: "formats",
              value: function(f) {
                return u.reduce(function(n, c) {
                  return f.hasAttribute(c) && (n[c] = f.getAttribute(c)), n;
                }, {});
              }
            }, {
              key: "match",
              value: function(f) {
                return /\.(jpe?g|gif|png)$/.test(f) || /^data:image\/.+;base64/.test(f);
              }
            }, {
              key: "sanitize",
              value: function(f) {
                return (0, y.sanitize)(f, ["http", "https", "data"]) ? f : "//:0";
              }
            }, {
              key: "value",
              value: function(f) {
                return f.getAttribute("src");
              }
            }]), r;
          }(v.default.Embed);
          a.blotName = "image", a.tagName = "IMG", s.default = a;
        },
        /* 73 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var k = /* @__PURE__ */ function() {
            function l(r, i) {
              for (var f = 0; f < i.length; f++) {
                var n = i[f];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n);
              }
            }
            return function(r, i, f) {
              return i && l(r.prototype, i), f && l(r, f), r;
            };
          }(), q = function l(r, i, f) {
            r === null && (r = Function.prototype);
            var n = Object.getOwnPropertyDescriptor(r, i);
            if (n === void 0) {
              var c = Object.getPrototypeOf(r);
              return c === null ? void 0 : l(c, i, f);
            } else {
              if ("value" in n)
                return n.value;
              var N = n.get;
              return N === void 0 ? void 0 : N.call(f);
            }
          }, _ = d(4), v = d(27), y = h(v);
          function h(l) {
            return l && l.__esModule ? l : { default: l };
          }
          function o(l, r) {
            if (!(l instanceof r))
              throw new TypeError("Cannot call a class as a function");
          }
          function t(l, r) {
            if (!l)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return r && (typeof r == "object" || typeof r == "function") ? r : l;
          }
          function e(l, r) {
            if (typeof r != "function" && r !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof r);
            l.prototype = Object.create(r && r.prototype, { constructor: { value: l, enumerable: !1, writable: !0, configurable: !0 } }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(l, r) : l.__proto__ = r);
          }
          var u = ["height", "width"], a = function(l) {
            e(r, l);
            function r() {
              return o(this, r), t(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
            }
            return k(r, [{
              key: "format",
              value: function(f, n) {
                u.indexOf(f) > -1 ? n ? this.domNode.setAttribute(f, n) : this.domNode.removeAttribute(f) : q(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "format", this).call(this, f, n);
              }
            }], [{
              key: "create",
              value: function(f) {
                var n = q(r.__proto__ || Object.getPrototypeOf(r), "create", this).call(this, f);
                return n.setAttribute("frameborder", "0"), n.setAttribute("allowfullscreen", !0), n.setAttribute("src", this.sanitize(f)), n;
              }
            }, {
              key: "formats",
              value: function(f) {
                return u.reduce(function(n, c) {
                  return f.hasAttribute(c) && (n[c] = f.getAttribute(c)), n;
                }, {});
              }
            }, {
              key: "sanitize",
              value: function(f) {
                return y.default.sanitize(f);
              }
            }, {
              key: "value",
              value: function(f) {
                return f.getAttribute("src");
              }
            }]), r;
          }(_.BlockEmbed);
          a.blotName = "video", a.className = "ql-video", a.tagName = "IFRAME", s.default = a;
        },
        /* 74 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.default = s.FormulaBlot = void 0;
          var k = /* @__PURE__ */ function() {
            function f(n, c) {
              for (var N = 0; N < c.length; N++) {
                var O = c[N];
                O.enumerable = O.enumerable || !1, O.configurable = !0, "value" in O && (O.writable = !0), Object.defineProperty(n, O.key, O);
              }
            }
            return function(n, c, N) {
              return c && f(n.prototype, c), N && f(n, N), n;
            };
          }(), q = function f(n, c, N) {
            n === null && (n = Function.prototype);
            var O = Object.getOwnPropertyDescriptor(n, c);
            if (O === void 0) {
              var E = Object.getPrototypeOf(n);
              return E === null ? void 0 : f(E, c, N);
            } else {
              if ("value" in O)
                return O.value;
              var x = O.get;
              return x === void 0 ? void 0 : x.call(N);
            }
          }, _ = d(35), v = e(_), y = d(5), h = e(y), o = d(9), t = e(o);
          function e(f) {
            return f && f.__esModule ? f : { default: f };
          }
          function u(f, n) {
            if (!(f instanceof n))
              throw new TypeError("Cannot call a class as a function");
          }
          function a(f, n) {
            if (!f)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return n && (typeof n == "object" || typeof n == "function") ? n : f;
          }
          function l(f, n) {
            if (typeof n != "function" && n !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof n);
            f.prototype = Object.create(n && n.prototype, { constructor: { value: f, enumerable: !1, writable: !0, configurable: !0 } }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(f, n) : f.__proto__ = n);
          }
          var r = function(f) {
            l(n, f);
            function n() {
              return u(this, n), a(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments));
            }
            return k(n, null, [{
              key: "create",
              value: function(N) {
                var O = q(n.__proto__ || Object.getPrototypeOf(n), "create", this).call(this, N);
                return typeof N == "string" && (window.katex.render(N, O, {
                  throwOnError: !1,
                  errorColor: "#f00"
                }), O.setAttribute("data-value", N)), O;
              }
            }, {
              key: "value",
              value: function(N) {
                return N.getAttribute("data-value");
              }
            }]), n;
          }(v.default);
          r.blotName = "formula", r.className = "ql-formula", r.tagName = "SPAN";
          var i = function(f) {
            l(n, f), k(n, null, [{
              key: "register",
              value: function() {
                h.default.register(r, !0);
              }
            }]);
            function n() {
              u(this, n);
              var c = a(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
              if (window.katex == null)
                throw new Error("Formula module requires KaTeX.");
              return c;
            }
            return n;
          }(t.default);
          s.FormulaBlot = r, s.default = i;
        },
        /* 75 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.default = s.CodeToken = s.CodeBlock = void 0;
          var k = /* @__PURE__ */ function() {
            function N(O, E) {
              for (var x = 0; x < E.length; x++) {
                var m = E[x];
                m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(O, m.key, m);
              }
            }
            return function(O, E, x) {
              return E && N(O.prototype, E), x && N(O, x), O;
            };
          }(), q = function N(O, E, x) {
            O === null && (O = Function.prototype);
            var m = Object.getOwnPropertyDescriptor(O, E);
            if (m === void 0) {
              var p = Object.getPrototypeOf(O);
              return p === null ? void 0 : N(p, E, x);
            } else {
              if ("value" in m)
                return m.value;
              var g = m.get;
              return g === void 0 ? void 0 : g.call(x);
            }
          }, _ = d(0), v = a(_), y = d(5), h = a(y), o = d(9), t = a(o), e = d(13), u = a(e);
          function a(N) {
            return N && N.__esModule ? N : { default: N };
          }
          function l(N, O) {
            if (!(N instanceof O))
              throw new TypeError("Cannot call a class as a function");
          }
          function r(N, O) {
            if (!N)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return O && (typeof O == "object" || typeof O == "function") ? O : N;
          }
          function i(N, O) {
            if (typeof O != "function" && O !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof O);
            N.prototype = Object.create(O && O.prototype, { constructor: { value: N, enumerable: !1, writable: !0, configurable: !0 } }), O && (Object.setPrototypeOf ? Object.setPrototypeOf(N, O) : N.__proto__ = O);
          }
          var f = function(N) {
            i(O, N);
            function O() {
              return l(this, O), r(this, (O.__proto__ || Object.getPrototypeOf(O)).apply(this, arguments));
            }
            return k(O, [{
              key: "replaceWith",
              value: function(x) {
                this.domNode.textContent = this.domNode.textContent, this.attach(), q(O.prototype.__proto__ || Object.getPrototypeOf(O.prototype), "replaceWith", this).call(this, x);
              }
            }, {
              key: "highlight",
              value: function(x) {
                var m = this.domNode.textContent;
                this.cachedText !== m && ((m.trim().length > 0 || this.cachedText == null) && (this.domNode.innerHTML = x(m), this.domNode.normalize(), this.attach()), this.cachedText = m);
              }
            }]), O;
          }(u.default);
          f.className = "ql-syntax";
          var n = new v.default.Attributor.Class("token", "hljs", {
            scope: v.default.Scope.INLINE
          }), c = function(N) {
            i(O, N), k(O, null, [{
              key: "register",
              value: function() {
                h.default.register(n, !0), h.default.register(f, !0);
              }
            }]);
            function O(E, x) {
              l(this, O);
              var m = r(this, (O.__proto__ || Object.getPrototypeOf(O)).call(this, E, x));
              if (typeof m.options.highlight != "function")
                throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");
              var p = null;
              return m.quill.on(h.default.events.SCROLL_OPTIMIZE, function() {
                clearTimeout(p), p = setTimeout(function() {
                  m.highlight(), p = null;
                }, m.options.interval);
              }), m.highlight(), m;
            }
            return k(O, [{
              key: "highlight",
              value: function() {
                var x = this;
                if (!this.quill.selection.composing) {
                  this.quill.update(h.default.sources.USER);
                  var m = this.quill.getSelection();
                  this.quill.scroll.descendants(f).forEach(function(p) {
                    p.highlight(x.options.highlight);
                  }), this.quill.update(h.default.sources.SILENT), m != null && this.quill.setSelection(m, h.default.sources.SILENT);
                }
              }
            }]), O;
          }(t.default);
          c.DEFAULTS = {
            highlight: function() {
              return window.hljs == null ? null : function(N) {
                var O = window.hljs.highlightAuto(N);
                return O.value;
              };
            }(),
            interval: 1e3
          }, s.CodeBlock = f, s.CodeToken = n, s.default = c;
        },
        /* 76 */
        /***/
        function(b, s) {
          b.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>';
        },
        /* 77 */
        /***/
        function(b, s) {
          b.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>';
        },
        /* 78 */
        /***/
        function(b, s) {
          b.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>';
        },
        /* 79 */
        /***/
        function(b, s) {
          b.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>';
        },
        /* 80 */
        /***/
        function(b, s) {
          b.exports = '<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>';
        },
        /* 81 */
        /***/
        function(b, s) {
          b.exports = '<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>';
        },
        /* 82 */
        /***/
        function(b, s) {
          b.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>';
        },
        /* 83 */
        /***/
        function(b, s) {
          b.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>';
        },
        /* 84 */
        /***/
        function(b, s) {
          b.exports = '<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>';
        },
        /* 85 */
        /***/
        function(b, s) {
          b.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>';
        },
        /* 86 */
        /***/
        function(b, s) {
          b.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>';
        },
        /* 87 */
        /***/
        function(b, s) {
          b.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>';
        },
        /* 88 */
        /***/
        function(b, s) {
          b.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>';
        },
        /* 89 */
        /***/
        function(b, s) {
          b.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>';
        },
        /* 90 */
        /***/
        function(b, s) {
          b.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>';
        },
        /* 91 */
        /***/
        function(b, s) {
          b.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>';
        },
        /* 92 */
        /***/
        function(b, s) {
          b.exports = '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>';
        },
        /* 93 */
        /***/
        function(b, s) {
          b.exports = '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>';
        },
        /* 94 */
        /***/
        function(b, s) {
          b.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>';
        },
        /* 95 */
        /***/
        function(b, s) {
          b.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>';
        },
        /* 96 */
        /***/
        function(b, s) {
          b.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>';
        },
        /* 97 */
        /***/
        function(b, s) {
          b.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>';
        },
        /* 98 */
        /***/
        function(b, s) {
          b.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>';
        },
        /* 99 */
        /***/
        function(b, s) {
          b.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>';
        },
        /* 100 */
        /***/
        function(b, s) {
          b.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>';
        },
        /* 101 */
        /***/
        function(b, s) {
          b.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>';
        },
        /* 102 */
        /***/
        function(b, s) {
          b.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>';
        },
        /* 103 */
        /***/
        function(b, s) {
          b.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>';
        },
        /* 104 */
        /***/
        function(b, s) {
          b.exports = '<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>';
        },
        /* 105 */
        /***/
        function(b, s) {
          b.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>';
        },
        /* 106 */
        /***/
        function(b, s) {
          b.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>';
        },
        /* 107 */
        /***/
        function(b, s) {
          b.exports = '<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>';
        },
        /* 108 */
        /***/
        function(b, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.default = s.BubbleTooltip = void 0;
          var k = function O(E, x, m) {
            E === null && (E = Function.prototype);
            var p = Object.getOwnPropertyDescriptor(E, x);
            if (p === void 0) {
              var g = Object.getPrototypeOf(E);
              return g === null ? void 0 : O(g, x, m);
            } else {
              if ("value" in p)
                return p.value;
              var T = p.get;
              return T === void 0 ? void 0 : T.call(m);
            }
          }, q = /* @__PURE__ */ function() {
            function O(E, x) {
              for (var m = 0; m < x.length; m++) {
                var p = x[m];
                p.enumerable = p.enumerable || !1, p.configurable = !0, "value" in p && (p.writable = !0), Object.defineProperty(E, p.key, p);
              }
            }
            return function(E, x, m) {
              return x && O(E.prototype, x), m && O(E, m), E;
            };
          }(), _ = d(3), v = l(_), y = d(8), h = l(y), o = d(43), t = l(o), e = d(15), u = d(41), a = l(u);
          function l(O) {
            return O && O.__esModule ? O : { default: O };
          }
          function r(O, E) {
            if (!(O instanceof E))
              throw new TypeError("Cannot call a class as a function");
          }
          function i(O, E) {
            if (!O)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return E && (typeof E == "object" || typeof E == "function") ? E : O;
          }
          function f(O, E) {
            if (typeof E != "function" && E !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof E);
            O.prototype = Object.create(E && E.prototype, { constructor: { value: O, enumerable: !1, writable: !0, configurable: !0 } }), E && (Object.setPrototypeOf ? Object.setPrototypeOf(O, E) : O.__proto__ = E);
          }
          var n = [["bold", "italic", "link"], [{ header: 1 }, { header: 2 }, "blockquote"]], c = function(O) {
            f(E, O);
            function E(x, m) {
              r(this, E), m.modules.toolbar != null && m.modules.toolbar.container == null && (m.modules.toolbar.container = n);
              var p = i(this, (E.__proto__ || Object.getPrototypeOf(E)).call(this, x, m));
              return p.quill.container.classList.add("ql-bubble"), p;
            }
            return q(E, [{
              key: "extendToolbar",
              value: function(m) {
                this.tooltip = new N(this.quill, this.options.bounds), this.tooltip.root.appendChild(m.container), this.buildButtons([].slice.call(m.container.querySelectorAll("button")), a.default), this.buildPickers([].slice.call(m.container.querySelectorAll("select")), a.default);
              }
            }]), E;
          }(t.default);
          c.DEFAULTS = (0, v.default)(!0, {}, t.default.DEFAULTS, {
            modules: {
              toolbar: {
                handlers: {
                  link: function(E) {
                    E ? this.quill.theme.tooltip.edit() : this.quill.format("link", !1);
                  }
                }
              }
            }
          });
          var N = function(O) {
            f(E, O);
            function E(x, m) {
              r(this, E);
              var p = i(this, (E.__proto__ || Object.getPrototypeOf(E)).call(this, x, m));
              return p.quill.on(h.default.events.EDITOR_CHANGE, function(g, T, S, I) {
                if (g === h.default.events.SELECTION_CHANGE)
                  if (T != null && T.length > 0 && I === h.default.sources.USER) {
                    p.show(), p.root.style.left = "0px", p.root.style.width = "", p.root.style.width = p.root.offsetWidth + "px";
                    var $ = p.quill.getLines(T.index, T.length);
                    if ($.length === 1)
                      p.position(p.quill.getBounds(T));
                    else {
                      var F = $[$.length - 1], W = p.quill.getIndex(F), B = Math.min(F.length() - 1, T.index + T.length - W), M = p.quill.getBounds(new e.Range(W, B));
                      p.position(M);
                    }
                  } else
                    document.activeElement !== p.textbox && p.quill.hasFocus() && p.hide();
              }), p;
            }
            return q(E, [{
              key: "listen",
              value: function() {
                var m = this;
                k(E.prototype.__proto__ || Object.getPrototypeOf(E.prototype), "listen", this).call(this), this.root.querySelector(".ql-close").addEventListener("click", function() {
                  m.root.classList.remove("ql-editing");
                }), this.quill.on(h.default.events.SCROLL_OPTIMIZE, function() {
                  setTimeout(function() {
                    if (!m.root.classList.contains("ql-hidden")) {
                      var p = m.quill.getSelection();
                      p != null && m.position(m.quill.getBounds(p));
                    }
                  }, 1);
                });
              }
            }, {
              key: "cancel",
              value: function() {
                this.show();
              }
            }, {
              key: "position",
              value: function(m) {
                var p = k(E.prototype.__proto__ || Object.getPrototypeOf(E.prototype), "position", this).call(this, m), g = this.root.querySelector(".ql-tooltip-arrow");
                if (g.style.marginLeft = "", p === 0)
                  return p;
                g.style.marginLeft = -1 * p - g.offsetWidth / 2 + "px";
              }
            }]), E;
          }(o.BaseTooltip);
          N.TEMPLATE = ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', "</div>"].join(""), s.BubbleTooltip = N, s.default = c;
        },
        /* 109 */
        /***/
        function(b, s, d) {
          b.exports = d(63);
        }
        /******/
      ]).default
    );
  });
})($e);
var wu = $e.exports, qu = ht && ht.__extends || /* @__PURE__ */ function() {
  var w = function(R, b) {
    return w = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, d) {
      s.__proto__ = d;
    } || function(s, d) {
      for (var k in d)
        d.hasOwnProperty(k) && (s[k] = d[k]);
    }, w(R, b);
  };
  return function(R, b) {
    w(R, b);
    function s() {
      this.constructor = R;
    }
    R.prototype = b === null ? Object.create(b) : (s.prototype = b.prototype, new s());
  };
}(), Lt = ht && ht.__assign || function() {
  return Lt = Object.assign || function(w) {
    for (var R, b = 1, s = arguments.length; b < s; b++) {
      R = arguments[b];
      for (var d in R)
        Object.prototype.hasOwnProperty.call(R, d) && (w[d] = R[d]);
    }
    return w;
  }, Lt.apply(this, arguments);
}, Au = ht && ht.__spreadArrays || function() {
  for (var w = 0, R = 0, b = arguments.length; R < b; R++)
    w += arguments[R].length;
  for (var s = Array(w), d = 0, R = 0; R < b; R++)
    for (var k = arguments[R], q = 0, _ = k.length; q < _; q++, d++)
      s[d] = k[q];
  return s;
}, Ct = ht && ht.__importDefault || function(w) {
  return w && w.__esModule ? w : { default: w };
}, vt = Ct(ze), ku = Ct(Ge), kt = Ct(Eu), we = Ct(wu), Tu = (
  /** @class */
  function(w) {
    qu(R, w);
    function R(b) {
      var s = w.call(this, b) || this;
      s.dirtyProps = [
        "modules",
        "formats",
        "bounds",
        "theme",
        "children"
      ], s.cleanProps = [
        "id",
        "className",
        "style",
        "placeholder",
        "tabIndex",
        "onChange",
        "onChangeSelection",
        "onFocus",
        "onBlur",
        "onKeyPress",
        "onKeyDown",
        "onKeyUp"
      ], s.state = {
        generation: 0
      }, s.selection = null, s.onEditorChange = function(k, q, _, v) {
        var y, h, o, t;
        k === "text-change" ? (h = (y = s).onEditorChangeText) === null || h === void 0 || h.call(y, s.editor.root.innerHTML, q, v, s.unprivilegedEditor) : k === "selection-change" && ((t = (o = s).onEditorChangeSelection) === null || t === void 0 || t.call(o, q, v, s.unprivilegedEditor));
      };
      var d = s.isControlled() ? b.value : b.defaultValue;
      return s.value = d ?? "", s;
    }
    return R.prototype.validateProps = function(b) {
      var s;
      if (vt.default.Children.count(b.children) > 1)
        throw new Error("The Quill editing area can only be composed of a single React element.");
      if (vt.default.Children.count(b.children)) {
        var d = vt.default.Children.only(b.children);
        if (((s = d) === null || s === void 0 ? void 0 : s.type) === "textarea")
          throw new Error("Quill does not support editing on a <textarea>. Use a <div> instead.");
      }
      if (this.lastDeltaChangeSet && b.value === this.lastDeltaChangeSet)
        throw new Error("You are passing the `delta` object from the `onChange` event back as `value`. You most probably want `editor.getContents()` instead. See: https://github.com/zenoamaro/react-quill#using-deltas");
    }, R.prototype.shouldComponentUpdate = function(b, s) {
      var d = this, k;
      if (this.validateProps(b), !this.editor || this.state.generation !== s.generation)
        return !0;
      if ("value" in b) {
        var q = this.getEditorContents(), _ = (k = b.value, k ?? "");
        this.isEqualValue(_, q) || this.setEditorContents(this.editor, _);
      }
      return b.readOnly !== this.props.readOnly && this.setEditorReadOnly(this.editor, b.readOnly), Au(this.cleanProps, this.dirtyProps).some(function(v) {
        return !kt.default(b[v], d.props[v]);
      });
    }, R.prototype.shouldComponentRegenerate = function(b) {
      var s = this;
      return this.dirtyProps.some(function(d) {
        return !kt.default(b[d], s.props[d]);
      });
    }, R.prototype.componentDidMount = function() {
      this.instantiateEditor(), this.setEditorContents(this.editor, this.getEditorContents());
    }, R.prototype.componentWillUnmount = function() {
      this.destroyEditor();
    }, R.prototype.componentDidUpdate = function(b, s) {
      var d = this;
      if (this.editor && this.shouldComponentRegenerate(b)) {
        var k = this.editor.getContents(), q = this.editor.getSelection();
        this.regenerationSnapshot = { delta: k, selection: q }, this.setState({ generation: this.state.generation + 1 }), this.destroyEditor();
      }
      if (this.state.generation !== s.generation) {
        var _ = this.regenerationSnapshot, k = _.delta, v = _.selection;
        delete this.regenerationSnapshot, this.instantiateEditor();
        var y = this.editor;
        y.setContents(k), qe(function() {
          return d.setEditorSelection(y, v);
        });
      }
    }, R.prototype.instantiateEditor = function() {
      this.editor ? this.hookEditor(this.editor) : this.editor = this.createEditor(this.getEditingArea(), this.getEditorConfig());
    }, R.prototype.destroyEditor = function() {
      this.editor && this.unhookEditor(this.editor);
    }, R.prototype.isControlled = function() {
      return "value" in this.props;
    }, R.prototype.getEditorConfig = function() {
      return {
        bounds: this.props.bounds,
        formats: this.props.formats,
        modules: this.props.modules,
        placeholder: this.props.placeholder,
        readOnly: this.props.readOnly,
        scrollingContainer: this.props.scrollingContainer,
        tabIndex: this.props.tabIndex,
        theme: this.props.theme
      };
    }, R.prototype.getEditor = function() {
      if (!this.editor)
        throw new Error("Accessing non-instantiated editor");
      return this.editor;
    }, R.prototype.createEditor = function(b, s) {
      var d = new we.default(b, s);
      return s.tabIndex != null && this.setEditorTabIndex(d, s.tabIndex), this.hookEditor(d), d;
    }, R.prototype.hookEditor = function(b) {
      this.unprivilegedEditor = this.makeUnprivilegedEditor(b), b.on("editor-change", this.onEditorChange);
    }, R.prototype.unhookEditor = function(b) {
      b.off("editor-change", this.onEditorChange);
    }, R.prototype.getEditorContents = function() {
      return this.value;
    }, R.prototype.getEditorSelection = function() {
      return this.selection;
    }, R.prototype.isDelta = function(b) {
      return b && b.ops;
    }, R.prototype.isEqualValue = function(b, s) {
      return this.isDelta(b) && this.isDelta(s) ? kt.default(b.ops, s.ops) : kt.default(b, s);
    }, R.prototype.setEditorContents = function(b, s) {
      var d = this;
      this.value = s;
      var k = this.getEditorSelection();
      typeof s == "string" ? b.setContents(b.clipboard.convert(s)) : b.setContents(s), qe(function() {
        return d.setEditorSelection(b, k);
      });
    }, R.prototype.setEditorSelection = function(b, s) {
      if (this.selection = s, s) {
        var d = b.getLength();
        s.index = Math.max(0, Math.min(s.index, d - 1)), s.length = Math.max(0, Math.min(s.length, d - 1 - s.index)), b.setSelection(s);
      }
    }, R.prototype.setEditorTabIndex = function(b, s) {
      var d, k;
      !((k = (d = b) === null || d === void 0 ? void 0 : d.scroll) === null || k === void 0) && k.domNode && (b.scroll.domNode.tabIndex = s);
    }, R.prototype.setEditorReadOnly = function(b, s) {
      s ? b.disable() : b.enable();
    }, R.prototype.makeUnprivilegedEditor = function(b) {
      var s = b;
      return {
        getHTML: function() {
          return s.root.innerHTML;
        },
        getLength: s.getLength.bind(s),
        getText: s.getText.bind(s),
        getContents: s.getContents.bind(s),
        getSelection: s.getSelection.bind(s),
        getBounds: s.getBounds.bind(s)
      };
    }, R.prototype.getEditingArea = function() {
      if (!this.editingArea)
        throw new Error("Instantiating on missing editing area");
      var b = ku.default.findDOMNode(this.editingArea);
      if (!b)
        throw new Error("Cannot find element for editing area");
      if (b.nodeType === 3)
        throw new Error("Editing area cannot be a text node");
      return b;
    }, R.prototype.renderEditingArea = function() {
      var b = this, s = this.props, d = s.children, k = s.preserveWhitespace, q = this.state.generation, _ = {
        key: q,
        ref: function(v) {
          b.editingArea = v;
        }
      };
      return vt.default.Children.count(d) ? vt.default.cloneElement(vt.default.Children.only(d), _) : k ? vt.default.createElement("pre", Lt({}, _)) : vt.default.createElement("div", Lt({}, _));
    }, R.prototype.render = function() {
      var b;
      return vt.default.createElement("div", { id: this.props.id, style: this.props.style, key: this.state.generation, className: "quill " + (b = this.props.className, b ?? ""), onKeyPress: this.props.onKeyPress, onKeyDown: this.props.onKeyDown, onKeyUp: this.props.onKeyUp }, this.renderEditingArea());
    }, R.prototype.onEditorChangeText = function(b, s, d, k) {
      var q, _;
      if (this.editor) {
        var v = this.isDelta(this.value) ? k.getContents() : k.getHTML();
        v !== this.getEditorContents() && (this.lastDeltaChangeSet = s, this.value = v, (_ = (q = this.props).onChange) === null || _ === void 0 || _.call(q, b, s, d, k));
      }
    }, R.prototype.onEditorChangeSelection = function(b, s, d) {
      var k, q, _, v, y, h;
      if (this.editor) {
        var o = this.getEditorSelection(), t = !o && b, e = o && !b;
        kt.default(b, o) || (this.selection = b, (q = (k = this.props).onChangeSelection) === null || q === void 0 || q.call(k, b, s, d), t ? (v = (_ = this.props).onFocus) === null || v === void 0 || v.call(_, b, s, d) : e && ((h = (y = this.props).onBlur) === null || h === void 0 || h.call(y, o, s, d)));
      }
    }, R.prototype.focus = function() {
      this.editor && this.editor.focus();
    }, R.prototype.blur = function() {
      this.editor && (this.selection = null, this.editor.blur());
    }, R.displayName = "React Quill", R.Quill = we.default, R.defaultProps = {
      theme: "snow",
      modules: {},
      readOnly: !1
    }, R;
  }(vt.default.Component)
);
function qe(w) {
  Promise.resolve().then(w);
}
var Nu = Tu;
const xu = /* @__PURE__ */ He(Nu), Su = Ae(Ke)(({ theme: w }) => ({
  overflow: "hidden",
  position: "relative",
  borderRadius: w.shape.borderRadius,
  border: `solid 1px ${Nt(w.palette.grey[500], 0.2)}`,
  "& .ql-container.ql-snow": {
    border: "none",
    ...w.typography.body2,
    fontFamily: w.typography.fontFamily
  },
  "& .ql-editor": {
    minHeight: 160,
    maxHeight: 640,
    backgroundColor: Nt(w.palette.grey[500], 0.08),
    "&.ql-blank::before": {
      fontStyle: "normal",
      color: w.palette.text.disabled
    },
    "& pre.ql-syntax": {
      ...w.typography.body2,
      padding: w.spacing(2),
      borderRadius: w.shape.borderRadius,
      backgroundColor: w.palette.grey[900]
    },
    "& h1": {
      ...w.typography.h1
    },
    "& h2": {
      ...w.typography.h2
    },
    "& h3": {
      ...w.typography.h3
    },
    "& h4": {
      ...w.typography.h4
    },
    "& h5": {
      ...w.typography.h5
    },
    "& h6": {
      ...w.typography.h6
    },
    "& p, li": {
      ...w.typography.body2
    }
  }
})), Pu = Ae("div")(({ theme: w }) => {
  var b;
  const R = w.direction === "rtl";
  return {
    "& .ql-snow.ql-toolbar button:hover .ql-fill, .ql-snow .ql-toolbar button:hover .ql-fill, .ql-snow.ql-toolbar button:focus .ql-fill, .ql-snow .ql-toolbar button:focus .ql-fill, .ql-snow.ql-toolbar button.ql-active .ql-fill, .ql-snow .ql-toolbar button.ql-active .ql-fill, .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill, .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill, .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill, .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill, .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill, .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill, .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill, .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill, .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill, .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill, .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill, .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill, .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill, .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill, .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill, .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill, .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill, .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill, .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill, .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill, .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill, .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill": {
      fill: w.palette.primary.main
    },
    "& .ql-snow.ql-toolbar button:hover, .ql-snow .ql-toolbar button:hover, .ql-snow.ql-toolbar button:focus, .ql-snow .ql-toolbar button:focus, .ql-snow.ql-toolbar button.ql-active, .ql-snow .ql-toolbar button.ql-active, .ql-snow.ql-toolbar .ql-picker-label:hover, .ql-snow .ql-toolbar .ql-picker-label:hover, .ql-snow.ql-toolbar .ql-picker-label.ql-active, .ql-snow .ql-toolbar .ql-picker-label.ql-active, .ql-snow.ql-toolbar .ql-picker-item:hover, .ql-snow .ql-toolbar .ql-picker-item:hover, .ql-snow.ql-toolbar .ql-picker-item.ql-selected, .ql-snow .ql-toolbar .ql-picker-item.ql-selected": {
      color: w.palette.primary.main
    },
    "& .ql-snow.ql-toolbar button:hover .ql-stroke, .ql-snow .ql-toolbar button:hover .ql-stroke, .ql-snow.ql-toolbar button:focus .ql-stroke, .ql-snow .ql-toolbar button:focus .ql-stroke, .ql-snow.ql-toolbar button.ql-active .ql-stroke, .ql-snow .ql-toolbar button.ql-active .ql-stroke, .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke, .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke, .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke, .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke, .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke, .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke, .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke, .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke, .ql-snow.ql-toolbar button:hover .ql-stroke-miter, .ql-snow .ql-toolbar button:hover .ql-stroke-miter, .ql-snow.ql-toolbar button:focus .ql-stroke-miter, .ql-snow .ql-toolbar button:focus .ql-stroke-miter, .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter, .ql-snow .ql-toolbar button.ql-active .ql-stroke-miter, .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter, .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter, .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter, .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter, .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter, .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter, .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter, .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter": {
      stroke: w.palette.primary.main
    },
    "& .ql-stroke": {
      stroke: w.palette.text.primary
    },
    "& .ql-fill, .ql-stroke.ql-fill": {
      fill: w.palette.text.primary
    },
    "& .ql-picker, .ql-picker-options, .ql-picker-item, .ql-picker-label, button": {
      "&:focus": { outline: "none" }
    },
    "& .ql-toolbar.ql-snow": {
      border: "none",
      borderBottom: `solid 1px ${Nt(w.palette.grey[500], 0.2)}`,
      "& .ql-formats": {
        "&:not(:last-of-type)": {
          marginRight: w.spacing(2)
        }
      },
      // Button
      "& button": {
        padding: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        color: w.palette.text.primary
      },
      // Icon svg
      "& button svg, span svg": {
        width: 20,
        height: 20
      },
      // Select
      "& .ql-picker-label": {
        ...w.typography.subtitle2,
        color: w.palette.text.primary,
        "& .ql-stroke": {
          stroke: w.palette.text.primary
        }
      },
      "& .ql-picker-label svg": {
        ...R && {
          right: "0 !important",
          left: "auto !important"
        }
      },
      "& .ql-color,& .ql-background,& .ql-align ": {
        "& .ql-picker-label": {
          padding: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }
      },
      "& .ql-expanded": {
        "& .ql-picker-label": {
          borderRadius: 4,
          color: w.palette.text.disabled,
          borderColor: "transparent !important",
          backgroundColor: w.palette.action.focus,
          "& .ql-stroke": { stroke: w.palette.text.disabled }
        },
        "& .ql-picker-options": {
          padding: 0,
          marginTop: 4,
          border: "none",
          maxHeight: 200,
          overflow: "auto",
          boxShadow: (b = w.customShadows) == null ? void 0 : b.z20,
          borderRadius: w.shape.borderRadius,
          backgroundColor: w.palette.background.paper
        },
        "& .ql-picker-item": {
          color: w.palette.text.primary
        },
        // Align
        "&.ql-align": {
          "& .ql-picker-options": { padding: 0, display: "flex" },
          "& .ql-picker-item": {
            width: 32,
            height: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }
        },
        // Color & Background
        "&.ql-color, &.ql-background": {
          "& .ql-picker-options": { padding: 8 },
          "& .ql-picker-item": {
            margin: 3,
            borderRadius: 4,
            "&.ql-selected": { border: "solid 1px black" }
          }
        },
        // Font, Size, Header
        "&.ql-font, &.ql-size, &.ql-header": {
          "& .ql-picker-options": {
            padding: w.spacing(1, 0)
          },
          "& .ql-picker-item": {
            padding: w.spacing(0.5, 1.5)
          }
        }
      }
    }
  };
}), Lu = ["Heading 1", "Heading 2", "Heading 3", "Heading 4", "Heading 5", "Heading 6"], Ru = [
  "align",
  "background",
  "blockquote",
  "bold",
  "bullet",
  "code",
  "code-block",
  "color",
  "direction",
  "font",
  "formula",
  "header",
  "image",
  "indent",
  "italic",
  "link",
  "list",
  "script",
  "size",
  "strike",
  "table",
  "underline",
  "video"
];
function ju({ id: w, isSimple: R, ...b }) {
  return /* @__PURE__ */ at.jsx(Pu, { ...b, children: /* @__PURE__ */ at.jsxs("div", { id: w, children: [
    /* @__PURE__ */ at.jsx("div", { className: "ql-formats", children: /* @__PURE__ */ at.jsxs("select", { className: "ql-header", defaultValue: "", children: [
      Lu.map((s, d) => /* @__PURE__ */ at.jsx("option", { value: d + 1, children: s }, s)),
      /* @__PURE__ */ at.jsx("option", { value: "", children: "Normal" })
    ] }) }),
    /* @__PURE__ */ at.jsxs("div", { className: "ql-formats", children: [
      /* @__PURE__ */ at.jsx("button", { type: "button", className: "ql-bold" }),
      /* @__PURE__ */ at.jsx("button", { type: "button", className: "ql-italic" })
    ] }),
    !R && /* @__PURE__ */ at.jsxs("div", { className: "ql-formats", children: [
      /* @__PURE__ */ at.jsx("select", { className: "ql-color" }),
      /* @__PURE__ */ at.jsx("select", { className: "ql-background" })
    ] }),
    /* @__PURE__ */ at.jsxs("div", { className: "ql-formats", children: [
      /* @__PURE__ */ at.jsx("button", { type: "button", className: "ql-list", value: "ordered" }),
      /* @__PURE__ */ at.jsx("button", { type: "button", className: "ql-list", value: "bullet" }),
      !R && /* @__PURE__ */ at.jsx("button", { type: "button", className: "ql-indent", value: "-1" }),
      !R && /* @__PURE__ */ at.jsx("button", { type: "button", className: "ql-indent", value: "+1" })
    ] }),
    !R && /* @__PURE__ */ at.jsxs("div", { className: "ql-formats", children: [
      /* @__PURE__ */ at.jsx("button", { type: "button", className: "ql-script", value: "super" }),
      /* @__PURE__ */ at.jsx("button", { type: "button", className: "ql-script", value: "sub" })
    ] })
  ] }) });
}
function Cu({
  id: w = "minimal-quill",
  error: R,
  simple: b = !1,
  helperText: s,
  sx: d,
  ...k
}) {
  const q = {
    toolbar: {
      container: `#${w}`
    },
    history: {
      delay: 500,
      maxStack: 100,
      userOnly: !0
    },
    syntax: !0,
    clipboard: {
      matchVisual: !1
    }
  };
  return /* @__PURE__ */ at.jsxs(at.Fragment, { children: [
    /* @__PURE__ */ at.jsxs(
      Su,
      {
        sx: {
          ...R && {
            border: (_) => `solid 1px ${_.palette.error.main}`,
            "& .ql-editor": {
              bgcolor: (_) => Nt(_.palette.error.main, 0.08)
            }
          },
          ...d
        },
        children: [
          /* @__PURE__ */ at.jsx(ju, { id: w, isSimple: b }),
          /* @__PURE__ */ at.jsx(
            xu,
            {
              modules: q,
              formats: Ru,
              placeholder: "Write something awesome...",
              ...k
            }
          )
        ]
      }
    ),
    s && s
  ] });
}
export {
  Cu as default
};
