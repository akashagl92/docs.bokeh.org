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
      };var element = document.getElementById("7f5e026e-fd95-488a-9ca2-9c2c6f983099");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7f5e026e-fd95-488a-9ca2-9c2c6f983099' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"a915e444-047b-4c42-9fea-40d28230a4bb":{"roots":{"references":[{"attributes":{"callback":null,"tooltips":[["index","@index"],["club","@club"]]},"id":"5085","type":"HoverTool"},{"attributes":{},"id":"5116","type":"LinearScale"},{"attributes":{"overlay":{"id":"5089","type":"BoxAnnotation"}},"id":"5086","type":"BoxZoomTool"},{"attributes":{},"id":"5117","type":"LinearScale"},{"attributes":{"callback":null,"data":{"edge_color":["black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","red","black","black","black","black","black","black","black","red","black","black","black","red","black","red","red","red","black","black","black","black","black","black","black","black","black","red","red","red","black","red","black","black","black","black","black","black","red","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black"],"end":[1,2,3,4,5,6,7,8,10,11,12,13,17,19,21,31,2,3,7,13,17,19,21,30,3,7,8,9,13,27,28,32,7,12,13,6,10,6,10,16,16,30,32,33,33,33,32,33,32,33,32,33,33,32,33,32,33,25,27,29,32,33,25,27,31,31,29,33,33,31,33,32,33,32,33,32,33,33],"start":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,4,4,5,5,5,6,8,8,8,9,13,14,14,15,15,18,18,19,20,20,22,22,23,23,23,23,23,24,24,24,25,26,26,27,28,28,29,29,30,30,31,31,32]},"selected":{"id":"5131","type":"Selection"},"selection_policy":{"id":"5130","type":"UnionRenderers"}},"id":"5101","type":"ColumnDataSource"},{"attributes":{},"id":"5087","type":"ResetTool"},{"attributes":{},"id":"5128","type":"NodesOnly"},{"attributes":{"data_source":{"id":"5101","type":"ColumnDataSource"},"glyph":{"id":"5110","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"5103","type":"CDSView"}},"id":"5102","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"club":["Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Officer","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Officer","Mr. Hi","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]},"selected":{"id":"5133","type":"Selection"},"selection_policy":{"id":"5132","type":"UnionRenderers"}},"id":"5097","type":"ColumnDataSource"},{"attributes":{"source":{"id":"5101","type":"ColumnDataSource"}},"id":"5103","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"5085","type":"HoverTool"},{"id":"5086","type":"BoxZoomTool"},{"id":"5087","type":"ResetTool"}]},"id":"5088","type":"Toolbar"},{"attributes":{"data_source":{"id":"5097","type":"ColumnDataSource"},"glyph":{"id":"5105","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"5099","type":"CDSView"}},"id":"5098","type":"GlyphRenderer"},{"attributes":{},"id":"5119","type":"NodesOnly"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"5080","type":"Range1d"},{"attributes":{"graph_layout":{"0":[0.37056993777489505,0.05488710854671715],"1":[0.18325960255307525,0.16735608777860472],"10":[0.6246209652186948,-0.1413279957083255],"11":[0.7409124875233204,0.228024208802836],"12":[0.5562890360631505,0.2255024193532442],"13":[0.10638671850563862,-0.025588477810215265],"14":[-0.5345448679610119,-0.3179457616587833],"15":[-0.42253383251829785,-0.39312475767047234],"16":[1.0,-0.29000533258479044],"17":[0.4496108574544034,0.3226566284979839],"18":[-0.6640927228634848,-0.20200128862900707],"19":[0.05623113625259363,0.03770549893577428],"2":[-0.02899942905249469,0.08126775262264628],"20":[-0.30429974265541837,-0.40136883938186474],"21":[0.34877859554397744,0.3821706520487804],"22":[-0.64690405324981,-0.06056943907319975],"23":[-0.544634604724836,0.07358110035269048],"24":[-0.3920176312696675,0.4565715176797846],"25":[-0.5141582949521222,0.351704900650144],"26":[-0.6231852429570236,-0.39520219058599604],"27":[-0.3674872418312337,0.2211908851481341],"28":[-0.2352914803499224,0.09103575675229951],"29":[-0.5712404881155699,-0.1748675444382672],"3":[0.29086678114325965,0.1596905392816967],"30":[-0.11570796295079194,-0.07163671817367011],"31":[-0.18157423925333868,0.18228570947164272],"32":[-0.36983227859068374,-0.13869882383508023],"33":[-0.3305946969354592,-0.10134940208330614],"4":[0.7100414784418604,-0.003339412066375104],"5":[0.7361755635015752,-0.21497140340697013],"6":[0.797332308157079,-0.11259005463416781],"7":[0.24867185163485636,0.04186587791029052],"8":[-0.02624987708859338,-0.13400885947580946],"9":[-0.3463986324486188,0.10109965738303257]}},"id":"5104","type":"StaticLayoutProvider"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5089","type":"BoxAnnotation"},{"attributes":{},"id":"5131","type":"Selection"},{"attributes":{"source":{"id":"5097","type":"ColumnDataSource"}},"id":"5099","type":"CDSView"},{"attributes":{"fill_color":{"value":"#2b83ba"},"size":{"units":"screen","value":15}},"id":"5105","type":"Circle"},{"attributes":{},"id":"5130","type":"UnionRenderers"},{"attributes":{"edge_renderer":{"id":"5102","type":"GlyphRenderer"},"inspection_policy":{"id":"5119","type":"NodesOnly"},"layout_provider":{"id":"5104","type":"StaticLayoutProvider"},"node_renderer":{"id":"5098","type":"GlyphRenderer"},"selection_policy":{"id":"5128","type":"NodesOnly"}},"id":"5095","type":"GraphRenderer"},{"attributes":{"plot_height":400,"plot_width":400,"renderers":[{"id":"5089","type":"BoxAnnotation"},{"id":"5095","type":"GraphRenderer"}],"title":{"id":"5084","type":"Title"},"toolbar":{"id":"5088","type":"Toolbar"},"x_range":{"id":"5079","type":"Range1d"},"x_scale":{"id":"5116","type":"LinearScale"},"y_range":{"id":"5080","type":"Range1d"},"y_scale":{"id":"5117","type":"LinearScale"}},"id":"5081","type":"Plot"},{"attributes":{},"id":"5132","type":"UnionRenderers"},{"attributes":{},"id":"5133","type":"Selection"},{"attributes":{"plot":null,"text":"Graph Interaction Demonstration"},"id":"5084","type":"Title"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"5079","type":"Range1d"},{"attributes":{"line_alpha":{"value":0.8},"line_color":{"field":"edge_color"}},"id":"5110","type":"MultiLine"}],"root_ids":["5081"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"a915e444-047b-4c42-9fea-40d28230a4bb","roots":{"5081":"7f5e026e-fd95-488a-9ca2-9c2c6f983099"}}];
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