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
      };var element = document.getElementById("d055736c-f8ad-496c-aa15-7fae58d2b9aa");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd055736c-f8ad-496c-aa15-7fae58d2b9aa' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"fdf52d29-a57e-46ba-8a6f-408728e1ec09":{"roots":{"references":[{"attributes":{"formatter":{"id":"cfcd5850-3885-47e1-a9f0-a1eaf7e1d8df","type":"BasicTickFormatter"},"plot":{"id":"88569964-2351-4eae-9415-518a24c3ddbe","subtype":"Figure","type":"Plot"},"ticker":{"id":"60dd29a2-c14f-412d-bec2-4c46288e1ea4","type":"BasicTicker"}},"id":"f3f927aa-0fd0-4b56-a059-e69f1cd616cb","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":null},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"olive"},"line_dash":[],"line_width":{"value":8},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2c4e6946-35f6-40d7-9e01-38ef3fad8d4e","type":"BoxAnnotation"},{"attributes":{},"id":"60dd29a2-c14f-412d-bec2-4c46288e1ea4","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"f90278a6-be53-467a-9226-1a0827e69135","type":"Circle"},{"attributes":{"source":{"id":"a403346d-53ff-4b1e-8b26-8ca98ad1fb08","type":"ColumnDataSource"}},"id":"68972ce2-6300-49f5-b35e-69bffea59101","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[10,10],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"94e66f69-f7c5-4c2b-a73d-8337d2f93f12","type":"PolyAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"9b55033e-fe3b-424b-b8b7-63836f8c237b","type":"BoxAnnotation"},"renderers":[{"id":"baa03e9a-1f4a-4586-880c-60108b32fa17","type":"GlyphRenderer"}]},"id":"0296e611-1e66-4c55-af0f-963f955885fe","type":"BoxSelectTool"},{"attributes":{"overlay":{"id":"2c4e6946-35f6-40d7-9e01-38ef3fad8d4e","type":"BoxAnnotation"}},"id":"1efd801a-0ba1-4188-905a-2b1075395194","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":null},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9b55033e-fe3b-424b-b8b7-63836f8c237b","type":"BoxAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"94e66f69-f7c5-4c2b-a73d-8337d2f93f12","type":"PolyAnnotation"}},"id":"e7f9cbae-2505-405c-a4e9-e85f473792aa","type":"LassoSelectTool"},{"attributes":{"below":[{"id":"f4b0d685-9974-430e-94f4-f522750d8f14","type":"LinearAxis"}],"left":[{"id":"f3f927aa-0fd0-4b56-a059-e69f1cd616cb","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"f4b0d685-9974-430e-94f4-f522750d8f14","type":"LinearAxis"},{"id":"410ee6ef-3a8c-4568-926a-a6f171e4f524","type":"Grid"},{"id":"f3f927aa-0fd0-4b56-a059-e69f1cd616cb","type":"LinearAxis"},{"id":"531ca51d-44a4-4320-9742-8456d41f6229","type":"Grid"},{"id":"9b55033e-fe3b-424b-b8b7-63836f8c237b","type":"BoxAnnotation"},{"id":"2c4e6946-35f6-40d7-9e01-38ef3fad8d4e","type":"BoxAnnotation"},{"id":"94e66f69-f7c5-4c2b-a73d-8337d2f93f12","type":"PolyAnnotation"},{"id":"baa03e9a-1f4a-4586-880c-60108b32fa17","type":"GlyphRenderer"}],"title":{"id":"6d5d4c2d-d5a5-46c7-bbc5-ba596a9b0522","type":"Title"},"toolbar":{"id":"9eb8b090-f6c0-4ed0-9c98-da8ab7452772","type":"Toolbar"},"x_range":{"id":"176d767e-2852-425c-ac38-ead698d7bc08","type":"DataRange1d"},"x_scale":{"id":"0afc9c1f-601a-4409-945a-00aaf14e0491","type":"LinearScale"},"y_range":{"id":"5148c671-3e3a-438a-9354-518f4afd8d6b","type":"DataRange1d"},"y_scale":{"id":"7bb44be6-eeb3-4a64-9a01-b4fd6d97dbc8","type":"LinearScale"}},"id":"88569964-2351-4eae-9415-518a24c3ddbe","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"8210b5d4-6155-45d1-a4af-2f081ae4d6b9","type":"Circle"},{"attributes":{},"id":"77509553-49ee-4e04-ab53-34037e8d666d","type":"BasicTicker"},{"attributes":{"plot":{"id":"88569964-2351-4eae-9415-518a24c3ddbe","subtype":"Figure","type":"Plot"},"ticker":{"id":"77509553-49ee-4e04-ab53-34037e8d666d","type":"BasicTicker"}},"id":"410ee6ef-3a8c-4568-926a-a6f171e4f524","type":"Grid"},{"attributes":{"data_source":{"id":"a403346d-53ff-4b1e-8b26-8ca98ad1fb08","type":"ColumnDataSource"},"glyph":{"id":"f90278a6-be53-467a-9226-1a0827e69135","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8210b5d4-6155-45d1-a4af-2f081ae4d6b9","type":"Circle"},"selection_glyph":null,"view":{"id":"68972ce2-6300-49f5-b35e-69bffea59101","type":"CDSView"}},"id":"baa03e9a-1f4a-4586-880c-60108b32fa17","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Select and Zoom"},"id":"6d5d4c2d-d5a5-46c7-bbc5-ba596a9b0522","type":"Title"},{"attributes":{},"id":"7bb44be6-eeb3-4a64-9a01-b4fd6d97dbc8","type":"LinearScale"},{"attributes":{"callback":null},"id":"176d767e-2852-425c-ac38-ead698d7bc08","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0296e611-1e66-4c55-af0f-963f955885fe","type":"BoxSelectTool"},{"id":"1efd801a-0ba1-4188-905a-2b1075395194","type":"BoxZoomTool"},{"id":"e7f9cbae-2505-405c-a4e9-e85f473792aa","type":"LassoSelectTool"},{"id":"17b8c788-9168-4ad1-9be0-47354c36a0ca","type":"ResetTool"}]},"id":"9eb8b090-f6c0-4ed0-9c98-da8ab7452772","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","shape":[200]}}},"id":"a403346d-53ff-4b1e-8b26-8ca98ad1fb08","type":"ColumnDataSource"},{"attributes":{},"id":"17b8c788-9168-4ad1-9be0-47354c36a0ca","type":"ResetTool"},{"attributes":{},"id":"0afc9c1f-601a-4409-945a-00aaf14e0491","type":"LinearScale"},{"attributes":{"formatter":{"id":"da529390-48b9-4bd1-9617-494e06eb011b","type":"BasicTickFormatter"},"plot":{"id":"88569964-2351-4eae-9415-518a24c3ddbe","subtype":"Figure","type":"Plot"},"ticker":{"id":"77509553-49ee-4e04-ab53-34037e8d666d","type":"BasicTicker"}},"id":"f4b0d685-9974-430e-94f4-f522750d8f14","type":"LinearAxis"},{"attributes":{},"id":"da529390-48b9-4bd1-9617-494e06eb011b","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"5148c671-3e3a-438a-9354-518f4afd8d6b","type":"DataRange1d"},{"attributes":{},"id":"cfcd5850-3885-47e1-a9f0-a1eaf7e1d8df","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"88569964-2351-4eae-9415-518a24c3ddbe","subtype":"Figure","type":"Plot"},"ticker":{"id":"60dd29a2-c14f-412d-bec2-4c46288e1ea4","type":"BasicTicker"}},"id":"531ca51d-44a4-4320-9742-8456d41f6229","type":"Grid"}],"root_ids":["88569964-2351-4eae-9415-518a24c3ddbe"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"fdf52d29-a57e-46ba-8a6f-408728e1ec09","elementid":"d055736c-f8ad-496c-aa15-7fae58d2b9aa","modelid":"88569964-2351-4eae-9415-518a24c3ddbe"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
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
