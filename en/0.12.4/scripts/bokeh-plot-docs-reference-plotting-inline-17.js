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
      };var element = document.getElementById("3ff562c2-6743-48ef-92eb-e7ecfdd2a35d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3ff562c2-6743-48ef-92eb-e7ecfdd2a35d' but no matching script tag was found. ")
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
                var docs_json = {"296927cd-5d2c-499c-b3d5-bffa8c8b228c":{"roots":{"references":[{"attributes":{"plot":{"id":"397ee897-0da7-4d09-bd08-a4bb4a7a6bcd","subtype":"Figure","type":"Plot"}},"id":"6a9ae6a0-86a4-454d-81f4-bcd25df4a2f1","type":"PanTool"},{"attributes":{"plot":{"id":"397ee897-0da7-4d09-bd08-a4bb4a7a6bcd","subtype":"Figure","type":"Plot"}},"id":"c54593a0-dec5-4fea-a024-409e52f91900","type":"SaveTool"},{"attributes":{"overlay":{"id":"179d3829-1257-4114-b750-b5cb1017cc06","type":"BoxAnnotation"},"plot":{"id":"397ee897-0da7-4d09-bd08-a4bb4a7a6bcd","subtype":"Figure","type":"Plot"}},"id":"ba8d6930-5952-4155-af83-01e64dbabe72","type":"BoxZoomTool"},{"attributes":{},"id":"2cbcae77-37c5-41c8-9b16-33c9a022b6cc","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"de24f685-1cc5-46bb-b0ec-e318994bb289","type":"Title"},{"attributes":{"plot":{"id":"397ee897-0da7-4d09-bd08-a4bb4a7a6bcd","subtype":"Figure","type":"Plot"}},"id":"f3864ddd-21f4-468a-a11c-b89a55f7ee01","type":"HelpTool"},{"attributes":{"plot":{"id":"397ee897-0da7-4d09-bd08-a4bb4a7a6bcd","subtype":"Figure","type":"Plot"},"ticker":{"id":"22b21f33-fd4b-4a2d-a785-0ba4f9e04815","type":"BasicTicker"}},"id":"accfb144-c05c-407d-9611-28d97da25beb","type":"Grid"},{"attributes":{},"id":"f388a0cd-bfdc-4011-9699-dceff565cda2","type":"ToolEvents"},{"attributes":{},"id":"7c711e35-9826-4b20-a396-01ad98eafdfa","type":"BasicTicker"},{"attributes":{"below":[{"id":"17724cdd-6c40-4861-8327-81ab56742cac","type":"LinearAxis"}],"left":[{"id":"2e96f68c-b1c3-43b6-a9fd-4148b5c9838a","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"17724cdd-6c40-4861-8327-81ab56742cac","type":"LinearAxis"},{"id":"accfb144-c05c-407d-9611-28d97da25beb","type":"Grid"},{"id":"2e96f68c-b1c3-43b6-a9fd-4148b5c9838a","type":"LinearAxis"},{"id":"7a24dad2-3d94-4ea4-bce4-72135edbc8c0","type":"Grid"},{"id":"179d3829-1257-4114-b750-b5cb1017cc06","type":"BoxAnnotation"},{"id":"43f320dd-a3fe-4e95-a28c-4c74fd65245c","type":"GlyphRenderer"}],"title":{"id":"de24f685-1cc5-46bb-b0ec-e318994bb289","type":"Title"},"tool_events":{"id":"f388a0cd-bfdc-4011-9699-dceff565cda2","type":"ToolEvents"},"toolbar":{"id":"013a362d-9c09-415e-b324-500524a6e609","type":"Toolbar"},"x_range":{"id":"c71bb701-f728-42b2-9832-b4fd63f134c1","type":"DataRange1d"},"y_range":{"id":"a0a59b2c-7006-4b80-ad22-6dd3c2223a7c","type":"DataRange1d"}},"id":"397ee897-0da7-4d09-bd08-a4bb4a7a6bcd","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"c71bb701-f728-42b2-9832-b4fd63f134c1","type":"DataRange1d"},{"attributes":{"angle":{"units":"rad","value":-0.7},"length":{"units":"data","value":45},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"a22902ad-0455-4c2d-94c8-8fac87ba0625","type":"Ray"},{"attributes":{"plot":{"id":"397ee897-0da7-4d09-bd08-a4bb4a7a6bcd","subtype":"Figure","type":"Plot"}},"id":"89fb3de7-b374-4f4b-bac5-ad95cbec83e5","type":"ResetTool"},{"attributes":{"plot":{"id":"397ee897-0da7-4d09-bd08-a4bb4a7a6bcd","subtype":"Figure","type":"Plot"}},"id":"f6a784b9-7ffb-4724-ba34-bd82fa4c5add","type":"WheelZoomTool"},{"attributes":{"angle":{"units":"rad","value":-0.7},"length":{"units":"data","value":45},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"df6b7e23-980d-4e47-b300-95f72671c7da","type":"Ray"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6a9ae6a0-86a4-454d-81f4-bcd25df4a2f1","type":"PanTool"},{"id":"f6a784b9-7ffb-4724-ba34-bd82fa4c5add","type":"WheelZoomTool"},{"id":"ba8d6930-5952-4155-af83-01e64dbabe72","type":"BoxZoomTool"},{"id":"c54593a0-dec5-4fea-a024-409e52f91900","type":"SaveTool"},{"id":"89fb3de7-b374-4f4b-bac5-ad95cbec83e5","type":"ResetTool"},{"id":"f3864ddd-21f4-468a-a11c-b89a55f7ee01","type":"HelpTool"}]},"id":"013a362d-9c09-415e-b324-500524a6e609","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"397ee897-0da7-4d09-bd08-a4bb4a7a6bcd","subtype":"Figure","type":"Plot"},"ticker":{"id":"7c711e35-9826-4b20-a396-01ad98eafdfa","type":"BasicTicker"}},"id":"7a24dad2-3d94-4ea4-bce4-72135edbc8c0","type":"Grid"},{"attributes":{"data_source":{"id":"082590ad-1b98-4ac6-a669-c31a9ce1ff5c","type":"ColumnDataSource"},"glyph":{"id":"a22902ad-0455-4c2d-94c8-8fac87ba0625","type":"Ray"},"hover_glyph":null,"nonselection_glyph":{"id":"df6b7e23-980d-4e47-b300-95f72671c7da","type":"Ray"},"selection_glyph":null},"id":"43f320dd-a3fe-4e95-a28c-4c74fd65245c","type":"GlyphRenderer"},{"attributes":{},"id":"22b21f33-fd4b-4a2d-a785-0ba4f9e04815","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"082590ad-1b98-4ac6-a669-c31a9ce1ff5c","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"179d3829-1257-4114-b750-b5cb1017cc06","type":"BoxAnnotation"},{"attributes":{},"id":"9aa09c34-2b7d-45f9-a12f-408e2ef3ed44","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"a0a59b2c-7006-4b80-ad22-6dd3c2223a7c","type":"DataRange1d"},{"attributes":{"formatter":{"id":"9aa09c34-2b7d-45f9-a12f-408e2ef3ed44","type":"BasicTickFormatter"},"plot":{"id":"397ee897-0da7-4d09-bd08-a4bb4a7a6bcd","subtype":"Figure","type":"Plot"},"ticker":{"id":"22b21f33-fd4b-4a2d-a785-0ba4f9e04815","type":"BasicTicker"}},"id":"17724cdd-6c40-4861-8327-81ab56742cac","type":"LinearAxis"},{"attributes":{"formatter":{"id":"2cbcae77-37c5-41c8-9b16-33c9a022b6cc","type":"BasicTickFormatter"},"plot":{"id":"397ee897-0da7-4d09-bd08-a4bb4a7a6bcd","subtype":"Figure","type":"Plot"},"ticker":{"id":"7c711e35-9826-4b20-a396-01ad98eafdfa","type":"BasicTicker"}},"id":"2e96f68c-b1c3-43b6-a9fd-4148b5c9838a","type":"LinearAxis"}],"root_ids":["397ee897-0da7-4d09-bd08-a4bb4a7a6bcd"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"296927cd-5d2c-499c-b3d5-bffa8c8b228c","elementid":"3ff562c2-6743-48ef-92eb-e7ecfdd2a35d","modelid":"397ee897-0da7-4d09-bd08-a4bb4a7a6bcd"}];
                
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
