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
      };var element = document.getElementById("bd75b0d1-da2d-4915-8436-a5cd1630e464");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'bd75b0d1-da2d-4915-8436-a5cd1630e464' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"4c415346-bd6d-4072-900a-23a0fef9fe39":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"24190","type":"HoverTool"},{"id":"24191","type":"BoxZoomTool"},{"id":"24192","type":"ResetTool"}]},"id":"24193","type":"Toolbar"},{"attributes":{"callback":null,"data":{"club":["Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Mr. Hi","Mr. Hi","Mr. Hi","Officer","Officer","Mr. Hi","Mr. Hi","Officer","Mr. Hi","Officer","Mr. Hi","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer","Officer"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]},"selected":{"id":"24235","type":"Selection"},"selection_policy":{"id":"24236","type":"UnionRenderers"}},"id":"24200","type":"ColumnDataSource"},{"attributes":{"text":"Graph Interaction Demonstration"},"id":"24189","type":"Title"},{"attributes":{},"id":"24222","type":"NodesOnly"},{"attributes":{"data_source":{"id":"24200","type":"ColumnDataSource"},"glyph":{"id":"24208","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"24202","type":"CDSView"}},"id":"24201","type":"GlyphRenderer"},{"attributes":{"edge_renderer":{"id":"24205","type":"GlyphRenderer"},"inspection_policy":{"id":"24222","type":"NodesOnly"},"layout_provider":{"id":"24207","type":"StaticLayoutProvider"},"node_renderer":{"id":"24201","type":"GlyphRenderer"},"selection_policy":{"id":"24223","type":"NodesOnly"}},"id":"24198","type":"GraphRenderer"},{"attributes":{},"id":"24233","type":"Selection"},{"attributes":{"callback":null,"data":{"edge_color":["black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","red","black","black","black","black","black","black","black","red","black","black","black","red","black","red","red","red","black","black","black","black","black","black","black","black","black","red","red","red","black","red","black","black","black","black","black","black","red","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black"],"end":[1,2,3,4,5,6,7,8,10,11,12,13,17,19,21,31,2,3,7,13,17,19,21,30,3,7,8,9,13,27,28,32,7,12,13,6,10,6,10,16,16,30,32,33,33,33,32,33,32,33,32,33,33,32,33,32,33,25,27,29,32,33,25,27,31,31,29,33,33,31,33,32,33,32,33,32,33,33],"start":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,4,4,5,5,5,6,8,8,8,9,13,14,14,15,15,18,18,19,20,20,22,22,23,23,23,23,23,24,24,24,25,26,26,27,28,28,29,29,30,30,31,31,32]},"selected":{"id":"24233","type":"Selection"},"selection_policy":{"id":"24234","type":"UnionRenderers"}},"id":"24204","type":"ColumnDataSource"},{"attributes":{},"id":"24236","type":"UnionRenderers"},{"attributes":{},"id":"24235","type":"Selection"},{"attributes":{},"id":"24223","type":"NodesOnly"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"24185","type":"Range1d"},{"attributes":{"source":{"id":"24200","type":"ColumnDataSource"}},"id":"24202","type":"CDSView"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"24184","type":"Range1d"},{"attributes":{},"id":"24218","type":"LinearScale"},{"attributes":{},"id":"24192","type":"ResetTool"},{"attributes":{},"id":"24219","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#2b83ba"},"size":{"units":"screen","value":15}},"id":"24208","type":"Circle"},{"attributes":{},"id":"24234","type":"UnionRenderers"},{"attributes":{"source":{"id":"24204","type":"ColumnDataSource"}},"id":"24206","type":"CDSView"},{"attributes":{"overlay":{"id":"24232","type":"BoxAnnotation"}},"id":"24191","type":"BoxZoomTool"},{"attributes":{"callback":null,"tooltips":[["index","@index"],["club","@club"]]},"id":"24190","type":"HoverTool"},{"attributes":{"line_alpha":{"value":0.8},"line_color":{"field":"edge_color"}},"id":"24213","type":"MultiLine"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"24232","type":"BoxAnnotation"},{"attributes":{"graph_layout":{"0":[0.07481071743285636,0.35937456335622686],"1":[0.20636905401954728,0.1809355165172989],"10":[0.02910045175854128,0.7063020833875383],"11":[0.2498482473425914,0.7305918076693407],"12":[0.37538098252026414,0.5268135979189372],"13":[0.148170670085918,0.05837928113748897],"14":[0.23011261814694917,-0.5348584989674717],"15":[-0.12156908880562478,-0.6525024149101332],"16":[-0.2622990388012119,1.0],"17":[0.4091350659004337,0.3835272028927647],"18":[0.07762633476662623,-0.6793261627362138],"19":[-0.02111329235964811,0.07622654569274913],"2":[0.10202259021282527,-0.027029338025199322],"20":[0.15680670681421707,-0.6149390269587676],"21":[0.23544210576461932,0.480213155410215],"22":[-0.025960797460138352,-0.697755641448428],"23":[-0.3134334802843656,-0.41410919413893904],"24":[-0.5272967998430866,-0.11848131800400273],"25":[-0.5355506453777162,-0.26501433291748533],"26":[-0.30074914972280353,-0.6986457845680722],"27":[-0.2660826430545154,-0.21189026547938422],"28":[-0.10977113640253423,-0.1708116931421605],"29":[-0.24131181739348545,-0.5610927114134399],"3":[0.2671049935803921,0.2736950704621186],"30":[0.1626634145796013,-0.1934459983622803],"31":[-0.2255809219188116,-0.08714355063046539],"32":[-0.00978921324966014,-0.4176414070797918],"33":[-0.03408942143606149,-0.3591332183564528],"4":[-0.10744882999425485,0.6183632722945867],"5":[-0.0835894167176752,0.7931007539571797],"6":[-0.18811050191903622,0.7309437669400441],"7":[0.338358471667061,0.17687837234278747],"8":[0.03292372812670912,-0.09720463939511517],"9":[0.2778700420214762,-0.29431979344547055]}},"id":"24207","type":"StaticLayoutProvider"},{"attributes":{"data_source":{"id":"24204","type":"ColumnDataSource"},"glyph":{"id":"24213","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"24206","type":"CDSView"}},"id":"24205","type":"GlyphRenderer"},{"attributes":{"plot_height":400,"plot_width":400,"renderers":[{"id":"24198","type":"GraphRenderer"}],"title":{"id":"24189","type":"Title"},"toolbar":{"id":"24193","type":"Toolbar"},"x_range":{"id":"24184","type":"Range1d"},"x_scale":{"id":"24219","type":"LinearScale"},"y_range":{"id":"24185","type":"Range1d"},"y_scale":{"id":"24218","type":"LinearScale"}},"id":"24186","type":"Plot"}],"root_ids":["24186"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"4c415346-bd6d-4072-900a-23a0fef9fe39","roots":{"24186":"bd75b0d1-da2d-4915-8436-a5cd1630e464"}}];
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