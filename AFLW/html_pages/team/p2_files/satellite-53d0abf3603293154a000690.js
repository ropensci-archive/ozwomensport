  var visitor = new Visitor("98DC73AE52E13F1E0A490D4C@AdobeOrg");
  visitor.marketingCloudServer = visitor.trackingServer = "info.telstra.com.au";
  visitor.marketingCloudServerSecure = visitor.trackingServerSecure = "infos.telstra.com.au";
  // Mandatory for .com.au pages else VisitorId Service wont work
  visitor.cookieDomain = visitorIDServiceGetCookieDomain();

  /*  Adobe Visitor API for JavaScript version: 1.3.5 */
  function Visitor(k, s) {
      if (!k) throw "Visitor requires Adobe Marketing Cloud Org ID";
      var a = this;
      a.version = "1.3.5";
      var h = window,
          m = h.Visitor;
      h.s_c_in || (h.s_c_il = [], h.s_c_in = 0);
      a._c = "Visitor";
      a._il = h.s_c_il;
      a._in = h.s_c_in;
      a._il[a._in] = a;
      h.s_c_in++;
      var t = h.document,
          j = h.O;
      j || (j = null);
      var i = h.P;
      i || (i = !0);
      var p = h.N;
      p || (p = !1);
      a.C = function(a) {
          var c = 0,
              b, e;
          if (a)
              for (b = 0; b < a.length; b++) e = a.charCodeAt(b), c = (c << 5) - c + e, c &= c;
          return c
      };
      a.m = function(a) {
          var c = "0123456789",
              b = "",
              e = "",
              f, g = 8,
              h = 10,
              i = 10;
          if (1 == a) {
              c += "ABCDEF";
              for (a =
                  0; 16 > a; a++) f = Math.floor(Math.random() * g), b += c.substring(f, f + 1), f = Math.floor(Math.random() * g), e += c.substring(f, f + 1), g = 16;
              return b + "-" + e
          }
          for (a = 0; 19 > a; a++) f = Math.floor(Math.random() * h), b += c.substring(f, f + 1), 0 == a && 9 == f ? h = 3 : (1 == a || 2 == a) && 10 != h && 2 > f ? h = 10 : 2 < a && (h = 10), f = Math.floor(Math.random() * i), e += c.substring(f, f + 1), 0 == a && 9 == f ? i = 3 : (1 == a || 2 == a) && 10 != i && 2 > f ? i = 10 : 2 < a && (i = 10);
          return b + e
      };
      a.I = function() {
          var a;
          !a && h.location && (a = h.location.hostname);
          if (a)
              if (/^[0-9.]+$/.test(a)) a = "";
              else {
                  var c = a.split("."),
                      b =
                      c.length - 1,
                      e = b - 1;
                  1 < b && 2 >= c[b].length && (2 == c[b - 1].length || 0 > ",ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,nd,".indexOf("," +
                      c[b] + ",")) && e--;
                  if (0 < e)
                      for (a = ""; b >= e;) a = c[b] + (a ? "." : "") + a, b--
              }
          return a
      };
      a.cookieRead = function(a) {
          var a = encodeURIComponent(a),
              c = (";" + t.cookie).split(" ").join(";"),
              b = c.indexOf(";" + a + "="),
              e = 0 > b ? b : c.indexOf(";", b + 1);
          return 0 > b ? "" : decodeURIComponent(c.substring(b + 2 + a.length, 0 > e ? c.length : e))
      };
      a.cookieWrite = function(d, c, b) {
          var e = a.cookieLifetime,
              f, c = "" + c,
              e = e ? ("" + e).toUpperCase() : "";
          b && "SESSION" != e && "NONE" != e ? (f = "" != c ? parseInt(e ? e : 0) : -60) ? (b = new Date, b.setTime(b.getTime() + 1E3 * f)) : 1 == b && (b = new Date, f = b.getYear(),
              b.setYear(f + 2 + (1900 > f ? 1900 : 0))) : b = 0;
          return d && "NONE" != e ? (t.cookie = encodeURIComponent(d) + "=" + encodeURIComponent(c) + "; path=/;" + (b ? " expires=" + b.toGMTString() + ";" : "") + (a.cookieDomain ? " domain=" + a.cookieDomain + ";" : ""), a.cookieRead(d) == c) : 0
      };
      a.e = j;
      a.w = function(a, c) {
          try {
              "function" == typeof a ? a.apply(h, c) : a[1].apply(a[0], c)
          } catch (b) {}
      };
      a.L = function(d, c) {
          c && (a.e == j && (a.e = {}), void 0 == a.e[d] && (a.e[d] = []), a.e[d].push(c))
      };
      a.l = function(d, c) {
          if (a.e != j) {
              var b = a.e[d];
              if (b)
                  for (; 0 < b.length;) a.w(b.shift(), c)
          }
      };
      a.j =
          j;
      a.J = function(d, c, b) {
          var e = 0,
              f = 0,
              g;
          if (c && t) {
              for (g = 0; !e && 2 > g;) {
                  try {
                      e = (e = t.getElementsByTagName(0 < g ? "HEAD" : "head")) && 0 < e.length ? e[0] : 0
                  } catch (h) {
                      e = 0
                  }
                  g++
              }
              if (!e) try {
                  t.body && (e = t.body)
              } catch (i) {
                  e = 0
              }
              if (e)
                  for (g = 0; !f && 2 > g;) {
                      try {
                          f = t.createElement(0 < g ? "SCRIPT" : "script")
                      } catch (l) {
                          f = 0
                      }
                      g++
                  }
          }!c || !e || !f ? b && b() : (f.type = "text/javascript", f.setAttribute("async", "async"), f.src = c, e.firstChild ? e.insertBefore(f, e.firstChild) : e.appendChild(f), b && (a.j == j && (a.j = {}), a.j[d] = setTimeout(b, a.loadTimeout)))
      };
      a.H = function(d) {
          a.j !=
              j && a.j[d] && (clearTimeout(a.j[d]), a.j[d] = 0)
      };
      a.D = p;
      a.F = p;
      a.isAllowed = function() {
          if (!a.D && (a.D = i, a.cookieRead(a.cookieName) || a.cookieWrite(a.cookieName, "T", 1))) a.F = i;
          return a.F
      };
      a.a = j;
      a.c = j;
      var w = a.V;
      w || (w = "MC");
      var n = a.Y;
      n || (n = "MCMID");
      var x = a.X;
      x || (x = "MCCIDH");
      var y = a.W;
      y || (y = "MCAS");
      var v = a.T;
      v || (v = "A");
      var l = a.Q;
      l || (l = "MCAID");
      var u = a.U;
      u || (u = "AAM");
      var r = a.S;
      r || (r = "MCAAMLH");
      var o = a.R;
      o || (o = "MCAAMB");
      var q = a.Z;
      q || (q = "NONE");
      a.t = 0;
      a.B = function() {
          if (!a.t) {
              var d = a.version;
              a.audienceManagerServer &&
                  (d += "|" + a.audienceManagerServer);
              a.audienceManagerServerSecure && (d += "|" + a.audienceManagerServerSecure);
              if (a.audienceManagerCustomerIDDPIDs)
                  for (var c in a.audienceManagerCustomerIDDPIDs) !Object.prototype[c] && a.audienceManagerCustomerIDDPIDs[c] && (d += c + "=" + a.audienceManagerCustomerIDDPIDs[c]);
              a.t = a.C(d)
          }
          return a.t
      };
      a.G = p;
      a.h = function() {
          if (!a.G) {
              a.G = i;
              var d = a.B(),
                  c = p,
                  b = a.cookieRead(a.cookieName),
                  e, f, g, h = new Date;
              a.a == j && (a.a = {});
              if (b && "T" != b) {
                  b = b.split("|");
                  b[0].match(/^[\-0-9]+$/) && (parseInt(b[0]) !=
                      d && (c = i), b.shift());
                  1 == b.length % 2 && b.pop();
                  for (d = 0; d < b.length; d += 2) e = b[d].split("-"), f = e[0], g = b[d + 1], e = 1 < e.length ? parseInt(e[1]) : 0, c && (f == x && (g = ""), 0 < e && (e = h.getTime() / 1E3 - 60)), f && g && (a.d(f, g, 1), 0 < e && (a.a["expire" + f] = e, h.getTime() >= 1E3 * e && (a.c || (a.c = {}), a.c[f] = i)))
              }
              if (!a.b(l) && (b = a.cookieRead("s_vi"))) b = b.split("|"), 1 < b.length && 0 <= b[0].indexOf("v1") && (g = b[1], d = g.indexOf("["), 0 <= d && (g = g.substring(0, d)), g && g.match(/^[0-9a-fA-F\-]+$/) && a.d(l, g))
          }
      };
      a.M = function() {
          var d = a.B(),
              c, b;
          for (c in a.a) !Object.prototype[c] &&
              a.a[c] && "expire" != c.substring(0, 6) && (b = a.a[c], d += (d ? "|" : "") + c + (a.a["expire" + c] ? "-" + a.a["expire" + c] : "") + "|" + b);
          a.cookieWrite(a.cookieName, d, 1)
      };
      a.b = function(d, c) {
          return a.a != j && (c || !a.c || !a.c[d]) ? a.a[d] : j
      };
      a.d = function(d, c, b) {
          a.a == j && (a.a = {});
          a.a[d] = c;
          b || a.M()
      };
      a.p = function(d, c) {
          var b = new Date;
          b.setTime(b.getTime() + 1E3 * c);
          a.a == j && (a.a = {});
          a.a["expire" + d] = Math.floor(b.getTime() / 1E3);
          0 > c ? (a.c || (a.c = {}), a.c[d] = i) : a.c && (a.c[d] = p)
      };
      a.A = function(a) {
          if (a && ("object" == typeof a && (a = a.d_mid ? a.d_mid : a.visitorID ?
                  a.visitorID : a.id ? a.id : a.uuid ? a.uuid : "" + a), a && (a = a.toUpperCase(), "NOTARGET" == a && (a = q)), !a || a != q && !a.match(/^[0-9a-fA-F\-]+$/))) a = "";
          return a
      };
      a.i = function(d, c) {
          a.H(d);
          a.g != j && (a.g[d] = p);
          if (d == w) {
              var b = a.b(n);
              if (!b) {
                  b = "object" == typeof c && c.mid ? c.mid : a.A(c);
                  if (!b) {
                      if (a.r) {
                          a.getAnalyticsVisitorID(null, !1, !0);
                          return
                      }
                      b = a.m()
                  }
                  a.d(n, b)
              }
              if (!b || b == q) b = "";
              "object" == typeof c && ((c.d_region || c.dcs_region || c.d_blob || c.blob) && a.i(u, c), a.r && c.mid && a.i(v, {
                  id: c.id
              }));
              a.l(n, [b])
          }
          if (d == u && "object" == typeof c) {
              b = 604800;
              void 0 != c.id_sync_ttl && c.id_sync_ttl && (b = parseInt(c.id_sync_ttl));
              var e = a.b(r);
              e || ((e = c.d_region) || (e = c.dcs_region), e && (a.p(r, b), a.d(r, e)));
              e || (e = "");
              a.l(r, [e]);
              e = a.b(o);
              if (c.d_blob || c.blob)(e = c.d_blob) || (e = c.blob), a.p(o, b), a.d(o, e);
              e || (e = "");
              a.l(o, [e]);
              !c.error_msg && a.o && a.d(x, a.o)
          }
          if (d == v) {
              b = a.b(l);
              b || ((b = a.A(c)) ? a.p(o, -1) : b = q, a.d(l, b));
              if (!b || b == q) b = "";
              a.l(l, [b])
          }
      };
      a.g = j;
      a.n = function(d, c, b, e) {
          var f = "",
              g;
          if (a.isAllowed() && (a.h(), f = a.b(d), !f && (d == n ? g = w : d == r || d == o ? g = u : d == l && (g = v), g))) {
              if (c && (a.g ==
                      j || !a.g[g])) a.g == j && (a.g = {}), a.g[g] = i, a.J(g, c, function() {
                  if (!a.b(d)) {
                      var b = "";
                      d == n ? b = a.m() : g == u && (b = {
                          error_msg: "timeout"
                      });
                      a.i(g, b)
                  }
              });
              a.L(d, b);
              c || a.i(g, {
                  id: q
              });
              return ""
          }
          if ((d == n || d == l) && f == q) f = "", e = i;
          b && e && a.w(b, [f]);
          return f
      };
      a._setMarketingCloudFields = function(d) {
          a.h();
          a.i(w, d)
      };
      a.setMarketingCloudVisitorID = function(d) {
          a._setMarketingCloudFields(d)
      };
      a.r = p;
      a.getMarketingCloudVisitorID = function(d, c) {
          return a.isAllowed() ? (a.marketingCloudServer && 0 > a.marketingCloudServer.indexOf(".demdex.net") && (a.r =
              i), a.n(n, a.s("_setMarketingCloudFields"), d, c)) : ""
      };
      a.K = function() {
          a.getAudienceManagerBlob()
      };
      a.f = {};
      a.z = p;
      a.o = "";
      a.setCustomerIDs = function(d) {
          a.f = d;
          if (a.isAllowed()) {
              a.h();
              var d = a.b(x),
                  c = "",
                  b, e;
              d || (d = 0);
              for (b in a.f) e = a.f[b], !Object.prototype[b] && e && (c += (c ? "|" : "") + b + "|" + e);
              a.o = a.C(c);
              a.o != d && (a.z = i, a.K())
          }
      };
      a.getCustomerIDs = function() {
          return a.f
      };
      a._setAnalyticsFields = function(d) {
          a.h();
          a.i(v, d)
      };
      a.setAnalyticsVisitorID = function(d) {
          a._setAnalyticsFields(d)
      };
      a.getAnalyticsVisitorID = function(d, c, b) {
          if (a.isAllowed()) {
              var e =
                  "";
              b || (e = a.getMarketingCloudVisitorID(function() {
                  a.getAnalyticsVisitorID(d, i)
              }));
              if (e || b) {
                  var f = b ? a.marketingCloudServer : a.trackingServer,
                      g = "";
                  a.loadSSL && (b ? a.marketingCloudServerSecure && (f = a.marketingCloudServerSecure) : a.trackingServerSecure && (f = a.trackingServerSecure));
                  f && (g = "http" + (a.loadSSL ? "s" : "") + "://" + f + "/id?callback=s_c_il%5B" + a._in + "%5D._set" + (b ? "MarketingCloud" : "Analytics") + "Fields&mcorgid=" + encodeURIComponent(a.marketingCloudOrgID) + (e ? "&mid=" + e : ""));
                  return a.n(b ? n : l, g, d, c)
              }
          }
          return ""
      };
      a._setAudienceManagerFields =
          function(d) {
              a.h();
              a.i(u, d)
          };
      a.s = function(d) {
          var c = a.audienceManagerServer,
              b = "",
              e = a.b(n),
              f = a.b(o, i),
              g = a.b(l),
              g = g && g != q ? "&d_cid_ic=AVID%01" + encodeURIComponent(g) : "",
              h = "",
              j, k;
          a.loadSSL && a.audienceManagerServerSecure && (c = a.audienceManagerServerSecure);
          if (c) {
              if (a.f)
                  for (j in a.f)
                      if (!Object.prototype[j] && (b = a.f[j])) g += "&d_cid_ic=" + encodeURIComponent(j) + "%01" + encodeURIComponent(b), a.audienceManagerCustomerIDDPIDs && (k = a.audienceManagerCustomerIDDPIDs[j]) && (h += "&d_cid=" + k + "%01" + encodeURIComponent(b));
              d || (d =
                  "_setAudienceManagerFields");
              b = "http" + (a.loadSSL ? "s" : "") + "://" + c + "/id?d_rtbd=json&d_ver=2" + (!e && a.r ? "&d_verify=1" : "") + "&d_orgid=" + encodeURIComponent(a.marketingCloudOrgID) + (e ? "&d_mid=" + e : "") + (f ? "&d_blob=" + encodeURIComponent(f) : "") + g + h + "&d_cb=s_c_il%5B" + a._in + "%5D." + d
          }
          return b
      };
      a.getAudienceManagerLocationHint = function(d, c) {
          if (a.isAllowed() && a.getMarketingCloudVisitorID(function() {
                  a.getAudienceManagerLocationHint(d, i)
              })) {
              var b = a.b(l);
              b || (b = a.getAnalyticsVisitorID(function() {
                  a.getAudienceManagerLocationHint(d,
                      i)
              }));
              if (b) return a.n(r, a.s(), d, c)
          }
          return ""
      };
      a.getAudienceManagerBlob = function(d, c) {
          if (a.isAllowed() && a.getMarketingCloudVisitorID(function() {
                  a.getAudienceManagerBlob(d, i)
              })) {
              var b = a.b(l);
              b || (b = a.getAnalyticsVisitorID(function() {
                  a.getAudienceManagerBlob(d, i)
              }));
              if (b) return b = a.s(), a.z && a.p(o, -1), a.n(o, b, d, c)
          }
          return ""
      };
      m.AUTH_STATE_UNAUTHENTICATED = 0;
      m.AUTH_STATE_AUTHENTICATED = 1;
      m.AUTH_STATE_ASSUMED_AUTHENTICATED = 2;
      m.AUTH_STATE_LOGGEDOUT = 3;
      a.setAuthState = function(d) {
          a.isAllowed() && (a.h(), a.d(y, d))
      };
      a.getAuthState = function() {
          return a.isAllowed() ? (a.h(), a.b(y)) : 0
      };
      a.k = "";
      a.q = {};
      a.u = "";
      a.v = {};
      a.getSupplementalDataID = function(d, c) {
          !a.k && !c && (a.k = a.m(1));
          var b = a.k;
          a.u && !a.v[d] ? (b = a.u, a.v[d] = i) : b && (a.q[d] && (a.u = a.k, a.v = a.q, a.k = b = !c ? a.m(1) : "", a.q = {}), b && (a.q[d] = i));
          return b
      };
      0 > k.indexOf("@") && (k += "@AdobeOrg");
      a.marketingCloudOrgID = k;
      a.namespace = s;
      a.cookieName = "AMCV_" + k;
      a.cookieDomain = a.I();
      a.cookieDomain == h.location.hostname && (a.cookieDomain = "");
      if (s) {
          var m = "AMCV_" + s,
              A = a.cookieRead(a.cookieName),
              z =
              a.cookieRead(m);
          !A && z && (a.cookieWrite(a.cookieName, z, 1), a.cookieWrite(m, "", -60))
      }
      a.loadSSL = 0 <= h.location.protocol.toLowerCase().indexOf("https");
      a.loadTimeout = 2000;
      a.marketingCloudServer = a.audienceManagerServer = "dpm.demdex.net"
  }
  Visitor.getInstance = function(k, s) {
      var a, h = window.s_c_il,
          m;
      0 > k.indexOf("@") && (k += "@AdobeOrg");
      if (h)
          for (m = 0; m < h.length; m++)
              if ((a = h[m]) && "Visitor" == a._c && (a.marketingCloudOrgID == k || s && a.namespace == s)) return a;
      return new Visitor(k, s)
  };
  /* End - VisitorId service preparation */

  function visitorIDServiceGetCookieDomain() {
      var cookieValue = "";
      if (window.location.hostname.indexOf('com.au') > -1) {
          var domainSplit = window.location.hostname.split('.');
          if (domainSplit.length == 3) {
              cookieValue = window.location.hostname;
          } else if (domainSplit.length > 3) {
              sp = domainSplit.length - 3.
              domainArray = [domainSplit[sp], domainSplit[sp + 1], domainSplit[sp + 2]];
              cookieValue = domainArray.join('.')
          }
      }
      return cookieValue;
  }

  // Thur 11/02/2016 

  window.k_sc_param = window.k_sc_param || {
      version: 1.1
  };
  var BP_SC = BP_SC || {};
  var s_account = "telstrabpbigpondprd";
  var s = s_gi(s_account);
  s.cookieDomainPeriods = '3';
  if (window.location.host.indexOf(".com.au") != -1) {
      s.cookieDomainPeriods = "3";
  } else {
      s.cookieDomainPeriods = "2";
  }
  s.dstStart = "10/01/2017";
  s.dstEnd = "04/01/2018";
  var tDate = new Date();
  s.currentYear = tDate.getFullYear();
  s.trackDownloadLinks = true;
  s.trackExternalLinks = true;
  s.trackInlineStats = true;
  s.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";
  s.linkInternalFilters="javascript:,1seven.com.au,nmfchospitality.com.au,hfccorporatehospitality.com.au,weflyasone.afc.com.au,19thman.com.au,northernriverinafnl.com.au,membership.lions.com.au,membership.carltonfc.com.au,membership.collingwoodfc.com.au,membership.essendonfc.com.au,membership.fremantlefc.com.au,membership.geelongcats.com.au,membership.gwsgiants.com.au,membership.hawthornfc.com.au,membership.melbournefc.com.au,membership.nmfc.com.au,weareportadelaide.com.au,afl9s.spawtz.com,membership.richmondfc.com.au,saintsmembership.com.au,membership.sydneyswans.com.au,membership.westcoasteagles.com.au,rloc.com.au,bigpondmovies.com,19thman.com.au,womens.afl,membership.westernbulldogs.com.au,rabbitohs.com.au,events.wce.com.au,lookingafterme.org.au,tixstar.com.au/s/afl,adelaidefilmfestival.org,afl.com.au,afl.footytips.com.au,smarter.telstra.com.au,aflwtipping.afl,afl.footytips.com.au,afl.virtualsports.com.au,aflmembership.com.au,anz-championship.com,aus.wwte8.com/pub/agent.dll,australianmasters.com.au,insideportadelaide.com.au,basic.messaging.bigpond.com,bbfdr.ticketek.com.au,beeneverywhere.com.au,bigblog.com.au,bigpond.cruises.com.au,bigpond.domain.com.au,bigpond.homepriceguide.com.au,catchphrasecup.com.au,bigpond.open.edu.au,bigpond.raisingchildren.net.au,bigpondeverest.com,bigpondgames.com,bigpondkids.com,bigpondmovies.com.au,bigpondmusic.com,bigpondnews.com,bigpondoffice.com.au,bigpondphotos.com,bigpondphotos.com.au,bigpondpilot.com.au,bigpondsecurity.com,bigpondshopping.com,bigpondsitehelp.com,bigpondsitehelp.com,bigpondsmsoffers.com.au,bigpondsport.com,bigpondsport.com.au,bigpondtelstrasearch.com,bigpondtickets.ticketek.com.au,bigpondtravel.com,bigpondtravel.com.au,bigpondtv.com,bigpondvideo.com,bigpondvideo.com.au,bluesfc.com.au,bombersfc.com.au,afleventoffice.com.au,bpplanfinder.com,broncos.com.au,bulldogs.com.au,carltonfc.com.au,carltonfc.footytips.com.au,catsfc.com.au,centenaryofrugbyleague.com.au,christmas.bigpond.com,collingwoodfc.com.au,cowboys.com.au,ctones.telstra.com,downloads.bigpondmovies.com,dragons.com.au,dreamteam.nrl.com,dreamteam.nrl.com,dreamteampro.virtualsports.com.au,dvd.bigpondmovies.com,files.bigpond.com,files.bigpond.com,fremantlefc.com.au,gamearena.com.au,gamenow.com.au,geelongcats.com.au,gfc.com.au,girlfriday.tv,go.bigpond.com,goldcoastfc.com.au,hawthornfc.com,hawthornfc.com.au,bluesfoundation.org.au,hm.bigpond.com,hm.bigpondnews.com,horseracing.bigpond.com,horseracing.bigpondsport.com,iad.bigpondvideo.com,kangaroos.com.au,lions.com.au,magpiesfc.com.au,manlyseaeagles.com.au,melbournefc.com.au,melbournestorm.com.au,memberoffers.bigpond.com,messaging.bigpond.com,mobilefun.telstra.com,myacct.bigpond.com,newcastleknights.com.au,newzealandwarriors.co.nz,newzealandwarriors.com.au,nrl.com,nrl.com.au,nrl.virtualsports.com.au,nrlfinals.virtualsports.com.au,nrlwarriors.com,nswrl.com.au,parraeels.com.au,penrithpanthers.com.au,planetteal.com.au,portadelaidefc.com.au,portadelaidefc.footytips.com.au,portpowerfc.com.au,promo.bigpond.com,qrl.com.au,raiders.com.au,richmondfc.com.au,saints.com.au,say.bigpond.com,search.api.bigpond.com,sharks.com.au,shop.bigpond.com,shop.bigpondgames.com,signon.bigpond.com,storage.bigpond.com,sydneyroosters.com.au,sydneyswans.com.au,sydneysymphony.bigpondmusic.com,telstra.com,thenews.bigpond.com,thewarriors.co.nz,thewarriors.com.au,thub.bigpond.com,tipping.afl.com.au,tipping.nrl.com,titans.com.au,westcoasteagles.com.au,150years.com.au,afl.virtualsports.com.au,bigpond.custhelp.com,bigpondguide.com,westcoasteagles.footytips.com.au,westernbulldogs.com.au,weststigers.com.au,deezone.com.au,itsyourcall.afl.com.au,lifestylefood.com.au,lifestyle.com.au,skynews.com.au,racingnetwork.com.au,giantsacademy.com.au,sportsfan.com.au,tradingpost.com.au,carshowroom.com.au,aflmedia.championdata.com,tickets.nrl.com,play.afl,airg.com,.airg.com,fantasy.afl.com.au,essendonfc.com.au,m.essendonfc.com.au,m.afc.com.au,afc.com.au,m.hawthornfc.com.au,m.richmondfc.com.au,m.collingwoodfc.com.au,m.geelongcats.com.au,matchups.afl.com.au,m.sydneyswans.com.au,m.westernbulldogs.com.au,m.portadelaidefc.com.au,m.westcoasteagles.com.au,m.carltonfc.com.au,m.melbournefc.com.au,nmfc.com.au,m.fremantlefc.com.au,m.saints.com.au,m.lions.com.au,id.afl.com.au,gwsgiants.com.au,m.nmfc.com.au,m.gwsgiants.com.au,membership.afl.com.au,allaustralian.afl.com.au,goaloftheyear.afl,markoftheyear.afl,m.goldcoastfc.com.au,subscription.afl.com.au,aflschoolstipping.com.au,fansmvp.afl.com.au,tipping.portadelaidefc.com.au,tipping.collingwoodfc.com.au,tipping.hawthornfc.com.au,tipping.fremantlefc.com.au,tipping.afc.com.au,tipping.westcoasteagles.com.au,tipping.richmondfc.com.au,tipping.nmfc.com.au,tipping.essendonfc.com.au,tipping.saints.com.au,tipping.gwsgiants.com.au,tipping.carltonfc.com.au,tipping.lions.com.au,lionshospitality.com.au,sydneyswanshospitality.com.au,.nmfc.com.au,testafl.com,aflmedia.net";
  BP_SC.linkInternalFilters = s.linkInternalFilters;
  s.linkLeaveQueryString = false;
  s.linkTrackVars = "eVar1";
  s.linkTrackEvents = "None";
  s.usePlugins = true;

  function s_doPlugins(s) {
      if (s.linkInternalFilters !== BP_SC.linkInternalFilters) {
          s.linkInternalFilters = BP_SC.linkInternalFilters;
      }
      s.tnt = s.trackTNT();
      s.events = s.apl(s.events, "event27", ",", 1);
      if (s.getQueryParam('cid')) {
          s.eVar7 = s.getQueryParam('cid');
      }
      if (s.getQueryParam('sssdmh')) {
          s.eVar8 = s.getValOnce(s.getQueryParam('sssdmh'), 'sssdmhmp_cookie', 1);
          s.eVar45 = s.getQueryParam('dmid');
      } else if (s.getQueryParam('pid')) {
          s.eVar8 = s.getValOnce(s.getQueryParam('pid'), 'pmp_cookie', 1);
          s.clickThruQuality('pid', 'event25', 'event26');
      }
      if (s.getQueryParam('ref')) {
          s.eVar13 = s.getQueryParam('ref');
          s.prop47 = s.getQueryParam('ref');
      }
      if (s.getQueryParam('camefrom')) {
          s.eVar67 = s.getQueryParam('camefrom');
      }
      s.eVar39 = s.getValOnce(s.getQueryParam('gcid'), 'gcmp_cookie', 1);
      s.eVar49 = s.getValOnce(s.getQueryParam('track_id'), 'rmp_cookie', 1);
      if (s.getQueryParam('sio')) {
          s.eVar26 = s.getValOnce(s.getQueryParam('sio'), 'smp_cookie', 1);
      }
      if (s.getQueryParam('s_kwcid')) {
          s.pageURL = s.manageQueryParam('s_kwcid', 0, 1);
          s.eVar8 = s.getValOnce(s.getQueryParam('s_kwcid'), 'pmp_cookie', 1);
          s.clickThruQuality('s_kwcid', 'event25', 'event26');
      }
      if (window.s_postPlugins) {
          s_postPlugins(s);
      }
      s.prop33 = s.getTimeParting('h', '+10');
      s.prop34 = s.getTimeParting('d', '+10');
      s.prop35 = s.getTimeParting('w', '+10');
      s.eVar40 = s.getTimeParting('h', '+10');
      s.eVar41 = s.getTimeParting('d', '+10');
      s.eVar42 = s.getTimeParting('w', '+10');
      s.prop46 = s.getNewRepeat();
      s.eVar46 = s.getNewRepeat();
      if (s.pageName != "") {
          s.prop48 = s.getPreviousValue(s.pageName, 'gpv_e48', '');
          s.eVar43 = s.getPreviousValue(s.pageName, 'gpv_p43', '');
      }
      if (s.prop3 != "") {
          s.prop49 = s.getPreviousValue(s.prop3, 'gpv_p49', '');
      }
      if (s.eVar3 != "") {
          s.eVar44 = s.getPreviousValue(s.eVar3, 'gpv_e44', '');
      }
      if (s.pageName != "") {
          var ppv = s.getPercentPageViewed(s.pageName);
          if (ppv && typeof ppv == 'object' && ppv[0] == s.prop48 && s.prop48 != "") {
              s.prop16 = ppv[1];
          }
      }
      s.eVar18 = s.crossVisitParticipation(s.eVar8, 's_evar18', '30', '10', '>', '');
      s.clickThruQuality('pid', 'event25', 'event26');
      if (s.prop3 !== 'BP_SC.com' && s.prop3 !== undefined && s.prop3 !== 'Internet') {
          s.eVar26 = s.prop3;
      }
      if (document.location.protocol === 'https:') {
          s.events = s.apl(s.events, "event40", ",", 1);
      } else {
          s.events = s.apl(s.events, "event41", ",", 1);
      }
      if (s.pageName === 'BP|News|Weather|Current:Home') {
          s.pageName = 'BP:News:Weather:Current:Home'
      }
      if (s.getQueryParam('tc')) {
          s.eVar8 = s.getValOnce(s.getQueryParam('tc'), 'pmp_cookie', 1);
          s.clickThruQuality('tc', 'event25', 'event26');
          BP_SC.datCreateOmnitureBeacon('', s.getQueryParam('tc'));
      }
      if (typeof(s.hier1) !== 'undefined') {
          BP_SC.hierarchy = s.hier1.split('|');
          switch (BP_SC.hierarchy[2]) {
              case "Health":
                  BP_SC.addReportSuite('telstrabphealth');
                  break;
          }
      }
      s.contextData['pageName'] = s.pageName;
      var reportSuites = s.un.split(',');
      reportSuites.reverse();
      if (reportSuites.indexOf("telstraglobalprd") == -1 && s.un.indexOf("prd") > 0) {
          reportSuites.push("telstraglobalprd");
      }
      s.un = reportSuites.join(',');
      if (s.hier1 === 'BP|Services|RAA|DefaultLogin') {
          s.hier1 = 'BP|Portal|Login';
          s.pageName = 'BP|Login';
          s.prop2 = s.eVar2 = 'Portal';
          s.prop3 = s.eVar3 = 'Login';
          s.channel = s.eVar4 = '';
      }
      if (s.hier1 === 'BP|Sport|NRL|NRL.com|DigitalPass|DigitalPass Voucher ') {
          s.hier1 = 'BP|Sport|NRL|NRL.com|DigitalPass|Marketing';
          s.pageName = 'BP:NRL:NRL.com:DigitalPass:Marketing';
          s.prop1 = 'BP';
          s.prop2 = 'Sport';
          s.prop3 = 'NRL';
          s.channel = "NRL.com";
          s.prop4 = "DigitalPass";
          s.prop5 = "Marketing";
          s.eVar1 = s.prop1;
          s.eVar2 = s.prop2;
          s.eVar3 = s.prop3;
          s.eVar4 = s.channel;
          s.eVar5 = s.prop4;
          s.eVar15 = s.prop5;
      }
      s.prop17 = _satellite.getVar('dtm_ver');
  }
  s.doPlugins = s_doPlugins;
  BP_SC.datCreateOmnitureBeacon = function(events, campaign) {
      var prefix = 'https://infos.telstra.com/b/ss/telstratdretailprd/1/H.27.5/';
      prefix += parseInt(Math.random() * 9999999999, 10);
      prefix += '?AQB=1&ndh=1&ns=telstracorporation&cdp=3';
      var suffix = '&g=' + escape(document.location.href) + '&c8=D%3Dg&AQE=1';
      if (events) {
          events = '&events=' + escape(events);
      } else {
          events = '';
      }
      if (campaign) {
          campaign = '&v0=' + escape(campaign);
      } else {
          campaign = '';
      }
      var beaconUrl = prefix + events + campaign + suffix;
      BP_SC.datAdServer('<img height="1" width="1" style="border-style:none;" alt="" src="' + beaconUrl + '" alt="" />');
  };
  BP_SC.addReportSuite = function(rsidStem) {
      if ((s.un.search(/rsidStem/) === -1) && (s_account.search(/rsidStem/) === -1)) {
          if ((s.un.search(/telstrabpbigpondprd/) !== -1) || (s_account.search(/telstrabpbigpondprd/) !== -1)) {
              var rsidType = 'prd';
          } else {
              var rsidType = 'dev';
          }
          s.un = s.un + ',' + rsidStem + rsidType;
      }
  } // Plugins
  s.m_Media_c = "var m=s.m_i('Media');if(m.completeByCloseOffset==undefined)m.completeByCloseOffset=1;if(m.completeCloseOffsetThreshold==undefined)m.completeCloseOffsetThreshold=1;m.cn=function(n){var m=" +
      "this;return m.s.rep(m.s.rep(m.s.rep(n,\"\\n\",''),\"\\r\",''),'--**--','')};m.open=function(n,l,p,b){var m=this,i=new Object,tm=new Date,a='',x;n=m.cn(n);if(!l)l=-1;if(n&&p){if(!m.l)m.l=new Object;" +
      "if(m.l[n])m.close(n);if(b&&b.id)a=b.id;if(a)for (x in m.l)if(m.l[x]&&m.l[x].a==a)m.close(m.l[x].n);i.n=n;i.l=l;i.o=0;i.x=0;i.p=m.cn(m.playerName?m.playerName:p);i.a=a;i.t=0;i.ts=0;i.s=Math.floor(tm" +
      ".getTime()/1000);i.lx=0;i.lt=i.s;i.lo=0;i.e='';i.to=-1;i.tc=0;i.fel=new Object;i.vt=0;i.sn=0;i.sx=\"\";i.sl=0;i.sg=0;i.sc=0;i.us=0;i.ad=0;i.adpn;i.adpp;i.adppp;i.clk;i.CPM;i.co=0;i.cot=0;i.lm=0;i.l" +
      "om=0;m.l[n]=i}};m.openAd=function(n,l,p,pn,pp,ppp,CPM,b){var m=this,i=new Object;n=m.cn(n);m.open(n,l,p,b);i=m.l[n];if(i){i.ad=1;i.adpn=m.cn(pn);i.adpp=pp;i.adppp=ppp;i.CPM=CPM}};m._delete=function" +
      "(n){var m=this,i;n=m.cn(n);i=m.l[n];m.l[n]=0;if(i&&i.m)clearTimeout(i.m.i)};m.close=function(n){this.e(n,0,-1)};m.play=function(n,o,sn,sx,sl){var m=this,i;i=m.e(n,1,o,sn,sx,sl);if(i&&!i.m){i.m=new " +
      "Object;i.m.m=new Function('var m=s_c_il['+m._in+'],i;if(m.l){i=m.l[\"'+m.s.rep(i.n,'\"','\\\\\"')+'\"];if(i){if(i.lx==1)m.e(i.n,3,-1);i.m.i=setTimeout(i.m.m,1000)}}');i.m.m()}};m.click=function(n,o" +
      "){this.e(n,7,o)};m.complete=function(n,o){this.e(n,5,o)};m.stop=function(n,o){this.e(n,2,o)};m.track=function(n){this.e(n,4,-1)};m.bcd=function(vo,i){var m=this,ns='a.media.',v=vo.linkTrackVars,e=v" +
      "o.linkTrackEvents,pe='m_i',pev3,c=vo.contextData,x;if(i.ad){ns+='ad.';if(i.adpn){c['a.media.name']=i.adpn;c[ns+'pod']=i.adpp;c[ns+'podPosition']=i.adppp;}if(!i.vt)c[ns+'CPM']=i.CPM;}if (i.clk) {c[n" +
      "s+'clicked']=true;i.clk=0}c['a.contentType']='video'+(i.ad?'Ad':'');c['a.media.channel']=m.channel;c[ns+'name']=i.n;c[ns+'playerName']=i.p;if(i.l>0)c[ns+'length']=i.l;if(Math.floor(i.ts)>0)c[ns+'ti" +
      "mePlayed']=Math.floor(i.ts);if(!i.vt){c[ns+'view']=true;pe='m_s';i.vt=1}if(i.sx){c[ns+'segmentNum']=i.sn;c[ns+'segment']=i.sx;if(i.sl>0)c[ns+'segmentLength']=i.sl;if(i.sc&&i.ts>0)c[ns+'segmentView'" +
      "]=true}if(!i.cot&&i.co){c[ns+\"complete\"]=true;i.cot=1}if(i.lm>0)c[ns+'milestone']=i.lm;if(i.lom>0)c[ns+'offsetMilestone']=i.lom;if(v)for(x in c)v+=',contextData.'+x;pev3=c['a.contentType'];vo.pe=" +
      "pe;vo.pev3=pev3;var d=m.contextDataMapping,y,a,l,n;if(d){vo.events2='';if(v)v+=',events';for(x in d){if(x.substring(0,ns.length)==ns)y=x.substring(ns.length);else y=\"\";a=d[x];if(typeof(a)=='strin" +
      "g'){l=m.s.sp(a,',');for(n=0;n<l.length;n++){a=l[n];if(x==\"a.contentType\"){if(v)v+=','+a;vo[a]=c[x]}else if(y=='view'||y=='segmentView'||y=='clicked'||y=='complete'||y=='timePlayed'||y=='CPM'){if(" +
      "e)e+=','+a;if(y=='timePlayed'||y=='CPM'){if(c[x])vo.events2+=(vo.events2?',':'')+a+'='+c[x];}else if(c[x])vo.events2+=(vo.events2?',':'')+a}else if(y=='segment'&&c[x+'Num']){if(v)v+=','+a;vo[a]=c[x" +
      "+'Num']+':'+c[x]}else{if(v)v+=','+a;vo[a]=c[x]}}}else if(y=='milestones'||y=='offsetMilestones'){x=x.substring(0,x.length-1);if(c[x]&&d[x+'s'][c[x]]){if(e)e+=','+d[x+'s'][c[x]];vo.events2+=(vo.even" +
      "ts2?',':'')+d[x+'s'][c[x]]}}if(c[x])c[x]=undefined;if(y=='segment'&&c[x+'Num'])c[x+\"Num\"]=undefined}}vo.linkTrackVars=v;vo.linkTrackEvents=e};m.bpe=function(vo,i,x,o){var m=this,pe='m_o',pev3,d='" +
      "--**--';pe='m_o';if(!i.vt){pe='m_s';i.vt=1}else if(x==4)pe='m_i';pev3=m.s.ape(i.n)+d+Math.floor(i.l>0?i.l:1)+d+m.s.ape(i.p)+d+Math.floor(i.t)+d+i.s+d+(i.to>=0?'L'+Math.floor(i.to):'')+i.e+(x!=0&&x!" +
      "=2?'L'+Math.floor(o):'');vo.pe=pe;vo.pev3=pev3};m.e=function(n,x,o,sn,sx,sl,pd){var m=this,i,tm=new Date,ts=Math.floor(tm.getTime()/1000),c,l,v=m.trackVars,e=m.trackEvents,ti=m.trackSeconds,tp=m.tr" +
      "ackMilestones,to=m.trackOffsetMilestones,sm=m.segmentByMilestones,so=m.segmentByOffsetMilestones,z=new Array,j,t=1,w=new Object,x,ek,tc,vo=new Object;if(!m.channel)m.channel=m.s.wd.location.hostnam" +
      "e;n=m.cn(n);i=n&&m.l&&m.l[n]?m.l[n]:0;if(i){if(i.ad){ti=m.adTrackSeconds;tp=m.adTrackMilestones;to=m.adTrackOffsetMilestones;sm=m.adSegmentByMilestones;so=m.adSegmentByOffsetMilestones}if(o<0){if(i" +
      ".lx==1&&i.lt>0)o=(ts-i.lt)+i.lo;else o=i.lo}if(i.l>0)o=o<i.l?o:i.l;if(o<0)o=0;i.o=o;if(i.l>0){i.x=(i.o/i.l)*100;i.x=i.x>100?100:i.x}if(i.lo<0)i.lo=o;tc=i.tc;w.name=n;w.ad=i.ad;w.length=i.l;w.openTi" +
      "me=new Date;w.openTime.setTime(i.s*1000);w.offset=i.o;w.percent=i.x;w.playerName=i.p;if(i.to<0)w.mediaEvent=w.event='OPEN';else w.mediaEvent=w.event=(x==1?'PLAY':(x==2?'STOP':(x==3?'MONITOR':(x==4?" +
      "'TRACK':(x==5?'COMPLETE':(x==7?'CLICK':('CLOSE')))))));if(!pd){if(i.pd)pd=i.pd}else i.pd=pd;w.player=pd;if(x>2||(x!=i.lx&&(x!=2||i.lx==1))) {if(!sx){sn=i.sn;sx=i.sx;sl=i.sl}if(x){if(x==1)i.lo=o;if(" +
      "(x<=3||x>=5)&&i.to>=0){t=0;v=e=\"None\";if(i.to!=o){l=i.to;if(l>o){l=i.lo;if(l>o)l=o}z=tp?m.s.sp(tp,','):0;if(i.l>0&&z&&o>=l)for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c&&(l/i.l)*100<c" +
      "&&i.x>=c){t=1;j=z.length;w.mediaEvent=w.event='MILESTONE';i.lm=w.milestone=c}}z=to?m.s.sp(to,','):0;if(z&&o>=l)for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c&&l<c&&o>=c){t=1;j=z.length;w" +
      ".mediaEvent=w.event='OFFSET_MILESTONE';i.lom=w.offsetMilestone=c}}}}if(i.sg||!sx){if(sm&&tp&&i.l>0){z=m.s.sp(tp,',');if(z){z[z.length]='100';l=0;for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0" +
      ";if(c){if(i.x<c){sn=j+1;sx='M:'+l+'-'+c;j=z.length}l=c}}}}else if(so&&to){z=m.s.sp(to,',');if(z){z[z.length]=''+(i.l>0?i.l:'E');l=0;for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c||z[j]==" +
      "'E'){if(o<c||z[j]=='E'){sn=j+1;sx='O:'+l+'-'+c;j=z.length}l=c}}}}if(sx)i.sg=1}if((sx||i.sx)&&sx!=i.sx){i.us=1;if(!i.sx){i.sn=sn;i.sx=sx}if(i.to>=0)t=1}if((x>=2||i.x>=100)&&i.lo<o){i.t+=o-i.lo;i.ts+" +
      "=o-i.lo}if(x<=2||(x==3&&!i.lx)){i.e+=(x==1||x==3?'S':'E')+Math.floor(o);i.lx=(x==3?1:x)}if(!t&&i.to>=0&&x<=3){ti=ti?ti:0;if(ti&&i.ts>=ti){t=1;w.mediaEvent=w.event='SECONDS'}}i.lt=ts;i.lo=o}if(!x||(" +
      "x<=3&&i.x>=100)){if(i.lx!=2)i.e+='E'+Math.floor(o);x=0;v=e=\"None\";w.mediaEvent=w.event=\"CLOSE\"}if(x==7){w.clicked=i.clk=1;t=1}if(x==5||(m.completeByCloseOffset&&(!x||i.x>=100)&&i.l>0&&o>=i.l-m." +
      "completeCloseOffsetThreshold)){w.complete=i.co=1;t=1}ek=w.mediaEvent;if(ek=='MILESTONE')ek+='_'+w.milestone;else if(ek=='OFFSET_MILESTONE')ek+='_'+w.offsetMilestone;if(!i.fel[ek]) {w.eventFirstTime" +
      "=true;i.fel[ek]=1}else w.eventFirstTime=false;w.timePlayed=i.t;w.segmentNum=i.sn;w.segment=i.sx;w.segmentLength=i.sl;if(m.monitor&&x!=4)m.monitor(m.s,w);if(x==0)m._delete(n);if(t&&i.tc==tc){vo=new " +
      "Object;vo.contextData=new Object;vo.linkTrackVars=v;vo.linkTrackEvents=e;if(!vo.linkTrackVars)vo.linkTrackVars='';if(!vo.linkTrackEvents)vo.linkTrackEvents='';if(m.trackUsingContextData)m.bcd(vo,i)" +
      ";else m.bpe(vo,i,x,o);m.s.t(vo);if(i.us){i.sn=sn;i.sx=sx;i.sc=1;i.us=0}else if(i.ts>0)i.sc=0;i.e=\"\";i.lm=i.lom=0;i.ts-=Math.floor(i.ts);i.to=o;i.tc++}}}return i};m.ae=function(n,l,p,x,o,sn,sx,sl," +
      "pd,b){var m=this,r=0;if(n&&(!m.autoTrackMediaLengthRequired||(length&&length>0)) &&p){if(!m.l||!m.l[n]){if(x==1||x==3){m.open(n,l,p,b);r=1}}else r=1;if(r)m.e(n,x,o,sn,sx,sl,pd)}};m.a=function(o,t){" +
      "var m=this,i=o.id?o.id:o.name,n=o.name,p=0,v,c,c1,c2,xc=m.s.h,x,e,f1,f2='s_media_'+m._in+'_oc',f3='s_media_'+m._in+'_t',f4='s_media_'+m._in+'_s',f5='s_media_'+m._in+'_l',f6='s_media_'+m._in+'_m',f7" +
      "='s_media_'+m._in+'_c',tcf,w;if(!i){if(!m.c)m.c=0;i='s_media_'+m._in+'_'+m.c;m.c++}if(!o.id)o.id=i;if(!o.name)o.name=n=i;if(!m.ol)m.ol=new Object;if(m.ol[i])return;m.ol[i]=o;if(!xc)xc=m.s.b;tcf=new" +
      " Function('o','var e,p=0;try{if(o.versionInfo&&o.currentMedia&&o.controls)p=1}catch(e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o','var e,p=0,t;try{t=o.GetQuickTimeVersion();if(t)p=2}catch(" +
      "e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o','var e,p=0,t;try{t=o.GetVersionInfo();if(t)p=3}catch(e){p=0}return p');p=tcf(o)}}v=\"var m=s_c_il[\"+m._in+\"],o=m.ol['\"+i+\"']\";if(p==1){p=" +
      "'Windows Media Player '+o.versionInfo;c1=v+',n,p,l,x=-1,cm,c,mn;if(o){cm=o.currentMedia;c=o.controls;if(cm&&c){mn=cm.name?cm.name:c.URL;l=cm.duration;p=c.currentPosition;n=o.playState;if(n){if(n==8" +
      ")x=0;if(n==3)x=1;if(n==1||n==2||n==4||n==5||n==6)x=2;}';c2='if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,0,\"\",0,0,o)}}';c=c1+c2;if(m.s.isie&&xc){x=m.s.d.createElement('script');x.language='jscript';x." +
      "type='text/javascript';x.htmlFor=i;x.event='PlayStateChange(NewState)';x.defer=true;x.text=c;xc.appendChild(x);o[f6]=new Function(c1+'if(n==3){x=3;'+c2+'}setTimeout(o.'+f6+',5000)');o[f6]()}}if(p==" +
      "2){p='QuickTime Player '+(o.GetIsQuickTimeRegistered()?'Pro ':'')+o.GetQuickTimeVersion();f1=f2;c=v+',n,x,t,l,p,p2,mn;if(o){mn=o.GetMovieName()?o.GetMovieName():o.GetURL();n=o.GetRate();t=o.GetTime" +
      "Scale();l=o.GetDuration()/t;p=o.GetTime()/t;p2=o.'+f5+';if(n!=o.'+f4+'||p<p2||p-p2>5){x=2;if(n!=0)x=1;else if(p>=l)x=0;if(p<p2||p-p2>5)m.ae(mn,l,\"'+p+'\",2,p2,0,\"\",0,0,o);m.ae(mn,l,\"'+p+'\",x,x" +
      "!=2?p:-1,0,\"\",0,0,o)}if(n>0&&o.'+f7+'>=10){m.ae(mn,l,\"'+p+'\",3,p,0,\"\",0,0,o);o.'+f7+'=0}o.'+f7+'++;o.'+f4+'=n;o.'+f5+'=p;setTimeout(\"'+v+';o.'+f2+'(0,0)\",500)}';o[f1]=new Function('a','b',c" +
      ");o[f4]=-1;o[f7]=0;o[f1](0,0)}if(p==3){p='RealPlayer '+o.GetVersionInfo();f1=n+'_OnPlayStateChange';c1=v+',n,x=-1,l,p,mn;if(o){mn=o.GetTitle()?o.GetTitle():o.GetSource();n=o.GetPlayState();l=o.GetL" +
      "ength()/1000;p=o.GetPosition()/1000;if(n!=o.'+f4+'){if(n==3)x=1;if(n==0||n==2||n==4||n==5)x=2;if(n==0&&(p>=l||p==0))x=0;if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,0,\"\",0,0,o)}if(n==3&&(o.'+f7+'>=10|" +
      "|!o.'+f3+')){m.ae(mn,l,\"'+p+'\",3,p,0,\"\",0,0,o);o.'+f7+'=0}o.'+f7+'++;o.'+f4+'=n;';c2='if(o.'+f2+')o.'+f2+'(o,n)}';if(m.s.wd[f1])o[f2]=m.s.wd[f1];m.s.wd[f1]=new Function('a','b',c1+c2);o[f1]=new" +
      " Function('a','b',c1+'setTimeout(\"'+v+';o.'+f1+'(0,0)\",o.'+f3+'?500:5000);'+c2);o[f4]=-1;if(m.s.isie)o[f3]=1;o[f7]=0;o[f1](0,0)}};m.as=new Function('e','var m=s_c_il['+m._in+'],l,n;if(m.autoTrack" +
      "&&m.s.d.getElementsByTagName){l=m.s.d.getElementsByTagName(m.s.isie?\"OBJECT\":\"EMBED\");if(l)for(n=0;n<l.length;n++)m.a(l[n]);}');if(s.wd.attachEvent)s.wd.attachEvent('onload',m.as);else if(s.wd." +
      "addEventListener)s.wd.addEventListener('load',m.as,false);if(m.onLoad)m.onLoad(s,m)";
  s.m_i("Media");

  // Do we even use these?
  s.loadModule("Media");
  s.loadModule("Integrate");

  s.Media.autoTrack = false;
  s.Media.trackMilestones = "25,50,75";
  s.Media.segmentByMilestones = true;
  s.Media.trackWhilePlaying = true;
  s.Media.trackUsingContextData = true;
  s.Media.trackVars = "events,prop1,prop2,prop3,prop4,channel,eVar1,eVar2,eVar3,eVar4,eVar5,eVar63,eVar64,contextData.channelname,contextData.classification,contextData.collection,contextData.contentprovider,contextData.contenttitle,contextData.aspectratio,contextData.site,contextData.drmprotected,contextData.videoURL,contextData.pageName";
  s.Media.trackEvents = "event56,event57,event58";
  s.Media.contextDataMapping = {
      "a.media.milestones": {
          25: "event56",
          50: "event57",
          75: "event58"
      },
      '': 'eVar64'
  }

  // THIS MUST NEVER CHANGE!
  s.visitorNamespace = "bigpond";

  // CNAMEs for our data collection
  s.trackingServer = "info.telstra.com.au";
  s.trackingServerSecure = "infos.telstra.com.au";

  // Dallas data centre
  s.dc = "122";

  // Marketing Cloud Visitor ID Service
  if (typeof(Visitor) != "undefined") {
      s.visitor = Visitor.getInstance("98DC73AE52E13F1E0A490D4C@AdobeOrg");
  }

  // Capture User Data String in eVar73.
  function s_readCookie(cookieName) {

      var adb_cookie = decodeURIComponent(_satellite.readCookie(cookieName));
      //delete the old legacy cookie 
      if (/;exp=(.{13})/.test(adb_cookie)) {
          _satellite.removeCookie(cookieName);
          adb_cookie = "";
      }
      return adb_cookie === "undefined" ? "" : adb_cookie;
  }

  function s_setCookie(cookieName, value) {

      _satellite.setCookie(cookieName, encodeURIComponent(value), 0.5); //set cookie for 12h
  }
  var s_userDataCookie = "";
  try {
      s_userDataCookie = s_readCookie('s_c20');
  } catch (err) {}

  if (s_userDataCookie.length > 0) {
      s.eVar73 = s_userDataCookie;
      s.contextData['s_userDataCookie'] = /;cn=(.{16});/.test(s_userDataCookie) ? s_userDataCookie.match(/;cn=(.{16});/, ';').pop() : "";
      //console.log('kamal: cookie existed cookie val=' + extraAdCallInfo);
  } else if (typeof extraAdCallInfo == 'string' && extraAdCallInfo.length > 0) {
      s_setCookie('s_c20', extraAdCallInfo);
      s.eVar73 = extraAdCallInfo;
      s.contextData['s_userDataCookie'] = /;cn=(.{16});/.test(extraAdCallInfo) ? extraAdCallInfo.match(/;cn=(.{16});/, ';').pop() : "";
  }
  // AAM Integration (DIL)
  "function" !== typeof window.DIL && (window.DIL = function(a, c) {
          var d = [],
              b, g;
          a !== Object(a) && (a = {});
          var e, h, k, q, p, n, l, D, m, J, K, E;
          e = a.partner;
          h = a.containerNSID;
          k = a.iframeAttachmentDelay;
          q = !!a.disableDestinationPublishingIframe;
          p = a.iframeAkamaiHTTPS;
          n = a.mappings;
          l = a.uuidCookie;
          D = !0 === a.enableErrorReporting;
          m = a.visitorService;
          J = a.declaredId;
          K = !0 === a.removeFinishedScriptsAndCallbacks;
          E = !0 === a.delayAllUntilWindowLoad;
          var L, M, N, F, C, O, P;
          L = !0 === a.disableScriptAttachment;
          M = !0 === a.disableCORSFiring;
          N = !0 === a.disableDefaultRequest;
          F = a.afterResultForDefaultRequest;
          C = a.dpIframeSrc;
          O = !0 === a.testCORS;
          P = !0 === a.useJSONPOnly;
          D && DIL.errorModule.activate();
          var Q = !0 === window._dil_unit_tests;
          (b = c) && d.push(b + "");
          if (!e || "string" !== typeof e) return b = "DIL partner is invalid or not specified in initConfig", DIL.errorModule.handleError({
              name: "error",
              message: b,
              filename: "dil.js"
          }), Error(b);
          b = "DIL containerNSID is invalid or not specified in initConfig, setting to default of 0";
          if (h || "number" === typeof h) h = parseInt(h, 10), !isNaN(h) && 0 <= h && (b = "");
          b && (h = 0, d.push(b), b = "");
          g = DIL.getDil(e, h);
          if (g instanceof DIL && g.api.getPartner() === e && g.api.getContainerNSID() === h) return g;
          if (this instanceof DIL) DIL.registerDil(this, e, h);
          else return new DIL(a, "DIL was not instantiated with the 'new' operator, returning a valid instance with partner = " + e + " and containerNSID = " + h);
          var y = {
                  IS_HTTPS: "https:" === document.location.protocol,
                  POST_MESSAGE_ENABLED: !!window.postMessage,
                  COOKIE_MAX_EXPIRATION_DATE: "Tue, 19 Jan 2038 03:14:07 UTC"
              },
              G = {
                  stuffed: {}
              },
              u = {},
              r = {
                  firingQueue: [],
                  fired: [],
                  firing: !1,
                  sent: [],
                  errored: [],
                  reservedKeys: {
                      sids: !0,
                      pdata: !0,
                      logdata: !0,
                      callback: !0,
                      postCallbackFn: !0,
                      useImageRequest: !0
                  },
                  callbackPrefix: "demdexRequestCallback",
                  firstRequestHasFired: !1,
                  useJSONP: !0,
                  abortRequests: !1,
                  num_of_jsonp_responses: 0,
                  num_of_jsonp_errors: 0,
                  num_of_cors_responses: 0,
                  num_of_cors_errors: 0,
                  corsErrorSources: [],
                  num_of_img_responses: 0,
                  num_of_img_errors: 0,
                  toRemove: [],
                  removed: [],
                  readyToRemove: !1,
                  platformParams: {
                      d_nsid: h + "",
                      d_rtbd: "json",
                      d_jsonv: DIL.jsonVersion + "",
                      d_dst: "1"
                  },
                  nonModStatsParams: {
                      d_rtbd: !0,
                      d_dst: !0,
                      d_cts: !0,
                      d_rs: !0
                  },
                  modStatsParams: null,
                  adms: {
                      TIME_TO_CATCH_ALL_REQUESTS_RELEASE: 2E3,
                      calledBack: !1,
                      mid: null,
                      noVisitorAPI: !1,
                      instance: null,
                      releaseType: "no VisitorAPI",
                      admsProcessingStarted: !1,
                      process: function(f) {
                          try {
                              if (!this.admsProcessingStarted) {
                                  var s = this,
                                      a, x, b, d, c;
                                  if ("function" === typeof f && "function" === typeof f.getInstance) {
                                      if (m === Object(m) && (a = m.namespace) && "string" === typeof a) x = f.getInstance(a);
                                      else {
                                          this.releaseType = "no namespace";
                                          this.releaseRequests();
                                          return
                                      }
                                      if (x === Object(x) && "function" ===
                                          typeof x.isAllowed && "function" === typeof x.getMarketingCloudVisitorID) {
                                          if (!x.isAllowed()) {
                                              this.releaseType = "VisitorAPI not allowed";
                                              this.releaseRequests();
                                              return
                                          }
                                          this.instance = x;
                                          this.admsProcessingStarted = !0;
                                          b = function(f) {
                                              "VisitorAPI" !== s.releaseType && (s.mid = f, s.releaseType = "VisitorAPI", s.releaseRequests())
                                          };
                                          Q && (d = m.server) && "string" === typeof d && (x.server = d);
                                          c = x.getMarketingCloudVisitorID(b);
                                          if ("string" === typeof c && c.length) {
                                              b(c);
                                              return
                                          }
                                          setTimeout(function() {
                                              "VisitorAPI" !== s.releaseType && (s.releaseType =
                                                  "timeout", s.releaseRequests())
                                          }, this.TIME_TO_CATCH_ALL_REQUESTS_RELEASE);
                                          return
                                      }
                                      this.releaseType = "invalid instance"
                                  } else this.noVisitorAPI = !0;
                                  this.releaseRequests()
                              }
                          } catch (e) {
                              this.releaseRequests()
                          }
                      },
                      releaseRequests: function() {
                          this.calledBack = !0;
                          r.registerRequest()
                      },
                      getMarketingCloudVisitorID: function() {
                          return this.instance ? this.instance.getMarketingCloudVisitorID() : null
                      },
                      getMIDQueryString: function() {
                          var f = v.isPopulatedString,
                              s = this.getMarketingCloudVisitorID();
                          f(this.mid) && this.mid === s || (this.mid =
                              s);
                          return f(this.mid) ? "d_mid=" + this.mid + "&" : ""
                      }
                  },
                  declaredId: {
                      declaredId: {
                          init: null,
                          request: null
                      },
                      declaredIdCombos: {},
                      setDeclaredId: function(f, s) {
                          var a = v.isPopulatedString,
                              x = encodeURIComponent;
                          if (f === Object(f) && a(s)) {
                              var b = f.dpid,
                                  d = f.dpuuid,
                                  c = null;
                              if (a(b) && a(d)) {
                                  c = x(b) + "$" + x(d);
                                  if (!0 === this.declaredIdCombos[c]) return "setDeclaredId: combo exists for type '" + s + "'";
                                  this.declaredIdCombos[c] = !0;
                                  this.declaredId[s] = {
                                      dpid: b,
                                      dpuuid: d
                                  };
                                  return "setDeclaredId: succeeded for type '" + s + "'"
                              }
                          }
                          return "setDeclaredId: failed for type '" +
                              s + "'"
                      },
                      getDeclaredIdQueryString: function() {
                          var f = this.declaredId.request,
                              s = this.declaredId.init,
                              a = "";
                          null !== f ? a = "&d_dpid=" + f.dpid + "&d_dpuuid=" + f.dpuuid : null !== s && (a = "&d_dpid=" + s.dpid + "&d_dpuuid=" + s.dpuuid);
                          return a
                      }
                  },
                  registerRequest: function(f) {
                      var s = this.firingQueue;
                      f === Object(f) && s.push(f);
                      this.firing || !s.length || E && !DIL.windowLoaded || (this.adms.calledBack ? (f = s.shift(), f.src = f.src.replace(/demdex.net\/event\?d_nsid=/, "demdex.net/event?" + this.adms.getMIDQueryString() + "d_nsid="), v.isPopulatedString(f.corsPostData) &&
                          (f.corsPostData = f.corsPostData.replace(/^d_nsid=/, this.adms.getMIDQueryString() + "d_nsid=")), A.fireRequest(f), this.firstRequestHasFired || "script" !== f.tag && "cors" !== f.tag || (this.firstRequestHasFired = !0)) : this.processVisitorAPI())
                  },
                  processVisitorAPI: function() {
                      this.adms.process(window.Visitor)
                  },
                  requestRemoval: function(f) {
                      if (!K) return "removeFinishedScriptsAndCallbacks is not boolean true";
                      var s = this.toRemove,
                          a, b;
                      f === Object(f) && (a = f.script, b = f.callbackName, (a === Object(a) && "SCRIPT" === a.nodeName || "no script created" ===
                          a) && "string" === typeof b && b.length && s.push(f));
                      if (this.readyToRemove && s.length) {
                          b = s.shift();
                          a = b.script;
                          b = b.callbackName;
                          "no script created" !== a ? (f = a.src, a.parentNode.removeChild(a)) : f = a;
                          window[b] = null;
                          try {
                              delete window[b]
                          } catch (d) {}
                          this.removed.push({
                              scriptSrc: f,
                              callbackName: b
                          });
                          DIL.variables.scriptsRemoved.push(f);
                          DIL.variables.callbacksRemoved.push(b);
                          return this.requestRemoval()
                      }
                      return "requestRemoval() processed"
                  }
              };
          g = function() {
              var f = "http://fast.",
                  a = "?d_nsid=" + h + "#" + encodeURIComponent(document.location.href);
              if ("string" === typeof C && C.length) return C + a;
              y.IS_HTTPS && (f = !0 === p ? "https://fast." : "https://");
              return f + e + ".demdex.net/dest4.html" + a
          };
          var z = {
                  THROTTLE_START: 3E4,
                  throttleTimerSet: !1,
                  id: "destination_publishing_iframe_" + e + "_" + h,
                  url: g(),
                  iframe: null,
                  iframeHasLoaded: !1,
                  sendingMessages: !1,
                  messages: [],
                  messagesPosted: [],
                  messageSendingInterval: y.POST_MESSAGE_ENABLED ? 15 : 100,
                  jsonProcessed: [],
                  attachIframe: function() {
                      var f = this,
                          a = document.createElement("iframe");
                      a.id = this.id;
                      a.style.cssText = "display: none; width: 0; height: 0;";
                      a.src = this.url;
                      t.addListener(a, "load", function() {
                          f.iframeHasLoaded = !0;
                          f.requestToProcess()
                      });
                      document.body.appendChild(a);
                      this.iframe = a
                  },
                  requestToProcess: function(f, a) {
                      var b = this;
                      f && !v.isEmptyObject(f) && this.process(f, a);
                      this.iframeHasLoaded && this.messages.length && !this.sendingMessages && (this.throttleTimerSet || (this.throttleTimerSet = !0, setTimeout(function() {
                          b.messageSendingInterval = y.POST_MESSAGE_ENABLED ? 15 : 150
                      }, this.THROTTLE_START)), this.sendingMessages = !0, this.sendMessages())
                  },
                  process: function(f,
                      a) {
                      var b = encodeURIComponent,
                          d, c, e, g, h, n;
                      a === Object(a) && (n = t.encodeAndBuildRequest(["", a.dpid || "", a.dpuuid || ""], ","));
                      if ((d = f.dests) && d instanceof Array && (c = d.length))
                          for (e = 0; e < c; e++) g = d[e], g = [b("dests"), b(g.id || ""), b(g.y || ""), b(g.c || "")], this.addMessage(g.join("|"));
                      if ((d = f.ibs) && d instanceof Array && (c = d.length))
                          for (e = 0; e < c; e++) g = d[e], g = [b("ibs"), b(g.id || ""), b(g.tag || ""), t.encodeAndBuildRequest(g.url || [], ","), b(g.ttl || ""), "", n], this.addMessage(g.join("|"));
                      if ((d = f.dpcalls) && d instanceof Array && (c =
                              d.length))
                          for (e = 0; e < c; e++) g = d[e], h = g.callback || {}, h = [h.obj || "", h.fn || "", h.key || "", h.tag || "", h.url || ""], g = [b("dpm"), b(g.id || ""), b(g.tag || ""), t.encodeAndBuildRequest(g.url || [], ","), b(g.ttl || ""), t.encodeAndBuildRequest(h, ","), n], this.addMessage(g.join("|"));
                      this.jsonProcessed.push(f)
                  },
                  addMessage: function(f) {
                      var a = encodeURIComponent,
                          a = D ? a("---destpub-debug---") : a("---destpub---");
                      this.messages.push(a + f)
                  },
                  sendMessages: function() {
                      var f = this,
                          a;
                      this.messages.length ? (a = this.messages.shift(), DIL.xd.postMessage(a,
                          this.url, this.iframe.contentWindow), this.messagesPosted.push(a), setTimeout(function() {
                          f.sendMessages()
                      }, this.messageSendingInterval)) : this.sendingMessages = !1
                  }
              },
              I = {
                  traits: function(f) {
                      v.isValidPdata(f) && (u.sids instanceof Array || (u.sids = []), t.extendArray(u.sids, f));
                      return this
                  },
                  pixels: function(f) {
                      v.isValidPdata(f) && (u.pdata instanceof Array || (u.pdata = []), t.extendArray(u.pdata, f));
                      return this
                  },
                  logs: function(f) {
                      v.isValidLogdata(f) && (u.logdata !== Object(u.logdata) && (u.logdata = {}), t.extendObject(u.logdata,
                          f));
                      return this
                  },
                  customQueryParams: function(f) {
                      v.isEmptyObject(f) || t.extendObject(u, f, r.reservedKeys);
                      return this
                  },
                  signals: function(f, a) {
                      var b, d = f;
                      if (!v.isEmptyObject(d)) {
                          if (a && "string" === typeof a)
                              for (b in d = {}, f) f.hasOwnProperty(b) && (d[a + b] = f[b]);
                          t.extendObject(u, d, r.reservedKeys)
                      }
                      return this
                  },
                  declaredId: function(f) {
                      r.declaredId.setDeclaredId(f, "request");
                      return this
                  },
                  result: function(f) {
                      "function" === typeof f && (u.callback = f);
                      return this
                  },
                  afterResult: function(f) {
                      "function" === typeof f && (u.postCallbackFn =
                          f);
                      return this
                  },
                  useImageRequest: function() {
                      u.useImageRequest = !0;
                      return this
                  },
                  clearData: function() {
                      u = {};
                      return this
                  },
                  submit: function() {
                      A.submitRequest(u);
                      u = {};
                      return this
                  },
                  getPartner: function() {
                      return e
                  },
                  getContainerNSID: function() {
                      return h
                  },
                  getEventLog: function() {
                      return d
                  },
                  getState: function() {
                      var f = {},
                          a = {};
                      t.extendObject(f, r, {
                          callbackPrefix: !0,
                          useJSONP: !0,
                          registerRequest: !0
                      });
                      t.extendObject(a, z, {
                          attachIframe: !0,
                          requestToProcess: !0,
                          process: !0,
                          sendMessages: !0
                      });
                      return {
                          pendingRequest: u,
                          otherRequestInfo: f,
                          destinationPublishingInfo: a
                      }
                  },
                  idSync: function(f) {
                      if (f !== Object(f) || "string" !== typeof f.dpid || !f.dpid.length) return "Error: config or config.dpid is empty";
                      if ("string" !== typeof f.url || !f.url.length) return "Error: config.url is empty";
                      var a = f.url,
                          b = f.minutesToLive,
                          d = encodeURIComponent,
                          c, a = a.replace(/^https:/, "").replace(/^http:/, "");
                      if ("undefined" === typeof b) b = 20160;
                      else if (b = parseInt(b, 10), isNaN(b) || 0 >= b) return "Error: config.minutesToLive needs to be a positive number";
                      c = t.encodeAndBuildRequest(["",
                          f.dpid, f.dpuuid || ""
                      ], ",");
                      f = ["ibs", d(f.dpid), "img", d(a), b, "", c];
                      z.addMessage(f.join("|"));
                      r.firstRequestHasFired && z.requestToProcess();
                      return "Successfully queued"
                  },
                  aamIdSync: function(f) {
                      if (f !== Object(f) || "string" !== typeof f.dpuuid || !f.dpuuid.length) return "Error: config or config.dpuuid is empty";
                      f.url = "//dpm.demdex.net/ibs:dpid=" + f.dpid + "&dpuuid=" + f.dpuuid;
                      return this.idSync(f)
                  },
                  passData: function(f) {
                      if (v.isEmptyObject(f)) return "Error: json is empty or not an object";
                      A.defaultCallback(f);
                      return "json submitted for processing"
                  },
                  getPlatformParams: function() {
                      return r.platformParams
                  },
                  getEventCallConfigParams: function() {
                      var f = r,
                          a = f.modStatsParams,
                          b = f.platformParams,
                          d;
                      if (!a) {
                          a = {};
                          for (d in b) b.hasOwnProperty(d) && !f.nonModStatsParams[d] && (a[d.replace(/^d_/, "")] = b[d]);
                          f.modStatsParams = a
                      }
                      return a
                  }
              },
              A = {
                  corsMetadata: function() {
                      var f = "none",
                          a = !0;
                      "undefined" !== typeof XMLHttpRequest && XMLHttpRequest === Object(XMLHttpRequest) && ("withCredentials" in new XMLHttpRequest ? f = "XMLHttpRequest" : (new Function("/*@cc_on return /^10/.test(@_jscript_version) @*/"))() ?
                          f = "XMLHttpRequest" : "undefined" !== typeof XDomainRequest && XDomainRequest === Object(XDomainRequest) && (a = !1), 0 < Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") && (a = !1));
                      return {
                          corsType: f,
                          corsCookiesEnabled: a
                      }
                  }(),
                  getCORSInstance: function() {
                      return "none" === this.corsMetadata.corsType ? null : new window[this.corsMetadata.corsType]
                  },
                  submitRequest: function(f) {
                      r.registerRequest(A.createQueuedRequest(f));
                      return !0
                  },
                  createQueuedRequest: function(f) {
                      var a = r,
                          b, d = f.callback,
                          c = "img",
                          g;
                      if (!v.isEmptyObject(n)) {
                          var e,
                              m, l;
                          for (e in n) n.hasOwnProperty(e) && (m = n[e], null != m && "" !== m && e in f && !(m in f || m in r.reservedKeys) && (l = f[e], null != l && "" !== l && (f[m] = l)))
                      }
                      v.isValidPdata(f.sids) || (f.sids = []);
                      v.isValidPdata(f.pdata) || (f.pdata = []);
                      v.isValidLogdata(f.logdata) || (f.logdata = {});
                      f.logdataArray = t.convertObjectToKeyValuePairs(f.logdata, "=", !0);
                      f.logdataArray.push("_ts=" + (new Date).getTime());
                      "function" !== typeof d && (d = this.defaultCallback);
                      a.useJSONP = !0 !== f.useImageRequest;
                      a.useJSONP && (c = "script", b = a.callbackPrefix + "_" + h + "_" +
                          (new Date).getTime());
                      a = this.makeRequestSrcData(f, b);
                      !P && (g = this.getCORSInstance()) && a.truncated && (this.corsMetadata.corsCookiesEnabled || a.isDeclaredIdCall) && (c = "cors");
                      return {
                          tag: c,
                          src: a.src,
                          corsSrc: a.corsSrc,
                          internalCallbackName: b,
                          callbackFn: d,
                          postCallbackFn: f.postCallbackFn,
                          useImageRequest: !!f.useImageRequest,
                          requestData: f,
                          corsInstance: g,
                          corsPostData: a.corsPostData,
                          hasCORSError: !1
                      }
                  },
                  defaultCallback: function(f, a) {
                      var b, d, c, e, g, h, m, n, w;
                      if ((b = f.stuff) && b instanceof Array && (d = b.length))
                          for (c = 0; c < d; c++)
                              if ((e =
                                      b[c]) && e === Object(e)) {
                                  g = e.cn;
                                  h = e.cv;
                                  m = e.ttl;
                                  if ("undefined" === typeof m || "" === m) m = Math.floor(t.getMaxCookieExpiresInMinutes() / 60 / 24);
                                  n = e.dmn || "." + document.domain.replace(/^www\./, "");
                                  w = e.type;
                                  g && (h || "number" === typeof h) && ("var" !== w && (m = parseInt(m, 10)) && !isNaN(m) && t.setCookie(g, h, 1440 * m, "/", n, !1), G.stuffed[g] = h)
                              }
                      b = f.uuid;
                      v.isPopulatedString(b) && !v.isEmptyObject(l) && (d = l.path, "string" === typeof d && d.length || (d = "/"), c = parseInt(l.days, 10), isNaN(c) && (c = 100), t.setCookie(l.name || "aam_did", b, 1440 * c, d, l.domain ||
                          "." + document.domain.replace(/^www\./, ""), !0 === l.secure));
                      q || r.abortRequests || z.requestToProcess(f, a)
                  },
                  makeRequestSrcData: function(f, a) {
                      f.sids = v.removeEmptyArrayValues(f.sids || []);
                      f.pdata = v.removeEmptyArrayValues(f.pdata || []);
                      var b = r,
                          d = b.platformParams,
                          c = t.encodeAndBuildRequest(f.sids, ","),
                          g = t.encodeAndBuildRequest(f.pdata, ","),
                          m = (f.logdataArray || []).join("&");
                      delete f.logdataArray;
                      var n = y.IS_HTTPS ? "https://" : "http://",
                          l = b.declaredId.getDeclaredIdQueryString(),
                          k;
                      k = [];
                      var w, q, p, u;
                      for (w in f)
                          if (!(w in
                                  b.reservedKeys) && f.hasOwnProperty(w))
                              if (q = f[w], w = encodeURIComponent(w), q instanceof Array)
                                  for (p = 0, u = q.length; p < u; p++) k.push(w + "=" + encodeURIComponent(q[p]));
                              else k.push(w + "=" + encodeURIComponent(q));
                      k = k.length ? "&" + k.join("&") : "";
                      w = !1;
                      c = "d_nsid=" + d.d_nsid + l + (c.length ? "&d_sid=" + c : "") + (g.length ? "&d_px=" + g : "") + (m.length ? "&d_ld=" + encodeURIComponent(m) : "");
                      d = "&d_rtbd=" + d.d_rtbd + "&d_jsonv=" + d.d_jsonv + "&d_dst=" + d.d_dst;
                      n = n + e + ".demdex.net/event";
                      g = b = n + "?" + c + (b.useJSONP ? d + "&d_cb=" + (a || "") : "") + k;
                      2048 < b.length &&
                          (b = b.substring(0, b.lastIndexOf("&")), w = !0);
                      return {
                          corsSrc: n + "?" + (O ? "testcors=1&d_nsid=" + h + "&" : "") + "_ts=" + (new Date).getTime(),
                          src: b,
                          originalSrc: g,
                          truncated: w,
                          corsPostData: c + d + k,
                          isDeclaredIdCall: "" !== l
                      }
                  },
                  fireRequest: function(f) {
                      if ("img" === f.tag) this.fireImage(f);
                      else {
                          var a = r.declaredId,
                              a = a.declaredId.request || a.declaredId.init || {},
                              a = {
                                  dpid: a.dpid || "",
                                  dpuuid: a.dpuuid || ""
                              };
                          "script" === f.tag ? this.fireScript(f, a) : "cors" === f.tag && this.fireCORS(f, a)
                      }
                  },
                  fireImage: function(a) {
                      var c = r,
                          e, g;
                      c.abortRequests || (c.firing = !0, e = new Image(0, 0), c.sent.push(a), e.onload = function() {
                          c.firing = !1;
                          c.fired.push(a);
                          c.num_of_img_responses++;
                          c.registerRequest()
                      }, g = function(e) {
                          b = "imgAbortOrErrorHandler received the event of type " + e.type;
                          d.push(b);
                          c.abortRequests = !0;
                          c.firing = !1;
                          c.errored.push(a);
                          c.num_of_img_errors++;
                          c.registerRequest()
                      }, e.addEventListener ? (e.addEventListener("error", g, !1), e.addEventListener("abort", g, !1)) : e.attachEvent && (e.attachEvent("onerror", g), e.attachEvent("onabort", g)), e.src = a.src)
                  },
                  fireScript: function(a,
                      c) {
                      var g = this,
                          h = r,
                          m, n, l = a.src,
                          k = a.postCallbackFn,
                          q = "function" === typeof k,
                          p = a.internalCallbackName;
                      h.abortRequests || (h.firing = !0, window[p] = function(g) {
                          try {
                              g !== Object(g) && (g = {});
                              var m = a.callbackFn;
                              h.firing = !1;
                              h.fired.push(a);
                              h.num_of_jsonp_responses++;
                              m(g, c);
                              q && k(g, c)
                          } catch (l) {
                              l.message = "DIL jsonp callback caught error with message " + l.message;
                              b = l.message;
                              d.push(b);
                              l.filename = l.filename || "dil.js";
                              l.partner = e;
                              DIL.errorModule.handleError(l);
                              try {
                                  m({
                                      error: l.name + "|" + l.message
                                  }, c), q && k({
                                      error: l.name + "|" +
                                          l.message
                                  }, c)
                              } catch (H) {}
                          } finally {
                              h.requestRemoval({
                                  script: n,
                                  callbackName: p
                              }), h.registerRequest()
                          }
                      }, L ? (h.firing = !1, h.requestRemoval({
                          script: "no script created",
                          callbackName: p
                      })) : (n = document.createElement("script"), n.addEventListener && n.addEventListener("error", function(d) {
                          h.requestRemoval({
                              script: n,
                              callbackName: p
                          });
                          b = "jsonp script tag error listener received the event of type " + d.type + " with src " + l;
                          g.handleScriptError(b, a)
                      }, !1), n.type = "text/javascript", n.src = l, m = DIL.variables.scriptNodeList[0], m.parentNode.insertBefore(n,
                          m)), h.sent.push(a), h.declaredId.declaredId.request = null)
                  },
                  fireCORS: function(a, c) {
                      function g(n) {
                          var l;
                          try {
                              if (l = JSON.parse(n), l !== Object(l)) {
                                  h.handleCORSError(a, c, "Response is not JSON");
                                  return
                              }
                          } catch (k) {
                              h.handleCORSError(a, c, "Error parsing response as JSON");
                              return
                          }
                          try {
                              var H = a.callbackFn;
                              m.firing = !1;
                              m.fired.push(a);
                              m.num_of_cors_responses++;
                              H(l, c);
                              t && q(l, c)
                          } catch (p) {
                              p.message = "DIL handleCORSResponse caught error with message " + p.message;
                              b = p.message;
                              d.push(b);
                              p.filename = p.filename || "dil.js";
                              p.partner =
                                  e;
                              DIL.errorModule.handleError(p);
                              try {
                                  H({
                                      error: p.name + "|" + p.message
                                  }, c), t && q({
                                      error: p.name + "|" + p.message
                                  }, c)
                              } catch (r) {}
                          } finally {
                              m.registerRequest()
                          }
                      }
                      var h = this,
                          m = r,
                          n = this.corsMetadata.corsType,
                          l = a.corsSrc,
                          k = a.corsInstance,
                          p = a.corsPostData,
                          q = a.postCallbackFn,
                          t = "function" === typeof q;
                      if (!m.abortRequests) {
                          m.firing = !0;
                          if (M) m.firing = !1;
                          else try {
                              k.open("post", l, !0), "XMLHttpRequest" === n ? (k.withCredentials = !0, k.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), k.onreadystatechange = function() {
                                  4 ===
                                      this.readyState && (200 === this.status ? g(this.responseText) : h.handleCORSError(a, c, "onreadystatechange"))
                              }) : "XDomainRequest" === n && (k.onload = function() {
                                  g(this.responseText)
                              }), k.onerror = function() {
                                  h.handleCORSError(a, c, "onerror")
                              }, k.ontimeout = function() {
                                  h.handleCORSError(a, c, "ontimeout")
                              }, k.send(p)
                          } catch (u) {
                              this.handleCORSError(a, c, "try-catch")
                          }
                          m.sent.push(a);
                          m.declaredId.declaredId.request = null
                      }
                  },
                  handleCORSError: function(a, b, c) {
                      a.hasCORSError || (a.hasCORSError = !0, r.num_of_cors_errors++, r.corsErrorSources.push(c),
                          a.tag = "script", this.fireScript(a, b))
                  },
                  handleScriptError: function(a, b) {
                      r.num_of_jsonp_errors++;
                      this.handleRequestError(a, b)
                  },
                  handleRequestError: function(a, b) {
                      var c = r;
                      d.push(a);
                      c.abortRequests = !0;
                      c.firing = !1;
                      c.errored.push(b);
                      c.registerRequest()
                  }
              },
              v = {
                  isValidPdata: function(a) {
                      return a instanceof Array && this.removeEmptyArrayValues(a).length ? !0 : !1
                  },
                  isValidLogdata: function(a) {
                      return !this.isEmptyObject(a)
                  },
                  isEmptyObject: function(a) {
                      if (a !== Object(a)) return !0;
                      for (var b in a)
                          if (a.hasOwnProperty(b)) return !1;
                      return !0
                  },
                  removeEmptyArrayValues: function(a) {
                      for (var b = 0, c = a.length, d, g = [], b = 0; b < c; b++) d = a[b], "undefined" !== typeof d && null !== d && "" !== d && g.push(d);
                      return g
                  },
                  isPopulatedString: function(a) {
                      return "string" === typeof a && a.length
                  }
              },
              t = {
                  addListener: function() {
                      if (document.addEventListener) return function(a, b, c) {
                          a.addEventListener(b, function(a) {
                              "function" === typeof c && c(a)
                          }, !1)
                      };
                      if (document.attachEvent) return function(a, b, c) {
                          a.attachEvent("on" + b, function(a) {
                              "function" === typeof c && c(a)
                          })
                      }
                  }(),
                  convertObjectToKeyValuePairs: function(a,
                      b, c) {
                      var d = [],
                          g, e;
                      b || (b = "=");
                      for (g in a) a.hasOwnProperty(g) && (e = a[g], "undefined" !== typeof e && null !== e && "" !== e && d.push(g + b + (c ? encodeURIComponent(e) : e)));
                      return d
                  },
                  encodeAndBuildRequest: function(a, b) {
                      return this.map(a, function(a) {
                          return encodeURIComponent(a)
                      }).join(b)
                  },
                  map: function(a, b) {
                      if (Array.prototype.map) return a.map(b);
                      if (void 0 === a || null === a) throw new TypeError;
                      var c = Object(a),
                          d = c.length >>> 0;
                      if ("function" !== typeof b) throw new TypeError;
                      for (var g = Array(d), e = 0; e < d; e++) e in c && (g[e] = b.call(b, c[e],
                          e, c));
                      return g
                  },
                  filter: function(a, b) {
                      if (!Array.prototype.filter) {
                          if (void 0 === a || null === a) throw new TypeError;
                          var c = Object(a),
                              d = c.length >>> 0;
                          if ("function" !== typeof b) throw new TypeError;
                          for (var g = [], e = 0; e < d; e++)
                              if (e in c) {
                                  var h = c[e];
                                  b.call(b, h, e, c) && g.push(h)
                              }
                          return g
                      }
                      return a.filter(b)
                  },
                  getCookie: function(a) {
                      a += "=";
                      var b = document.cookie.split(";"),
                          c, d, e;
                      c = 0;
                      for (d = b.length; c < d; c++) {
                          for (e = b[c];
                              " " === e.charAt(0);) e = e.substring(1, e.length);
                          if (0 === e.indexOf(a)) return decodeURIComponent(e.substring(a.length,
                              e.length))
                      }
                      return null
                  },
                  setCookie: function(a, b, c, d, e, g) {
                      var h = new Date;
                      c && (c *= 6E4);
                      document.cookie = a + "=" + encodeURIComponent(b) + (c ? ";expires=" + (new Date(h.getTime() + c)).toUTCString() : "") + (d ? ";path=" + d : "") + (e ? ";domain=" + e : "") + (g ? ";secure" : "")
                  },
                  extendArray: function(a, b) {
                      return a instanceof Array && b instanceof Array ? (Array.prototype.push.apply(a, b), !0) : !1
                  },
                  extendObject: function(a, b, c) {
                      var d;
                      if (a === Object(a) && b === Object(b)) {
                          for (d in b) !b.hasOwnProperty(d) || !v.isEmptyObject(c) && d in c || (a[d] = b[d]);
                          return !0
                      }
                      return !1
                  },
                  getMaxCookieExpiresInMinutes: function() {
                      return ((new Date(y.COOKIE_MAX_EXPIRATION_DATE)).getTime() - (new Date).getTime()) / 1E3 / 60
                  }
              };
          "error" === e && 0 === h && t.addListener(window, "load", function() {
              DIL.windowLoaded = !0
          });
          var B = function() {
                  r.registerRequest();
                  S();
                  q || r.abortRequests || z.attachIframe();
                  r.readyToRemove = !0;
                  r.requestRemoval()
              },
              S = function() {
                  q || setTimeout(function() {
                          N || r.firstRequestHasFired || r.adms.admsProcessingStarted || r.adms.calledBack || ("function" === typeof F ? I.afterResult(F).submit() : I.submit())
                      },
                      DIL.constants.TIME_TO_DEFAULT_REQUEST)
              },
              R = document;
          "error" !== e && (DIL.windowLoaded ? B() : "complete" !== R.readyState && "loaded" !== R.readyState ? t.addListener(window, "load", B) : DIL.isAddedPostWindowLoadWasCalled ? t.addListener(window, "load", B) : E || (k = "number" === typeof k ? parseInt(k, 10) : 0, 0 > k && (k = 0), setTimeout(B, k || DIL.constants.TIME_TO_CATCH_ALL_DP_IFRAME_ATTACHMENT)));
          r.declaredId.setDeclaredId(J, "init");
          this.api = I;
          this.getStuffedVariable = function(a) {
              var b = G.stuffed[a];
              b || "number" === typeof b || (b = t.getCookie(a)) ||
                  "number" === typeof b || (b = "");
              return b
          };
          this.validators = v;
          this.helpers = t;
          this.constants = y;
          this.log = d;
          Q && (this.pendingRequest = u, this.requestController = r, this.setDestinationPublishingUrl = g, this.destinationPublishing = z, this.requestProcs = A, this.variables = G, this.callWindowLoadFunctions = B)
      }, function() {
          var a = document,
              c;
          null == a.readyState && a.addEventListener && (a.readyState = "loading", a.addEventListener("DOMContentLoaded", c = function() {
              a.removeEventListener("DOMContentLoaded", c, !1);
              a.readyState = "complete"
          }, !1))
      }(),
      DIL.extendStaticPropertiesAndMethods = function(a) {
          var c;
          if (a === Object(a))
              for (c in a) a.hasOwnProperty(c) && (this[c] = a[c])
      }, DIL.extendStaticPropertiesAndMethods({
          version: "5.7",
          jsonVersion: 1,
          constants: {
              TIME_TO_DEFAULT_REQUEST: 50,
              TIME_TO_CATCH_ALL_DP_IFRAME_ATTACHMENT: 500
          },
          variables: {
              scriptNodeList: document.getElementsByTagName("script"),
              scriptsRemoved: [],
              callbacksRemoved: []
          },
          windowLoaded: !1,
          dils: {},
          isAddedPostWindowLoadWasCalled: !1,
          isAddedPostWindowLoad: function(a) {
              this.isAddedPostWindowLoadWasCalled = !0;
              this.windowLoaded = "function" === typeof a ? !!a() : "boolean" === typeof a ? a : !0
          },
          create: function(a) {
              try {
                  return new DIL(a)
              } catch (c) {
                  return (new Image(0, 0)).src = "http://error.demdex.net/event?d_nsid=0&d_px=14137&d_ld=name%3Derror%26filename%3Ddil.js%26partner%3Dno_partner%26message%3DError%2520in%2520attempt%2520to%2520create%2520DIL%2520instance%2520with%2520DIL.create()%26_ts%3D" + (new Date).getTime(), Error("Error in attempt to create DIL instance with DIL.create()")
              }
          },
          registerDil: function(a, c, d) {
              c = c + "$" +
                  d;
              c in this.dils || (this.dils[c] = a)
          },
          getDil: function(a, c) {
              var d;
              "string" !== typeof a && (a = "");
              c || (c = 0);
              d = a + "$" + c;
              return d in this.dils ? this.dils[d] : Error("The DIL instance with partner = " + a + " and containerNSID = " + c + " was not found")
          },
          dexGetQSVars: function(a, c, d) {
              c = this.getDil(c, d);
              return c instanceof this ? c.getStuffedVariable(a) : ""
          },
          xd: {
              postMessage: function(a, c, d) {
                  var b = 1;
                  c && (window.postMessage ? d.postMessage(a, c.replace(/([^:]+:\/\/[^\/]+).*/, "$1")) : c && (d.location = c.replace(/#.*$/, "") + "#" + +new Date +
                      b++ + "&" + a))
              }
          }
      }), DIL.errorModule = function() {
          var a = DIL.create({
                  partner: "error",
                  containerNSID: 0,
                  disableDestinationPublishingIframe: !0
              }),
              c = {
                  harvestererror: 14138,
                  destpuberror: 14139,
                  dpmerror: 14140,
                  generalerror: 14137,
                  error: 14137,
                  noerrortypedefined: 15021,
                  evalerror: 15016,
                  rangeerror: 15017,
                  referenceerror: 15018,
                  typeerror: 15019,
                  urierror: 15020
              },
              d = !1;
          return {
              activate: function() {
                  d = !0
              },
              handleError: function(b) {
                  if (!d) return "DIL error module has not been activated";
                  b !== Object(b) && (b = {});
                  var g = b.name ? (b.name + "").toLowerCase() :
                      "",
                      e = [];
                  b = {
                      name: g,
                      filename: b.filename ? b.filename + "" : "",
                      partner: b.partner ? b.partner + "" : "no_partner",
                      site: b.site ? b.site + "" : document.location.href,
                      message: b.message ? b.message + "" : ""
                  };
                  e.push(g in c ? c[g] : c.noerrortypedefined);
                  a.api.pixels(e).logs(b).useImageRequest().submit();
                  return "DIL error report sent"
              },
              pixelMap: c
          }
      }(), DIL.tools = {}, DIL.modules = {
          helpers: {
              handleModuleError: function(a, c, d) {
                  var b = "";
                  c = c || "Error caught in DIL module/submodule: ";
                  a === Object(a) ? b = c + (a.message || "err has no message") : (b = c + "err is not a valid object",
                      a = {});
                  a.message = b;
                  d instanceof DIL && (a.partner = d.api.getPartner());
                  DIL.errorModule.handleError(a);
                  return this.errorMessage = b
              }
          }
      });
  DIL.tools.getSearchReferrer = function(a, c) {
      var d = DIL.getDil("error"),
          b = DIL.tools.decomposeURI(a || document.referrer),
          g = "",
          e = "",
          h = {
              queryParam: "q"
          };
      return (g = d.helpers.filter([c === Object(c) ? c : {}, {
          hostPattern: /aol\./
      }, {
          hostPattern: /ask\./
      }, {
          hostPattern: /bing\./
      }, {
          hostPattern: /google\./
      }, {
          hostPattern: /yahoo\./,
          queryParam: "p"
      }], function(a) {
          return !(!a.hasOwnProperty("hostPattern") || !b.hostname.match(a.hostPattern))
      }).shift()) ? {
          valid: !0,
          name: b.hostname,
          keywords: (d.helpers.extendObject(h, g), e = h.queryPattern ?
              (g = ("" + b.search).match(h.queryPattern)) ? g[1] : "" : b.uriParams[h.queryParam], decodeURIComponent(e || "").replace(/\+|%20/g, " "))
      } : {
          valid: !1,
          name: "",
          keywords: ""
      }
  };
  DIL.tools.decomposeURI = function(a) {
      var c = DIL.getDil("error"),
          d = document.createElement("a");
      d.href = a || document.referrer;
      return {
          hash: d.hash,
          host: d.host.split(":").shift(),
          hostname: d.hostname,
          href: d.href,
          pathname: d.pathname.replace(/^\//, ""),
          protocol: d.protocol,
          search: d.search,
          uriParams: function(a, d) {
              c.helpers.map(d.split("&"), function(c) {
                  c = c.split("=");
                  a[c.shift()] = c.shift()
              });
              return a
          }({}, d.search.replace(/^(\/|\?)?|\/$/g, ""))
      }
  };
  DIL.tools.getMetaTags = function() {
      var a = {},
          c = document.getElementsByTagName("meta"),
          d, b, g, e, h;
      d = 0;
      for (g = arguments.length; d < g; d++)
          if (e = arguments[d], null !== e)
              for (b = 0; b < c.length; b++)
                  if (h = c[b], h.name === e) {
                      a[e] = h.content;
                      break
                  }
      return a
  };
  DIL.modules.siteCatalyst = {
      dil: null,
      handle: DIL.modules.helpers.handleModuleError,
      init: function(a, c, d, b) {
          try {
              var g = this,
                  e = {
                      name: "DIL Site Catalyst Module Error"
                  },
                  h = function(a) {
                      e.message = a;
                      DIL.errorModule.handleError(e);
                      return a
                  };
              this.options = b === Object(b) ? b : {};
              this.dil = null;
              if (c instanceof DIL) this.dil = c;
              else return h("dilInstance is not a valid instance of DIL");
              e.partner = c.api.getPartner();
              if (a !== Object(a)) return h("siteCatalystReportingSuite is not an object");
              window.AppMeasurement_Module_DIL = a.m_DIL =
                  function(a) {
                      var b = "function" === typeof a.m_i ? a.m_i("DIL") : this;
                      if (b !== Object(b)) return h("m is not an object");
                      b.trackVars = g.constructTrackVars(d);
                      b.d = 0;
                      b.s = a;
                      b._t = function() {
                          var a, b, c = "," + this.trackVars + ",",
                              d = this.s,
                              e, k = [];
                          e = [];
                          var p = {},
                              q = !1;
                          if (d !== Object(d)) return h("Error in m._t function: s is not an object");
                          if (this.d) {
                              if ("function" === typeof d.foreachVar) d.foreachVar(function(a, b) {
                                  "undefined" !== typeof b && (p[a] = b, q = !0)
                              }, this.trackVars);
                              else {
                                  if (!(d.va_t instanceof Array)) return h("Error in m._t function: s.va_t is not an array");
                                  if (d.lightProfileID)(a = d.lightTrackVars) && (a = "," + a + "," + d.vl_mr + ",");
                                  else if (d.pe || d.linkType) a = d.linkTrackVars, d.pe && (b = d.pe.substring(0, 1).toUpperCase() + d.pe.substring(1), d[b] && (a = d[b].trackVars)), a && (a = "," + a + "," + d.vl_l + "," + d.vl_l2 + ",");
                                  if (a) {
                                      b = 0;
                                      for (k = a.split(","); b < k.length; b++) 0 <= c.indexOf("," + k[b] + ",") && e.push(k[b]);
                                      e.length && (c = "," + e.join(",") + ",")
                                  }
                                  e = 0;
                                  for (b = d.va_t.length; e < b; e++) a = d.va_t[e], 0 <= c.indexOf("," + a + ",") && "undefined" !== typeof d[a] && null !== d[a] && "" !== d[a] && (p[a] = d[a], q = !0)
                              }
                              g.includeContextData(d,
                                  p).store_populated && (q = !0);
                              q && this.d.api.signals(p, "c_").submit()
                          }
                      }
                  };
              a.loadModule("DIL");
              a.DIL.d = c;
              return e.message ? e.message : "DIL.modules.siteCatalyst.init() completed with no errors"
          } catch (k) {
              return this.handle(k, "DIL.modules.siteCatalyst.init() caught error with message ", this.dil)
          }
      },
      constructTrackVars: function(a) {
          var c = [],
              d, b, g, e, h;
          if (a === Object(a)) {
              d = a.names;
              if (d instanceof Array && (g = d.length))
                  for (b = 0; b < g; b++) e = d[b], "string" === typeof e && e.length && c.push(e);
              a = a.iteratedNames;
              if (a instanceof Array &&
                  (g = a.length))
                  for (b = 0; b < g; b++)
                      if (d = a[b], d === Object(d) && (e = d.name, h = parseInt(d.maxIndex, 10), "string" === typeof e && e.length && !isNaN(h) && 0 <= h))
                          for (d = 0; d <= h; d++) c.push(e + d);
              if (c.length) return c.join(",")
          }
          return this.constructTrackVars({
              names: "pageName channel campaign products events pe pev1 pev2 pev3".split(" "),
              iteratedNames: [{
                  name: "prop",
                  maxIndex: 75
              }, {
                  name: "eVar",
                  maxIndex: 250
              }]
          })
      },
      includeContextData: function(a, c) {
          var d = {},
              b = !1;
          if (a.contextData === Object(a.contextData)) {
              var g = a.contextData,
                  e = this.options.replaceContextDataPeriodsWith,
                  h = this.options.filterFromContextVariables,
                  k = {},
                  q, p, n, l;
              "string" === typeof e && e.length || (e = "_");
              if (h instanceof Array)
                  for (q = 0, p = h.length; q < p; q++) n = h[q], this.dil.validators.isPopulatedString(n) && (k[n] = !0);
              for (l in g) !g.hasOwnProperty(l) || k[l] || !(h = g[l]) && "number" !== typeof h || (l = ("contextData." + l).replace(/\./g, e), c[l] = h, b = !0)
          }
          d.store_populated = b;
          return d
      }
  };
  DIL.modules.GA = {
      dil: null,
      arr: null,
      tv: null,
      errorMessage: "",
      defaultTrackVars: ["_setAccount", "_setCustomVar", "_addItem", "_addTrans", "_trackSocial"],
      defaultTrackVarsObj: null,
      signals: {},
      hasSignals: !1,
      handle: DIL.modules.helpers.handleModuleError,
      init: function(a, c, d) {
          try {
              this.tv = this.arr = this.dil = null;
              this.errorMessage = "";
              this.signals = {};
              this.hasSignals = !1;
              var b = {
                      name: "DIL GA Module Error"
                  },
                  g = "";
              c instanceof DIL ? (this.dil = c, b.partner = this.dil.api.getPartner()) : (g = "dilInstance is not a valid instance of DIL",
                  b.message = g, DIL.errorModule.handleError(b));
              a instanceof Array && a.length ? this.arr = a : (g = "gaArray is not an array or is empty", b.message = g, DIL.errorModule.handleError(b));
              this.tv = this.constructTrackVars(d);
              this.errorMessage = g
          } catch (e) {
              this.handle(e, "DIL.modules.GA.init() caught error with message ", this.dil)
          } finally {
              return this
          }
      },
      constructTrackVars: function(a) {
          var c = [],
              d, b, g, e;
          if (this.defaultTrackVarsObj !== Object(this.defaultTrackVarsObj)) {
              g = this.defaultTrackVars;
              e = {};
              d = 0;
              for (b = g.length; d < b; d++) e[g[d]] = !0;
              this.defaultTrackVarsObj = e
          } else e = this.defaultTrackVarsObj;
          if (a === Object(a)) {
              a = a.names;
              if (a instanceof Array && (b = a.length))
                  for (d = 0; d < b; d++) g = a[d], "string" === typeof g && g.length && g in e && c.push(g);
              if (c.length) return c
          }
          return this.defaultTrackVars
      },
      constructGAObj: function(a) {
          var c = {};
          a = a instanceof Array ? a : this.arr;
          var d, b, g, e;
          d = 0;
          for (b = a.length; d < b; d++) g = a[d], g instanceof Array && g.length && (g = [], e = a[d], g instanceof Array && e instanceof Array && Array.prototype.push.apply(g, e), e = g.shift(), "string" ===
              typeof e && e.length && (c[e] instanceof Array || (c[e] = []), c[e].push(g)));
          return c
      },
      addToSignals: function(a, c) {
          if ("string" !== typeof a || "" === a || null == c || "" === c) return !1;
          this.signals[a] instanceof Array || (this.signals[a] = []);
          this.signals[a].push(c);
          return this.hasSignals = !0
      },
      constructSignals: function() {
          var a = this.constructGAObj(),
              c = {
                  _setAccount: function(a) {
                      this.addToSignals("c_accountId", a)
                  },
                  _setCustomVar: function(a, b, c) {
                      "string" === typeof b && b.length && this.addToSignals("c_" + b, c)
                  },
                  _addItem: function(a, b, c, d,
                      e, g) {
                      this.addToSignals("c_itemOrderId", a);
                      this.addToSignals("c_itemSku", b);
                      this.addToSignals("c_itemName", c);
                      this.addToSignals("c_itemCategory", d);
                      this.addToSignals("c_itemPrice", e);
                      this.addToSignals("c_itemQuantity", g)
                  },
                  _addTrans: function(a, b, c, d, e, g, h, k) {
                      this.addToSignals("c_transOrderId", a);
                      this.addToSignals("c_transAffiliation", b);
                      this.addToSignals("c_transTotal", c);
                      this.addToSignals("c_transTax", d);
                      this.addToSignals("c_transShipping", e);
                      this.addToSignals("c_transCity", g);
                      this.addToSignals("c_transState",
                          h);
                      this.addToSignals("c_transCountry", k)
                  },
                  _trackSocial: function(a, b, c, d) {
                      this.addToSignals("c_socialNetwork", a);
                      this.addToSignals("c_socialAction", b);
                      this.addToSignals("c_socialTarget", c);
                      this.addToSignals("c_socialPagePath", d)
                  }
              },
              d = this.tv,
              b, g, e, h, k, q;
          b = 0;
          for (g = d.length; b < g; b++)
              if (e = d[b], a.hasOwnProperty(e) && c.hasOwnProperty(e) && (q = a[e], q instanceof Array))
                  for (h = 0, k = q.length; h < k; h++) c[e].apply(this, q[h])
      },
      submit: function() {
          try {
              if ("" !== this.errorMessage) return this.errorMessage;
              this.constructSignals();
              return this.hasSignals ? (this.dil.api.signals(this.signals).submit(), "Signals sent: " + this.dil.helpers.convertObjectToKeyValuePairs(this.signals, "=", !0) + this.dil.log) : "No signals present"
          } catch (a) {
              return this.handle(a, "DIL.modules.GA.submit() caught error with message ", this.dil)
          }
      },
      Stuffer: {
          LIMIT: 5,
          dil: null,
          cookieName: null,
          delimiter: null,
          errorMessage: "",
          handle: DIL.modules.helpers.handleModuleError,
          callback: null,
          v: function() {
              return !1
          },
          init: function(a, c, d) {
              try {
                  this.callback = this.dil = null, this.errorMessage =
                      "", a instanceof DIL ? (this.dil = a, this.v = this.dil.validators.isPopulatedString, this.cookieName = this.v(c) ? c : "aam_ga", this.delimiter = this.v(d) ? d : "|") : this.handle({
                          message: "dilInstance is not a valid instance of DIL"
                      }, "DIL.modules.GA.Stuffer.init() error: ")
              } catch (b) {
                  this.handle(b, "DIL.modules.GA.Stuffer.init() caught error with message ", this.dil)
              } finally {
                  return this
              }
          },
          process: function(a) {
              var c, d, b, g, e, h;
              h = !1;
              var k = 1;
              if (a === Object(a) && (c = a.stuff) && c instanceof Array && (d = c.length))
                  for (a = 0; a < d; a++)
                      if ((b =
                              c[a]) && b === Object(b) && (g = b.cn, e = b.cv, g === this.cookieName && this.v(e))) {
                          h = !0;
                          break
                      }
              if (h) {
                  c = e.split(this.delimiter);
                  "undefined" === typeof window._gaq && (window._gaq = []);
                  b = window._gaq;
                  a = 0;
                  for (d = c.length; a < d && !(h = c[a].split("="), e = h[0], h = h[1], this.v(e) && this.v(h) && b.push(["_setCustomVar", k++, e, h, 1]), k > this.LIMIT); a++);
                  this.errorMessage = 1 < k ? "No errors - stuffing successful" : "No valid values to stuff"
              } else this.errorMessage = "Cookie name and value not found in json";
              if ("function" === typeof this.callback) return this.callback()
          },
          submit: function() {
              try {
                  var a = this;
                  if ("" !== this.errorMessage) return this.errorMessage;
                  this.dil.api.afterResult(function(c) {
                      a.process(c)
                  }).submit();
                  return "DIL.modules.GA.Stuffer.submit() successful"
              } catch (c) {
                  return this.handle(c, "DIL.modules.GA.Stuffer.submit() caught error with message ", this.dil)
              }
          }
      }
  };
  DIL.modules.Peer39 = {
      aid: "",
      dil: null,
      optionals: null,
      errorMessage: "",
      calledBack: !1,
      script: null,
      scriptsSent: [],
      returnedData: [],
      handle: DIL.modules.helpers.handleModuleError,
      init: function(a, c, d) {
          try {
              this.dil = null;
              this.errorMessage = "";
              this.calledBack = !1;
              this.optionals = d === Object(d) ? d : {};
              d = {
                  name: "DIL Peer39 Module Error"
              };
              var b = [],
                  g = "";
              this.isSecurePageButNotEnabled(document.location.protocol) && (g = "Module has not been enabled for a secure page", b.push(g), d.message = g, DIL.errorModule.handleError(d));
              c instanceof
              DIL ? (this.dil = c, d.partner = this.dil.api.getPartner()) : (g = "dilInstance is not a valid instance of DIL", b.push(g), d.message = g, DIL.errorModule.handleError(d));
              "string" === typeof a && a.length ? this.aid = a : (g = "aid is not a string or is empty", b.push(g), d.message = g, DIL.errorModule.handleError(d));
              this.errorMessage = b.join("\n")
          } catch (e) {
              this.handle(e, "DIL.modules.Peer39.init() caught error with message ", this.dil)
          } finally {
              return this
          }
      },
      isSecurePageButNotEnabled: function(a) {
          return "https:" === a && !0 !== this.optionals.enableHTTPS ?
              !0 : !1
      },
      constructSignals: function() {
          var a = this,
              c = this.constructScript(),
              d = DIL.variables.scriptNodeList[0];
          window["afterFinished_" + this.aid] = function() {
              try {
                  var b = a.processData(p39_KVP_Short("c_p", "|").split("|"));
                  b.hasSignals && a.dil.api.signals(b.signals).submit()
              } catch (c) {} finally {
                  a.calledBack = !0, "function" === typeof a.optionals.afterResult && a.optionals.afterResult()
              }
          };
          d.parentNode.insertBefore(c, d);
          this.scriptsSent.push(c);
          return "Request sent to Peer39"
      },
      processData: function(a) {
          var c, d, b, g, e = {},
              h = !1;
          this.returnedData.push(a);
          if (a instanceof Array)
              for (c = 0, d = a.length; c < d; c++) b = a[c].split("="), g = b[0], b = b[1], g && isFinite(b) && !isNaN(parseInt(b, 10)) && (e[g] instanceof Array || (e[g] = []), e[g].push(b), h = !0);
          return {
              hasSignals: h,
              signals: e
          }
      },
      constructScript: function() {
          var a = document.createElement("script"),
              c = this.optionals,
              d = c.scriptId,
              b = c.scriptSrc,
              c = c.scriptParams;
          a.id = "string" === typeof d && d.length ? d : "peer39ScriptLoader";
          a.type = "text/javascript";
          "string" === typeof b && b.length ? a.src = b : (a.src = (this.dil.constants.IS_HTTPS ?
              "https:" : "http:") + "//stags.peer39.net/" + this.aid + "/trg_" + this.aid + ".js", "string" === typeof c && c.length && (a.src += "?" + c));
          return a
      },
      submit: function() {
          try {
              return "" !== this.errorMessage ? this.errorMessage : this.constructSignals()
          } catch (a) {
              return this.handle(a, "DIL.modules.Peer39.submit() caught error with message ", this.dil)
          }
      }
  };

  var _scObj = s_gi(s_account);
  var telDil = DIL.create({
      partner: "telstra",
      uuidCookie: {
          name: 'aam_uuid',
          days: 30
      },
      visitorService: {
          namespace: "98DC73AE52E13F1E0A490D4C@AdobeOrg"
      }
  });
  DIL.modules.siteCatalyst.init(_scObj, telDil, {
      names: ['pageName', 'channel', 'campaign', 'products', 'events', 'pe', 'referrer', 'server', 'purchaseID', 'zip', 'state'],
      iteratedNames: [{
          name: 'eVar',
          maxIndex: 75
      }, {
          name: 'prop',
          maxIndex: 75
      }, {
          name: 'pev',
          maxIndex: 3
      }, {
          name: 'hier',
          maxIndex: 4
      }]
  });


  s.crossVisitParticipation = new Function("v", "cn", "ex", "ct", "dl", "ev", "dv", "" +
      "var s=this,ce;if(typeof(dv)==='undefined')dv=0;if(s.events&&ev){var" +
      " ay=s.split(ev,',');var ea=s.split(s.events,',');for(var u=0;u<ay.l" +
      "ength;u++){for(var x=0;x<ea.length;x++){if(ay[u]==ea[x]){ce=1;}}}}i" +
      "f(!v||v==''){if(ce){s.c_w(cn,'');return'';}else return'';}v=escape(" +
      "v);var arry=new Array(),a=new Array(),c=s.c_r(cn),g=0,h=new Array()" +
      ";if(c&&c!=''){arry=s.split(c,'],[');for(q=0;q<arry.length;q++){z=ar" +
      "ry[q];z=s.repl(z,'[','');z=s.repl(z,']','');z=s.repl(z,\"'\",'');arry" +
      "[q]=s.split(z,',')}}var e=new Date();e.setFullYear(e.getFullYear()+" +
      "5);if(dv==0&&arry.length>0&&arry[arry.length-1][0]==v)arry[arry.len" +
      "gth-1]=[v,new Date().getTime()];else arry[arry.length]=[v,new Date(" +
      ").getTime()];var start=arry.length-ct<0?0:arry.length-ct;var td=new" +
      " Date();for(var x=start;x<arry.length;x++){var diff=Math.round((td." +
      "getTime()-arry[x][1])/86400000);if(diff<ex){h[g]=unescape(arry[x][0" +
      "]);a[g]=[arry[x][0],arry[x][1]];g++;}}var data=s.join(a,{delim:','," +
      "front:'[',back:']',wrap:\"'\"});s.c_w(cn,data,e);var r=s.join(h,{deli" +
      "m:dl});if(ce)s.c_w(cn,'');return r;");
  s.repl = new Function("x", "o", "n", "" +
      "var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x." +
      "substring(i+o.length);i=x.indexOf(o,i+l)}return x");
  s.trackTNT = new Function("v", "p", "b", "" +
      "var s=this,n='s_tnt',p=p?p:n,v=v?v:n,r='',pm=false,b=b?b:true;if(s." +
      "getQueryParam){pm=s.getQueryParam(p);}if(pm){r+=(pm+',');}if(s.wd[v" +
      "]!=undefined){r+=s.wd[v];}if(b){s.wd[v]='';}return r;");
  s.getPreviousValue = new Function("v", "c", "el", "" +
      "var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el" +
      "){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i" +
      "){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)" +
      ":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?" +
      "s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");
  s.split = new Function("l", "d", "" +
      "var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x" +
      "++]=l.substring(0,i);l=l.substring(i+d.length);}return a");
  s.getNewRepeat = new Function("d", "cn", "" +
      "var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:" +
      "'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length=" +
      "=0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct" +
      "-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'N" +
      "ew';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}");
  s.getTimeParting = new Function("t", "z", "y", "l", "" +
      "var s=this,d,A,U,X,Z,W,B,C,D,Y;d=new Date();A=d.getFullYear();Y=U=S" +
      "tring(A);if(s.dstStart&&s.dstEnd){B=s.dstStart;C=s.dstEnd}else{;U=U" +
      ".substring(2,4);X='090801|101407|111306|121104|131003|140902|150801" +
      "|161306|171205|181104|191003';X=s.split(X,'|');for(W=0;W<=10;W++){Z" +
      "=X[W].substring(0,2);if(U==Z){B=X[W].substring(2,4);C=X[W].substrin" +
      "g(4,6)}}if(!B||!C){B='08';C='01'}B='03/'+B+'/'+A;C='11/'+C+'/'+A;}D" +
      "=new Date('1/1/2000');if(D.getDay()!=6||D.getMonth()!=0){return'Dat" +
      "a Not Available'}else{z=z?z:'0';z=parseFloat(z);B=new Date(B);C=new" +
      " Date(C);W=new Date();if(W>B&&W<C&&l!='0'){z=z+1}W=W.getTime()+(W.g" +
      "etTimezoneOffset()*60000);W=new Date(W+(3600000*z));X=['Sunday','Mo" +
      "nday','Tuesday','Wednesday','Thursday','Friday','Saturday'];B=W.get" +
      "Hours();C=W.getMinutes();D=W.getDay();Z=X[D];U='AM';A='Weekday';X='" +
      "00';if(C>30){X='30'}if(B>=12){U='PM';B=B-12};if(B==0){B=12};if(D==6" +
      "||D==0){A='Weekend'}W=B+':'+X+U;if(y&&y!=Y){return'Data Not Availab" +
      "le'}else{if(t){if(t=='h'){return W}if(t=='d'){return Z}if(t=='w'){r" +
      "eturn A}}else{return Z+', '+W}}}");
  s.clickThruQuality = new Function("scp", "tcth_ev", "cp_ev", "cff_ev", "cf_th", "" +
      "var s=this;if(s.p_fo('clickThruQuality')==1){var ev=s.events?s.even" +
      "ts+',':'';if(s.getQueryParam&&s.getQueryParam(scp)){s.events=ev+tct" +
      "h_ev;if(s.c_r('cf')){var tct=parseInt(s.c_r('cf'))+1;s.c_w('cf',tct" +
      ",0);if(tct==cf_th&&cff_ev){s.events=s.events+','+cff_ev;}}else {s.c" +
      "_w('cf',1,0);}}else {if(s.c_r('cf')>=1){s.c_w('cf',0,0);s.events=ev" +
      "+cp_ev;}}}");
  s.p_fo = new Function("n", "" +
      "var s=this;if(!s.__fo){s.__fo=new Object;}if(!s.__fo[n]){s.__fo[n]=" +
      "new Object;return 1;}else {return 0;}");
  s.join = new Function("v", "p", "" +
      "var s = this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back" +
      ":'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0" +
      ";x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);el" +
      "se str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");
  s.apl = new Function("L", "v", "d", "u", "" +
      "var s=this,m=0;if(!L)L='';if(u){var i,n,a=s.split(L,d);for(i=0;i<a." +
      "length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas" +
      "e()));}}if(!m)L=L?L+d+v:v;return L");
  s.getQueryParam = new Function("p", "d", "u", "" +
      "var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.locati" +
      "on);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p" +
      ".length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t){t=t.indexOf('#')>-" +
      "1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substring(i=" +
      "=p.length?i:i+1)}return v");
  s.p_gpv = new Function("k", "u", "" +
      "var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v" +
      "=s.pt(q,'&','p_gvf',k)}return v");
  s.p_gvf = new Function("t", "k", "" +
      "if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T" +
      "rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s." +
      "epa(v)}return ''");
  s.getValOnce = new Function("v", "c", "e", "" +
      "var s=this,a=new Date,v=v?v:v='',c=c?c:c='s_gvo',e=e?e:0,k=s.c_r(c" +
      ");if(v){a.setTime(a.getTime()+e*86400000);s.c_w(c,v,e?a:0);}return" +
      " v==k?'':v");
  s.manageQueryParam = new Function("p", "w", "e", "u", "" +
      "var s=this,x,y,i,qs,qp,qv,f,b;u=u?u:(s.pageURL?s.pageURL:''+s.wd.lo" +
      "cation);u=u=='f'?''+s.gtfs().location:u+'';x=u.indexOf('?');qs=x>-1" +
      "?u.substring(x,u.length):'';u=x>-1?u.substring(0,x):u;x=qs.indexOf(" +
      "'?'+p+'=');if(x>-1){y=qs.indexOf('&');f='';if(y>-1){qp=qs.substring" +
      "(x+1,y);b=qs.substring(y+1,qs.length);}else{qp=qs.substring(1,qs.le" +
      "ngth);b='';}}else{x=qs.indexOf('&'+p+'=');if(x>-1){f=qs.substring(1" +
      ",x);b=qs.substring(x+1,qs.length);y=b.indexOf('&');if(y>-1){qp=b.su" +
      "bstring(0,y);b=b.substring(y,b.length);}else{qp=b;b='';}}}if(e&&qp)" +
      "{y=qp.indexOf('=');qv=y>-1?qp.substring(y+1,qp.length):'';var eui=0" +
      ";while(qv.indexOf('%25')>-1){qv=unescape(qv);eui++;if(eui==10)break" +
      ";}qv=s.rep(qv,'+',' ');qv=escape(qv);qv=s.rep(qv,'%25','%');qv=s.re" +
      "p(qv,'%7C','|');qv=s.rep(qv,'%7c','|');qp=qp.substring(0,y+1)+qv;}i" +
      "f(w&&qp){if(f)qs='?'+qp+'&'+f+b;else if(b)qs='?'+qp+'&'+b;else qs='" +
      "?'+qp}else if(f)qs='?'+f+'&'+qp+b;else if(b)qs='?'+qp+'&'+b;else if" +
      "(qp)qs='?'+qp;return u+qs;");
  s.m_i("Integrate");
  s.manageVars = new Function("c", "l", "f", "" +
      "var s=this,vl,la,vla;l=l?l:'';f=f?f:1 ;if(!s[c])return false;vl='pa" +
      "geName,purchaseID,channel,server,pageType,campaign,state,zip,events" +
      ",products,transactionID';for(var n=1;n<51;n++){vl+=',prop'+n+',eVar" +
      "'+n+',hier'+n;}if(l&&(f==1||f==2)){if(f==1){vl=l;}if(f==2){la=s.spl" +
      "it(l,',');vla=s.split(vl,',');vl='';for(x in la){for(y in vla){if(l" +
      "a[x]==vla[y]){vla[y]='';}}}for(y in vla){vl+=vla[y]?','+vla[y]:'';}" +
      "}s.pt(vl,',',c,0);return true;}else if(l==''&&f==1){s.pt(vl,',',c,0" +
      ");return true;}else{return false;}");
  s.clearVars = new Function("t", "var s=this;s[t]='';");
  s.lowercaseVars = new Function("t", "" +
      "var s=this;if(s[t]){s[t]=s[t].toString();s[t]=s[t].toLowerCase();}");
  s.getVisitStart = new Function("c", "" +
      "var s=this,n,t=new Date;if(typeof s.callType=='function'&&s.callTyp" +
      "e()=='+')return 0;if(!c)c='s_visit';t.setTime(t.getTime()+18e5);n=s" +
      ".c_r(c)?0:1;if(!s.c_w(c,1,t))s.c_w(c,1,0);if(!s.c_r(c))n=0;return n");
  s.getPercentPageViewed = new Function("n", "" +
      "var s=this,W=window,EL=W.addEventListener,AE=W.attachEvent,E=['load" +
      "','unload','scroll','resize','zoom','keyup','mouseup','touchend','o" +
      "rientationchange','pan'];W.s_Obj=s;s_PPVid=(n=='-'?s.pageName:n)||s" +
      ".pageName||location.href;if(!W.s_PPVevent){s.s_PPVg=function(n,r){v" +
      "ar k='s_ppv',p=k+'l',c=s.c_r(n||r?k:p),a=c.indexOf(',')>-1?c.split(" +
      "',',10):[''],l=a.length,i;a[0]=unescape(a[0]);r=r||(n&&n!=a[0])||0;" +
      "a.length=10;if(typeof a[0]!='string')a[0]='';for(i=1;i<10;i++)a[i]=" +
      "!r&&i<l?parseInt(a[i])||0:0;if(l<10||typeof a[9]!='string')a[9]='';" +
      "if(r){s.c_w(p,c);s.c_w(k,'?')}return a};W.s_PPVevent=function(e){va" +
      "r W=window,D=document,B=D.body,E=D.documentElement,S=window.screen|" +
      "|0,Ho='offsetHeight',Hs='scrollHeight',Ts='scrollTop',Wc='clientWid" +
      "th',Hc='clientHeight',C=100,M=Math,J='object',N='number',s=W.s_Obj|" +
      "|W.s||0;e=e&&typeof e==J?e.type||'':'';if(!e.indexOf('on'))e=e.subs" +
      "tring(2);s_PPVi=W.s_PPVi||0;if(W.s_PPVt&&!e){clearTimeout(s_PPVt);s" +
      "_PPVt=0;if(s_PPVi<2)s_PPVi++}if(typeof s==J){var h=M.max(B[Hs]||E[H" +
      "s],B[Ho]||E[Ho],B[Hc]||E[Hc]),X=W.innerWidth||E[Wc]||B[Wc]||0,Y=W.i" +
      "nnerHeight||E[Hc]||B[Hc]||0,x=S?S.width:0,y=S?S.height:0,r=M.round(" +
      "C*(W.devicePixelRatio||1))/C,b=(D.pageYOffset||E[Ts]||B[Ts]||0)+Y,p" +
      "=h>0&&b>0?M.round(C*b/h):0,O=W.orientation,o=!isNaN(O)?M.abs(o)%180" +
      ":Y>X?0:90,L=e=='load'||s_PPVi<1,a=s.s_PPVg(s_PPVid,L),V=function(i," +
      "v,f,n){i=parseInt(typeof a==J&&a.length>i?a[i]:'0')||0;v=typeof v!=" +
      "N?i:v;v=f||v>i?v:i;return n?v:v>C?C:v<0?0:v};if(new RegExp('(iPod|i" +
      "Pad|iPhone)').exec(navigator.userAgent||'')&&o){o=x;x=y;y=o}o=o?'P'" +
      ":'L';a[9]=L?'':a[9].substring(0,1);s.c_w('s_ppv',escape(W.s_PPVid)+" +
      "','+V(1,p,L)+','+(L||!V(2)?p:V(2))+','+V(3,b,L,1)+','+X+','+Y+','+x" +
      "+','+y+','+r+','+a[9]+(a[9]==o?'':o))}if(!W.s_PPVt&&e!='unload')W.s" +
      "_PPVt=setTimeout(W.s_PPVevent,333)};for(var f=W.s_PPVevent,i=0;i<E." +
      "length;i++)if(EL)EL(E[i],f,false);else if(AE)AE('on'+E[i],f);f()};v" +
      "ar a=s.s_PPVg();return!n||n=='-'?a[1]:a");
  /************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
  /* SiteCatalyst code version: H.27.5.
  Copyright 1996-2014 Adobe, Inc. All Rights Reserved
  More info available at http://www.omniture.com */
  var s_code = '',
      s_objectID;

  function s_gi(un, pg, ss) {
      var c = "s.version='H.27.5';s.an=s_an;s.logDebug=function(m){var s=this,tcf=new Function('var e;try{console.log(\"'+s.rep(s.rep(s.rep(m,\"\\\\\",\"\\\\" +
          "\\\\\"),\"\\n\",\"\\\\n\"),\"\\\"\",\"\\\\\\\"\")+'\");}catch(e){}');tcf()};s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}retur" +
          "n y};s.fl=function(x,l){return x?(''+x).substring(0,l):x};s.co=function(o){return o};s.num=function(x){x=''+x;for(var p=0;p<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;ret" +
          "urn 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',f=\"+~!*()'\",i,c=s.charSet,n,l,e,y='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3){x=encodeURIComponent(" +
          "x);for(i=0;i<f.length;i++) {n=f.substring(i,i+1);if(x.indexOf(n)>=0)x=s.rep(x,n,\"%\"+n.charCodeAt(0).toString(16).toUpperCase())}}else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.su" +
          "bstring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}x=y}else x=s.rep(escape(''+x),'+" +
          "','%2B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00" +
          "'+x.substring(i);i=x.indexOf('%',i)}}}return x};s.epa=function(x){var s=this,y,tcf;if(x){x=s.rep(''+x,'+',' ');if(s.em==3){tcf=new Function('x','var y,e;try{y=decodeURIComponent(x)}catch(e){y=unesc" +
          "ape(x)}return y');return tcf(x)}else return unescape(x)}return y};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r" +
          ";z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);c=a.indexOf('=');if(c>=0)a=a.substring(0,c);if(t.substring(" +
          "0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var s=this;s.fsg='';s.pt(x,',','fsf'" +
          ",f);return s.fsg};s.mpc=function(m,a){var s=this,c,l,n,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(v&&v=='prerender'){if(!s.mpq){s.mpq=new Array;l=s.sp('webkitvisibilitychange,visi" +
          "bilitychange',',');for(n=0;n<l.length;n++){s.d.addEventListener(l[n],new Function('var s=s_c_il['+s._in+'],c,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(s.mpq&&v==\"visible\"){whil" +
          "e(s.mpq.length>0){c=s.mpq.shift();s[c.m].apply(s,c.a)}s.mpq=0}'),false)}}c=new Object;c.m=m;c.a=a;s.mpq.push(c);return 1}return 0};s.si=function(){var s=this,i,k,v,c=s_gi+'var s=s_gi(\"'+s.oun+'\")" +
          ";s.sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=undefined){if(typeof(v)!='number')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'}}c+=\"s.lnk=s.eo=s.linkName=s.li" +
          "nkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.location.hostnam" +
          "e,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?parseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'" +
          ".','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.ape(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length,e<" +
          "0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-6" +
          "0);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':''" +
          ");return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s._in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i" +
          ";l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv>=5&&(!s.isopera||s.apv>=7)){tc" +
          "f=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,'onerror',0,o);r=s[f](a);s.eh(s" +
          ".wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfsoe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s.t();if(c)s.d.write(c);s.etfs=0" +
          ";return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=this,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return " +
          "s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,l=s.rl[u],n,r;s.rl[u]=0;if(l)fo" +
          "r(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,r.t,r.u)}};s.flushBufferedRequests=function(){};s.tagContainerMarker='';s.mr=function(sess,q,rs,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingS" +
          "erverSecure,tb=s.trackingServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Object,l,imn='s_i_'+s._in+'_'+un,im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net" +
          "';if(dc)dc=(''+dc).toLowerCase();else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobi" +
          "le?'5.1':'1')+'/'+s.version+(s.tcn?'T':'')+(s.tagContainerMarker?\"-\"+s.tagContainerMarker:\"\")+'/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl(rs,2047)}if(s.d.images&&s.apv" +
          ">=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if(!s.rc[un]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+" +
          "'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]=r;return ''}imn+='_'+s.rc[un];s.rc[un]++}if(s.debugTracking){var d='AppMeasurement Debug: '+rs,dl=s.sp(rs,'&'),dln;fo" +
          "r(dln=0;dln<dl.length;dln++)d+=\"\\n\\t\"+s.epa(dl[dln]);s.logDebug(d)}im=s.wd[imn];if(!im)im=s.wd[imn]=new Image;im.alt=\"\";im.s_l=0;im.onload=im.onerror=new Function('e','this.s_l=1;var wd=windo" +
          "w,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.bcr();s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if(!s.nrs){s.nrs=1;s.m_m('rs')}else s.nrs++;im.src=rs;if(s.useForcedLinkTracking||s.bcf){if(!s." +
          "forcedLinkTrackingTimeout)s.forcedLinkTrackingTimeout=250;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'].bcr()',s.forcedLinkTrackingTimeout);}else if((s.lnk||s.eo)&&(!ta||ta=='_self'||ta=='_" +
          "top'||ta=='_parent'||(s.wd.name&&ta==s.wd.name))){b=e=new Date;while(!im.s_l&&e.getTime()-b.getTime()<500)e=new Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'" +
          "};s.gg=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf=function(t,a){if(t.substring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v)" +
          "{var s=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,p,l=0,q,a,b='',c='',t;if(x&&x.length>255){y=''+x;i=y.indexOf('?');if(i>0){q=y.substring(i+1);y=y.substring(0,i);h=y.toLo" +
          "werCase();j=0;if(h.substring(0,7)=='http://')j+=7;else if(h.substring(0,8)=='https://')j+=8;i=h.indexOf(\"/\",j);if(i>0){h=h.substring(j,i);p=y.substring(i);y=y.substring(0,i);if(h.indexOf('google'" +
          ")>=0)l=',q,ie,start,search_key,word,kw,cd,';else if(h.indexOf('yahoo.co')>=0)l=',p,ei,';if(l&&q){a=s.sp(q,'&');if(a&&a.length>1){for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf('," +
          "'+t.substring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c)q=b+'&'+c;else c=''}i=253-(q.length-c.length)-y.length;x=y+(i>0?p.substring(0,i):'')+'?'+q}}}}return x};s.s2q=function(k,v,vf" +
          ",vfp,f){var s=this,qs='',sk,sv,sp,ss,nke,nk,nf,nfl=0,nfn,nfm;if(k==\"contextData\")k=\"c\";if(v){for(sk in v)if((!f||sk.substring(0,f.length)==f)&&v[sk]&&(!vf||vf.indexOf(','+(vfp?vfp+'.':'')+sk+'," +
          "')>=0)&&(!Object||!Object.prototype||!Object.prototype[sk])){nfm=0;if(nfl)for(nfn=0;nfn<nfl.length;nfn++)if(sk.substring(0,nfl[nfn].length)==nfl[nfn])nfm=1;if(!nfm){if(qs=='')qs+='&'+k+'.';sv=v[sk]" +
          ";if(f)sk=sk.substring(f.length);if(sk.length>0){nke=sk.indexOf('.');if(nke>0){nk=sk.substring(0,nke);nf=(f?f:'')+nk+'.';if(!nfl)nfl=new Array;nfl[nfl.length]=nf;qs+=s.s2q(nk,v,vf,vfp,nf)}else{if(ty" +
          "peof(sv)=='boolean'){if(sv)sv='true';else sv='false'}if(sv){if(vfp=='retrieveLightData'&&f.indexOf('.contextData.')<0){sp=sk.substring(0,4);ss=sk.substring(4);if(sk=='transactionID')sk='xact';else " +
          "if(sk=='channel')sk='ch';else if(sk=='campaign')sk='v0';else if(s.num(ss)){if(sp=='prop')sk='c'+ss;else if(sp=='eVar')sk='v'+ss;else if(sp=='list')sk='l'+ss;else if(sp=='hier'){sk='h'+ss;sv=sv.subs" +
          "tring(0,255)}}}qs+='&'+s.ape(sk)+'='+s.ape(sv)}}}}}if(qs!='')qs+='&.'+k}return qs};s.hav=function(){var s=this,qs='',l,fv='',fe='',mn,i,e;if(s.lightProfileID){l=s.va_m;fv=s.lightTrackVars;if(fv)fv=" +
          "','+fv+','+s.vl_mr+','}else{l=s.va_t;if(s.pe||s.linkType){fv=s.linkTrackVars;fe=s.linkTrackEvents;if(s.pe){mn=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[m" +
          "n].trackEvents}}}if(fv)fv=','+fv+','+s.vl_l+','+s.vl_l2;if(fe){fe=','+fe+',';if(fv)fv+=',events,'}if (s.events2)e=(e?',':'')+s.events2}for(i=0;i<l.length;i++){var k=l[i],v=s[k],b=k.substring(0,4),x" +
          "=k.substring(4),n=parseInt(x),q=k;if(!v)if(k=='events'&&e){v=e;e=''}if(v&&(!fv||fv.indexOf(','+k+',')>=0)&&k!='linkName'&&k!='linkType'){if(k=='supplementalDataID')q='sdid';else if(k=='timestamp')q" +
          "='ts';else if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='marketingCloudVisitorID')q='mid';else if(k=='analyticsVisitorID')q='aid';else if(k=='audienceManagerLocatio" +
          "nHint')q='aamlh';else if(k=='audienceManagerBlob')q='aamb';else if(k=='authState')q='as';else if(k=='pageURL'){q='g';if(v.length>255){s.pageURLRest=v.substring(255);v=v.substring(0,255);}}else if(k" +
          "=='pageURLRest')q='-g';else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationServer'){q='vmf';if(s.ssl&&s.visitorMigrationS" +
          "erverSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase()=='AUTO')v='ISO8859-1';else if(s.em==2||s" +
          ".em==3)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProvider')q='vvp';else if(k=='currencyCode')q='" +
          "cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDepth')q='c';else if(k=='javascriptVersion')q='j';els" +
          "e if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionType')q='ct';else if(k=='homepage')q='hp';else" +
          " if(k=='plugins')q='p';else if(k=='events'){if(e)v+=(v?',':'')+e;if(fe)v=s.fs(v,fe)}else if(k=='events2')v='';else if(k=='contextData'){qs+=s.s2q('c',s[k],fv,k,0);v=''}else if(k=='lightProfileID')q" +
          "='mtp';else if(k=='lightStoreForSeconds'){q='mtss';if(!s.lightProfileID)v=''}else if(k=='lightIncrementBy'){q='mti';if(!s.lightProfileID)v=''}else if(k=='retrieveLightProfiles')q='mtsr';else if(k==" +
          "'deleteLightProfiles')q='mtsd';else if(k=='retrieveLightData'){if(s.retrieveLightProfiles)qs+=s.s2q('mts',s[k],fv,k,0);v=''}else if(s.num(x)){if(b=='prop')q='c'+n;else if(b=='eVar')q='v'+n;else if(" +
          "b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+s.ape(q)+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}return qs};s.ltdf=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase(" +
          "):'';var qi=h.indexOf('?'),hi=h.indexOf('#');if(qi>=0){if(hi>=0&&hi<qi)qi=hi;}else qi=hi;h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;return 0};s.ltef=functi" +
          "on(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkInternalFi" +
          "lters;lif=lif?lif:s.wd.location.hostname;h=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.indexOf('#')!=0&&h.indexOf('about:')!=0&&h.inde" +
          "xOf('javascript:')!=0&&(lef||lif)&&(!lef||s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Function('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.ln" +
          "k=this;s.t();s.lnk=0;if(b)return this[b](e);return true');s.bcr=function(){var s=this;if(s.bct&&s.bce)s.bct.dispatchEvent(s.bce);if(s.bcf){if(typeof(s.bcf)=='function')s.bcf();else if(s.bct&&s.bct." +
          "href)s.d.location=s.bct.href}s.bct=s.bce=s.bcf=0};s.bc=new Function('e','if(e&&e.s_fe)return;var s=s_c_il['+s._in+'],f,tcf,t,n,nrs,a,h;if(s.d&&s.d.all&&s.d.all.cppXYctnr)return;if(!s.bbc)s.useForce" +
          "dLinkTracking=0;else if(!s.useForcedLinkTracking){s.b.removeEventListener(\"click\",s.bc,true);s.bbc=s.useForcedLinkTracking=0;return}else s.b.removeEventListener(\"click\",s.bc,false);s.eo=e.srcEl" +
          "ement?e.srcElement:e.target;nrs=s.nrs;s.t();s.eo=0;if(s.nrs>nrs&&s.useForcedLinkTracking&&e.target){a=e.target;while(a&&a!=s.b&&a.tagName.toUpperCase()!=\"A\"&&a.tagName.toUpperCase()!=\"AREA\")a=a" +
          ".parentNode;if(a){h=a.href;if(h.indexOf(\"#\")==0||h.indexOf(\"about:\")==0||h.indexOf(\"javascript:\")==0)h=0;t=a.target;if(e.target.dispatchEvent&&h&&(!t||t==\"_self\"||t==\"_top\"||t==\"_parent" +
          "\"||(s.wd.name&&t==s.wd.name))){tcf=new Function(\"s\",\"var x;try{n=s.d.createEvent(\\\\\"MouseEvents\\\\\")}catch(x){n=new MouseEvent}return n\");n=tcf(s);if(n){tcf=new Function(\"n\",\"e\",\"var" +
          " x;try{n.initMouseEvent(\\\\\"click\\\\\",e.bubbles,e.cancelable,e.view,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget)}catch(x){n" +
          "=0}return n\");n=tcf(n,e);if(n){n.s_fe=1;e.stopPropagation();if (e.stopImmediatePropagation) {e.stopImmediatePropagation();}e.preventDefault();s.bct=e.target;s.bce=n}}}}}');s.oh=function(o){var s=t" +
          "his,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h.indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&&o.protocol.length>1?o.protocol:(l.protocol?l.p" +
          "rotocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.host:''))+(h.substring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/':'')+h}return h};s.ot=function(o){var t=o.tagN" +
          "ame;if(o.tagUrn||(o.scopeName&&o.scopeName.toUpperCase()!='HTML'))return '';t=t&&t.toUpperCase?t.toUpperCase():'';if(t=='SHAPE')t='';if(t){if((t=='INPUT'||t=='BUTTON')&&o.type&&o.type.toUpperCase)t" +
          "=o.type.toUpperCase();else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p=o.protocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toL" +
          "owerCase().indexOf('javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');x=2}else if(t=='INPUT'||t=='SUBMIT'){if(o.value)n=o.value;else if" +
          "(o.innerText)n=o.innerText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100);o.s_oidt=x}}return o.s_oid};s.rqf=function(t,un){var s=this,e=t.inde" +
          "xOf('='),u=e>=0?t.substring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u+',').indexOf(','+un+',')>=0){if(u!=s.un&&s.un.indexOf(',')>=0)q='&u='+u+q+'&u=0';return q}return ''};s.rq=funct" +
          "ion(un){if(!un)un=this.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf',un);return s.pt(un,',','rq',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('='),q=e<0?'':s" +
          ".epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=function(un,q){var s=this;s.squ[un]=q;return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s" +
          ".sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]" +
          "]?',':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Function('e','var " +
          "s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++){o=s.d.links[i];oc=o.onclick?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0||oc.indexOf(" +
          "\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s=this;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachEvent('onclic" +
          "k',s.bc);else if(s.b&&s.b.addEventListener){if(s.n&&((s.n.userAgent.indexOf('WebKit')>=0&&s.d.createEvent)||(s.n.userAgent.indexOf('Firefox/2')>=0&&s.wd.MouseEvent))){s.bbc=1;s.useForcedLinkTrackin" +
          "g=1;s.b.addEventListener('click',s.bc,true)}s.b.addEventListener('click',s.bc,false)}else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=function(x){var s=this,v=s.visitorSampling,g=s.visitorSamplingGroup,k='s" +
          "_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e))return 0;n=x}if(n%10000>v)return 0}return 1};s.dyasmf=function(t,m)" +
          "{if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.substring(0,i),x=t.substring(i+1);if(s.pt(x,',','dyasmf',m))return n}retu" +
          "rn 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowerCase();if(x&&l){if(!m)m=s.wd.location.host;if(!m.toLowerCase)m=''+m" +
          ";l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};s.sa=function(un){var s=this;if(s.un&&s.mpc('sa',arguments))return;s" +
          ".un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substring(0,1),r,l,i;if(!s.m_l)s.m_l=new Object;if(!s.m_nl)s.m_nl" +
          "=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in++;m.s=s;m._n=n;m._l=new Array('_c','_in','_il','_i','_e'" +
          ",'_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l=m._l;for(i=0;i<l.length;i++)if(m[l[i]])r[l[i]]=m[" +
          "l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._in+'],c=s[g+\"_c\"],m,x,f=0;if(s.mpc(\"m_a\",arguments))r" +
          "eturn;if(!c)c=s.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if(x&&(!m._i||g!=\"m_\"+n)){m._i=f=1;if((\"\"+x).ind" +
          "exOf(\"function\")>=0)x(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,i,x,m,f='_'+t,r=0,u;if(s.m_l&&s.m_nl)for(i=0;i<s." +
          "m_nl.length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]){if((''+u).i" +
          "ndexOf('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl,i,o;if(g)for(i=0;i<g.length;i++){o=g[i];if(o)s.l" +
          "oadModule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':');if(i>=0){g=n.substring(i+1);n=n.substring(0,i)}" +
          "else g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');i='s_s:'+s._in+':'+n+':'+g;b='var s=s_c_il['+s._i" +
          "n+'],o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'')+')}';f2=b+'o.c++;if(!s.maxDelay)s.maxDelay=250" +
          ";if(!o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s.d.createElement(\"script\");if(o){o.type=\"text/" +
          "javascript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,100)':'')+'}}catch(e){o=0}return o');o=tcf(s,c,i," +
          "u,f1,f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m=s.m_i(n);m._e=1}return m};s.voa=function(vo,r){v" +
          "ar s=this,l=s.va_g,i,k,v,x;for(i=0;i<l.length;i++){k=l[i];v=vo[k];if(v||vo['!'+k]){if(!r&&(k==\"contextData\"||k==\"retrieveLightData\")&&s[k])for(x in s[k])if(!v[x])v[x]=s[k][x];s[k]=v}}};s.vob=fu" +
          "nction(vo,onlySet){var s=this,l=s.va_g,i,k;for(i=0;i<l.length;i++){k=l[i];vo[k]=s[k];if(!onlySet&&!vo[k])vo['!'+k]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=new Date,i,vo,f=0;if(s.dll)for(i" +
          "=0;i<s.dll.length;i++){vo=s.dll[i];if(vo){if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if(!s.dli)s.dli=setTimeout(s.dlt,s" +
          ".maxDelay)}else s.dll=0');s.dl=function(vo){var s=this,d=new Date;if(!vo)vo=new Object;s.vob(vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if(!s.maxDelay)s.maxDelay=250;s.d" +
          "lt()};s._waitingForMarketingCloudVisitorID = false;s._doneWaitingForMarketingCloudVisitorID = false;s._marketingCloudVisitorIDCallback=function(marketingCloudVisitorID) {var s=this;s.marketingCloud" +
          "VisitorID = marketingCloudVisitorID;s._doneWaitingForMarketingCloudVisitorID = true;s._callbackWhenReadyToTrackCheck();};s._waitingForAnalyticsVisitorID = false;s._doneWaitingForAnalyticsVisitorID " +
          "= false;s._analyticsVisitorIDCallback=function(analyticsVisitorID) {var s=this;s.analyticsVisitorID = analyticsVisitorID;s._doneWaitingForAnalyticsVisitorID = true;s._callbackWhenReadyToTrackCheck(" +
          ");};s._waitingForAudienceManagerLocationHint = false;s._doneWaitingForAudienceManagerLocationHint = false;s._audienceManagerLocationHintCallback=function(audienceManagerLocationHint) {var s=this;s." +
          "audienceManagerLocationHint = audienceManagerLocationHint;s._doneWaitingForAudienceManagerLocationHint = true;s._callbackWhenReadyToTrackCheck();};s._waitingForAudienceManagerBlob = false;s._doneWa" +
          "itingForAudienceManagerBlob = false;s._audienceManagerBlobCallback=function(audienceManagerBlob) {var s=this;s.audienceManagerBlob = audienceManagerBlob;s._doneWaitingForAudienceManagerBlob = true;" +
          "s._callbackWhenReadyToTrackCheck();};s.isReadyToTrack=function() {var s=this,readyToTrack = true,visitor = s.visitor;if ((visitor) && (visitor.isAllowed())) {if ((!s._waitingForMarketingCloudVisito" +
          "rID) && (!s.marketingCloudVisitorID) && (visitor.getMarketingCloudVisitorID)) {s._waitingForMarketingCloudVisitorID = true;s.marketingCloudVisitorID = visitor.getMarketingCloudVisitorID([s,s._marke" +
          "tingCloudVisitorIDCallback]);if (s.marketingCloudVisitorID) {s._doneWaitingForMarketingCloudVisitorID = true;}}if ((!s._waitingForAnalyticsVisitorID) && (!s.analyticsVisitorID) && (visitor.getAnaly" +
          "ticsVisitorID)) {s._waitingForAnalyticsVisitorID = true;s.analyticsVisitorID = visitor.getAnalyticsVisitorID([s,s._analyticsVisitorIDCallback]);if (s.analyticsVisitorID) {s._doneWaitingForAnalytics" +
          "VisitorID = true;}}if ((!s._waitingForAudienceManagerLocationHint) && (!s.audienceManagerLocationHint) && (visitor.getAudienceManagerLocationHint)) {s._waitingForAudienceManagerLocationHint = true;" +
          "s.audienceManagerLocationHint = visitor.getAudienceManagerLocationHint([s,s._audienceManagerLocationHintCallback]);if (s.audienceManagerLocationHint) {s._doneWaitingForAudienceManagerLocationHint =" +
          " true;}}if ((!s._waitingForAudienceManagerBlob) && (!s.audienceManagerBlob) && (visitor.getAudienceManagerBlob)) {s._waitingForAudienceManagerBlob = true;s.audienceManagerBlob = visitor.getAudience" +
          "ManagerBlob([s,s._audienceManagerBlobCallback]);if (s.audienceManagerBlob) {s._doneWaitingForAudienceManagerBlob = true;}}if (((s._waitingForMarketingCloudVisitorID)     && (!s._doneWaitingForMarke" +
          "tingCloudVisitorID)     && (!s.marketingCloudVisitorID)) ||((s._waitingForAnalyticsVisitorID)          && (!s._doneWaitingForAnalyticsVisitorID)          && (!s.analyticsVisitorID)) ||((s._waitingF" +
          "orAudienceManagerLocationHint) && (!s._doneWaitingForAudienceManagerLocationHint) && (!s.audienceManagerLocationHint)) ||((s._waitingForAudienceManagerBlob)         && (!s._doneWaitingForAudienceMa" +
          "nagerBlob)         && (!s.audienceManagerBlob))) {readyToTrack = false;}}return readyToTrack;};s._callbackWhenReadyToTrackQueue = null;s._callbackWhenReadyToTrackInterval = 0;s.callbackWhenReadyToT" +
          "rack=function(callbackThis,callback,args) {var s=this,callbackInfo;callbackInfo = {};callbackInfo.callbackThis = callbackThis;callbackInfo.callback     = callback;callbackInfo.args         = args;i" +
          "f (s._callbackWhenReadyToTrackQueue == null) {s._callbackWhenReadyToTrackQueue = [];}s._callbackWhenReadyToTrackQueue.push(callbackInfo);if (s._callbackWhenReadyToTrackInterval == 0) {s._callbackWh" +
          "enReadyToTrackInterval = setInterval(s._callbackWhenReadyToTrackCheck,100);}};s._callbackWhenReadyToTrackCheck=new Function('var s=s_c_il['+s._in+'],callbackNum,callbackInfo;if (s.isReadyToTrack())" +
          " {if (s._callbackWhenReadyToTrackInterval) {clearInterval(s._callbackWhenReadyToTrackInterval);s._callbackWhenReadyToTrackInterval = 0;}if (s._callbackWhenReadyToTrackQueue != null) {while (s._call" +
          "backWhenReadyToTrackQueue.length > 0) {callbackInfo = s._callbackWhenReadyToTrackQueue.shift();callbackInfo.callback.apply(callbackInfo.callbackThis,callbackInfo.args);}}}');s._handleNotReadyToTrac" +
          "k=function(variableOverrides) {var s=this,args,varKey,variableOverridesCopy = null,setVariables = null;if (!s.isReadyToTrack()) {args = [];if (variableOverrides != null) {variableOverridesCopy = {}" +
          ";for (varKey in variableOverrides) {variableOverridesCopy[varKey] = variableOverrides[varKey];}}setVariables = {};s.vob(setVariables,true);args.push(variableOverridesCopy);args.push(setVariables);s" +
          ".callbackWhenReadyToTrack(s,s.track,args);return true;}return false;};s.gfid=function(){var s=this,d='0123456789ABCDEF',k='s_fid',fid=s.c_r(k),h='',l='',i,j,m=8,n=4,e=new Date,y;if(!fid||fid.indexO" +
          "f('-')<0){for(i=0;i<16;i++){j=Math.floor(Math.random()*m);h+=d.substring(j,j+1);j=Math.floor(Math.random()*n);l+=d.substring(j,j+1);m=n=16}fid=h+'-'+l;}y=e.getYear();e.setYear(y+2+(y<1900?1900:0));" +
          "if(!s.c_w(k,fid,e))fid=0;return fid};s.track=s.t=function(vo,setVariables){var s=this,notReadyToTrack,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime(),s" +
          "ess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.getYear(),vt=tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+tm.getDay()+' '" +
          "+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q='',qs='',code='',vb=new Object;if (s.visitor) {if (s.visitor.getAuthState) {s.authState = s.visitor.getAuthState();}if ((!s.supplementalDataID) && (" +
          "s.visitor.getSupplementalDataID)) {s.supplementalDataID = s.visitor.getSupplementalDataID(\"AppMeasurement:\" + s._in,(s.expectSupplementalData ? false : true));}}if(s.mpc('t',arguments))return;s.g" +
          "l(s.vl_g);s.uns();s.m_ll();notReadyToTrack = s._handleNotReadyToTrack(vo);if (!notReadyToTrack) {if (setVariables) {s.voa(setVariables);}if(!s.td){var tl=tfs.location,a,o,i,x='',c='',v='',p='',bw='" +
          "',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn=0,ps;if(String&&String.prototype){j='1.1';if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&s.apv>=5)j='1.4';if(pn.to" +
          "Precision){j='1.5';a=new Array;if(a.forEach){j='1.6';i=0;o=new Object;tcf=new Function('o','var e,i=0;try{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next){j='1.7';if(a.reduce){j='1.8';" +
          "if(j.trim){j='1.8.1';if(Date.parse){j='1.8.2';if(Object.create)j='1.8.5'}}}}}}}}}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaEnabled()?'Y':'N';if(s.apv" +
          ">=4){c=screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){bw=s.d.documentElement.of" +
          "fsetWidth;bh=s.d.documentElement.offsetHeight;if(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\":\"N\"}catch(e){}return h" +
          "p');hp=tcf(s,tl);tcf=new Function('s','var e,ct=0;try{s.b.addBehavior(\"#default#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)while(pn<s.pl.length&&pn<30)" +
          "{ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.browserHeight=bh;s.connectio" +
          "nType=ct;s.homepage=hp;s.plugins=p;s.td=1}if(vo){s.vob(vb);s.voa(vo)}if(!s.analyticsVisitorID&&!s.marketingCloudVisitorID)s.fid=s.gfid();if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);" +
          "if(!s.abort){var l=s.wd.location,r=tfs.document.referrer;if(!s.pageURL)s.pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer)s.referrer=r;s._1_referrer=1;s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s." +
          "eo:s.lnk,p=s.pageName,w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(o){t=s.ot(o);n=s.oid(o);x=o.s_oidt}}if" +
          "(!n||t=='BODY')o='';if(o){oc=o.onclick?''+o.onclick:'';if((oc.indexOf('s_gs(')>=0&&oc.indexOf('.s_oc(')<0)||oc.indexOf('.tl(')>=0)o=0}}if(o){if(n)ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLeav" +
          "eQueryString||i<0?h:h.substring(0,i);l=s.linkName;t=s.linkType?s.linkType.toLowerCase():s.lt(h);if(t&&(h||l)){s.pe='lnk_'+(t=='d'||t=='e'?t:'o');s.pev1=(h?s.ape(h):'');s.pev2=(l?s.ape(l):'')}else t" +
          "rk=0;if(s.trackInlineStats){if(!p){p=s.pageURL;w=0}t=s.ot(o);i=o.sourceIndex;if(o.dataset&&o.dataset.sObjectId){s.wd.s_objectID=o.dataset.sObjectId;}else if(o.getAttribute&&o.getAttribute('data-s-o" +
          "bject-id')){s.wd.s_objectID=o.getAttribute('data-s-object-id');}else if(s.useForcedLinkTracking){s.wd.s_objectID='';oc=o.onclick?''+o.onclick:'';if(oc){var ocb=oc.indexOf('s_objectID'),oce,ocq,ocx;" +
          "if(ocb>=0){ocb+=10;while(ocb<oc.length&&(\"= \\t\\r\\n\").indexOf(oc.charAt(ocb))>=0)ocb++;if(ocb<oc.length){oce=ocb;ocq=ocx=0;while(oce<oc.length&&(oc.charAt(oce)!=';'||ocq)){if(ocq){if(oc.charAt(" +
          "oce)==ocq&&!ocx)ocq=0;else if(oc.charAt(oce)==\"\\\\\")ocx=!ocx;else ocx=0;}else{ocq=oc.charAt(oce);if(ocq!='\"'&&ocq!=\"'\")ocq=0}oce++;}oc=oc.substring(ocb,oce);if(oc){o.s_soid=new Function('s','" +
          "var e;try{s.wd.s_objectID='+oc+'}catch(e){}');o.s_soid(s)}}}}}if(s.gg('objectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(" +
          "x?'&oidt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}else trk=0}if(trk||qs){s.sampled=s.vs(sed);if(trk){if(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,ta);qs='';s.m_m('" +
          "t');if(s.p_r)s.p_r();s.referrer=s.lightProfileID=s.retrieveLightProfiles=s.deleteLightProfiles=''}s.sq(qs)}}}else s.dl(vo);if(vo)s.voa(vb,1);}s.abort=0;s.supplementalDataID=s.pageURLRest=s.lnk=s.eo" +
          "=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s.wd.s_eo=s.wd.s_linkName=s.wd.s_linkType='';return code};s.trackLink=s.tl=function(o,t,n,vo,f){var s=th" +
          "is;s.lnk=o;s.linkType=t;s.linkName=n;if(f){s.bct=o;s.bcf=f}s.t(vo)};s.trackLight=function(p,ss,i,vo){var s=this;s.lightProfileID=p;s.lightStoreForSeconds=ss;s.lightIncrementBy=i;s.t(vo)};s.setTagCo" +
          "ntainer=function(n){var s=this,l=s.wd.s_c_il,i,t,x,y;s.tcn=n;if(l)for(i=0;i<l.length;i++){t=l[i];if(t&&t._c=='s_l'&&t.tagContainerName==n){s.voa(t);if(t.lmq)for(i=0;i<t.lmq.length;i++){x=t.lmq[i];y" +
          "='m_'+x.n;if(!s[y]&&!s[y+'_c']){s[y]=t[y];s[y+'_c']=t[y+'_c']}s.loadModule(x.n,x.u,x.d)}if(t.ml)for(x in t.ml)if(s[x]){y=s[x];x=t.ml[x];for(i in x)if(!Object.prototype[i]){if(typeof(x[i])!='functio" +
          "n'||(''+x[i]).indexOf('s_c_il')<0)y[i]=x[i]}}if(t.mmq)for(i=0;i<t.mmq.length;i++){x=t.mmq[i];if(s[x.m]){y=s[x.m];if(y[x.f]&&typeof(y[x.f])=='function'){if(x.a)y[x.f].apply(y,x.a);else y[x.f].apply(" +
          "y)}}}if(t.tq)for(i=0;i<t.tq.length;i++)s.t(t.tq[i]);t.s=s;return}}};s.wd=window;s.ssl=(s.wd.location.protocol.toLowerCase().indexOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagNam" +
          "e){s.h=s.d.getElementsByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netscape6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('O" +
          "pera '),i;if(v.indexOf('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Netscape');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseF" +
          "loat(s.u.substring(o+6));else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s.ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;i" +
          "f(s.em.toPrecision)s.em=3;else if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpperCase();s.em=(i=='%C4%80'?2:(i=='%U0100'?1:0))}if(s.oun)s.sa(s.oun);s.sa(un);s.vl_l='supplementalData" +
          "ID,timestamp,dynamicVariablePrefix,visitorID,marketingCloudVisitorID,analyticsVisitorID,audienceManagerLocationHint,fid,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationServerSecure,p" +
          "pu,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,contextData,currencyCode,lightProfileID,lightStoreForSeconds,lightIncrementBy,retrieveLightProfiles,deleteLi" +
          "ghtProfiles,retrieveLightData';s.va_l=s.sp(s.vl_l,',');s.vl_mr=s.vl_m='timestamp,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,contextData,lightProfileID,lightStoreForSeconds,lightInc" +
          "rementBy';s.vl_t=s.vl_l+',variableProvider,channel,server,pageType,transactionID,purchaseID,campaign,state,zip,events,events2,products,audienceManagerBlob,authState,linkName,linkType';var n;for(n=1" +
          ";n<=75;n++){s.vl_t+=',prop'+n+',eVar'+n;s.vl_m+=',prop'+n+',eVar'+n}for(n=1;n<=5;n++)s.vl_t+=',hier'+n;for(n=1;n<=3;n++)s.vl_t+=',list'+n;s.va_m=s.sp(s.vl_m,',');s.vl_l2=',tnt,pe,pev1,pev2,pev3,res" +
          "olution,colorDepth,javascriptVersion,javaEnabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage,pageURLRest,plugins';s.vl_t+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',track" +
          "ingServer,trackingServerSecure,trackingServerBase,fpCookieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dynamicAccountSelection,dynamicAccountList,dynamicAccount" +
          "Match,trackDownloadLinks,trackExternalLinks,trackInlineStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilters,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,lightT" +
          "rackVars,_1_referrer,un';s.va_g=s.sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);s.contextData=new Object;s.retrieveLightData=new Object;if(!ss)s.wds();if(pg){s.wd.s_co=function(o){return o};s.wd.s_gs=functio" +
          "n(un){s_gi(un,1,1).t()};s.wd.s_dc=function(un){s_gi(un,1).t()}}",
          w = window,
          l = w.s_c_il,
          n = navigator,
          u = n.userAgent,
          v = n.appVersion,
          e = v.indexOf('MSIE '),
          m = u.indexOf('Netscape6/'),
          a, i, j, x, s;
      if (un) {
          un = un.toLowerCase();
          if (l)
              for (j = 0; j < 2; j++)
                  for (i = 0; i < l.length; i++) {
                      s = l[i];
                      x = s._c;
                      if ((!x || x == 's_c' || (j > 0 && x == 's_l')) && (s.oun == un || (s.fs && s.sa && s.fs(s.oun, un)))) {
                          if (s.sa) s.sa(un);
                          if (x == 's_c') return s
                      } else s = 0
                  }
      }
      w.s_an = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      w.s_sp = new Function("x", "d", "var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.subst" +
          "ring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");
      w.s_jn = new Function("a", "d", "var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");
      w.s_rep = new Function("x", "o", "n", "return s_jn(s_sp(x,o),n)");
      w.s_d = new Function("x", "var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d" +
          "=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn(" +
          "x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");
      w.s_fe = new Function("c", "return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
      w.s_fa = new Function("f", "var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':" +
          "a");
      w.s_ft = new Function("c", "c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){i" +
          "f(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")" +
          "'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
      c = s_d(c);
      if (e > 0) {
          a = parseInt(i = v.substring(e + 5));
          if (a > 3) a = parseFloat(i)
      } else if (m > 0) a = parseFloat(u.substring(m + 10));
      else a = parseFloat(v);
      if (a < 5 || v.indexOf('Opera') >= 0 || u.indexOf('Opera') >= 0) c = s_ft(c);
      if (!s) {
          s = new Object;
          if (!w.s_c_in) {
              w.s_c_il = new Array;
              w.s_c_in = 0
          }
          s._il = w.s_c_il;
          s._in = w.s_c_in;
          s._il[s._in] = s;
          w.s_c_in++;
      }
      s._c = 's_c';
      (new Function("s", "un", "pg", "ss", c))(s, un, pg, ss);
      return s
  }

  function s_giqf() {
      var w = window,
          q = w.s_giq,
          i, t, s;
      if (q)
          for (i = 0; i < q.length; i++) {
              t = q[i];
              s = s_gi(t.oun);
              s.sa(t.un);
              s.setTagContainer(t.tagContainerName)
          }
      w.s_giq = 0
  }
  s_giqf()

  if (s.linkInternalFilters.indexOf(location.host.replace('www.', '')) == -1) {
    _satellite.notify("This site has not been provisioned for tracking. For AFL websites please Contact Kristi.Barrow@afl.com.au for NON-AFL please contact Kamal.Singh@team.telstra.com or Jasjeet.Bedi@team.telstra.com")
};
