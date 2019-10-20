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
      };var element = document.getElementById("19310e72-4c2b-4924-a621-a4002279c6d8");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '19310e72-4c2b-4924-a621-a4002279c6d8' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.4.min.js"];
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
                    
                  var docs_json = '{"8342789b-2bca-4a09-9c40-6cb183c9d8c4":{"roots":{"references":[{"attributes":{},"id":"23930","type":"UnionRenderers"},{"attributes":{"below":[{"id":"23889","type":"LinearAxis"}],"center":[{"id":"23893","type":"Grid"},{"id":"23898","type":"Grid"}],"left":[{"id":"23894","type":"LinearAxis"}],"renderers":[{"id":"23902","type":"GraphRenderer"}],"title":{"id":"23879","type":"Title"},"toolbar":{"id":"23899","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"23881","type":"Range1d"},"x_scale":{"id":"23885","type":"LinearScale"},"y_range":{"id":"23883","type":"Range1d"},"y_scale":{"id":"23887","type":"LinearScale"}},"id":"23878","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"23914","type":"NodesOnly"},{"attributes":{},"id":"23907","type":"MultiLine"},{"attributes":{},"id":"23885","type":"LinearScale"},{"attributes":{"graph_layout":{"0":[0.7309354840393716,-0.4759249709126004],"1":[0.5171830285542828,-0.17727421954159417],"10":[1.0852376011515017,-1.2496937920820734],"11":[0.44705298121212633,-1.290576209418755],"12":[1.3517652444355406,0.08945769947947771],"13":[0.2678652337600608,0.10920076301381226],"14":[-1.4530807792888487,-0.01995949783656291],"15":[-1.4815988054376281,0.22276985858089024],"16":[1.9999999999999998,-1.6242642875778277],"17":[1.17480391062685,-0.5062236860264393],"18":[-1.2485487959803596,-0.19277097335404306],"19":[-0.004369773899991909,-0.3421832337654296],"2":[0.03074523288532895,0.10847492394484196],"20":[-1.392375534755236,0.6504350068961627],"21":[1.2422104004462862,-0.20405557142063022],"22":[-1.5587699225627272,0.45432670418441],"23":[-0.8009930698941489,1.0053684854348799],"24":[-0.016238494915607762,1.3586484650612942],"25":[-0.3591901755801363,1.397820719895909],"26":[-1.4455956090163034,1.0919630214975673],"27":[-0.3629040434795733,0.8990417307285788],"28":[-0.11807038358240278,0.7518463341681327],"29":[-1.1603648119141727,0.8979779225786668],"3":[0.7556433716484244,0.038200083276093706],"30":[-0.4164950243989381,-0.05661672395076726],"31":[-0.09648847292739672,0.5542761876861054],"32":[-0.8976362283163806,0.30267768592111355],"33":[-0.755443314543994,0.35703537028828447],"4":[1.3355563472459815,-0.9698223840043486],"5":[1.4329407961543934,-1.3135657829301595],"6":[1.6255419166158973,-1.0912745425902413],"7":[0.46305911561533175,-0.3981195888422685],"8":[-0.21191280547788025,-0.09831388438184278],"9":[-0.6804646184196477,-0.2788816140006413]}},"id":"23911","type":"StaticLayoutProvider"},{"attributes":{},"id":"23926","type":"BasicTickFormatter"},{"attributes":{},"id":"23887","type":"LinearScale"},{"attributes":{"data_source":{"id":"23908","type":"ColumnDataSource"},"glyph":{"id":"23907","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"23910","type":"CDSView"}},"id":"23909","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"23899","type":"Toolbar"},{"attributes":{"data_source":{"id":"23904","type":"ColumnDataSource"},"glyph":{"id":"23903","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"23906","type":"CDSView"}},"id":"23905","type":"GlyphRenderer"},{"attributes":{"text":"Networkx Integration Demonstration"},"id":"23879","type":"Title"},{"attributes":{"callback":null,"data":{"end":[1,2,3,4,5,6,7,8,10,11,12,13,17,19,21,31,2,3,7,13,17,19,21,30,3,7,8,9,13,27,28,32,7,12,13,6,10,6,10,16,16,30,32,33,33,33,32,33,32,33,32,33,33,32,33,32,33,25,27,29,32,33,25,27,31,31,29,33,33,31,33,32,33,32,33,32,33,33],"start":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,4,4,5,5,5,6,8,8,8,9,13,14,14,15,15,18,18,19,20,20,22,22,23,23,23,23,23,24,24,24,25,26,26,27,28,28,29,29,30,30,31,31,32]},"selected":{"id":"23927","type":"Selection"},"selection_policy":{"id":"23928","type":"UnionRenderers"}},"id":"23908","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"club":["Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Officer","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Officer","Mr. Hi","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]},"selected":{"id":"23929","type":"Selection"},"selection_policy":{"id":"23930","type":"UnionRenderers"}},"id":"23904","type":"ColumnDataSource"},{"attributes":{"edge_renderer":{"id":"23909","type":"GlyphRenderer"},"inspection_policy":{"id":"23913","type":"NodesOnly"},"layout_provider":{"id":"23911","type":"StaticLayoutProvider"},"node_renderer":{"id":"23905","type":"GlyphRenderer"},"selection_policy":{"id":"23914","type":"NodesOnly"}},"id":"23902","type":"GraphRenderer"},{"attributes":{},"id":"23903","type":"Circle"},{"attributes":{},"id":"23929","type":"Selection"},{"attributes":{"source":{"id":"23904","type":"ColumnDataSource"}},"id":"23906","type":"CDSView"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"23883","type":"Range1d"},{"attributes":{},"id":"23895","type":"BasicTicker"},{"attributes":{},"id":"23928","type":"UnionRenderers"},{"attributes":{"source":{"id":"23908","type":"ColumnDataSource"}},"id":"23910","type":"CDSView"},{"attributes":{"formatter":{"id":"23926","type":"BasicTickFormatter"},"ticker":{"id":"23890","type":"BasicTicker"}},"id":"23889","type":"LinearAxis"},{"attributes":{},"id":"23924","type":"BasicTickFormatter"},{"attributes":{},"id":"23890","type":"BasicTicker"},{"attributes":{"dimension":1,"ticker":{"id":"23895","type":"BasicTicker"}},"id":"23898","type":"Grid"},{"attributes":{},"id":"23927","type":"Selection"},{"attributes":{},"id":"23913","type":"NodesOnly"},{"attributes":{"formatter":{"id":"23924","type":"BasicTickFormatter"},"ticker":{"id":"23895","type":"BasicTicker"}},"id":"23894","type":"LinearAxis"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"23881","type":"Range1d"},{"attributes":{"ticker":{"id":"23890","type":"BasicTicker"}},"id":"23893","type":"Grid"}],"root_ids":["23878"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"8342789b-2bca-4a09-9c40-6cb183c9d8c4","roots":{"23878":"19310e72-4c2b-4924-a621-a4002279c6d8"}}];
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
        
        
        }
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