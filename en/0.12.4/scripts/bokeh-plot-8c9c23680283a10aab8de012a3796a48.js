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
      };var element = document.getElementById("dfddd274-593d-4bff-8adb-6a7a4ccd997f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dfddd274-593d-4bff-8adb-6a7a4ccd997f' but no matching script tag was found. ")
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
                var docs_json = {"797ce45f-cdd1-49d3-a15d-d41cee1b7d0a":{"roots":{"references":[{"attributes":{"below":[{"id":"aa3a73b9-b478-4651-b394-388e8f7fc4b4","type":"LinearAxis"}],"left":[{"id":"940742bb-bf17-4497-b2a1-4f1f73330e49","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"aa3a73b9-b478-4651-b394-388e8f7fc4b4","type":"LinearAxis"},{"id":"f509fbb9-3a30-48da-9f1a-14fdb5669788","type":"Grid"},{"id":"940742bb-bf17-4497-b2a1-4f1f73330e49","type":"LinearAxis"},{"id":"b97f8b83-0d1c-4f26-ae39-ad5b28109831","type":"Grid"},{"id":"baff3c16-0ea0-47cf-9cdc-53f2c628c3ac","type":"BoxAnnotation"},{"id":"58fe5b95-0dc9-48e8-9bf6-e37c90225b66","type":"GlyphRenderer"}],"title":{"id":"dade58ae-8c21-44ce-b865-ae930a56d543","type":"Title"},"tool_events":{"id":"4e4631dc-abd1-44c5-bc8e-72db3876042d","type":"ToolEvents"},"toolbar":{"id":"3184404d-5902-4122-87a2-74e5650cbc8d","type":"Toolbar"},"x_range":{"id":"e118e96d-38d0-4ce6-86e5-45c58c99a304","type":"DataRange1d"},"y_range":{"id":"919c041a-2b41-409b-b04b-dbe6244c2933","type":"DataRange1d"}},"id":"fd01c04b-9728-4e33-90fa-092a71b11f77","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","top"],"data":{"top":[1.2,2.5,3.7],"x":[1,2,3]}},"id":"cd6be1a6-7a05-4a69-a47a-470df44299a9","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"fd01c04b-9728-4e33-90fa-092a71b11f77","subtype":"Figure","type":"Plot"}},"id":"d203eaa2-9cd0-4af6-ba8c-0f6c299e7e31","type":"PanTool"},{"attributes":{"plot":{"id":"fd01c04b-9728-4e33-90fa-092a71b11f77","subtype":"Figure","type":"Plot"}},"id":"102df1b8-86d5-44c2-9e56-7e0f6e417e49","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"fd01c04b-9728-4e33-90fa-092a71b11f77","subtype":"Figure","type":"Plot"},"ticker":{"id":"89ee7be5-a249-439e-ad33-70c467660fab","type":"BasicTicker"}},"id":"b97f8b83-0d1c-4f26-ae39-ad5b28109831","type":"Grid"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"78ed1d02-2ceb-4e59-85ff-c09dc54612cd","type":"VBar"},{"attributes":{},"id":"4e4631dc-abd1-44c5-bc8e-72db3876042d","type":"ToolEvents"},{"attributes":{"overlay":{"id":"baff3c16-0ea0-47cf-9cdc-53f2c628c3ac","type":"BoxAnnotation"},"plot":{"id":"fd01c04b-9728-4e33-90fa-092a71b11f77","subtype":"Figure","type":"Plot"}},"id":"975db61e-e584-47ef-860b-5fa1718b2e4a","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"fd01c04b-9728-4e33-90fa-092a71b11f77","subtype":"Figure","type":"Plot"},"ticker":{"id":"4befc05c-9088-49c3-8915-398d5f105c56","type":"BasicTicker"}},"id":"f509fbb9-3a30-48da-9f1a-14fdb5669788","type":"Grid"},{"attributes":{"plot":{"id":"fd01c04b-9728-4e33-90fa-092a71b11f77","subtype":"Figure","type":"Plot"}},"id":"c8f54557-14ab-4170-bfa6-748178a04f0a","type":"ResetTool"},{"attributes":{"plot":{"id":"fd01c04b-9728-4e33-90fa-092a71b11f77","subtype":"Figure","type":"Plot"}},"id":"0e61f4c9-789e-4c70-8c8c-9ed98ff50e3b","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"919c041a-2b41-409b-b04b-dbe6244c2933","type":"DataRange1d"},{"attributes":{},"id":"4befc05c-9088-49c3-8915-398d5f105c56","type":"BasicTicker"},{"attributes":{"plot":{"id":"fd01c04b-9728-4e33-90fa-092a71b11f77","subtype":"Figure","type":"Plot"}},"id":"31626cf7-9566-420f-a233-ca0774ec080c","type":"HelpTool"},{"attributes":{"callback":null},"id":"e118e96d-38d0-4ce6-86e5-45c58c99a304","type":"DataRange1d"},{"attributes":{},"id":"89ee7be5-a249-439e-ad33-70c467660fab","type":"BasicTicker"},{"attributes":{"formatter":{"id":"33702ad7-d87f-4a4e-af19-903fc01ad754","type":"BasicTickFormatter"},"plot":{"id":"fd01c04b-9728-4e33-90fa-092a71b11f77","subtype":"Figure","type":"Plot"},"ticker":{"id":"89ee7be5-a249-439e-ad33-70c467660fab","type":"BasicTicker"}},"id":"940742bb-bf17-4497-b2a1-4f1f73330e49","type":"LinearAxis"},{"attributes":{"formatter":{"id":"58e1d1dd-1be5-476a-be83-26af74627f9c","type":"BasicTickFormatter"},"plot":{"id":"fd01c04b-9728-4e33-90fa-092a71b11f77","subtype":"Figure","type":"Plot"},"ticker":{"id":"4befc05c-9088-49c3-8915-398d5f105c56","type":"BasicTicker"}},"id":"aa3a73b9-b478-4651-b394-388e8f7fc4b4","type":"LinearAxis"},{"attributes":{},"id":"58e1d1dd-1be5-476a-be83-26af74627f9c","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d203eaa2-9cd0-4af6-ba8c-0f6c299e7e31","type":"PanTool"},{"id":"0e61f4c9-789e-4c70-8c8c-9ed98ff50e3b","type":"WheelZoomTool"},{"id":"975db61e-e584-47ef-860b-5fa1718b2e4a","type":"BoxZoomTool"},{"id":"102df1b8-86d5-44c2-9e56-7e0f6e417e49","type":"SaveTool"},{"id":"c8f54557-14ab-4170-bfa6-748178a04f0a","type":"ResetTool"},{"id":"31626cf7-9566-420f-a233-ca0774ec080c","type":"HelpTool"}]},"id":"3184404d-5902-4122-87a2-74e5650cbc8d","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"78778e89-bdcc-47ed-9fd5-b518956baec8","type":"VBar"},{"attributes":{"data_source":{"id":"cd6be1a6-7a05-4a69-a47a-470df44299a9","type":"ColumnDataSource"},"glyph":{"id":"78ed1d02-2ceb-4e59-85ff-c09dc54612cd","type":"VBar"},"hover_glyph":null,"nonselection_glyph":{"id":"78778e89-bdcc-47ed-9fd5-b518956baec8","type":"VBar"},"selection_glyph":null},"id":"58fe5b95-0dc9-48e8-9bf6-e37c90225b66","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"baff3c16-0ea0-47cf-9cdc-53f2c628c3ac","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":""},"id":"dade58ae-8c21-44ce-b865-ae930a56d543","type":"Title"},{"attributes":{},"id":"33702ad7-d87f-4a4e-af19-903fc01ad754","type":"BasicTickFormatter"}],"root_ids":["fd01c04b-9728-4e33-90fa-092a71b11f77"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"797ce45f-cdd1-49d3-a15d-d41cee1b7d0a","elementid":"dfddd274-593d-4bff-8adb-6a7a4ccd997f","modelid":"fd01c04b-9728-4e33-90fa-092a71b11f77"}];
                
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
