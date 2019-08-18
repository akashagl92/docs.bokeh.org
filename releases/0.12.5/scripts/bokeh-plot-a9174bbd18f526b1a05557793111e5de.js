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
      };var element = document.getElementById("5bd1bea6-5b0a-4017-9d50-0a95107f3063");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5bd1bea6-5b0a-4017-9d50-0a95107f3063' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
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
                var docs_json = {"9be47ce0-e303-4140-a35b-0e9cc6c53ba8":{"roots":{"references":[{"attributes":{"plot":{"id":"440b9c4a-7626-4348-bdf1-2df248d0244f","subtype":"Figure","type":"Plot"}},"id":"89e0c770-cff6-4305-a643-5b3c88b102d8","type":"HelpTool"},{"attributes":{"callback":null},"id":"34f70a78-463a-4a6c-bab8-1ee81fb08682","type":"DataRange1d"},{"attributes":{"plot":{"id":"440b9c4a-7626-4348-bdf1-2df248d0244f","subtype":"Figure","type":"Plot"}},"id":"b5d0fa61-b60e-479c-a7c8-ec32e156b4bb","type":"ResetTool"},{"attributes":{"callback":null},"id":"4fd40011-131b-475f-8b66-c9e13dbe3a94","type":"DataRange1d"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":0.25},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"fac37b9d-3c90-4415-bfb0-69e1e7e93b76","type":"AnnularWedge"},{"attributes":{"data_source":{"id":"5257b281-0032-4890-9a85-0785284500d6","type":"ColumnDataSource"},"glyph":{"id":"30ec95da-d5a3-43dd-9925-75ebe0ca0a20","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fac37b9d-3c90-4415-bfb0-69e1e7e93b76","type":"AnnularWedge"},"selection_glyph":null},"id":"ce2b5477-de21-48ca-9425-94024aa2fbdc","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0325b1a5-56bc-40d5-8f70-429cf4a459a1","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"8bae8d6b-c05a-4af1-a0d2-b835e60aa56c","type":"LinearAxis"}],"left":[{"id":"4c764074-7839-4166-bdff-4eaa94f810d6","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"8bae8d6b-c05a-4af1-a0d2-b835e60aa56c","type":"LinearAxis"},{"id":"8a311973-30b7-46b0-b8b4-389de219b23a","type":"Grid"},{"id":"4c764074-7839-4166-bdff-4eaa94f810d6","type":"LinearAxis"},{"id":"9f117377-d165-4404-b035-79dc7e003e43","type":"Grid"},{"id":"0325b1a5-56bc-40d5-8f70-429cf4a459a1","type":"BoxAnnotation"},{"id":"ce2b5477-de21-48ca-9425-94024aa2fbdc","type":"GlyphRenderer"}],"title":{"id":"aa81748a-5134-4e7d-a043-d0aa364371bf","type":"Title"},"tool_events":{"id":"dcb6555c-723f-4183-b0af-797d97a1eeb7","type":"ToolEvents"},"toolbar":{"id":"13214081-4ae6-4f74-b4ff-9c96a9e69e4a","type":"Toolbar"},"x_range":{"id":"34f70a78-463a-4a6c-bab8-1ee81fb08682","type":"DataRange1d"},"y_range":{"id":"4fd40011-131b-475f-8b66-c9e13dbe3a94","type":"DataRange1d"}},"id":"440b9c4a-7626-4348-bdf1-2df248d0244f","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"440b9c4a-7626-4348-bdf1-2df248d0244f","subtype":"Figure","type":"Plot"}},"id":"5d85593e-27b0-43bd-83c4-1998b260b7b9","type":"WheelZoomTool"},{"attributes":{},"id":"5f83957b-2b4d-4403-a583-7729831db001","type":"BasicTicker"},{"attributes":{"plot":{"id":"440b9c4a-7626-4348-bdf1-2df248d0244f","subtype":"Figure","type":"Plot"}},"id":"bce7da22-f4f8-4f90-9e54-ff91aa8a875e","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"440b9c4a-7626-4348-bdf1-2df248d0244f","subtype":"Figure","type":"Plot"},"ticker":{"id":"5f83957b-2b4d-4403-a583-7729831db001","type":"BasicTicker"}},"id":"9f117377-d165-4404-b035-79dc7e003e43","type":"Grid"},{"attributes":{"overlay":{"id":"0325b1a5-56bc-40d5-8f70-429cf4a459a1","type":"BoxAnnotation"},"plot":{"id":"440b9c4a-7626-4348-bdf1-2df248d0244f","subtype":"Figure","type":"Plot"}},"id":"4c86b7b3-d7f2-4649-b821-78fda16fa0f0","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"45c9e939-9a75-4bd4-8f8a-6a186d928eb8","type":"BasicTickFormatter"},"plot":{"id":"440b9c4a-7626-4348-bdf1-2df248d0244f","subtype":"Figure","type":"Plot"},"ticker":{"id":"5f83957b-2b4d-4403-a583-7729831db001","type":"BasicTicker"}},"id":"4c764074-7839-4166-bdff-4eaa94f810d6","type":"LinearAxis"},{"attributes":{},"id":"5eeac9e0-19b9-4ae9-9214-626f875bad2c","type":"BasicTickFormatter"},{"attributes":{},"id":"8bd97509-ca04-4493-95bb-47dd81dea750","type":"BasicTicker"},{"attributes":{"formatter":{"id":"5eeac9e0-19b9-4ae9-9214-626f875bad2c","type":"BasicTickFormatter"},"plot":{"id":"440b9c4a-7626-4348-bdf1-2df248d0244f","subtype":"Figure","type":"Plot"},"ticker":{"id":"8bd97509-ca04-4493-95bb-47dd81dea750","type":"BasicTicker"}},"id":"8bae8d6b-c05a-4af1-a0d2-b835e60aa56c","type":"LinearAxis"},{"attributes":{"plot":{"id":"440b9c4a-7626-4348-bdf1-2df248d0244f","subtype":"Figure","type":"Plot"}},"id":"0bcf1567-c29c-4e6e-939a-5cd52a634b01","type":"PanTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0bcf1567-c29c-4e6e-939a-5cd52a634b01","type":"PanTool"},{"id":"5d85593e-27b0-43bd-83c4-1998b260b7b9","type":"WheelZoomTool"},{"id":"4c86b7b3-d7f2-4649-b821-78fda16fa0f0","type":"BoxZoomTool"},{"id":"bce7da22-f4f8-4f90-9e54-ff91aa8a875e","type":"SaveTool"},{"id":"b5d0fa61-b60e-479c-a7c8-ec32e156b4bb","type":"ResetTool"},{"id":"89e0c770-cff6-4305-a643-5b3c88b102d8","type":"HelpTool"}]},"id":"13214081-4ae6-4f74-b4ff-9c96a9e69e4a","type":"Toolbar"},{"attributes":{},"id":"45c9e939-9a75-4bd4-8f8a-6a186d928eb8","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"5257b281-0032-4890-9a85-0785284500d6","type":"ColumnDataSource"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.6},"fill_color":{"value":"green"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.6},"line_color":{"value":"green"},"outer_radius":{"units":"data","value":0.25},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"30ec95da-d5a3-43dd-9925-75ebe0ca0a20","type":"AnnularWedge"},{"attributes":{},"id":"dcb6555c-723f-4183-b0af-797d97a1eeb7","type":"ToolEvents"},{"attributes":{"plot":{"id":"440b9c4a-7626-4348-bdf1-2df248d0244f","subtype":"Figure","type":"Plot"},"ticker":{"id":"8bd97509-ca04-4493-95bb-47dd81dea750","type":"BasicTicker"}},"id":"8a311973-30b7-46b0-b8b4-389de219b23a","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"aa81748a-5134-4e7d-a043-d0aa364371bf","type":"Title"}],"root_ids":["440b9c4a-7626-4348-bdf1-2df248d0244f"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"9be47ce0-e303-4140-a35b-0e9cc6c53ba8","elementid":"5bd1bea6-5b0a-4017-9d50-0a95107f3063","modelid":"440b9c4a-7626-4348-bdf1-2df248d0244f"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
