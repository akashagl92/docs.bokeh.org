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
      };var element = document.getElementById("44cc3b33-f57e-407b-b555-f1321d710d12");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '44cc3b33-f57e-407b-b555-f1321d710d12' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"6cc31e34-f93c-4165-89c6-018bf7634bd1":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"25fed435-d6b3-472e-ac29-c8ebd00721ae","type":"BoxAnnotation"},{"attributes":{"align":"right","background_fill_color":{"value":"#aaaaee"},"plot":null,"text":"Title With Options","text_color":{"value":"orange"},"text_font_size":{"value":"25px"}},"id":"81eb5826-8a97-414f-ba6e-b8cdf068bba2","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2],"y":[3,4]}},"id":"aaf07b68-a872-45c2-a7b2-8cb55827bf9a","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"d9e2cfe9-1c5e-4b4b-985d-a818f0f00533","subtype":"Figure","type":"Plot"}},"id":"09892831-b41b-4575-a662-475c6c810a0f","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3c08c737-395a-4ccc-9a4b-1d2474b67866","type":"PanTool"},{"id":"ae5f448e-708b-4879-be75-8389b7045039","type":"WheelZoomTool"},{"id":"6cdceb07-646f-47a8-8480-95c97ac2c2f1","type":"BoxZoomTool"},{"id":"fa980fba-9e34-4d09-b90b-5f110b79474f","type":"SaveTool"},{"id":"09892831-b41b-4575-a662-475c6c810a0f","type":"ResetTool"},{"id":"738f630d-e526-4cf0-80c2-a6da60fa91dd","type":"HelpTool"}]},"id":"4ece34e0-fc97-41ed-8f2f-e17c85cde30e","type":"Toolbar"},{"attributes":{"overlay":{"id":"25fed435-d6b3-472e-ac29-c8ebd00721ae","type":"BoxAnnotation"},"plot":{"id":"d9e2cfe9-1c5e-4b4b-985d-a818f0f00533","subtype":"Figure","type":"Plot"}},"id":"6cdceb07-646f-47a8-8480-95c97ac2c2f1","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"60062800-7fd3-4d2a-978c-19e732294288","type":"Circle"},{"attributes":{"plot":{"id":"d9e2cfe9-1c5e-4b4b-985d-a818f0f00533","subtype":"Figure","type":"Plot"}},"id":"ae5f448e-708b-4879-be75-8389b7045039","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"d9e2cfe9-1c5e-4b4b-985d-a818f0f00533","subtype":"Figure","type":"Plot"}},"id":"738f630d-e526-4cf0-80c2-a6da60fa91dd","type":"HelpTool"},{"attributes":{"plot":{"id":"d9e2cfe9-1c5e-4b4b-985d-a818f0f00533","subtype":"Figure","type":"Plot"}},"id":"fa980fba-9e34-4d09-b90b-5f110b79474f","type":"SaveTool"},{"attributes":{},"id":"d3289a63-fef4-4492-a60a-704fd23aa05c","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"d3289a63-fef4-4492-a60a-704fd23aa05c","type":"BasicTickFormatter"},"plot":{"id":"d9e2cfe9-1c5e-4b4b-985d-a818f0f00533","subtype":"Figure","type":"Plot"},"ticker":{"id":"6d257ff6-3fcf-4d76-b462-e0298550a4dd","type":"BasicTicker"}},"id":"9d06b0c9-bc18-4414-99e9-7ab190eb4805","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"d9e2cfe9-1c5e-4b4b-985d-a818f0f00533","subtype":"Figure","type":"Plot"},"ticker":{"id":"6d257ff6-3fcf-4d76-b462-e0298550a4dd","type":"BasicTicker"}},"id":"aee1bf56-b511-42bc-8b7a-ac2883a78234","type":"Grid"},{"attributes":{"formatter":{"id":"6810a657-7485-47e5-98d5-cb73d29bca41","type":"BasicTickFormatter"},"plot":{"id":"d9e2cfe9-1c5e-4b4b-985d-a818f0f00533","subtype":"Figure","type":"Plot"},"ticker":{"id":"83a9154b-793c-40d3-ae42-1d55c7274417","type":"BasicTicker"}},"id":"d26d6160-9572-4fad-87c5-5d39517fe802","type":"LinearAxis"},{"attributes":{"below":[{"id":"d26d6160-9572-4fad-87c5-5d39517fe802","type":"LinearAxis"}],"left":[{"id":"9d06b0c9-bc18-4414-99e9-7ab190eb4805","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"d26d6160-9572-4fad-87c5-5d39517fe802","type":"LinearAxis"},{"id":"d03519ec-3b86-4126-bf63-3fc10ef371c1","type":"Grid"},{"id":"9d06b0c9-bc18-4414-99e9-7ab190eb4805","type":"LinearAxis"},{"id":"aee1bf56-b511-42bc-8b7a-ac2883a78234","type":"Grid"},{"id":"25fed435-d6b3-472e-ac29-c8ebd00721ae","type":"BoxAnnotation"},{"id":"31c226db-7919-4127-a647-c54b8737d50a","type":"GlyphRenderer"}],"title":{"id":"81eb5826-8a97-414f-ba6e-b8cdf068bba2","type":"Title"},"tool_events":{"id":"70127385-fc2a-42f0-bc88-8c88c3aae930","type":"ToolEvents"},"toolbar":{"id":"4ece34e0-fc97-41ed-8f2f-e17c85cde30e","type":"Toolbar"},"x_range":{"id":"b85c7fd8-125e-4bce-89c8-9714c74ddf20","type":"DataRange1d"},"y_range":{"id":"b681b76e-a5f7-4669-83c7-e5ba0aa15409","type":"DataRange1d"}},"id":"d9e2cfe9-1c5e-4b4b-985d-a818f0f00533","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"83a9154b-793c-40d3-ae42-1d55c7274417","type":"BasicTicker"},{"attributes":{"plot":{"id":"d9e2cfe9-1c5e-4b4b-985d-a818f0f00533","subtype":"Figure","type":"Plot"},"ticker":{"id":"83a9154b-793c-40d3-ae42-1d55c7274417","type":"BasicTicker"}},"id":"d03519ec-3b86-4126-bf63-3fc10ef371c1","type":"Grid"},{"attributes":{},"id":"6d257ff6-3fcf-4d76-b462-e0298550a4dd","type":"BasicTicker"},{"attributes":{"data_source":{"id":"aaf07b68-a872-45c2-a7b2-8cb55827bf9a","type":"ColumnDataSource"},"glyph":{"id":"60062800-7fd3-4d2a-978c-19e732294288","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"7426a999-d0fb-4f43-9927-a351dd06de7f","type":"Circle"},"selection_glyph":null},"id":"31c226db-7919-4127-a647-c54b8737d50a","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"b85c7fd8-125e-4bce-89c8-9714c74ddf20","type":"DataRange1d"},{"attributes":{"callback":null},"id":"b681b76e-a5f7-4669-83c7-e5ba0aa15409","type":"DataRange1d"},{"attributes":{},"id":"70127385-fc2a-42f0-bc88-8c88c3aae930","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"7426a999-d0fb-4f43-9927-a351dd06de7f","type":"Circle"},{"attributes":{"plot":{"id":"d9e2cfe9-1c5e-4b4b-985d-a818f0f00533","subtype":"Figure","type":"Plot"}},"id":"3c08c737-395a-4ccc-9a4b-1d2474b67866","type":"PanTool"},{"attributes":{},"id":"6810a657-7485-47e5-98d5-cb73d29bca41","type":"BasicTickFormatter"}],"root_ids":["d9e2cfe9-1c5e-4b4b-985d-a818f0f00533"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"6cc31e34-f93c-4165-89c6-018bf7634bd1","elementid":"44cc3b33-f57e-407b-b555-f1321d710d12","modelid":"d9e2cfe9-1c5e-4b4b-985d-a818f0f00533"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
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