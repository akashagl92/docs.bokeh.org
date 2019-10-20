(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("21494525-dc72-4c5b-b7c5-602402234c46");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '21494525-dc72-4c5b-b7c5-602402234c46' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.1.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.css"];
    
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
                    
                  var docs_json = '{"db6b84c7-b6a2-4606-80c5-bd91d021ef4e":{"roots":{"references":[{"attributes":{},"id":"23130","type":"NodesOnly"},{"attributes":{"formatter":{"id":"23127","type":"BasicTickFormatter"},"ticker":{"id":"23108","type":"BasicTicker"}},"id":"23107","type":"LinearAxis"},{"attributes":{"source":{"id":"23117","type":"ColumnDataSource"}},"id":"23119","type":"CDSView"},{"attributes":{},"id":"23142","type":"UnionRenderers"},{"attributes":{},"id":"23108","type":"BasicTicker"},{"attributes":{},"id":"23100","type":"LinearScale"},{"attributes":{},"id":"23120","type":"MultiLine"},{"attributes":{"text":"Networkx Integration Demonstration"},"id":"23092","type":"Title"},{"attributes":{"dimension":1,"ticker":{"id":"23108","type":"BasicTicker"}},"id":"23111","type":"Grid"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"23094","type":"Range1d"},{"attributes":{"callback":null,"data":{"end":[1,2,3,4,5,6,7,8,10,11,12,13,17,19,21,31,2,3,7,13,17,19,21,30,3,7,8,9,13,27,28,32,7,12,13,6,10,6,10,16,16,30,32,33,33,33,32,33,32,33,32,33,33,32,33,32,33,25,27,29,32,33,25,27,31,31,29,33,33,31,33,32,33,32,33,32,33,33],"start":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,4,4,5,5,5,6,8,8,8,9,13,14,14,15,15,18,18,19,20,20,22,22,23,23,23,23,23,24,24,24,25,26,26,27,28,28,29,29,30,30,31,31,32]},"selected":{"id":"23143","type":"Selection"},"selection_policy":{"id":"23142","type":"UnionRenderers"}},"id":"23121","type":"ColumnDataSource"},{"attributes":{},"id":"23098","type":"LinearScale"},{"attributes":{},"id":"23135","type":"NodesOnly"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"23112","type":"Toolbar"},{"attributes":{"below":[{"id":"23102","type":"LinearAxis"}],"center":[{"id":"23106","type":"Grid"},{"id":"23111","type":"Grid"}],"left":[{"id":"23107","type":"LinearAxis"}],"renderers":[{"id":"23115","type":"GraphRenderer"}],"title":{"id":"23092","type":"Title"},"toolbar":{"id":"23112","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"23094","type":"Range1d"},"x_scale":{"id":"23098","type":"LinearScale"},"y_range":{"id":"23096","type":"Range1d"},"y_scale":{"id":"23100","type":"LinearScale"}},"id":"23091","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"23121","type":"ColumnDataSource"},"glyph":{"id":"23120","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"23123","type":"CDSView"}},"id":"23122","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"23096","type":"Range1d"},{"attributes":{"source":{"id":"23121","type":"ColumnDataSource"}},"id":"23123","type":"CDSView"},{"attributes":{},"id":"23140","type":"UnionRenderers"},{"attributes":{"graph_layout":{"0":[-0.7141831888367992,-0.09233427346950007],"1":[-0.35704957180647523,-0.42962206521594126],"10":[-1.3291150300244383,0.06770354858419425],"11":[-1.4584590459224833,-0.40169124908990644],"12":[-1.1017549375827826,-0.40687739151221536],"13":[-0.13643189240287404,-0.2498396338650572],"14":[1.2273270785365318,-0.39508228774508114],"15":[1.3478832542226182,-0.01795865101014676],"16":[-2.0,0.4994644057100163],"17":[-0.7597140489898523,-0.7855432497084835],"18":[1.1477370540476863,0.434720164516385],"19":[-0.14813627031376678,0.027277171778709523],"2":[0.030245662436598632,-0.17974055048441048],"20":[1.2617753368026843,-0.20114587637105097],"21":[-0.9264435848984076,-0.6281310347940392],"22":[1.0180039150364932,-0.49106889707243184],"23":[0.8669474273716828,0.5476929642757409],"24":[0.3164177945888104,1.0253881512097893],"25":[0.6078172106289816,1.006779421227666],"26":[1.5040588801840675,0.28864662250737455],"27":[0.4678100091027248,0.4970481840628371],"28":[0.3449152308145619,0.21054033078182785],"29":[1.1990321473104537,0.26043870002355285],"3":[-0.5769284749534633,-0.3636986641033727],"30":[0.3587539150484531,-0.3534819793312767],"31":[0.2022650034093673,0.443567412509638],"32":[0.815133494275446,-0.02358638631851773],"33":[0.7033916240563075,0.019147606733147804],"4":[-1.1868318187208855,0.3544174209410734],"5":[-1.570450506851965,0.187157731339064],"6":[-1.464286776553041,0.3969874364787879],"7":[-0.42518963867853143,-0.6071136551452737],"8":[0.19129599711091855,-0.07459771134675498],"9":[0.5441637515513773,-0.5654637160963472]}},"id":"23124","type":"StaticLayoutProvider"},{"attributes":{"edge_renderer":{"id":"23122","type":"GlyphRenderer"},"inspection_policy":{"id":"23135","type":"NodesOnly"},"layout_provider":{"id":"23124","type":"StaticLayoutProvider"},"node_renderer":{"id":"23118","type":"GlyphRenderer"},"selection_policy":{"id":"23130","type":"NodesOnly"}},"id":"23115","type":"GraphRenderer"},{"attributes":{"formatter":{"id":"23129","type":"BasicTickFormatter"},"ticker":{"id":"23103","type":"BasicTicker"}},"id":"23102","type":"LinearAxis"},{"attributes":{},"id":"23141","type":"Selection"},{"attributes":{},"id":"23116","type":"Circle"},{"attributes":{},"id":"23143","type":"Selection"},{"attributes":{},"id":"23127","type":"BasicTickFormatter"},{"attributes":{},"id":"23103","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"club":["Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Officer","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Officer","Mr. Hi","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]},"selected":{"id":"23141","type":"Selection"},"selection_policy":{"id":"23140","type":"UnionRenderers"}},"id":"23117","type":"ColumnDataSource"},{"attributes":{},"id":"23129","type":"BasicTickFormatter"},{"attributes":{"ticker":{"id":"23103","type":"BasicTicker"}},"id":"23106","type":"Grid"},{"attributes":{"data_source":{"id":"23117","type":"ColumnDataSource"},"glyph":{"id":"23116","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"23119","type":"CDSView"}},"id":"23118","type":"GlyphRenderer"}],"root_ids":["23091"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"db6b84c7-b6a2-4606-80c5-bd91d021ef4e","roots":{"23091":"21494525-dc72-4c5b-b7c5-602402234c46"}}];
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
        function(Bokeh) {} // ensure no trailing comma for IE
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();