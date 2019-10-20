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
      };var element = document.getElementById("50948ddb-d861-402f-af78-1a31987b957c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '50948ddb-d861-402f-af78-1a31987b957c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                    
                  var docs_json = '{"b87b6ac9-bf06-469f-9bb2-5335097f5458":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"9af3a23b-f216-4608-8e66-91602c4cda14","type":"Circle"},{"attributes":{},"id":"3ae38759-cd40-4b3c-ae4e-df0bcfd0ea69","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[10,10],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"604e7f72-bc3d-4061-b45d-48e4b85e4c27","type":"PolyAnnotation"},{"attributes":{},"id":"ac2e2e1c-bca4-481d-94f7-c87db136684b","type":"LinearScale"},{"attributes":{"callback":null},"id":"0f73e0d3-e9e8-4277-a8b4-e9dab53d8523","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"56b66f37-a708-470f-adaa-64f0deeb8a27","type":"Circle"},{"attributes":{},"id":"22b4a1dc-89b2-4fde-a77a-5a537f6fd465","type":"BasicTickFormatter"},{"attributes":{},"id":"7570cfd4-1049-49ae-a688-097bf5636eef","type":"BasicTicker"},{"attributes":{"formatter":{"id":"22b4a1dc-89b2-4fde-a77a-5a537f6fd465","type":"BasicTickFormatter"},"plot":{"id":"ae39d387-cd7a-4035-96c4-afcc5cc7db2f","subtype":"Figure","type":"Plot"},"ticker":{"id":"73efb686-a9e1-4043-af1b-bd2e4661e5d3","type":"BasicTicker"}},"id":"654a24ce-6741-4fe8-ad0e-8d165de1c7cc","type":"LinearAxis"},{"attributes":{},"id":"d186b257-426b-440a-914b-f688974e5025","type":"LinearScale"},{"attributes":{},"id":"26d872b2-b945-4547-b8c8-ab9c4371d600","type":"BasicTickFormatter"},{"attributes":{},"id":"74c0c86a-ccec-4f76-b6d8-d668eff11b3f","type":"ResetTool"},{"attributes":{"overlay":{"id":"2b00c635-a926-4189-b4ed-44501523049e","type":"BoxAnnotation"}},"id":"88ebc050-a90d-423f-b146-386021fba12f","type":"BoxZoomTool"},{"attributes":{"callback":null,"overlay":{"id":"f1dc4977-e847-4124-a6a5-e6b50e7c5ec5","type":"BoxAnnotation"}},"id":"f724b821-4b40-4063-98ad-0fce654c060c","type":"BoxSelectTool"},{"attributes":{"dimension":1,"plot":{"id":"ae39d387-cd7a-4035-96c4-afcc5cc7db2f","subtype":"Figure","type":"Plot"},"ticker":{"id":"7570cfd4-1049-49ae-a688-097bf5636eef","type":"BasicTicker"}},"id":"4363bf56-c6ac-4040-b808-3de4ff5d4a51","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"f724b821-4b40-4063-98ad-0fce654c060c","type":"BoxSelectTool"},{"id":"88ebc050-a90d-423f-b146-386021fba12f","type":"BoxZoomTool"},{"id":"df7726f1-bada-485d-b87c-ea3457188d68","type":"LassoSelectTool"},{"id":"74c0c86a-ccec-4f76-b6d8-d668eff11b3f","type":"ResetTool"}]},"id":"e9c3f42f-9781-43cf-a90f-583032f57e18","type":"Toolbar"},{"attributes":{"formatter":{"id":"26d872b2-b945-4547-b8c8-ab9c4371d600","type":"BasicTickFormatter"},"plot":{"id":"ae39d387-cd7a-4035-96c4-afcc5cc7db2f","subtype":"Figure","type":"Plot"},"ticker":{"id":"7570cfd4-1049-49ae-a688-097bf5636eef","type":"BasicTicker"}},"id":"4cafbc8f-b7d3-4ef6-97e5-a4274f1ea580","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":null},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f1dc4977-e847-4124-a6a5-e6b50e7c5ec5","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":"Select and Zoom"},"id":"de39ae57-7e28-4101-9be9-72c6faffb174","type":"Title"},{"attributes":{"below":[{"id":"654a24ce-6741-4fe8-ad0e-8d165de1c7cc","type":"LinearAxis"}],"left":[{"id":"4cafbc8f-b7d3-4ef6-97e5-a4274f1ea580","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"654a24ce-6741-4fe8-ad0e-8d165de1c7cc","type":"LinearAxis"},{"id":"3f48f2f1-7b5b-4d5e-a334-c5101ffdd1fa","type":"Grid"},{"id":"4cafbc8f-b7d3-4ef6-97e5-a4274f1ea580","type":"LinearAxis"},{"id":"4363bf56-c6ac-4040-b808-3de4ff5d4a51","type":"Grid"},{"id":"f1dc4977-e847-4124-a6a5-e6b50e7c5ec5","type":"BoxAnnotation"},{"id":"2b00c635-a926-4189-b4ed-44501523049e","type":"BoxAnnotation"},{"id":"604e7f72-bc3d-4061-b45d-48e4b85e4c27","type":"PolyAnnotation"},{"id":"22f163e9-aea3-42cb-a02e-62859ca63942","type":"GlyphRenderer"}],"title":{"id":"de39ae57-7e28-4101-9be9-72c6faffb174","type":"Title"},"toolbar":{"id":"e9c3f42f-9781-43cf-a90f-583032f57e18","type":"Toolbar"},"x_range":{"id":"2cb30416-57c6-4003-99b7-2138386ccb33","type":"DataRange1d"},"x_scale":{"id":"d186b257-426b-440a-914b-f688974e5025","type":"LinearScale"},"y_range":{"id":"0f73e0d3-e9e8-4277-a8b4-e9dab53d8523","type":"DataRange1d"},"y_scale":{"id":"ac2e2e1c-bca4-481d-94f7-c87db136684b","type":"LinearScale"}},"id":"ae39d387-cd7a-4035-96c4-afcc5cc7db2f","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","shape":[200]}},"selected":{"id":"3ae38759-cd40-4b3c-ae4e-df0bcfd0ea69","type":"Selection"},"selection_policy":{"id":"d64b8a5c-cf52-44ca-941a-0fa9da320d8b","type":"UnionRenderers"}},"id":"fc0433d9-99ad-4c5f-80a2-d74443d0881f","type":"ColumnDataSource"},{"attributes":{},"id":"d64b8a5c-cf52-44ca-941a-0fa9da320d8b","type":"UnionRenderers"},{"attributes":{},"id":"73efb686-a9e1-4043-af1b-bd2e4661e5d3","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":null},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"olive"},"line_dash":[],"line_width":{"value":8},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2b00c635-a926-4189-b4ed-44501523049e","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"2cb30416-57c6-4003-99b7-2138386ccb33","type":"DataRange1d"},{"attributes":{"plot":{"id":"ae39d387-cd7a-4035-96c4-afcc5cc7db2f","subtype":"Figure","type":"Plot"},"ticker":{"id":"73efb686-a9e1-4043-af1b-bd2e4661e5d3","type":"BasicTicker"}},"id":"3f48f2f1-7b5b-4d5e-a334-c5101ffdd1fa","type":"Grid"},{"attributes":{"callback":null,"overlay":{"id":"604e7f72-bc3d-4061-b45d-48e4b85e4c27","type":"PolyAnnotation"}},"id":"df7726f1-bada-485d-b87c-ea3457188d68","type":"LassoSelectTool"},{"attributes":{"source":{"id":"fc0433d9-99ad-4c5f-80a2-d74443d0881f","type":"ColumnDataSource"}},"id":"82c5e44d-2baf-4b9b-98cc-82fdd5a0c5f4","type":"CDSView"},{"attributes":{"data_source":{"id":"fc0433d9-99ad-4c5f-80a2-d74443d0881f","type":"ColumnDataSource"},"glyph":{"id":"9af3a23b-f216-4608-8e66-91602c4cda14","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"56b66f37-a708-470f-adaa-64f0deeb8a27","type":"Circle"},"selection_glyph":null,"view":{"id":"82c5e44d-2baf-4b9b-98cc-82fdd5a0c5f4","type":"CDSView"}},"id":"22f163e9-aea3-42cb-a02e-62859ca63942","type":"GlyphRenderer"}],"root_ids":["ae39d387-cd7a-4035-96c4-afcc5cc7db2f"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"b87b6ac9-bf06-469f-9bb2-5335097f5458","roots":{"ae39d387-cd7a-4035-96c4-afcc5cc7db2f":"50948ddb-d861-402f-af78-1a31987b957c"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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