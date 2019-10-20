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
      };var element = document.getElementById("81bdce86-32f2-4d58-92da-a2fe1b9d7fbc");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '81bdce86-32f2-4d58-92da-a2fe1b9d7fbc' but no matching script tag was found. ")
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
                var docs_json = {"5236664b-9f50-4178-9648-9cd42be8c188":{"roots":{"references":[{"attributes":{"overlay":{"id":"3b010b52-6d09-40f1-8249-d8d3c1877928","type":"BoxAnnotation"},"plot":{"id":"97395baa-174a-4c3b-8afe-54782eeb33b3","subtype":"Figure","type":"Plot"}},"id":"8ef3ae5b-3ebd-4752-b866-3c7a180feb76","type":"BoxZoomTool"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.3},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"f0944c68-1bc2-4438-82a4-5b64a44d6aaf","type":"Ellipse"},{"attributes":{"plot":{"id":"97395baa-174a-4c3b-8afe-54782eeb33b3","subtype":"Figure","type":"Plot"}},"id":"fa9be085-910b-4f1d-bed9-b95f3730f07e","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3b010b52-6d09-40f1-8249-d8d3c1877928","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"97395baa-174a-4c3b-8afe-54782eeb33b3","subtype":"Figure","type":"Plot"},"ticker":{"id":"9a28b001-6d0a-4c8f-ad4c-ad8317b9c8ab","type":"BasicTicker"}},"id":"dae9e0b1-fa41-4936-832c-913a8ec20b5d","type":"Grid"},{"attributes":{"plot":{"id":"97395baa-174a-4c3b-8afe-54782eeb33b3","subtype":"Figure","type":"Plot"}},"id":"a090f2ed-76e5-475c-8a07-e30be377942a","type":"PanTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a090f2ed-76e5-475c-8a07-e30be377942a","type":"PanTool"},{"id":"fa9be085-910b-4f1d-bed9-b95f3730f07e","type":"WheelZoomTool"},{"id":"8ef3ae5b-3ebd-4752-b866-3c7a180feb76","type":"BoxZoomTool"},{"id":"9ba5514d-3532-41ad-887c-dd3f22dc25d7","type":"SaveTool"},{"id":"e8f5feb5-377b-4750-b871-317cf45ba864","type":"ResetTool"},{"id":"5654e337-937b-40da-b352-1289820fd2cb","type":"HelpTool"}]},"id":"6a5d7441-ff73-487d-80f8-ac633cad2468","type":"Toolbar"},{"attributes":{"formatter":{"id":"eecc5bb0-c319-4d09-8bcd-f47c79cc68b0","type":"BasicTickFormatter"},"plot":{"id":"97395baa-174a-4c3b-8afe-54782eeb33b3","subtype":"Figure","type":"Plot"},"ticker":{"id":"254a6759-0685-4dde-b880-6834152f8740","type":"BasicTicker"}},"id":"4f1ae0c7-5a1a-43c3-bd57-d7c3e5dede84","type":"LinearAxis"},{"attributes":{"formatter":{"id":"2e01bcd5-4aa8-4021-bbbc-0d1b4453c5ea","type":"BasicTickFormatter"},"plot":{"id":"97395baa-174a-4c3b-8afe-54782eeb33b3","subtype":"Figure","type":"Plot"},"ticker":{"id":"9a28b001-6d0a-4c8f-ad4c-ad8317b9c8ab","type":"BasicTicker"}},"id":"f6c9b0dc-7e78-496f-8f26-549333998dfc","type":"LinearAxis"},{"attributes":{"data_source":{"id":"9028a5ae-1718-478e-8209-59b0307120fd","type":"ColumnDataSource"},"glyph":{"id":"48762911-df04-4e97-a781-4beefa0ab92f","type":"Ellipse"},"hover_glyph":null,"nonselection_glyph":{"id":"f0944c68-1bc2-4438-82a4-5b64a44d6aaf","type":"Ellipse"},"selection_glyph":null},"id":"6cb88c89-af6e-4769-ba08-fae051e9a287","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"97395baa-174a-4c3b-8afe-54782eeb33b3","subtype":"Figure","type":"Plot"},"ticker":{"id":"254a6759-0685-4dde-b880-6834152f8740","type":"BasicTicker"}},"id":"9957a9f7-65d6-4afa-af11-4c682414d533","type":"Grid"},{"attributes":{},"id":"eecc5bb0-c319-4d09-8bcd-f47c79cc68b0","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"97395baa-174a-4c3b-8afe-54782eeb33b3","subtype":"Figure","type":"Plot"}},"id":"5654e337-937b-40da-b352-1289820fd2cb","type":"HelpTool"},{"attributes":{"callback":null},"id":"3ba3cbf1-0f4a-4245-bb81-807713a63bc8","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"3232d97c-6f81-4ebd-9d99-a11a03af65ff","type":"Title"},{"attributes":{"plot":{"id":"97395baa-174a-4c3b-8afe-54782eeb33b3","subtype":"Figure","type":"Plot"}},"id":"9ba5514d-3532-41ad-887c-dd3f22dc25d7","type":"SaveTool"},{"attributes":{"callback":null},"id":"37437b98-b200-4bb5-9088-63009a9b9be0","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","width","y"],"data":{"width":[0.2,0.3,0.1],"x":[1,2,3],"y":[1,2,3]}},"id":"9028a5ae-1718-478e-8209-59b0307120fd","type":"ColumnDataSource"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_color":{"value":"#CAB2D6"},"height":{"units":"data","value":0.3},"line_color":{"value":"#CAB2D6"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"48762911-df04-4e97-a781-4beefa0ab92f","type":"Ellipse"},{"attributes":{"plot":{"id":"97395baa-174a-4c3b-8afe-54782eeb33b3","subtype":"Figure","type":"Plot"}},"id":"e8f5feb5-377b-4750-b871-317cf45ba864","type":"ResetTool"},{"attributes":{},"id":"254a6759-0685-4dde-b880-6834152f8740","type":"BasicTicker"},{"attributes":{},"id":"efdeb168-8742-4489-9924-53bf030c2c41","type":"ToolEvents"},{"attributes":{},"id":"9a28b001-6d0a-4c8f-ad4c-ad8317b9c8ab","type":"BasicTicker"},{"attributes":{},"id":"2e01bcd5-4aa8-4021-bbbc-0d1b4453c5ea","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"4f1ae0c7-5a1a-43c3-bd57-d7c3e5dede84","type":"LinearAxis"}],"left":[{"id":"f6c9b0dc-7e78-496f-8f26-549333998dfc","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"4f1ae0c7-5a1a-43c3-bd57-d7c3e5dede84","type":"LinearAxis"},{"id":"9957a9f7-65d6-4afa-af11-4c682414d533","type":"Grid"},{"id":"f6c9b0dc-7e78-496f-8f26-549333998dfc","type":"LinearAxis"},{"id":"dae9e0b1-fa41-4936-832c-913a8ec20b5d","type":"Grid"},{"id":"3b010b52-6d09-40f1-8249-d8d3c1877928","type":"BoxAnnotation"},{"id":"6cb88c89-af6e-4769-ba08-fae051e9a287","type":"GlyphRenderer"}],"title":{"id":"3232d97c-6f81-4ebd-9d99-a11a03af65ff","type":"Title"},"tool_events":{"id":"efdeb168-8742-4489-9924-53bf030c2c41","type":"ToolEvents"},"toolbar":{"id":"6a5d7441-ff73-487d-80f8-ac633cad2468","type":"Toolbar"},"x_range":{"id":"3ba3cbf1-0f4a-4245-bb81-807713a63bc8","type":"DataRange1d"},"y_range":{"id":"37437b98-b200-4bb5-9088-63009a9b9be0","type":"DataRange1d"}},"id":"97395baa-174a-4c3b-8afe-54782eeb33b3","subtype":"Figure","type":"Plot"}],"root_ids":["97395baa-174a-4c3b-8afe-54782eeb33b3"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"5236664b-9f50-4178-9648-9cd42be8c188","elementid":"81bdce86-32f2-4d58-92da-a2fe1b9d7fbc","modelid":"97395baa-174a-4c3b-8afe-54782eeb33b3"}];
                
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
