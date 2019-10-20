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
      };var element = document.getElementById("1ac4b0a2-eacd-4b33-9222-85b6fbb2a542");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1ac4b0a2-eacd-4b33-9222-85b6fbb2a542' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"cda548fb-a2b2-4eca-af3c-975db2d8bd8d":{"roots":{"references":[{"attributes":{"plot":{"id":"567dfed8-9426-4ffa-b6a9-34b2a90ab0ec","subtype":"Figure","type":"Plot"}},"id":"c14467a6-67a2-4a5a-bf55-b73710a7bebd","type":"PanTool"},{"attributes":{"fill_color":{"value":"#CAB2D6"},"height":{"value":0.5},"line_color":{"value":"#CAB2D6"},"right":{"field":"right"},"y":{"field":"y"}},"id":"037dc90a-a62d-4580-8f48-88253deb3bd0","type":"HBar"},{"attributes":{"formatter":{"id":"c3283289-b06c-46de-ab47-3ab6f954561b","type":"BasicTickFormatter"},"plot":{"id":"567dfed8-9426-4ffa-b6a9-34b2a90ab0ec","subtype":"Figure","type":"Plot"},"ticker":{"id":"1bf94b6e-dd04-43b5-b10a-15de405339e8","type":"BasicTicker"}},"id":"f8c55ef3-236b-4bbc-a464-2cfd79400b7c","type":"LinearAxis"},{"attributes":{},"id":"1bf94b6e-dd04-43b5-b10a-15de405339e8","type":"BasicTicker"},{"attributes":{"plot":{"id":"567dfed8-9426-4ffa-b6a9-34b2a90ab0ec","subtype":"Figure","type":"Plot"}},"id":"1896d2c9-cbb7-452f-80ea-d123e3f72a40","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"567dfed8-9426-4ffa-b6a9-34b2a90ab0ec","subtype":"Figure","type":"Plot"},"ticker":{"id":"1bf94b6e-dd04-43b5-b10a-15de405339e8","type":"BasicTicker"}},"id":"a3174350-7ce9-470a-8854-dae0a9966b6d","type":"Grid"},{"attributes":{},"id":"fff1d29d-f277-47a3-8374-1019721585c5","type":"ToolEvents"},{"attributes":{"overlay":{"id":"a974ecc6-7a63-4e64-a355-6f6107b1807b","type":"BoxAnnotation"},"plot":{"id":"567dfed8-9426-4ffa-b6a9-34b2a90ab0ec","subtype":"Figure","type":"Plot"}},"id":"58a46826-949d-40b5-9a0f-4e49a763e7b0","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c14467a6-67a2-4a5a-bf55-b73710a7bebd","type":"PanTool"},{"id":"1896d2c9-cbb7-452f-80ea-d123e3f72a40","type":"WheelZoomTool"},{"id":"58a46826-949d-40b5-9a0f-4e49a763e7b0","type":"BoxZoomTool"},{"id":"17d990a7-42d0-4e6e-b34b-f2c9666e5aad","type":"SaveTool"},{"id":"eb972a57-080d-419c-b557-d69dd7505a90","type":"ResetTool"},{"id":"59040d58-5392-4e78-9b15-7e4b91f85c58","type":"HelpTool"}]},"id":"ccabb976-f644-48ff-9e41-7f0660321350","type":"Toolbar"},{"attributes":{"callback":null},"id":"35c66c97-431f-45c0-a7c1-9ce1e5d93656","type":"DataRange1d"},{"attributes":{"formatter":{"id":"9dbb5c96-7ac4-4555-8c93-13786d9c481d","type":"BasicTickFormatter"},"plot":{"id":"567dfed8-9426-4ffa-b6a9-34b2a90ab0ec","subtype":"Figure","type":"Plot"},"ticker":{"id":"61de67ad-bd0f-47da-ac0f-e6ea34145b85","type":"BasicTicker"}},"id":"fe1e1f01-4cf7-42c4-a54d-45d045d96456","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a974ecc6-7a63-4e64-a355-6f6107b1807b","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y","right"],"data":{"right":[1,2,3],"y":[1,2,3]}},"id":"c2d486e9-6ae5-458c-a935-6ff73042cf7d","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"y":{"field":"y"}},"id":"c51bbd93-a900-40af-87ba-6daa59659930","type":"HBar"},{"attributes":{"callback":null},"id":"beaa53c4-b745-4f53-8e7b-a793ffc6cb81","type":"DataRange1d"},{"attributes":{"plot":{"id":"567dfed8-9426-4ffa-b6a9-34b2a90ab0ec","subtype":"Figure","type":"Plot"}},"id":"eb972a57-080d-419c-b557-d69dd7505a90","type":"ResetTool"},{"attributes":{"plot":null,"text":null},"id":"5c8412a3-c673-452c-b744-dfb9efd3d3c3","type":"Title"},{"attributes":{},"id":"61de67ad-bd0f-47da-ac0f-e6ea34145b85","type":"BasicTicker"},{"attributes":{},"id":"c3283289-b06c-46de-ab47-3ab6f954561b","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"567dfed8-9426-4ffa-b6a9-34b2a90ab0ec","subtype":"Figure","type":"Plot"},"ticker":{"id":"61de67ad-bd0f-47da-ac0f-e6ea34145b85","type":"BasicTicker"}},"id":"2e1d01f4-8684-47ec-9b0a-6ec90d06cdf9","type":"Grid"},{"attributes":{},"id":"9dbb5c96-7ac4-4555-8c93-13786d9c481d","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"fe1e1f01-4cf7-42c4-a54d-45d045d96456","type":"LinearAxis"}],"left":[{"id":"f8c55ef3-236b-4bbc-a464-2cfd79400b7c","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"fe1e1f01-4cf7-42c4-a54d-45d045d96456","type":"LinearAxis"},{"id":"2e1d01f4-8684-47ec-9b0a-6ec90d06cdf9","type":"Grid"},{"id":"f8c55ef3-236b-4bbc-a464-2cfd79400b7c","type":"LinearAxis"},{"id":"a3174350-7ce9-470a-8854-dae0a9966b6d","type":"Grid"},{"id":"a974ecc6-7a63-4e64-a355-6f6107b1807b","type":"BoxAnnotation"},{"id":"a08fd0be-2372-46e1-a383-5210c528929c","type":"GlyphRenderer"}],"title":{"id":"5c8412a3-c673-452c-b744-dfb9efd3d3c3","type":"Title"},"tool_events":{"id":"fff1d29d-f277-47a3-8374-1019721585c5","type":"ToolEvents"},"toolbar":{"id":"ccabb976-f644-48ff-9e41-7f0660321350","type":"Toolbar"},"x_range":{"id":"beaa53c4-b745-4f53-8e7b-a793ffc6cb81","type":"DataRange1d"},"y_range":{"id":"35c66c97-431f-45c0-a7c1-9ce1e5d93656","type":"DataRange1d"}},"id":"567dfed8-9426-4ffa-b6a9-34b2a90ab0ec","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"567dfed8-9426-4ffa-b6a9-34b2a90ab0ec","subtype":"Figure","type":"Plot"}},"id":"59040d58-5392-4e78-9b15-7e4b91f85c58","type":"HelpTool"},{"attributes":{"data_source":{"id":"c2d486e9-6ae5-458c-a935-6ff73042cf7d","type":"ColumnDataSource"},"glyph":{"id":"037dc90a-a62d-4580-8f48-88253deb3bd0","type":"HBar"},"hover_glyph":null,"nonselection_glyph":{"id":"c51bbd93-a900-40af-87ba-6daa59659930","type":"HBar"},"selection_glyph":null},"id":"a08fd0be-2372-46e1-a383-5210c528929c","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"567dfed8-9426-4ffa-b6a9-34b2a90ab0ec","subtype":"Figure","type":"Plot"}},"id":"17d990a7-42d0-4e6e-b34b-f2c9666e5aad","type":"SaveTool"}],"root_ids":["567dfed8-9426-4ffa-b6a9-34b2a90ab0ec"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"cda548fb-a2b2-4eca-af3c-975db2d8bd8d","elementid":"1ac4b0a2-eacd-4b33-9222-85b6fbb2a542","modelid":"567dfed8-9426-4ffa-b6a9-34b2a90ab0ec"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
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