(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("5bb4bfff-f3db-49be-b372-10987c512bf5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5bb4bfff-f3db-49be-b372-10987c512bf5' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"ef7992eb-327e-496b-814f-1ef7f779d796":{"roots":{"references":[{"attributes":{},"id":"1efd7f9a-058f-4ab8-bf28-a80005a4d408","type":"BasicTicker"},{"attributes":{},"id":"7fc5386d-c233-4386-a943-d6a1fc0c33d6","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x2","y2","w1","url","h1","x1","y1"],"data":{"h1":{"__ndarray__":"AAAAAAAAJEAAAAAAAAA0QAAAAAAAAD5AAAAAAAAAREAAAAAAAABJQA==","dtype":"float64","shape":[5]},"url":["http://bokeh.pydata.org/en/latest/_static/images/logo.png","http://bokeh.pydata.org/en/latest/_static/images/logo.png","http://bokeh.pydata.org/en/latest/_static/images/logo.png","http://bokeh.pydata.org/en/latest/_static/images/logo.png","http://bokeh.pydata.org/en/latest/_static/images/logo.png"],"w1":{"__ndarray__":"AAAAAAAAJEAAAAAAAAA0QAAAAAAAAD5AAAAAAAAAREAAAAAAAABJQA==","dtype":"float64","shape":[5]},"x1":{"__ndarray__":"AAAAAAAAAAAAAAAAAMBCQAAAAAAAwFJAAAAAAAAgXEAAAAAAAMBiQA==","dtype":"float64","shape":[5]},"x2":{"__ndarray__":"AAAAAAAAScAAAAAAAAAAAAAAAAAAAElAAAAAAAAAWUAAAAAAAMBiQA==","dtype":"float64","shape":[5]},"y1":{"__ndarray__":"AAAAAAAAAAAAAAAAAMBCQAAAAAAAwFJAAAAAAAAgXEAAAAAAAMBiQA==","dtype":"float64","shape":[5]},"y2":{"__ndarray__":"AAAAAAAAAAAAAAAAAABJQAAAAAAAAFlAAAAAAADAYkAAAAAAAABpQA==","dtype":"float64","shape":[5]}}},"id":"9ffa3f9d-c7cd-4291-b115-20ed29f424a2","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":200,"start":-100},"id":"0c67e3a0-97a5-435b-8d1f-0748c1431916","type":"Range1d"},{"attributes":{},"id":"52a89c87-0868-40c0-835f-08922a59f5f4","type":"ToolEvents"},{"attributes":{"data_source":{"id":"9ffa3f9d-c7cd-4291-b115-20ed29f424a2","type":"ColumnDataSource"},"glyph":{"id":"a344ef5c-fda8-47d3-92b5-dca869238166","type":"ImageURL"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f7cc7bc2-6c2a-4c07-bfa7-82a57dcc79d7","type":"GlyphRenderer"},{"attributes":{},"id":"cb8f03dd-4619-497d-b5b5-5c8c620eea2e","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"43a83633-7fa1-42e2-aeb1-8a325b15b7c0","type":"Plot"},"ticker":{"id":"7fc5386d-c233-4386-a943-d6a1fc0c33d6","type":"BasicTicker"}},"id":"27ba4539-f6e0-4ba2-8b88-853589b6aa0b","type":"Grid"},{"attributes":{"data_source":{"id":"9ffa3f9d-c7cd-4291-b115-20ed29f424a2","type":"ColumnDataSource"},"glyph":{"id":"2250c77a-b70c-479b-a82f-686c7093d2fd","type":"ImageURL"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ef98f9ea-ee3f-4d87-a933-f31034cc0f18","type":"GlyphRenderer"},{"attributes":{"anchor":"bottom_right","url":{"value":"http://bokeh.pydata.org/en/latest/_static/images/logo.png"},"x":{"value":200},"y":{"value":-100}},"id":"2250c77a-b70c-479b-a82f-686c7093d2fd","type":"ImageURL"},{"attributes":{"below":[{"id":"9e158e84-aa5a-4da3-be4c-3d6af8e50d97","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"ac996b4c-44e6-451b-8b65-4422621cd158","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"24ef845b-8c5a-4ca5-941f-7e51a7174ed6","type":"GlyphRenderer"},{"id":"f7cc7bc2-6c2a-4c07-bfa7-82a57dcc79d7","type":"GlyphRenderer"},{"id":"ef98f9ea-ee3f-4d87-a933-f31034cc0f18","type":"GlyphRenderer"},{"id":"9e158e84-aa5a-4da3-be4c-3d6af8e50d97","type":"LinearAxis"},{"id":"ac996b4c-44e6-451b-8b65-4422621cd158","type":"LinearAxis"},{"id":"8d4cff34-56b1-490d-8ae7-00a693cb020d","type":"Grid"},{"id":"27ba4539-f6e0-4ba2-8b88-853589b6aa0b","type":"Grid"}],"title":null,"tool_events":{"id":"52a89c87-0868-40c0-835f-08922a59f5f4","type":"ToolEvents"},"toolbar":{"id":"333505b0-ede6-4532-82e7-6207771aed2c","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"53a29751-fd28-471a-91f6-89967a932914","type":"Range1d"},"y_range":{"id":"0c67e3a0-97a5-435b-8d1f-0748c1431916","type":"Range1d"}},"id":"43a83633-7fa1-42e2-aeb1-8a325b15b7c0","type":"Plot"},{"attributes":{"anchor":"center","h":{"field":"h1","units":"data"},"url":{"field":"url"},"w":{"field":"w1","units":"data"},"x":{"field":"x1"},"y":{"field":"y1"}},"id":"a641a0a4-bc47-4ebd-8b33-cbd7d1f9256c","type":"ImageURL"},{"attributes":{"plot":{"id":"43a83633-7fa1-42e2-aeb1-8a325b15b7c0","type":"Plot"},"ticker":{"id":"1efd7f9a-058f-4ab8-bf28-a80005a4d408","type":"BasicTicker"}},"id":"8d4cff34-56b1-490d-8ae7-00a693cb020d","type":"Grid"},{"attributes":{"callback":null,"end":200,"start":-100},"id":"53a29751-fd28-471a-91f6-89967a932914","type":"Range1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"333505b0-ede6-4532-82e7-6207771aed2c","type":"Toolbar"},{"attributes":{"formatter":{"id":"cb8f03dd-4619-497d-b5b5-5c8c620eea2e","type":"BasicTickFormatter"},"plot":{"id":"43a83633-7fa1-42e2-aeb1-8a325b15b7c0","type":"Plot"},"ticker":{"id":"7fc5386d-c233-4386-a943-d6a1fc0c33d6","type":"BasicTicker"}},"id":"ac996b4c-44e6-451b-8b65-4422621cd158","type":"LinearAxis"},{"attributes":{"data_source":{"id":"9ffa3f9d-c7cd-4291-b115-20ed29f424a2","type":"ColumnDataSource"},"glyph":{"id":"a641a0a4-bc47-4ebd-8b33-cbd7d1f9256c","type":"ImageURL"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"24ef845b-8c5a-4ca5-941f-7e51a7174ed6","type":"GlyphRenderer"},{"attributes":{},"id":"387464a1-6c1a-474a-a761-1463b0fe2bbd","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"387464a1-6c1a-474a-a761-1463b0fe2bbd","type":"BasicTickFormatter"},"plot":{"id":"43a83633-7fa1-42e2-aeb1-8a325b15b7c0","type":"Plot"},"ticker":{"id":"1efd7f9a-058f-4ab8-bf28-a80005a4d408","type":"BasicTicker"}},"id":"9e158e84-aa5a-4da3-be4c-3d6af8e50d97","type":"LinearAxis"},{"attributes":{"h":{"units":"data","value":20},"url":{"field":"url"},"w":{"units":"data","value":20},"x":{"field":"x2"},"y":{"field":"y2"}},"id":"a344ef5c-fda8-47d3-92b5-dca869238166","type":"ImageURL"}],"root_ids":["43a83633-7fa1-42e2-aeb1-8a325b15b7c0"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"ef7992eb-327e-496b-814f-1ef7f779d796","elementid":"5bb4bfff-f3db-49be-b372-10987c512bf5","modelid":"43a83633-7fa1-42e2-aeb1-8a325b15b7c0"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
