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
      };var element = document.getElementById("955b9954-6fcd-44e0-88b1-dec7b577741c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '955b9954-6fcd-44e0-88b1-dec7b577741c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.4.min.js"];
    
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
                    
                  var docs_json = '{"f1bd54d8-43b3-44a2-acbd-03e65630eb80":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#2b83ba"},"size":{"units":"screen","value":15}},"id":"5105","type":"Circle"},{"attributes":{"edge_renderer":{"id":"5102","type":"GlyphRenderer"},"inspection_policy":{"id":"5124","type":"NodesOnly"},"layout_provider":{"id":"5104","type":"StaticLayoutProvider"},"node_renderer":{"id":"5098","type":"GlyphRenderer"},"selection_policy":{"id":"5123","type":"NodesOnly"}},"id":"5095","type":"GraphRenderer"},{"attributes":{},"id":"5130","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"club":["Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Officer","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Officer","Mr. Hi","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]},"selected":{"id":"5133","type":"Selection"},"selection_policy":{"id":"5132","type":"UnionRenderers"}},"id":"5097","type":"ColumnDataSource"},{"attributes":{},"id":"5131","type":"Selection"},{"attributes":{"data_source":{"id":"5097","type":"ColumnDataSource"},"glyph":{"id":"5105","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"5099","type":"CDSView"}},"id":"5098","type":"GlyphRenderer"},{"attributes":{},"id":"5133","type":"Selection"},{"attributes":{"plot_height":400,"plot_width":400,"renderers":[{"id":"5089","type":"BoxAnnotation"},{"id":"5095","type":"GraphRenderer"}],"title":{"id":"5084","type":"Title"},"toolbar":{"id":"5088","type":"Toolbar"},"x_range":{"id":"5079","type":"Range1d"},"x_scale":{"id":"5116","type":"LinearScale"},"y_range":{"id":"5080","type":"Range1d"},"y_scale":{"id":"5117","type":"LinearScale"}},"id":"5081","type":"Plot"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"5080","type":"Range1d"},{"attributes":{"source":{"id":"5097","type":"ColumnDataSource"}},"id":"5099","type":"CDSView"},{"attributes":{"plot":null,"text":"Graph Interaction Demonstration"},"id":"5084","type":"Title"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"5079","type":"Range1d"},{"attributes":{},"id":"5116","type":"LinearScale"},{"attributes":{},"id":"5117","type":"LinearScale"},{"attributes":{"callback":null,"data":{"edge_color":["black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","red","black","black","black","black","black","black","black","red","black","black","black","red","black","red","red","red","black","black","black","black","black","black","black","black","black","red","red","red","black","red","black","black","black","black","black","black","red","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black"],"end":[1,2,3,4,5,6,7,8,10,11,12,13,17,19,21,31,2,3,7,13,17,19,21,30,3,7,8,9,13,27,28,32,7,12,13,6,10,6,10,16,16,30,32,33,33,33,32,33,32,33,32,33,33,32,33,32,33,25,27,29,32,33,25,27,31,31,29,33,33,31,33,32,33,32,33,32,33,33],"start":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,4,4,5,5,5,6,8,8,8,9,13,14,14,15,15,18,18,19,20,20,22,22,23,23,23,23,23,24,24,24,25,26,26,27,28,28,29,29,30,30,31,31,32]},"selected":{"id":"5131","type":"Selection"},"selection_policy":{"id":"5130","type":"UnionRenderers"}},"id":"5101","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"5089","type":"BoxAnnotation"}},"id":"5086","type":"BoxZoomTool"},{"attributes":{"line_alpha":{"value":0.8},"line_color":{"field":"edge_color"}},"id":"5110","type":"MultiLine"},{"attributes":{"data_source":{"id":"5101","type":"ColumnDataSource"},"glyph":{"id":"5110","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"5103","type":"CDSView"}},"id":"5102","type":"GlyphRenderer"},{"attributes":{},"id":"5087","type":"ResetTool"},{"attributes":{},"id":"5123","type":"NodesOnly"},{"attributes":{},"id":"5132","type":"UnionRenderers"},{"attributes":{"source":{"id":"5101","type":"ColumnDataSource"}},"id":"5103","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"5085","type":"HoverTool"},{"id":"5086","type":"BoxZoomTool"},{"id":"5087","type":"ResetTool"}]},"id":"5088","type":"Toolbar"},{"attributes":{},"id":"5124","type":"NodesOnly"},{"attributes":{"graph_layout":{"0":[0.07547803910958571,0.33664329814360794],"1":[0.048939843902073156,0.21171642784790637],"10":[-0.0049964575271395405,0.6372458000598277],"11":[0.3155094403304463,0.6301457773452079],"12":[0.3714827803014649,0.3814893801146957],"13":[-0.042657035879301926,0.09978486226286203],"14":[-0.3950017291717568,-0.32670889402758146],"15":[-0.04715073650556843,-0.5496795301149148],"16":[-0.054559309111904666,1.0],"17":[0.21950023124023468,0.4485345629156216],"18":[-0.3072459171222393,-0.5053393342562221],"19":[0.011380996501131405,0.05561857330414999],"2":[0.0563118861310334,-0.029801046731900767],"20":[-0.11021530952972963,-0.6063584169757097],"21":[0.04338286050274909,0.47635952064401804],"22":[-0.3818712382700273,-0.43316998307797894],"23":[0.06389195154062587,-0.5148992788025456],"24":[0.40356999748224165,-0.3828789079148499],"25":[0.3157709353238968,-0.4939779972179557],"26":[-0.32379409636757256,-0.6520768019373213],"27":[0.17327420560908316,-0.34954891126005283],"28":[0.0764885145931178,-0.251759104287465],"29":[-0.18343410504690688,-0.5818641399768085],"3":[0.1805898304320726,0.22101197155343813],"30":[-0.16033038694485446,-0.0834952187755025],"31":[0.1636083374228555,-0.18568058233832024],"32":[-0.12769340054280123,-0.3532455611574575],"33":[-0.11910949280254828,-0.3057748691825215],"4":[-0.14057166764265555,0.6086916892745641],"5":[0.044962559951375415,0.7609880233951206],"6":[-0.06740060620020796,0.74439324209639],"7":[0.2477405608536085,0.16038049840351204],"8":[-0.07638402540992362,-0.0481229441341008],"9":[-0.26946745715245746,-0.1186221051917134]}},"id":"5104","type":"StaticLayoutProvider"},{"attributes":{"callback":null,"tooltips":[["index","@index"],["club","@club"]]},"id":"5085","type":"HoverTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5089","type":"BoxAnnotation"}],"root_ids":["5081"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"f1bd54d8-43b3-44a2-acbd-03e65630eb80","roots":{"5081":"955b9954-6fcd-44e0-88b1-dec7b577741c"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
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