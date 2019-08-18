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
      };var element = document.getElementById("8dcd8f79-9959-457a-892f-ca756888d6d7");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '8dcd8f79-9959-457a-892f-ca756888d6d7' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.0.min.js"];
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
                    
                  var docs_json = '{"86f543f8-0dd3-4f80-a403-be9a9a8d5fbe":{"roots":{"references":[{"attributes":{},"id":"24235","type":"Selection"},{"attributes":{},"id":"24221","type":"NodesOnly"},{"attributes":{"edge_renderer":{"id":"24204","type":"GlyphRenderer"},"inspection_policy":{"id":"24230","type":"NodesOnly"},"layout_provider":{"id":"24206","type":"StaticLayoutProvider"},"node_renderer":{"id":"24200","type":"GlyphRenderer"},"selection_policy":{"id":"24221","type":"NodesOnly"}},"id":"24197","type":"GraphRenderer"},{"attributes":{"overlay":{"id":"24231","type":"BoxAnnotation"}},"id":"24190","type":"BoxZoomTool"},{"attributes":{},"id":"24230","type":"NodesOnly"},{"attributes":{"callback":null,"data":{"club":["Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Officer","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Officer","Mr. Hi","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]},"selected":{"id":"24235","type":"Selection"},"selection_policy":{"id":"24234","type":"UnionRenderers"}},"id":"24199","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"24189","type":"HoverTool"},{"id":"24190","type":"BoxZoomTool"},{"id":"24191","type":"ResetTool"}]},"id":"24192","type":"Toolbar"},{"attributes":{},"id":"24191","type":"ResetTool"},{"attributes":{"data_source":{"id":"24199","type":"ColumnDataSource"},"glyph":{"id":"24207","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"24201","type":"CDSView"}},"id":"24200","type":"GlyphRenderer"},{"attributes":{},"id":"24220","type":"LinearScale"},{"attributes":{"source":{"id":"24199","type":"ColumnDataSource"}},"id":"24201","type":"CDSView"},{"attributes":{"data_source":{"id":"24203","type":"ColumnDataSource"},"glyph":{"id":"24212","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"24205","type":"CDSView"}},"id":"24204","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"24184","type":"Range1d"},{"attributes":{"line_alpha":{"value":0.8},"line_color":{"field":"edge_color"}},"id":"24212","type":"MultiLine"},{"attributes":{},"id":"24232","type":"UnionRenderers"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"24183","type":"Range1d"},{"attributes":{"callback":null,"tooltips":[["index","@index"],["club","@club"]]},"id":"24189","type":"HoverTool"},{"attributes":{"source":{"id":"24203","type":"ColumnDataSource"}},"id":"24205","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"24231","type":"BoxAnnotation"},{"attributes":{"plot_height":400,"plot_width":400,"renderers":[{"id":"24197","type":"GraphRenderer"}],"title":{"id":"24188","type":"Title"},"toolbar":{"id":"24192","type":"Toolbar"},"x_range":{"id":"24183","type":"Range1d"},"x_scale":{"id":"24218","type":"LinearScale"},"y_range":{"id":"24184","type":"Range1d"},"y_scale":{"id":"24220","type":"LinearScale"}},"id":"24185","type":"Plot"},{"attributes":{},"id":"24233","type":"Selection"},{"attributes":{},"id":"24218","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#2b83ba"},"size":{"units":"screen","value":15}},"id":"24207","type":"Circle"},{"attributes":{"graph_layout":{"0":[0.3342978133207104,0.11185686396473488],"1":[0.15492619210584227,0.17976713520384435],"10":[0.6596853457007857,0.05096439428547845],"11":[0.5335448144435829,0.4256441967634509],"12":[0.4939880634932415,-0.1168547544314276],"13":[0.07378423442523063,0.03277733603826561],"14":[-0.5072901277695354,0.13927720222982112],"15":[-0.6575236180219262,-0.0939985726577345],"16":[1.0,0.24295498028455184],"17":[0.36375140834641584,0.3358201474040399],"18":[-0.6096610429426631,-0.21766773612105123],"19":[-0.006090598693474802,0.18623292455016643],"2":[-0.0036848579003547215,-0.030944307356239088],"20":[-0.5321720302787107,-0.29623414182203867],"21":[0.2622157049091576,0.3990501529397686],"22":[-0.5765180141531617,0.03600796129342232],"23":[-0.3925149993390845,-0.3147963855956193],"24":[-0.09852734548988432,-0.53528561359566],"25":[-0.23814580557982884,-0.5226995558955158],"26":[-0.6868559139388551,0.07638869254979176],"27":[-0.19829339437799237,-0.3117736544903013],"28":[-0.1573484444124652,-0.17463774388086195],"29":[-0.5513908676892796,-0.11249392467524119],"3":[0.2709915664700119,-0.04196324495302436],"30":[-0.18383175258831022,0.10318186942998395],"31":[-0.06429424061766074,-0.2374460723520053],"32":[-0.37031039622444667,-0.1004529511664226],"33":[-0.33252284086637207,-0.0481680952324589],"4":[0.6249105057170837,0.19646250072066357],"5":[0.7637016436696098,0.13369621316739586],"6":[0.742275576218206,0.24525053379398792],"7":[0.2357663722493845,0.04476904468738449],"8":[-0.08602095086292748,0.02858996801877071],"9":[-0.2608419993223294,0.1867246369000792]}},"id":"24206","type":"StaticLayoutProvider"},{"attributes":{"text":"Graph Interaction Demonstration"},"id":"24188","type":"Title"},{"attributes":{},"id":"24234","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"edge_color":["black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","red","black","black","black","black","black","black","black","red","black","black","black","red","black","red","red","red","black","black","black","black","black","black","black","black","black","red","red","red","black","red","black","black","black","black","black","black","red","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black"],"end":[1,2,3,4,5,6,7,8,10,11,12,13,17,19,21,31,2,3,7,13,17,19,21,30,3,7,8,9,13,27,28,32,7,12,13,6,10,6,10,16,16,30,32,33,33,33,32,33,32,33,32,33,33,32,33,32,33,25,27,29,32,33,25,27,31,31,29,33,33,31,33,32,33,32,33,32,33,33],"start":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,4,4,5,5,5,6,8,8,8,9,13,14,14,15,15,18,18,19,20,20,22,22,23,23,23,23,23,24,24,24,25,26,26,27,28,28,29,29,30,30,31,31,32]},"selected":{"id":"24233","type":"Selection"},"selection_policy":{"id":"24232","type":"UnionRenderers"}},"id":"24203","type":"ColumnDataSource"}],"root_ids":["24185"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"86f543f8-0dd3-4f80-a403-be9a9a8d5fbe","roots":{"24185":"8dcd8f79-9959-457a-892f-ca756888d6d7"}}];
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