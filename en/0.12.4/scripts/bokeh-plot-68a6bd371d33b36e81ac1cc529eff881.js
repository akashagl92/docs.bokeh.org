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
      };var element = document.getElementById("9d75253d-a5ad-4ad7-955f-3d3f9dfd0b32");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9d75253d-a5ad-4ad7-955f-3d3f9dfd0b32' but no matching script tag was found. ")
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
                var docs_json = {"e3a8ca77-3a37-4a64-a49c-078092ef20bb":{"roots":{"references":[{"attributes":{"formatter":{"id":"ea03154e-66dd-4007-9f33-bc3aa4d1f2e7","type":"PrintfTickFormatter"},"plot":{"id":"dad715ed-2c25-42a3-b6ff-3accd09afa19","subtype":"Figure","type":"Plot"},"ticker":{"id":"d5364084-d231-4283-ba50-505093410839","type":"BasicTicker"}},"id":"c82d843e-0642-4eef-97e9-6cf0a02ee4d6","type":"LinearAxis"},{"attributes":{"overlay":{"id":"24b93722-c722-4dfd-8fbe-4c36dfab8447","type":"BoxAnnotation"},"plot":{"id":"dad715ed-2c25-42a3-b6ff-3accd09afa19","subtype":"Figure","type":"Plot"}},"id":"1c222879-8838-43d3-b097-ac32a007bdf2","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1ab390c6-b804-40d2-af20-22996b0fed06","type":"PanTool"},{"id":"ec8a7b72-2f53-43e5-902e-54a348cbdf0f","type":"WheelZoomTool"},{"id":"1c222879-8838-43d3-b097-ac32a007bdf2","type":"BoxZoomTool"},{"id":"64a0f31d-19dd-452f-8aec-f54c11a87347","type":"SaveTool"},{"id":"0e60e3f8-59f9-42ce-9935-88d386f4b23e","type":"ResetTool"},{"id":"14987f63-e8ec-4384-ad63-d985d904b239","type":"HelpTool"}]},"id":"310c4e30-9ce6-4b11-b9ab-702f1d31238c","type":"Toolbar"},{"attributes":{},"id":"0b56e545-74eb-45a4-a1fb-cd09f78118dc","type":"ToolEvents"},{"attributes":{"callback":null},"id":"8a17a8a2-4630-4a24-a104-9fa7d1b6c20e","type":"DataRange1d"},{"attributes":{"plot":{"id":"dad715ed-2c25-42a3-b6ff-3accd09afa19","subtype":"Figure","type":"Plot"}},"id":"0e60e3f8-59f9-42ce-9935-88d386f4b23e","type":"ResetTool"},{"attributes":{"format":"%4.1e"},"id":"551ba2de-dbdd-4368-8a80-866534676671","type":"PrintfTickFormatter"},{"attributes":{"plot":{"id":"dad715ed-2c25-42a3-b6ff-3accd09afa19","subtype":"Figure","type":"Plot"},"ticker":{"id":"dce788c0-f878-4a34-bd40-454b19c443a0","type":"BasicTicker"}},"id":"08fa8d96-9710-4446-beb9-1307776bb6ef","type":"Grid"},{"attributes":{"data_source":{"id":"e0bf0632-c58d-4055-92d0-5209053cbd96","type":"ColumnDataSource"},"glyph":{"id":"f4e0cfbf-c9c4-4045-ac4e-664edc442e1b","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"79c534d1-928c-423c-9fe0-e163cab5c01f","type":"Circle"},"selection_glyph":null},"id":"98c461ce-5cd0-45a4-b9bb-7ffd53209e88","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"dad715ed-2c25-42a3-b6ff-3accd09afa19","subtype":"Figure","type":"Plot"}},"id":"14987f63-e8ec-4384-ad63-d985d904b239","type":"HelpTool"},{"attributes":{"format":"%5.3f mu"},"id":"ea03154e-66dd-4007-9f33-bc3aa4d1f2e7","type":"PrintfTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"24b93722-c722-4dfd-8fbe-4c36dfab8447","type":"BoxAnnotation"},{"attributes":{},"id":"dce788c0-f878-4a34-bd40-454b19c443a0","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"dad715ed-2c25-42a3-b6ff-3accd09afa19","subtype":"Figure","type":"Plot"},"ticker":{"id":"d5364084-d231-4283-ba50-505093410839","type":"BasicTicker"}},"id":"0bd54b66-5645-43a6-ab7f-c9a8376a9f32","type":"Grid"},{"attributes":{},"id":"d5364084-d231-4283-ba50-505093410839","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"e0bf0632-c58d-4055-92d0-5209053cbd96","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"79c534d1-928c-423c-9fe0-e163cab5c01f","type":"Circle"},{"attributes":{"formatter":{"id":"551ba2de-dbdd-4368-8a80-866534676671","type":"PrintfTickFormatter"},"plot":{"id":"dad715ed-2c25-42a3-b6ff-3accd09afa19","subtype":"Figure","type":"Plot"},"ticker":{"id":"dce788c0-f878-4a34-bd40-454b19c443a0","type":"BasicTicker"}},"id":"e34571a1-6cff-4aa2-b722-9671c1f16dd4","type":"LinearAxis"},{"attributes":{"callback":null},"id":"3543afd8-9b78-4ed8-bf83-cb1cc86269a9","type":"DataRange1d"},{"attributes":{"plot":{"id":"dad715ed-2c25-42a3-b6ff-3accd09afa19","subtype":"Figure","type":"Plot"}},"id":"ec8a7b72-2f53-43e5-902e-54a348cbdf0f","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"e34571a1-6cff-4aa2-b722-9671c1f16dd4","type":"LinearAxis"}],"left":[{"id":"c82d843e-0642-4eef-97e9-6cf0a02ee4d6","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"e34571a1-6cff-4aa2-b722-9671c1f16dd4","type":"LinearAxis"},{"id":"08fa8d96-9710-4446-beb9-1307776bb6ef","type":"Grid"},{"id":"c82d843e-0642-4eef-97e9-6cf0a02ee4d6","type":"LinearAxis"},{"id":"0bd54b66-5645-43a6-ab7f-c9a8376a9f32","type":"Grid"},{"id":"24b93722-c722-4dfd-8fbe-4c36dfab8447","type":"BoxAnnotation"},{"id":"98c461ce-5cd0-45a4-b9bb-7ffd53209e88","type":"GlyphRenderer"}],"title":{"id":"eb5e0ed1-e644-4287-b0a9-f383ebeb51cd","type":"Title"},"tool_events":{"id":"0b56e545-74eb-45a4-a1fb-cd09f78118dc","type":"ToolEvents"},"toolbar":{"id":"310c4e30-9ce6-4b11-b9ab-702f1d31238c","type":"Toolbar"},"x_range":{"id":"3543afd8-9b78-4ed8-bf83-cb1cc86269a9","type":"DataRange1d"},"y_range":{"id":"8a17a8a2-4630-4a24-a104-9fa7d1b6c20e","type":"DataRange1d"}},"id":"dad715ed-2c25-42a3-b6ff-3accd09afa19","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"eb5e0ed1-e644-4287-b0a9-f383ebeb51cd","type":"Title"},{"attributes":{"plot":{"id":"dad715ed-2c25-42a3-b6ff-3accd09afa19","subtype":"Figure","type":"Plot"}},"id":"64a0f31d-19dd-452f-8aec-f54c11a87347","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"f4e0cfbf-c9c4-4045-ac4e-664edc442e1b","type":"Circle"},{"attributes":{"plot":{"id":"dad715ed-2c25-42a3-b6ff-3accd09afa19","subtype":"Figure","type":"Plot"}},"id":"1ab390c6-b804-40d2-af20-22996b0fed06","type":"PanTool"}],"root_ids":["dad715ed-2c25-42a3-b6ff-3accd09afa19"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"e3a8ca77-3a37-4a64-a49c-078092ef20bb","elementid":"9d75253d-a5ad-4ad7-955f-3d3f9dfd0b32","modelid":"dad715ed-2c25-42a3-b6ff-3accd09afa19"}];
                
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
