document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined") {
        window._bokeh_onload_callbacks = [];
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
      };var element = document.getElementById("7015bd67-60ff-4ac5-bd00-5e49e07195ae");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7015bd67-60ff-4ac5-bd00-5e49e07195ae' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"9f3082ab-4e82-4e21-b640-2310bf73eb4d":{"roots":{"references":[{"attributes":{"plot":{"id":"3c32d745-ac85-4445-a693-4bfae671e8b4","subtype":"Figure","type":"Plot"},"ticker":{"id":"d21edf85-6ab8-4348-bdb6-97935d2bab53","type":"BasicTicker"}},"id":"c38505cb-8571-4391-bf43-4d650da3c0a9","type":"Grid"},{"attributes":{"plot":{"id":"3c32d745-ac85-4445-a693-4bfae671e8b4","subtype":"Figure","type":"Plot"}},"id":"f96d2fe3-81f7-4412-b89f-4aabb3a02dda","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"3c32d745-ac85-4445-a693-4bfae671e8b4","subtype":"Figure","type":"Plot"},"ticker":{"id":"5922658c-8364-4956-82cc-7ef88515419d","type":"BasicTicker"}},"id":"fc232220-afa5-4ce7-82f6-b835ab5a4e89","type":"Grid"},{"attributes":{"formatter":{"id":"3186143f-5280-41e9-821e-7ae9431741c2","type":"BasicTickFormatter"},"plot":{"id":"3c32d745-ac85-4445-a693-4bfae671e8b4","subtype":"Figure","type":"Plot"},"ticker":{"id":"5922658c-8364-4956-82cc-7ef88515419d","type":"BasicTicker"}},"id":"fbcde2c2-d13e-4b2a-8a67-bdfcc2a767ad","type":"LinearAxis"},{"attributes":{},"id":"faf0b1e7-e859-4559-9211-abd362c709b8","type":"ToolEvents"},{"attributes":{"plot":{"id":"3c32d745-ac85-4445-a693-4bfae671e8b4","subtype":"Figure","type":"Plot"}},"id":"eab142c7-6b43-4933-bb7c-8dee1a1717a9","type":"ResetTool"},{"attributes":{},"id":"3186143f-5280-41e9-821e-7ae9431741c2","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"3c32d745-ac85-4445-a693-4bfae671e8b4","subtype":"Figure","type":"Plot"}},"id":"c19878a0-4cb7-4641-8f06-77337ad79195","type":"SaveTool"},{"attributes":{"data_source":{"id":"c8dbe819-334e-49c2-a47a-c1b8c1b049ad","type":"ColumnDataSource"},"glyph":{"id":"eab69a99-ed8d-4fed-b55b-d9d4c8db81f2","type":"Ellipse"},"hover_glyph":null,"nonselection_glyph":{"id":"bf0841e3-bca4-4311-bd6f-e28681f41175","type":"Ellipse"},"selection_glyph":null},"id":"fa3214ac-99ba-4d73-b684-4e87002b8cf0","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"c8dbe819-334e-49c2-a47a-c1b8c1b049ad","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"3c32d745-ac85-4445-a693-4bfae671e8b4","subtype":"Figure","type":"Plot"}},"id":"af0e0814-3866-4040-a8c0-b56f9223cdd2","type":"PanTool"},{"attributes":{"plot":null,"text":null},"id":"92d5e8da-9f4a-4aa6-8886-6c6d030a99d5","type":"Title"},{"attributes":{"fill_color":{"value":null},"height":{"units":"data","value":20},"line_color":{"value":"#386CB0"},"line_width":{"value":2},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"eab69a99-ed8d-4fed-b55b-d9d4c8db81f2","type":"Ellipse"},{"attributes":{"overlay":{"id":"79686f06-7bc7-4f3f-aa82-bc009a826a49","type":"BoxAnnotation"},"plot":{"id":"3c32d745-ac85-4445-a693-4bfae671e8b4","subtype":"Figure","type":"Plot"}},"id":"a68dbe1c-9a82-4558-855d-f894ce742b9e","type":"BoxZoomTool"},{"attributes":{},"id":"d21edf85-6ab8-4348-bdb6-97935d2bab53","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":20},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"bf0841e3-bca4-4311-bd6f-e28681f41175","type":"Ellipse"},{"attributes":{"plot":{"id":"3c32d745-ac85-4445-a693-4bfae671e8b4","subtype":"Figure","type":"Plot"}},"id":"a63887b0-6998-4ae2-93bf-a96d5333bf08","type":"HelpTool"},{"attributes":{"callback":null},"id":"03a6764b-55c0-4872-b223-7e3456ca5bf4","type":"DataRange1d"},{"attributes":{"formatter":{"id":"6d89659f-c7fa-4ce7-b0d9-0093c1dbbfbe","type":"BasicTickFormatter"},"plot":{"id":"3c32d745-ac85-4445-a693-4bfae671e8b4","subtype":"Figure","type":"Plot"},"ticker":{"id":"d21edf85-6ab8-4348-bdb6-97935d2bab53","type":"BasicTicker"}},"id":"d680dd53-45e5-4d47-964a-6fac5b252173","type":"LinearAxis"},{"attributes":{},"id":"6d89659f-c7fa-4ce7-b0d9-0093c1dbbfbe","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"79686f06-7bc7-4f3f-aa82-bc009a826a49","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"af0e0814-3866-4040-a8c0-b56f9223cdd2","type":"PanTool"},{"id":"f96d2fe3-81f7-4412-b89f-4aabb3a02dda","type":"WheelZoomTool"},{"id":"a68dbe1c-9a82-4558-855d-f894ce742b9e","type":"BoxZoomTool"},{"id":"c19878a0-4cb7-4641-8f06-77337ad79195","type":"SaveTool"},{"id":"eab142c7-6b43-4933-bb7c-8dee1a1717a9","type":"ResetTool"},{"id":"a63887b0-6998-4ae2-93bf-a96d5333bf08","type":"HelpTool"}]},"id":"ec007c90-93ab-4420-80b0-1ba583e954cd","type":"Toolbar"},{"attributes":{},"id":"5922658c-8364-4956-82cc-7ef88515419d","type":"BasicTicker"},{"attributes":{"below":[{"id":"d680dd53-45e5-4d47-964a-6fac5b252173","type":"LinearAxis"}],"left":[{"id":"fbcde2c2-d13e-4b2a-8a67-bdfcc2a767ad","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"d680dd53-45e5-4d47-964a-6fac5b252173","type":"LinearAxis"},{"id":"c38505cb-8571-4391-bf43-4d650da3c0a9","type":"Grid"},{"id":"fbcde2c2-d13e-4b2a-8a67-bdfcc2a767ad","type":"LinearAxis"},{"id":"fc232220-afa5-4ce7-82f6-b835ab5a4e89","type":"Grid"},{"id":"79686f06-7bc7-4f3f-aa82-bc009a826a49","type":"BoxAnnotation"},{"id":"fa3214ac-99ba-4d73-b684-4e87002b8cf0","type":"GlyphRenderer"}],"title":{"id":"92d5e8da-9f4a-4aa6-8886-6c6d030a99d5","type":"Title"},"tool_events":{"id":"faf0b1e7-e859-4559-9211-abd362c709b8","type":"ToolEvents"},"toolbar":{"id":"ec007c90-93ab-4420-80b0-1ba583e954cd","type":"Toolbar"},"x_range":{"id":"03a6764b-55c0-4872-b223-7e3456ca5bf4","type":"DataRange1d"},"y_range":{"id":"47fc9b88-3c09-4afe-9009-8bd5ec610e84","type":"DataRange1d"}},"id":"3c32d745-ac85-4445-a693-4bfae671e8b4","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"47fc9b88-3c09-4afe-9009-8bd5ec610e84","type":"DataRange1d"}],"root_ids":["3c32d745-ac85-4445-a693-4bfae671e8b4"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"9f3082ab-4e82-4e21-b640-2310bf73eb4d","elementid":"7015bd67-60ff-4ac5-bd00-5e49e07195ae","modelid":"3c32d745-ac85-4445-a693-4bfae671e8b4"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
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