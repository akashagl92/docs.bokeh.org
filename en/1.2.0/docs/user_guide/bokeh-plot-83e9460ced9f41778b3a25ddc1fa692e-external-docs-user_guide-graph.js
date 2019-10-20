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
      };var element = document.getElementById("82c55799-63db-4594-8c94-24e5b8801d56");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '82c55799-63db-4594-8c94-24e5b8801d56' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.2.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.css"];
    
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
                    
                  var docs_json = '{"f9cbef0e-cc4a-4b75-a3d5-93b7af9e8492":{"roots":{"references":[{"attributes":{},"id":"24211","type":"UnionRenderers"},{"attributes":{"line_alpha":{"value":0.8},"line_color":{"field":"edge_color"}},"id":"24190","type":"MultiLine"},{"attributes":{"source":{"id":"24181","type":"ColumnDataSource"}},"id":"24183","type":"CDSView"},{"attributes":{"callback":null,"data":{"edge_color":["black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","red","black","black","black","black","black","black","black","red","black","black","black","red","black","red","red","red","black","black","black","black","black","black","black","black","black","red","red","red","black","red","black","black","black","black","black","black","red","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black"],"end":[1,2,3,4,5,6,7,8,10,11,12,13,17,19,21,31,2,3,7,13,17,19,21,30,3,7,8,9,13,27,28,32,7,12,13,6,10,6,10,16,16,30,32,33,33,33,32,33,32,33,32,33,33,32,33,32,33,25,27,29,32,33,25,27,31,31,29,33,33,31,33,32,33,32,33,32,33,33],"start":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,4,4,5,5,5,6,8,8,8,9,13,14,14,15,15,18,18,19,20,20,22,22,23,23,23,23,23,24,24,24,25,26,26,27,28,28,29,29,30,30,31,31,32]},"selected":{"id":"24210","type":"Selection"},"selection_policy":{"id":"24211","type":"UnionRenderers"}},"id":"24181","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#2b83ba"},"size":{"units":"screen","value":15}},"id":"24185","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"24209","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"club":["Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Officer","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Officer","Mr. Hi","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]},"selected":{"id":"24212","type":"Selection"},"selection_policy":{"id":"24213","type":"UnionRenderers"}},"id":"24177","type":"ColumnDataSource"},{"attributes":{},"id":"24210","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"24167","type":"HoverTool"},{"id":"24168","type":"BoxZoomTool"},{"id":"24169","type":"ResetTool"}]},"id":"24170","type":"Toolbar"},{"attributes":{},"id":"24212","type":"Selection"},{"attributes":{},"id":"24169","type":"ResetTool"},{"attributes":{},"id":"24197","type":"LinearScale"},{"attributes":{"callback":null,"tooltips":[["index","@index"],["club","@club"]]},"id":"24167","type":"HoverTool"},{"attributes":{"graph_layout":{"0":[-0.3643949893339941,-0.28823867883417387],"1":[-0.17440544211094036,-0.20338863634160118],"10":[-0.5505173729149355,-0.6842434680253905],"11":[-0.8576389074209234,-0.2830277510264677],"12":[-0.6954004251404897,-0.10682927686677425],"13":[-0.1439186354361161,0.006829065083806081],"14":[0.5839462994481528,0.6544156138191581],"15":[0.33920853837246917,0.7143907979411782],"16":[-0.9999999999999999,-0.929122050648557],"17":[-0.3185454868323947,-0.53338108449779],"18":[0.2072729683097732,0.6859062430059205],"19":[0.029234054029989735,-0.12785491032034996],"2":[-0.07595287852456006,0.10396435231744217],"20":[0.6292621996699685,0.5336942569827611],"21":[-0.1630952119513197,-0.561009072386801],"22":[0.46253709245621205,0.7118875496379484],"23":[0.6351542082984942,0.1663589904069742],"24":[0.5897803102857371,-0.25455689961446526],"25":[0.7133934588923098,-0.12788336484090868],"26":[0.8393849930736603,0.46006704570024015],"27":[0.4211102187285638,0.02173954377321575],"28":[0.12933122220021503,0.2757541905623111],"29":[0.6898867309502482,0.36265091332444493],"3":[-0.4030015512300034,-0.08096270034885429],"30":[0.1651471758915696,0.10366604654728985],"31":[0.26845947367789186,-0.04300632191836509],"32":[0.3524412544278519,0.39211695071947844],"33":[0.32952901390959105,0.31830715314152963],"4":[-0.6888344787715278,-0.5346440580140434],"5":[-0.7135773297820787,-0.7472010081569357],"6":[-0.8187775007794529,-0.6406695628891098],"7":[-0.4047616263185755,0.02530823112742171],"8":[0.028543317987237613,0.1292175568774254],"9":[-0.040800694062622475,0.479744343762042]}},"id":"24184","type":"StaticLayoutProvider"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"24161","type":"Range1d"},{"attributes":{"plot_height":400,"plot_width":400,"renderers":[{"id":"24175","type":"GraphRenderer"}],"title":{"id":"24166","type":"Title"},"toolbar":{"id":"24170","type":"Toolbar"},"x_range":{"id":"24161","type":"Range1d"},"x_scale":{"id":"24196","type":"LinearScale"},"y_range":{"id":"24162","type":"Range1d"},"y_scale":{"id":"24197","type":"LinearScale"}},"id":"24163","type":"Plot"},{"attributes":{},"id":"24204","type":"NodesOnly"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"24162","type":"Range1d"},{"attributes":{"source":{"id":"24177","type":"ColumnDataSource"}},"id":"24179","type":"CDSView"},{"attributes":{"overlay":{"id":"24209","type":"BoxAnnotation"}},"id":"24168","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"24181","type":"ColumnDataSource"},"glyph":{"id":"24190","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"24183","type":"CDSView"}},"id":"24182","type":"GlyphRenderer"},{"attributes":{},"id":"24213","type":"UnionRenderers"},{"attributes":{"edge_renderer":{"id":"24182","type":"GlyphRenderer"},"inspection_policy":{"id":"24199","type":"NodesOnly"},"layout_provider":{"id":"24184","type":"StaticLayoutProvider"},"node_renderer":{"id":"24178","type":"GlyphRenderer"},"selection_policy":{"id":"24204","type":"NodesOnly"}},"id":"24175","type":"GraphRenderer"},{"attributes":{"data_source":{"id":"24177","type":"ColumnDataSource"},"glyph":{"id":"24185","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"24179","type":"CDSView"}},"id":"24178","type":"GlyphRenderer"},{"attributes":{},"id":"24199","type":"NodesOnly"},{"attributes":{},"id":"24196","type":"LinearScale"},{"attributes":{"text":"Graph Interaction Demonstration"},"id":"24166","type":"Title"}],"root_ids":["24163"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"f9cbef0e-cc4a-4b75-a3d5-93b7af9e8492","roots":{"24163":"82c55799-63db-4594-8c94-24e5b8801d56"}}];
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