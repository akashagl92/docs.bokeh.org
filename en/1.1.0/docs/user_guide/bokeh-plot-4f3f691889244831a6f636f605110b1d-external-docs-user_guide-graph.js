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
      };var element = document.getElementById("51cbe1d2-6f7d-4446-810f-1b1cbdece005");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '51cbe1d2-6f7d-4446-810f-1b1cbdece005' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"9ecb0b35-b228-4d23-99cf-d0163d0b87f0":{"roots":{"references":[{"attributes":{},"id":"23431","type":"LinearScale"},{"attributes":{"data_source":{"id":"23413","type":"ColumnDataSource"},"glyph":{"id":"23421","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"23415","type":"CDSView"}},"id":"23414","type":"GlyphRenderer"},{"attributes":{"edge_renderer":{"id":"23418","type":"GlyphRenderer"},"inspection_policy":{"id":"23440","type":"NodesOnly"},"layout_provider":{"id":"23420","type":"StaticLayoutProvider"},"node_renderer":{"id":"23414","type":"GlyphRenderer"},"selection_policy":{"id":"23435","type":"NodesOnly"}},"id":"23411","type":"GraphRenderer"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"23397","type":"Range1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"23403","type":"HoverTool"},{"id":"23404","type":"BoxZoomTool"},{"id":"23405","type":"ResetTool"}]},"id":"23406","type":"Toolbar"},{"attributes":{},"id":"23435","type":"NodesOnly"},{"attributes":{"overlay":{"id":"23445","type":"BoxAnnotation"}},"id":"23404","type":"BoxZoomTool"},{"attributes":{"callback":null,"data":{"club":["Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Officer","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Officer","Mr. Hi","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]},"selected":{"id":"23447","type":"Selection"},"selection_policy":{"id":"23446","type":"UnionRenderers"}},"id":"23413","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"23398","type":"Range1d"},{"attributes":{},"id":"23405","type":"ResetTool"},{"attributes":{},"id":"23449","type":"Selection"},{"attributes":{"source":{"id":"23417","type":"ColumnDataSource"}},"id":"23419","type":"CDSView"},{"attributes":{},"id":"23448","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#2b83ba"},"size":{"units":"screen","value":15}},"id":"23421","type":"Circle"},{"attributes":{"line_alpha":{"value":0.8},"line_color":{"field":"edge_color"}},"id":"23426","type":"MultiLine"},{"attributes":{},"id":"23447","type":"Selection"},{"attributes":{"graph_layout":{"0":[0.008461857900219482,0.3718047812410435],"1":[-0.04409990704743338,0.2107846728526682],"10":[0.14463630492061708,0.6591262503920448],"11":[-0.19899058325338545,0.7118818457251342],"12":[-0.3009259349704179,0.4850774398590385],"13":[-0.11164712538726643,0.08260998702830245],"14":[-0.10993894195088998,-0.6960217860285756],"15":[-0.21662450314666826,-0.6025331269136691],"16":[0.34237816455974823,1.0],"17":[-0.1387413518683149,0.49331590835496025],"18":[-0.3127169063531566,-0.4817504654381818],"19":[-0.20092719877941173,0.05249943926159349],"2":[-0.04349903427164501,-0.0052641906005000665],"20":[0.12306468235809988,-0.6293312477184999],"21":[0.2009401557973512,0.4055718633812595],"22":[0.018885721667167673,-0.6743385323019017],"23":[0.17428986274662164,-0.48606940645753405],"24":[0.45591236800918733,-0.24914502933695115],"25":[0.41766232988378105,-0.38860123175457906],"26":[-0.31502573376474813,-0.6694084535471166],"27":[0.20075152558673778,-0.2817641231183749],"28":[-0.10853333559571805,-0.2093282204210508],"29":[-0.07745159461670657,-0.5877743487538774],"3":[-0.16138230667825165,0.2810761981292769],"30":[-0.03699412399670481,-0.1500955207960971],"31":[0.1657856994948129,-0.14393519425289653],"32":[-0.018821232700725492,-0.4045780994067712],"33":[-0.08295163958230839,-0.35992204671345407],"4":[0.021051795113089994,0.7386375258685725],"5":[0.2654477290270886,0.7377684680570242],"6":[0.16478150044151266,0.8030973499440955],"7":[0.05970282794915355,0.25100739692416923],"8":[0.03410126599273563,-0.06937747759694039],"9":[-0.31858233748417264,-0.19502062586221433]}},"id":"23420","type":"StaticLayoutProvider"},{"attributes":{},"id":"23440","type":"NodesOnly"},{"attributes":{"data_source":{"id":"23417","type":"ColumnDataSource"},"glyph":{"id":"23426","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"23419","type":"CDSView"}},"id":"23418","type":"GlyphRenderer"},{"attributes":{"plot_height":400,"plot_width":400,"renderers":[{"id":"23411","type":"GraphRenderer"}],"title":{"id":"23402","type":"Title"},"toolbar":{"id":"23406","type":"Toolbar"},"x_range":{"id":"23397","type":"Range1d"},"x_scale":{"id":"23432","type":"LinearScale"},"y_range":{"id":"23398","type":"Range1d"},"y_scale":{"id":"23431","type":"LinearScale"}},"id":"23399","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"23445","type":"BoxAnnotation"},{"attributes":{"callback":null,"tooltips":[["index","@index"],["club","@club"]]},"id":"23403","type":"HoverTool"},{"attributes":{"source":{"id":"23413","type":"ColumnDataSource"}},"id":"23415","type":"CDSView"},{"attributes":{},"id":"23432","type":"LinearScale"},{"attributes":{},"id":"23446","type":"UnionRenderers"},{"attributes":{"text":"Graph Interaction Demonstration"},"id":"23402","type":"Title"},{"attributes":{"callback":null,"data":{"edge_color":["black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","red","black","black","black","black","black","black","black","red","black","black","black","red","black","red","red","red","black","black","black","black","black","black","black","black","black","red","red","red","black","red","black","black","black","black","black","black","red","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black"],"end":[1,2,3,4,5,6,7,8,10,11,12,13,17,19,21,31,2,3,7,13,17,19,21,30,3,7,8,9,13,27,28,32,7,12,13,6,10,6,10,16,16,30,32,33,33,33,32,33,32,33,32,33,33,32,33,32,33,25,27,29,32,33,25,27,31,31,29,33,33,31,33,32,33,32,33,32,33,33],"start":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,4,4,5,5,5,6,8,8,8,9,13,14,14,15,15,18,18,19,20,20,22,22,23,23,23,23,23,24,24,24,25,26,26,27,28,28,29,29,30,30,31,31,32]},"selected":{"id":"23449","type":"Selection"},"selection_policy":{"id":"23448","type":"UnionRenderers"}},"id":"23417","type":"ColumnDataSource"}],"root_ids":["23399"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"9ecb0b35-b228-4d23-99cf-d0163d0b87f0","roots":{"23399":"51cbe1d2-6f7d-4446-810f-1b1cbdece005"}}];
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