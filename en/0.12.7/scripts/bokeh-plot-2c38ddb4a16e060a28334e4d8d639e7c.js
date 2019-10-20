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
      };var element = document.getElementById("9648633c-0f2d-40b9-8d28-10b9f706db52");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9648633c-0f2d-40b9-8d28-10b9f706db52' but no matching script tag was found. ")
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
                var docs_json = {"ebb354f4-6899-4709-9fb1-e07657403abc":{"roots":{"references":[{"attributes":{},"id":"fefdcc9f-269f-424e-84bc-d0e24281d170","type":"SaveTool"},{"attributes":{},"id":"597365ec-0049-48d6-b410-e6dc1e3ac984","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"1f759c78-36e4-440b-9fff-742fe3bd9fce","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"aeb37254-7d6e-45d2-8ab3-e8e49bb612da","type":"ColumnDataSource"},{"attributes":{},"id":"0e4cd188-6cb4-478f-a31e-139b8c428b22","type":"PanTool"},{"attributes":{},"id":"d9358c0c-0792-4180-a978-838cafb04aca","type":"BasicTicker"},{"attributes":{"formatter":{"id":"330a1c43-cda7-4c51-a6ab-a4c49cd7c495","type":"BasicTickFormatter"},"plot":{"id":"d0949aac-f878-4d79-8764-5725c1274efd","subtype":"Figure","type":"Plot"},"ticker":{"id":"d9358c0c-0792-4180-a978-838cafb04aca","type":"BasicTicker"}},"id":"1f9ec916-9897-43c0-9ee3-338e53b6aff3","type":"LinearAxis"},{"attributes":{"source":{"id":"aeb37254-7d6e-45d2-8ab3-e8e49bb612da","type":"ColumnDataSource"}},"id":"a99dd6dc-9462-45a8-8ed7-fd3056136797","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0e4cd188-6cb4-478f-a31e-139b8c428b22","type":"PanTool"},{"id":"21a7639c-3dee-490f-a3bc-cb73cd46d986","type":"WheelZoomTool"},{"id":"0ae494c3-2613-4d9d-8b8d-87872940b68c","type":"BoxZoomTool"},{"id":"fefdcc9f-269f-424e-84bc-d0e24281d170","type":"SaveTool"},{"id":"b3e93db3-d0a9-471a-baa2-a94d772dc396","type":"ResetTool"},{"id":"597365ec-0049-48d6-b410-e6dc1e3ac984","type":"HelpTool"}]},"id":"fbeae5e7-8c67-4cd1-8112-6673e8784a25","type":"Toolbar"},{"attributes":{"plot":{"id":"d0949aac-f878-4d79-8764-5725c1274efd","subtype":"Figure","type":"Plot"},"ticker":{"id":"41e5ae78-a4b7-4ef8-80c1-5528709c67cb","type":"BasicTicker"}},"id":"d5e7b9ce-2bc1-4f58-b51a-90c7f5e472a0","type":"Grid"},{"attributes":{},"id":"21a7639c-3dee-490f-a3bc-cb73cd46d986","type":"WheelZoomTool"},{"attributes":{},"id":"c9a2dc37-8f85-4eca-9753-4c9ac75ec00a","type":"LinearScale"},{"attributes":{"formatter":{"id":"093dcd29-a920-4771-9330-5f4ae93b7135","type":"BasicTickFormatter"},"plot":{"id":"d0949aac-f878-4d79-8764-5725c1274efd","subtype":"Figure","type":"Plot"},"ticker":{"id":"41e5ae78-a4b7-4ef8-80c1-5528709c67cb","type":"BasicTicker"}},"id":"1f128c06-c84f-469f-9de4-ec157821f761","type":"LinearAxis"},{"attributes":{"callback":null},"id":"2d4522d7-cd5e-4043-aa70-c1d660e93c69","type":"DataRange1d"},{"attributes":{"callback":null},"id":"a88fce8f-ccf3-4804-af65-79eade15f322","type":"DataRange1d"},{"attributes":{"overlay":{"id":"66e13d96-ab50-46e7-bac4-8cb3a26863ae","type":"BoxAnnotation"}},"id":"0ae494c3-2613-4d9d-8b8d-87872940b68c","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"aeb37254-7d6e-45d2-8ab3-e8e49bb612da","type":"ColumnDataSource"},"glyph":{"id":"93fa02b5-2915-4f9c-85f5-728fbb698aa1","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1f759c78-36e4-440b-9fff-742fe3bd9fce","type":"Circle"},"selection_glyph":null,"view":{"id":"a99dd6dc-9462-45a8-8ed7-fd3056136797","type":"CDSView"}},"id":"087e95c7-d5ae-41b6-9040-2df249ca41ed","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"66e13d96-ab50-46e7-bac4-8cb3a26863ae","type":"BoxAnnotation"},{"attributes":{},"id":"41e5ae78-a4b7-4ef8-80c1-5528709c67cb","type":"BasicTicker"},{"attributes":{},"id":"330a1c43-cda7-4c51-a6ab-a4c49cd7c495","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"93fa02b5-2915-4f9c-85f5-728fbb698aa1","type":"Circle"},{"attributes":{"background_fill_alpha":{"value":0.5},"background_fill_color":{"value":"beige"},"below":[{"id":"1f128c06-c84f-469f-9de4-ec157821f761","type":"LinearAxis"}],"left":[{"id":"1f9ec916-9897-43c0-9ee3-338e53b6aff3","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"1f128c06-c84f-469f-9de4-ec157821f761","type":"LinearAxis"},{"id":"d5e7b9ce-2bc1-4f58-b51a-90c7f5e472a0","type":"Grid"},{"id":"1f9ec916-9897-43c0-9ee3-338e53b6aff3","type":"LinearAxis"},{"id":"82e97ed8-0436-43e8-ac0a-572cf64b0f17","type":"Grid"},{"id":"66e13d96-ab50-46e7-bac4-8cb3a26863ae","type":"BoxAnnotation"},{"id":"087e95c7-d5ae-41b6-9040-2df249ca41ed","type":"GlyphRenderer"}],"title":{"id":"0548f388-7fe7-444c-8ffa-7e1e065f19c4","type":"Title"},"toolbar":{"id":"fbeae5e7-8c67-4cd1-8112-6673e8784a25","type":"Toolbar"},"x_range":{"id":"a88fce8f-ccf3-4804-af65-79eade15f322","type":"DataRange1d"},"x_scale":{"id":"b1f1bf0b-01c4-428c-a57e-c19a2c5276cf","type":"LinearScale"},"y_range":{"id":"2d4522d7-cd5e-4043-aa70-c1d660e93c69","type":"DataRange1d"},"y_scale":{"id":"c9a2dc37-8f85-4eca-9753-4c9ac75ec00a","type":"LinearScale"}},"id":"d0949aac-f878-4d79-8764-5725c1274efd","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"093dcd29-a920-4771-9330-5f4ae93b7135","type":"BasicTickFormatter"},{"attributes":{},"id":"b3e93db3-d0a9-471a-baa2-a94d772dc396","type":"ResetTool"},{"attributes":{},"id":"b1f1bf0b-01c4-428c-a57e-c19a2c5276cf","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"d0949aac-f878-4d79-8764-5725c1274efd","subtype":"Figure","type":"Plot"},"ticker":{"id":"d9358c0c-0792-4180-a978-838cafb04aca","type":"BasicTicker"}},"id":"82e97ed8-0436-43e8-ac0a-572cf64b0f17","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"0548f388-7fe7-444c-8ffa-7e1e065f19c4","type":"Title"}],"root_ids":["d0949aac-f878-4d79-8764-5725c1274efd"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"ebb354f4-6899-4709-9fb1-e07657403abc","elementid":"9648633c-0f2d-40b9-8d28-10b9f706db52","modelid":"d0949aac-f878-4d79-8764-5725c1274efd"}];
                
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
