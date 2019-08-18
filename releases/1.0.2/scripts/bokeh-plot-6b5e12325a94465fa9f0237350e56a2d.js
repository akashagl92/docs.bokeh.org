(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("f9bc55ac-4d17-412e-88b6-9e539aedbd19");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f9bc55ac-4d17-412e-88b6-9e539aedbd19' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.2.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"08d1b5a7-59e3-4cad-b886-b3b1404809e1":{"roots":{"references":[{"attributes":{"plot":{"id":"4938","subtype":"Figure","type":"Plot"},"ticker":{"id":"4949","type":"BasicTicker"}},"id":"4952","type":"Grid"},{"attributes":{},"id":"4985","type":"NodesOnly"},{"attributes":{},"id":"4986","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"end":[1,2,3,4,5,6,7,8,10,11,12,13,17,19,21,31,2,3,7,13,17,19,21,30,3,7,8,9,13,27,28,32,7,12,13,6,10,6,10,16,16,30,32,33,33,33,32,33,32,33,32,33,33,32,33,32,33,25,27,29,32,33,25,27,31,31,29,33,33,31,33,32,33,32,33,32,33,33],"start":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,4,4,5,5,5,6,8,8,8,9,13,14,14,15,15,18,18,19,20,20,22,22,23,23,23,23,23,24,24,24,25,26,26,27,28,28,29,29,30,30,31,31,32]},"selected":{"id":"4987","type":"Selection"},"selection_policy":{"id":"4986","type":"UnionRenderers"}},"id":"4967","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"4975","type":"BasicTickFormatter"},"plot":{"id":"4938","subtype":"Figure","type":"Plot"},"ticker":{"id":"4954","type":"BasicTicker"}},"id":"4953","type":"LinearAxis"},{"attributes":{},"id":"4989","type":"Selection"},{"attributes":{},"id":"4954","type":"BasicTicker"},{"attributes":{},"id":"4962","type":"Circle"},{"attributes":{},"id":"4987","type":"Selection"},{"attributes":{},"id":"4988","type":"UnionRenderers"},{"attributes":{},"id":"4944","type":"LinearScale"},{"attributes":{"edge_renderer":{"id":"4968","type":"GlyphRenderer"},"inspection_policy":{"id":"4976","type":"NodesOnly"},"layout_provider":{"id":"4970","type":"StaticLayoutProvider"},"node_renderer":{"id":"4964","type":"GlyphRenderer"},"selection_policy":{"id":"4985","type":"NodesOnly"}},"id":"4961","type":"GraphRenderer"},{"attributes":{},"id":"4975","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"4940","type":"Range1d"},{"attributes":{"dimension":1,"plot":{"id":"4938","subtype":"Figure","type":"Plot"},"ticker":{"id":"4954","type":"BasicTicker"}},"id":"4957","type":"Grid"},{"attributes":{},"id":"4966","type":"MultiLine"},{"attributes":{},"id":"4973","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"4958","type":"Toolbar"},{"attributes":{"source":{"id":"4963","type":"ColumnDataSource"}},"id":"4965","type":"CDSView"},{"attributes":{"formatter":{"id":"4973","type":"BasicTickFormatter"},"plot":{"id":"4938","subtype":"Figure","type":"Plot"},"ticker":{"id":"4949","type":"BasicTicker"}},"id":"4948","type":"LinearAxis"},{"attributes":{},"id":"4946","type":"LinearScale"},{"attributes":{"data_source":{"id":"4963","type":"ColumnDataSource"},"glyph":{"id":"4962","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"4965","type":"CDSView"}},"id":"4964","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Networkx Integration Demonstration"},"id":"4937","type":"Title"},{"attributes":{"graph_layout":{"0":[-0.7874435377410366,-0.022614168166356776],"1":[-0.4178216694204933,-0.507127058193962],"10":[-1.2906446227813382,0.42688726670237015],"11":[-1.6131952881388034,-0.34350577191987103],"12":[-1.2273650226007247,-0.24441773576167927],"13":[-0.19374098345115748,-0.18071836248056056],"14":[1.4785086249051036,-0.2615287675116371],"15":[1.4837782720845358,0.05026809461050141],"16":[-2.0,0.9228082230252777],"17":[-1.0528131138518293,-0.6359379379307841],"18":[1.332388782983472,0.26307063862700947],"19":[-0.06945558397948627,-0.45599727727612915],"2":[-0.03951093771842739,-0.009232926241344072],"20":[1.2459186821444468,-0.4654559236273882],"21":[-0.867799419678767,-0.8080402671575202],"22":[1.0075568090436748,-0.6920744848972344],"23":[1.0367928652695644,0.42062081257805556],"24":[0.5402216171589616,1.10228305308249],"25":[0.8493327188690211,0.9910086924224117],"26":[1.4559691830325971,-0.6096941958370613],"27":[0.5940876697934208,0.5286088287507437],"28":[0.24247939421568873,0.2943337008600498],"29":[1.2770149573956613,-0.10341405172331324],"3":[-0.6518734107981188,-0.18245690296183842],"30":[0.3693092357338123,-0.532491458460899],"31":[0.2986681211290658,0.48562355689040315],"32":[0.8717260661489135,-0.09108580289934119],"33":[0.7523213072116622,-0.12247054368206417],"4":[-1.5234263351693251,0.17757376248095608],"5":[-1.4645455911292498,0.664456900277167],"6":[-1.635567129260588,0.4715673701632237],"7":[-0.6282115293241569,-0.3866077419602436],"8":[0.17503511878754877,-0.20531244621089623],"9":[0.4523047491363534,0.06107292442946196]}},"id":"4970","type":"StaticLayoutProvider"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"4942","type":"Range1d"},{"attributes":{},"id":"4976","type":"NodesOnly"},{"attributes":{"data_source":{"id":"4967","type":"ColumnDataSource"},"glyph":{"id":"4966","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"4969","type":"CDSView"}},"id":"4968","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"club":["Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Officer","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Officer","Mr. Hi","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]},"selected":{"id":"4989","type":"Selection"},"selection_policy":{"id":"4988","type":"UnionRenderers"}},"id":"4963","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"4948","type":"LinearAxis"}],"left":[{"id":"4953","type":"LinearAxis"}],"renderers":[{"id":"4948","type":"LinearAxis"},{"id":"4952","type":"Grid"},{"id":"4953","type":"LinearAxis"},{"id":"4957","type":"Grid"},{"id":"4961","type":"GraphRenderer"}],"title":{"id":"4937","type":"Title"},"toolbar":{"id":"4958","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"4940","type":"Range1d"},"x_scale":{"id":"4944","type":"LinearScale"},"y_range":{"id":"4942","type":"Range1d"},"y_scale":{"id":"4946","type":"LinearScale"}},"id":"4938","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"4967","type":"ColumnDataSource"}},"id":"4969","type":"CDSView"},{"attributes":{},"id":"4949","type":"BasicTicker"}],"root_ids":["4938"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"08d1b5a7-59e3-4cad-b886-b3b1404809e1","roots":{"4938":"f9bc55ac-4d17-412e-88b6-9e539aedbd19"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();