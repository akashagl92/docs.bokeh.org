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
      };var element = document.getElementById("87d5e5df-9b38-4678-b93e-4773f5499241");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '87d5e5df-9b38-4678-b93e-4773f5499241' but no matching script tag was found. ")
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
                var docs_json = {"4aac05f8-128c-488c-baa6-d140827d951c":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a502f287-ace6-4411-99bb-f8b0cf16ba56","type":"Circle"},{"attributes":{"formatter":{"id":"693273e9-8141-4ede-92e2-5309af35cb9c","type":"BasicTickFormatter"},"plot":{"id":"de0eedb8-ec31-45b5-a13a-a2b35ef2824a","subtype":"Figure","type":"Plot"},"ticker":{"id":"ff4d9870-bcf2-491c-9533-5fe8171de06c","type":"BasicTicker"}},"id":"f2b2257b-5f3c-45e2-8571-5f369beec86a","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"dd8050c7-611d-41e1-aba8-62f11145a2ed","type":"BoxSelectTool"},{"id":"ccab5b37-5f8e-40d8-9c99-063cca4990d3","type":"HoverTool"}]},"id":"a4dbe9b6-afa1-40e6-bb50-b6c4b5150cbc","type":"Toolbar"},{"attributes":{},"id":"67712475-b4f3-4c11-8200-c3208261c8f5","type":"BasicTicker"},{"attributes":{},"id":"4b27cca6-0d23-49fa-97f7-db4cc6051b3c","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"85f04f2d-34ab-4da0-86a6-0f5f4cd7b0ff","type":"LinearAxis"}],"left":[{"id":"f2b2257b-5f3c-45e2-8571-5f369beec86a","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"85f04f2d-34ab-4da0-86a6-0f5f4cd7b0ff","type":"LinearAxis"},{"id":"2fcdab38-17da-4a2f-b0dd-3c634eea3728","type":"Grid"},{"id":"f2b2257b-5f3c-45e2-8571-5f369beec86a","type":"LinearAxis"},{"id":"f1339360-682e-497c-9558-bceb331d2473","type":"Grid"},{"id":"5a051300-4b58-43c8-a8a3-6d977318167f","type":"BoxAnnotation"},{"id":"b743f491-9bfc-4839-8377-5fc6a93dc0e5","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"6372391f-5f12-4b36-9dda-0efe5472457b","type":"ToolEvents"},"toolbar":{"id":"a4dbe9b6-afa1-40e6-bb50-b6c4b5150cbc","type":"Toolbar"},"x_range":{"id":"a90fdb39-6d31-4349-800f-d00120b81d48","type":"DataRange1d"},"y_range":{"id":"197d8e4b-67d8-4ec6-bb18-b6567b94f034","type":"DataRange1d"}},"id":"de0eedb8-ec31-45b5-a13a-a2b35ef2824a","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"eaa508c9-c9ee-4c12-9b3d-d85aaff0d97b","type":"ColumnDataSource"},"glyph":{"id":"a502f287-ace6-4411-99bb-f8b0cf16ba56","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"ff0fad5a-6705-47ad-985a-ccf11bf4b860","type":"Circle"},"selection_glyph":null},"id":"b743f491-9bfc-4839-8377-5fc6a93dc0e5","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"4b27cca6-0d23-49fa-97f7-db4cc6051b3c","type":"BasicTickFormatter"},"plot":{"id":"de0eedb8-ec31-45b5-a13a-a2b35ef2824a","subtype":"Figure","type":"Plot"},"ticker":{"id":"67712475-b4f3-4c11-8200-c3208261c8f5","type":"BasicTicker"}},"id":"85f04f2d-34ab-4da0-86a6-0f5f4cd7b0ff","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"ff0fad5a-6705-47ad-985a-ccf11bf4b860","type":"Circle"},{"attributes":{},"id":"6372391f-5f12-4b36-9dda-0efe5472457b","type":"ToolEvents"},{"attributes":{"callback":null,"overlay":{"id":"5a051300-4b58-43c8-a8a3-6d977318167f","type":"BoxAnnotation"},"plot":{"id":"de0eedb8-ec31-45b5-a13a-a2b35ef2824a","subtype":"Figure","type":"Plot"},"renderers":[{"id":"b743f491-9bfc-4839-8377-5fc6a93dc0e5","type":"GlyphRenderer"}]},"id":"dd8050c7-611d-41e1-aba8-62f11145a2ed","type":"BoxSelectTool"},{"attributes":{},"id":"693273e9-8141-4ede-92e2-5309af35cb9c","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"de0eedb8-ec31-45b5-a13a-a2b35ef2824a","subtype":"Figure","type":"Plot"},"ticker":{"id":"ff4d9870-bcf2-491c-9533-5fe8171de06c","type":"BasicTicker"}},"id":"f1339360-682e-497c-9558-bceb331d2473","type":"Grid"},{"attributes":{"callback":null},"id":"a90fdb39-6d31-4349-800f-d00120b81d48","type":"DataRange1d"},{"attributes":{"callback":null},"id":"197d8e4b-67d8-4ec6-bb18-b6567b94f034","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"eaa508c9-c9ee-4c12-9b3d-d85aaff0d97b","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5a051300-4b58-43c8-a8a3-6d977318167f","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"de0eedb8-ec31-45b5-a13a-a2b35ef2824a","subtype":"Figure","type":"Plot"},"ticker":{"id":"67712475-b4f3-4c11-8200-c3208261c8f5","type":"BasicTicker"}},"id":"2fcdab38-17da-4a2f-b0dd-3c634eea3728","type":"Grid"},{"attributes":{},"id":"ff4d9870-bcf2-491c-9533-5fe8171de06c","type":"BasicTicker"},{"attributes":{"callback":null,"plot":{"id":"de0eedb8-ec31-45b5-a13a-a2b35ef2824a","subtype":"Figure","type":"Plot"}},"id":"ccab5b37-5f8e-40d8-9c99-063cca4990d3","type":"HoverTool"}],"root_ids":["de0eedb8-ec31-45b5-a13a-a2b35ef2824a"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"4aac05f8-128c-488c-baa6-d140827d951c","elementid":"87d5e5df-9b38-4678-b93e-4773f5499241","modelid":"de0eedb8-ec31-45b5-a13a-a2b35ef2824a"}];
                
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
