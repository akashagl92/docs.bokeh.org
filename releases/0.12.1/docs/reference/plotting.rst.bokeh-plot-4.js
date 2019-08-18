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
      };var element = document.getElementById("77b990d5-6ec7-4d00-a1c2-265614d4629c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '77b990d5-6ec7-4d00-a1c2-265614d4629c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"1e34480d-1b24-4c8b-8dde-d52007937cdc":{"roots":{"references":[{"attributes":{},"id":"1e782a4c-14ab-40b1-9c91-e072e362f0a0","type":"ToolEvents"},{"attributes":{"plot":{"id":"fee13eed-d3a2-4173-955b-8be6c0c3a499","subtype":"Figure","type":"Plot"}},"id":"f6f669bd-eb3d-42b0-bf08-a18f9c5dba77","type":"HelpTool"},{"attributes":{"plot":{"id":"fee13eed-d3a2-4173-955b-8be6c0c3a499","subtype":"Figure","type":"Plot"}},"id":"0f3bd995-8298-4234-a385-85d48515b035","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"fee13eed-d3a2-4173-955b-8be6c0c3a499","subtype":"Figure","type":"Plot"},"ticker":{"id":"fda5cc8d-1635-46a7-a846-6317e53d9535","type":"BasicTicker"}},"id":"bf452d4a-ba68-48a6-b8a2-4dbd2925aa30","type":"Grid"},{"attributes":{},"id":"43dab74e-a3a5-4cba-94ad-3f19be778180","type":"BasicTickFormatter"},{"attributes":{},"id":"6cd81af7-7ca6-498b-b5ab-06da45633820","type":"BasicTickFormatter"},{"attributes":{},"id":"fda5cc8d-1635-46a7-a846-6317e53d9535","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"c5dda4f6-cf01-46a5-ac3e-1068201e426c","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"fee13eed-d3a2-4173-955b-8be6c0c3a499","subtype":"Figure","type":"Plot"}},"id":"81fef56f-adb2-4ef7-87d7-c08871f6a4de","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7e3864ac-9f67-4031-94e1-a3210620796a","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2b9d317e-f3ff-4dd5-811f-091fbbd37a13","type":"PanTool"},{"id":"0f3bd995-8298-4234-a385-85d48515b035","type":"WheelZoomTool"},{"id":"c5d4304e-8a87-4fb7-afe1-2fe4b8ba6526","type":"BoxZoomTool"},{"id":"4ec0dfb4-83bc-4a27-8ad6-209de1ccfa65","type":"SaveTool"},{"id":"81fef56f-adb2-4ef7-87d7-c08871f6a4de","type":"ResetTool"},{"id":"f6f669bd-eb3d-42b0-bf08-a18f9c5dba77","type":"HelpTool"}]},"id":"1ee36bdc-cba8-43d3-8d83-cddbf4802743","type":"Toolbar"},{"attributes":{"below":[{"id":"ff409dfa-5cd1-44f7-8311-5903bb1b1289","type":"LinearAxis"}],"left":[{"id":"799ff7af-d0eb-464d-b042-d28e8d4c5dc0","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"ff409dfa-5cd1-44f7-8311-5903bb1b1289","type":"LinearAxis"},{"id":"bf452d4a-ba68-48a6-b8a2-4dbd2925aa30","type":"Grid"},{"id":"799ff7af-d0eb-464d-b042-d28e8d4c5dc0","type":"LinearAxis"},{"id":"56fe72ab-46f5-4872-ab7d-12eb38fa9c53","type":"Grid"},{"id":"7e3864ac-9f67-4031-94e1-a3210620796a","type":"BoxAnnotation"},{"id":"694c5c79-9c3a-49fb-9a4f-7c63a357e3ff","type":"GlyphRenderer"}],"title":{"id":"181f5ebb-73f4-474c-9743-c572904b5c2b","type":"Title"},"tool_events":{"id":"1e782a4c-14ab-40b1-9c91-e072e362f0a0","type":"ToolEvents"},"toolbar":{"id":"1ee36bdc-cba8-43d3-8d83-cddbf4802743","type":"Toolbar"},"x_range":{"id":"83530fb5-ec96-48d7-adef-6c3871c5cd7f","type":"DataRange1d"},"y_range":{"id":"ed4b99ed-59dd-4a49-851d-dc7b94a9a1e2","type":"DataRange1d"}},"id":"fee13eed-d3a2-4173-955b-8be6c0c3a499","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"c5dda4f6-cf01-46a5-ac3e-1068201e426c","type":"ColumnDataSource"},"glyph":{"id":"09a0d4b1-cfc1-47ed-9a85-58b3c1b65634","type":"CircleX"},"hover_glyph":null,"nonselection_glyph":{"id":"68758ac8-73ac-4ef0-ad56-b96950a7694c","type":"CircleX"},"selection_glyph":null},"id":"694c5c79-9c3a-49fb-9a4f-7c63a357e3ff","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"83530fb5-ec96-48d7-adef-6c3871c5cd7f","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#DD1C77"},"line_color":{"value":"#DD1C77"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"09a0d4b1-cfc1-47ed-9a85-58b3c1b65634","type":"CircleX"},{"attributes":{"overlay":{"id":"7e3864ac-9f67-4031-94e1-a3210620796a","type":"BoxAnnotation"},"plot":{"id":"fee13eed-d3a2-4173-955b-8be6c0c3a499","subtype":"Figure","type":"Plot"}},"id":"c5d4304e-8a87-4fb7-afe1-2fe4b8ba6526","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"6cd81af7-7ca6-498b-b5ab-06da45633820","type":"BasicTickFormatter"},"plot":{"id":"fee13eed-d3a2-4173-955b-8be6c0c3a499","subtype":"Figure","type":"Plot"},"ticker":{"id":"95cf5f99-f8b6-45b7-b820-1013c7588fc8","type":"BasicTicker"}},"id":"799ff7af-d0eb-464d-b042-d28e8d4c5dc0","type":"LinearAxis"},{"attributes":{"plot":null,"text":null},"id":"181f5ebb-73f4-474c-9743-c572904b5c2b","type":"Title"},{"attributes":{"plot":{"id":"fee13eed-d3a2-4173-955b-8be6c0c3a499","subtype":"Figure","type":"Plot"}},"id":"2b9d317e-f3ff-4dd5-811f-091fbbd37a13","type":"PanTool"},{"attributes":{"formatter":{"id":"43dab74e-a3a5-4cba-94ad-3f19be778180","type":"BasicTickFormatter"},"plot":{"id":"fee13eed-d3a2-4173-955b-8be6c0c3a499","subtype":"Figure","type":"Plot"},"ticker":{"id":"fda5cc8d-1635-46a7-a846-6317e53d9535","type":"BasicTicker"}},"id":"ff409dfa-5cd1-44f7-8311-5903bb1b1289","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"fee13eed-d3a2-4173-955b-8be6c0c3a499","subtype":"Figure","type":"Plot"},"ticker":{"id":"95cf5f99-f8b6-45b7-b820-1013c7588fc8","type":"BasicTicker"}},"id":"56fe72ab-46f5-4872-ab7d-12eb38fa9c53","type":"Grid"},{"attributes":{},"id":"95cf5f99-f8b6-45b7-b820-1013c7588fc8","type":"BasicTicker"},{"attributes":{"callback":null},"id":"ed4b99ed-59dd-4a49-851d-dc7b94a9a1e2","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"68758ac8-73ac-4ef0-ad56-b96950a7694c","type":"CircleX"},{"attributes":{"plot":{"id":"fee13eed-d3a2-4173-955b-8be6c0c3a499","subtype":"Figure","type":"Plot"}},"id":"4ec0dfb4-83bc-4a27-8ad6-209de1ccfa65","type":"SaveTool"}],"root_ids":["fee13eed-d3a2-4173-955b-8be6c0c3a499"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"1e34480d-1b24-4c8b-8dde-d52007937cdc","elementid":"77b990d5-6ec7-4d00-a1c2-265614d4629c","modelid":"fee13eed-d3a2-4173-955b-8be6c0c3a499"}];
              
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