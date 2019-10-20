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
      };var element = document.getElementById("1f7cddfd-2798-4140-9e7b-acf27327d826");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '1f7cddfd-2798-4140-9e7b-acf27327d826' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.1.min.js"];
      var css_urls = [];
    
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
                    
                  var docs_json = '{"fbd43d3f-7a29-430b-bd21-6cfbab72bc37":{"roots":{"references":[{"attributes":{"data_source":{"id":"24204","type":"ColumnDataSource"},"glyph":{"id":"24213","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"24206","type":"CDSView"}},"id":"24205","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#2b83ba"},"size":{"units":"screen","value":15}},"id":"24208","type":"Circle"},{"attributes":{},"id":"24192","type":"ResetTool"},{"attributes":{"callback":null,"data":{"edge_color":["black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","red","black","black","black","black","black","black","black","red","black","black","black","red","black","red","red","red","black","black","black","black","black","black","black","black","black","red","red","red","black","red","black","black","black","black","black","black","red","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black"],"end":[1,2,3,4,5,6,7,8,10,11,12,13,17,19,21,31,2,3,7,13,17,19,21,30,3,7,8,9,13,27,28,32,7,12,13,6,10,6,10,16,16,30,32,33,33,33,32,33,32,33,32,33,33,32,33,32,33,25,27,29,32,33,25,27,31,31,29,33,33,31,33,32,33,32,33,32,33,33],"start":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,4,4,5,5,5,6,8,8,8,9,13,14,14,15,15,18,18,19,20,20,22,22,23,23,23,23,23,24,24,24,25,26,26,27,28,28,29,29,30,30,31,31,32]},"selected":{"id":"24233","type":"Selection"},"selection_policy":{"id":"24234","type":"UnionRenderers"}},"id":"24204","type":"ColumnDataSource"},{"attributes":{},"id":"24220","type":"LinearScale"},{"attributes":{"graph_layout":{"0":[0.2823353135316344,0.29098363709522385],"1":[0.26229314360308253,0.06769555373976405],"10":[0.4506910251101976,0.5969246964651514],"11":[0.7192523672871675,0.35333938573971874],"12":[0.12786569697041336,0.5738364947533207],"13":[0.06794521578050292,0.05788539666840251],"14":[-0.2252476512564324,-0.6874470181287241],"15":[-0.5298203178230443,-0.45831683059758643],"16":[0.6133494958115988,0.9999999999999999],"17":[0.5382281864552361,0.2134387425435938],"18":[-0.3315320561617907,-0.6370023788406602],"19":[0.19635192650457042,-0.10036017940580286],"2":[-0.06167779832462386,0.03172614951472111],"20":[-0.013755204327062152,-0.5859752452930438],"21":[0.5489329955590523,0.07575227532646098],"22":[-0.11096019028615862,-0.6614215794077639],"23":[-0.5204082408513282,-0.27531136655223043],"24":[-0.6130058026919241,0.16149833483783202],"25":[-0.6632310629318184,-0.002924983303741393],"26":[-0.5041205229429127,-0.6871906501667809],"27":[-0.44252073932949815,-0.047157710735342764],"28":[-0.22669738147624166,-0.08667155923526637],"29":[-0.4536708139424337,-0.517110685284084],"3":[0.08526148051484232,0.3090799111065488],"30":[0.07478982879845496,-0.2881712195525889],"31":[-0.26962808262478516,0.03660134705563498],"32":[-0.2179440767440708,-0.38542020075880123],"33":[-0.21545998066848712,-0.32557779960659655],"4":[0.5990544760466592,0.5478329944055379],"5":[0.4330350492061633,0.7569703433496379],"6":[0.5557356928393464,0.7135894408209836],"7":[0.15402386139007002,0.22911747034475993],"8":[0.0264067239563292,-0.12332363861999729],"9":[-0.33587255698270757,-0.1468891282782824]}},"id":"24207","type":"StaticLayoutProvider"},{"attributes":{},"id":"24219","type":"LinearScale"},{"attributes":{"edge_renderer":{"id":"24205","type":"GlyphRenderer"},"inspection_policy":{"id":"24226","type":"NodesOnly"},"layout_provider":{"id":"24207","type":"StaticLayoutProvider"},"node_renderer":{"id":"24201","type":"GlyphRenderer"},"selection_policy":{"id":"24231","type":"NodesOnly"}},"id":"24198","type":"GraphRenderer"},{"attributes":{},"id":"24226","type":"NodesOnly"},{"attributes":{},"id":"24233","type":"Selection"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"24184","type":"Range1d"},{"attributes":{"data_source":{"id":"24200","type":"ColumnDataSource"},"glyph":{"id":"24208","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"24202","type":"CDSView"}},"id":"24201","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"24232","type":"BoxAnnotation"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"24185","type":"Range1d"},{"attributes":{"callback":null,"data":{"club":["Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Officer","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Officer","Mr. Hi","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]},"selected":{"id":"24235","type":"Selection"},"selection_policy":{"id":"24236","type":"UnionRenderers"}},"id":"24200","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.8},"line_color":{"field":"edge_color"}},"id":"24213","type":"MultiLine"},{"attributes":{"plot_height":400,"plot_width":400,"renderers":[{"id":"24198","type":"GraphRenderer"}],"title":{"id":"24189","type":"Title"},"toolbar":{"id":"24193","type":"Toolbar"},"x_range":{"id":"24184","type":"Range1d"},"x_scale":{"id":"24219","type":"LinearScale"},"y_range":{"id":"24185","type":"Range1d"},"y_scale":{"id":"24220","type":"LinearScale"}},"id":"24186","type":"Plot"},{"attributes":{},"id":"24231","type":"NodesOnly"},{"attributes":{"callback":null,"tooltips":[["index","@index"],["club","@club"]]},"id":"24190","type":"HoverTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"24190","type":"HoverTool"},{"id":"24191","type":"BoxZoomTool"},{"id":"24192","type":"ResetTool"}]},"id":"24193","type":"Toolbar"},{"attributes":{},"id":"24234","type":"UnionRenderers"},{"attributes":{"source":{"id":"24204","type":"ColumnDataSource"}},"id":"24206","type":"CDSView"},{"attributes":{"overlay":{"id":"24232","type":"BoxAnnotation"}},"id":"24191","type":"BoxZoomTool"},{"attributes":{},"id":"24236","type":"UnionRenderers"},{"attributes":{"text":"Graph Interaction Demonstration"},"id":"24189","type":"Title"},{"attributes":{},"id":"24235","type":"Selection"},{"attributes":{"source":{"id":"24200","type":"ColumnDataSource"}},"id":"24202","type":"CDSView"}],"root_ids":["24186"]},"title":"Bokeh Application","version":"1.3.1"}}';
                  var render_items = [{"docid":"fbd43d3f-7a29-430b-bd21-6cfbab72bc37","roots":{"24186":"1f7cddfd-2798-4140-9e7b-acf27327d826"}}];
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