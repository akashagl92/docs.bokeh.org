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
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
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
      };var element = document.getElementById("e478a693-9632-446a-b87c-5754d707f482");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e478a693-9632-446a-b87c-5754d707f482' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"ccb0fd76-05d7-4f6b-b1b4-542f319640dd":{"roots":{"references":[{"attributes":{},"id":"24f1f051-2f08-4659-b02a-4a459e71de00","type":"ToolEvents"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3db39d6a-f111-4689-8906-2f2a9804c869","type":"PanTool"},{"id":"5380da11-fe9f-4d95-a02f-181ab1ec8a4d","type":"WheelZoomTool"},{"id":"cd1ec5bf-e4e9-4585-9eeb-ab2d77b6ee24","type":"BoxZoomTool"},{"id":"a141ff32-e0df-4600-bce6-7d8ff4b600cc","type":"SaveTool"},{"id":"65f21257-7723-442e-af7d-9ff18a15e34d","type":"ResetTool"},{"id":"5ba0ed9c-6778-4826-9eed-7c2b82668d12","type":"HelpTool"}]},"id":"33aa79be-ce97-4e22-9281-d784754e3d83","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"cd59ccf2-97c0-4ce8-bb34-f3d584b4ac65","type":"Circle"},{"attributes":{"plot":{"id":"89d476ff-6359-4f82-9387-6203628d64a2","subtype":"Figure","type":"Plot"}},"id":"a141ff32-e0df-4600-bce6-7d8ff4b600cc","type":"SaveTool"},{"attributes":{},"id":"d22916d7-341e-4051-ad5f-ecfb69274bf2","type":"BasicTickFormatter"},{"attributes":{},"id":"0c2f17de-bd3e-4617-a315-0e11375b4ee3","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"89d476ff-6359-4f82-9387-6203628d64a2","subtype":"Figure","type":"Plot"},"ticker":{"id":"0c2f17de-bd3e-4617-a315-0e11375b4ee3","type":"BasicTicker"}},"id":"9ec721a4-84f0-43ee-b2c4-f588332c4762","type":"Grid"},{"attributes":{"data_source":{"id":"09152e08-d3ce-4ef1-a6cb-7b82d1324058","type":"ColumnDataSource"},"glyph":{"id":"7b723996-715d-46de-bbcf-be701c0be42e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"cd59ccf2-97c0-4ce8-bb34-f3d584b4ac65","type":"Circle"},"selection_glyph":null},"id":"130fbb36-8206-4370-925e-805fd562162f","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"89d476ff-6359-4f82-9387-6203628d64a2","subtype":"Figure","type":"Plot"}},"id":"5380da11-fe9f-4d95-a02f-181ab1ec8a4d","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"d22916d7-341e-4051-ad5f-ecfb69274bf2","type":"BasicTickFormatter"},"plot":{"id":"89d476ff-6359-4f82-9387-6203628d64a2","subtype":"Figure","type":"Plot"},"ticker":{"id":"15dd5c83-c586-445a-acb1-fc23d5091f99","type":"BasicTicker"}},"id":"c42a0e0e-2026-4d13-8b40-48a501e8b810","type":"LinearAxis"},{"attributes":{"plot":{"id":"89d476ff-6359-4f82-9387-6203628d64a2","subtype":"Figure","type":"Plot"},"ticker":{"id":"15dd5c83-c586-445a-acb1-fc23d5091f99","type":"BasicTicker"}},"id":"4e51ae6f-ef3e-40c5-9957-f8f166078146","type":"Grid"},{"attributes":{"callback":null},"id":"090a20a9-851e-496c-a668-194c03d4e94c","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"fdcf7ffe-e432-4276-8d46-235344f9ba27","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c84aa2fa-73e8-47ab-9349-57b6cbc82638","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"09152e08-d3ce-4ef1-a6cb-7b82d1324058","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"c42a0e0e-2026-4d13-8b40-48a501e8b810","type":"LinearAxis"}],"left":[{"id":"1a6f3480-13ee-490c-af0b-29db9c1ed304","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"c42a0e0e-2026-4d13-8b40-48a501e8b810","type":"LinearAxis"},{"id":"4e51ae6f-ef3e-40c5-9957-f8f166078146","type":"Grid"},{"id":"1a6f3480-13ee-490c-af0b-29db9c1ed304","type":"LinearAxis"},{"id":"9ec721a4-84f0-43ee-b2c4-f588332c4762","type":"Grid"},{"id":"c84aa2fa-73e8-47ab-9349-57b6cbc82638","type":"BoxAnnotation"},{"id":"130fbb36-8206-4370-925e-805fd562162f","type":"GlyphRenderer"}],"title":{"id":"fdcf7ffe-e432-4276-8d46-235344f9ba27","type":"Title"},"tool_events":{"id":"24f1f051-2f08-4659-b02a-4a459e71de00","type":"ToolEvents"},"toolbar":{"id":"33aa79be-ce97-4e22-9281-d784754e3d83","type":"Toolbar"},"x_range":{"id":"d870684f-5f20-476b-96ce-ce563b719b00","type":"DataRange1d"},"x_scale":{"id":"59c7da40-2dc5-4aa1-b5d3-f8cb37ed433e","type":"LinearScale"},"y_range":{"id":"090a20a9-851e-496c-a668-194c03d4e94c","type":"DataRange1d"},"y_scale":{"id":"e9822c1b-a9eb-4126-8032-021265b2670f","type":"LinearScale"}},"id":"89d476ff-6359-4f82-9387-6203628d64a2","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"e9822c1b-a9eb-4126-8032-021265b2670f","type":"LinearScale"},{"attributes":{"plot":{"id":"89d476ff-6359-4f82-9387-6203628d64a2","subtype":"Figure","type":"Plot"}},"id":"65f21257-7723-442e-af7d-9ff18a15e34d","type":"ResetTool"},{"attributes":{"plot":{"id":"89d476ff-6359-4f82-9387-6203628d64a2","subtype":"Figure","type":"Plot"}},"id":"5ba0ed9c-6778-4826-9eed-7c2b82668d12","type":"HelpTool"},{"attributes":{},"id":"1a123076-b786-4bc3-be01-4e52dd8cf755","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"1a123076-b786-4bc3-be01-4e52dd8cf755","type":"BasicTickFormatter"},"plot":{"id":"89d476ff-6359-4f82-9387-6203628d64a2","subtype":"Figure","type":"Plot"},"ticker":{"id":"0c2f17de-bd3e-4617-a315-0e11375b4ee3","type":"BasicTicker"}},"id":"1a6f3480-13ee-490c-af0b-29db9c1ed304","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"7b723996-715d-46de-bbcf-be701c0be42e","type":"Circle"},{"attributes":{"callback":null},"id":"d870684f-5f20-476b-96ce-ce563b719b00","type":"DataRange1d"},{"attributes":{},"id":"59c7da40-2dc5-4aa1-b5d3-f8cb37ed433e","type":"LinearScale"},{"attributes":{"plot":{"id":"89d476ff-6359-4f82-9387-6203628d64a2","subtype":"Figure","type":"Plot"}},"id":"3db39d6a-f111-4689-8906-2f2a9804c869","type":"PanTool"},{"attributes":{"overlay":{"id":"c84aa2fa-73e8-47ab-9349-57b6cbc82638","type":"BoxAnnotation"},"plot":{"id":"89d476ff-6359-4f82-9387-6203628d64a2","subtype":"Figure","type":"Plot"}},"id":"cd1ec5bf-e4e9-4585-9eeb-ab2d77b6ee24","type":"BoxZoomTool"},{"attributes":{},"id":"15dd5c83-c586-445a-acb1-fc23d5091f99","type":"BasicTicker"}],"root_ids":["89d476ff-6359-4f82-9387-6203628d64a2"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"ccb0fd76-05d7-4f6b-b1b4-542f319640dd","elementid":"e478a693-9632-446a-b87c-5754d707f482","modelid":"89d476ff-6359-4f82-9387-6203628d64a2"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
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
