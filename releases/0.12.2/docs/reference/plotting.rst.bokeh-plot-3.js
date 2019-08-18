document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
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
      };var element = document.getElementById("4481cfe8-da63-4a5e-8b1c-996af36d2ee2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4481cfe8-da63-4a5e-8b1c-996af36d2ee2' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.2.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"e9a37171-1a64-4dfd-a7f1-1990fa4b4d61":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[4,5,6]}},"id":"e707c0f3-5eda-46ce-990a-d5e06f5db209","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"696f24e8-c029-4daa-946d-8f14800ac36e","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"b67cf023-479c-4dce-b4fa-dd6d5646a970","type":"DataRange1d"},{"attributes":{"formatter":{"id":"173edb4c-04a4-4ca0-b92b-ea1066294d3f","type":"BasicTickFormatter"},"plot":{"id":"c85ad186-7246-4f82-b4fa-7dfbda3160a9","subtype":"Figure","type":"Plot"},"ticker":{"id":"f363d932-ebad-40bb-b318-97ce0cd2b29d","type":"BasicTicker"}},"id":"3b57c7fb-fdd3-49df-adf5-8b24b139a134","type":"LinearAxis"},{"attributes":{},"id":"d5032741-b12f-421a-bffc-e251f5fc8de1","type":"BasicTicker"},{"attributes":{"overlay":{"id":"696f24e8-c029-4daa-946d-8f14800ac36e","type":"BoxAnnotation"},"plot":{"id":"c85ad186-7246-4f82-b4fa-7dfbda3160a9","subtype":"Figure","type":"Plot"}},"id":"41d745e6-bfd8-496c-a916-e1d034923b68","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"c85ad186-7246-4f82-b4fa-7dfbda3160a9","subtype":"Figure","type":"Plot"},"ticker":{"id":"d5032741-b12f-421a-bffc-e251f5fc8de1","type":"BasicTicker"}},"id":"4ff55eed-903e-4d42-87b7-16026c428f17","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"6b2ec0ac-f2d7-404e-9b57-d7dda0f0d2d6","type":"CircleCross"},{"attributes":{"formatter":{"id":"ad161935-8921-410a-b8a1-786691e812f9","type":"BasicTickFormatter"},"plot":{"id":"c85ad186-7246-4f82-b4fa-7dfbda3160a9","subtype":"Figure","type":"Plot"},"ticker":{"id":"d5032741-b12f-421a-bffc-e251f5fc8de1","type":"BasicTicker"}},"id":"f277f5d9-400f-44fb-8920-31c0caed6956","type":"LinearAxis"},{"attributes":{},"id":"173edb4c-04a4-4ca0-b92b-ea1066294d3f","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"c85ad186-7246-4f82-b4fa-7dfbda3160a9","subtype":"Figure","type":"Plot"}},"id":"2a263509-5a06-4085-ad68-ccce17844e28","type":"PanTool"},{"attributes":{"plot":null,"text":null},"id":"3b8221a2-3a81-431a-a3ca-aa7c9a36ddfe","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"c85ad186-7246-4f82-b4fa-7dfbda3160a9","subtype":"Figure","type":"Plot"},"ticker":{"id":"f363d932-ebad-40bb-b318-97ce0cd2b29d","type":"BasicTicker"}},"id":"3fe52ec3-e006-47f7-b9ed-847f7ca9fbce","type":"Grid"},{"attributes":{},"id":"ad161935-8921-410a-b8a1-786691e812f9","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"c85ad186-7246-4f82-b4fa-7dfbda3160a9","subtype":"Figure","type":"Plot"}},"id":"7e614ce7-c74d-447b-99fd-85921cce8720","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2a263509-5a06-4085-ad68-ccce17844e28","type":"PanTool"},{"id":"0eb0a0de-a178-4b01-875c-3f6cd783d7f6","type":"WheelZoomTool"},{"id":"41d745e6-bfd8-496c-a916-e1d034923b68","type":"BoxZoomTool"},{"id":"0d027c05-bbf9-4ac7-b5e4-86e3f165fbc3","type":"SaveTool"},{"id":"7526e130-89c7-4697-8ac3-7026827e1ad6","type":"ResetTool"},{"id":"7e614ce7-c74d-447b-99fd-85921cce8720","type":"HelpTool"}]},"id":"9e9146a6-a6e7-4a55-9e0b-cbf478942d61","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#FB8072"},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"c4d04490-7ee2-4b53-9d5b-3233eee98d36","type":"CircleCross"},{"attributes":{},"id":"89776727-5815-41f9-a712-b56647364b5c","type":"ToolEvents"},{"attributes":{"plot":{"id":"c85ad186-7246-4f82-b4fa-7dfbda3160a9","subtype":"Figure","type":"Plot"}},"id":"0d027c05-bbf9-4ac7-b5e4-86e3f165fbc3","type":"SaveTool"},{"attributes":{"plot":{"id":"c85ad186-7246-4f82-b4fa-7dfbda3160a9","subtype":"Figure","type":"Plot"}},"id":"0eb0a0de-a178-4b01-875c-3f6cd783d7f6","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"d9a03e03-8bdd-4a05-ba3a-6b47c9fecb7a","type":"DataRange1d"},{"attributes":{"data_source":{"id":"e707c0f3-5eda-46ce-990a-d5e06f5db209","type":"ColumnDataSource"},"glyph":{"id":"c4d04490-7ee2-4b53-9d5b-3233eee98d36","type":"CircleCross"},"hover_glyph":null,"nonselection_glyph":{"id":"6b2ec0ac-f2d7-404e-9b57-d7dda0f0d2d6","type":"CircleCross"},"selection_glyph":null},"id":"cc41ad98-fada-44ae-a704-1cc19724f69f","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"f277f5d9-400f-44fb-8920-31c0caed6956","type":"LinearAxis"}],"left":[{"id":"3b57c7fb-fdd3-49df-adf5-8b24b139a134","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"f277f5d9-400f-44fb-8920-31c0caed6956","type":"LinearAxis"},{"id":"4ff55eed-903e-4d42-87b7-16026c428f17","type":"Grid"},{"id":"3b57c7fb-fdd3-49df-adf5-8b24b139a134","type":"LinearAxis"},{"id":"3fe52ec3-e006-47f7-b9ed-847f7ca9fbce","type":"Grid"},{"id":"696f24e8-c029-4daa-946d-8f14800ac36e","type":"BoxAnnotation"},{"id":"cc41ad98-fada-44ae-a704-1cc19724f69f","type":"GlyphRenderer"}],"title":{"id":"3b8221a2-3a81-431a-a3ca-aa7c9a36ddfe","type":"Title"},"tool_events":{"id":"89776727-5815-41f9-a712-b56647364b5c","type":"ToolEvents"},"toolbar":{"id":"9e9146a6-a6e7-4a55-9e0b-cbf478942d61","type":"Toolbar"},"x_range":{"id":"b67cf023-479c-4dce-b4fa-dd6d5646a970","type":"DataRange1d"},"y_range":{"id":"d9a03e03-8bdd-4a05-ba3a-6b47c9fecb7a","type":"DataRange1d"}},"id":"c85ad186-7246-4f82-b4fa-7dfbda3160a9","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"c85ad186-7246-4f82-b4fa-7dfbda3160a9","subtype":"Figure","type":"Plot"}},"id":"7526e130-89c7-4697-8ac3-7026827e1ad6","type":"ResetTool"},{"attributes":{},"id":"f363d932-ebad-40bb-b318-97ce0cd2b29d","type":"BasicTicker"}],"root_ids":["c85ad186-7246-4f82-b4fa-7dfbda3160a9"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"e9a37171-1a64-4dfd-a7f1-1990fa4b4d61","elementid":"4481cfe8-da63-4a5e-8b1c-996af36d2ee2","modelid":"c85ad186-7246-4f82-b4fa-7dfbda3160a9"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
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
});