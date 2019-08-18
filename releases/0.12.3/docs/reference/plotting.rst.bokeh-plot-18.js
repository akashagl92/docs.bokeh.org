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
      };var element = document.getElementById("03a016a1-a2a2-40c0-a751-014447851f24");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '03a016a1-a2a2-40c0-a751-014447851f24' but no matching script tag was found. ")
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
                  var docs_json = {"6d11f63c-1f97-4717-95c9-5b1c7490d683":{"roots":{"references":[{"attributes":{"formatter":{"id":"ba57259c-bdb2-4ad6-8323-5cf078f601dd","type":"BasicTickFormatter"},"plot":{"id":"f5b149bd-3311-4bfe-9fdd-23d9ec147971","subtype":"Figure","type":"Plot"},"ticker":{"id":"85553624-90bc-461e-8c23-bdb5d82dbde4","type":"BasicTicker"}},"id":"16157706-6876-497f-9de7-36607f75cea6","type":"LinearAxis"},{"attributes":{"overlay":{"id":"1f6ab900-a265-4247-9b4c-c6aaee6177b6","type":"BoxAnnotation"},"plot":{"id":"f5b149bd-3311-4bfe-9fdd-23d9ec147971","subtype":"Figure","type":"Plot"}},"id":"f973354b-bd8d-4d1e-af98-edb2d793bd41","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"6fe6b2dc-2622-44e6-923a-4a3d84938589","type":"BasicTickFormatter"},"plot":{"id":"f5b149bd-3311-4bfe-9fdd-23d9ec147971","subtype":"Figure","type":"Plot"},"ticker":{"id":"28bd40f0-54d1-4c10-90c2-b1c9299f6c5b","type":"BasicTicker"}},"id":"7c3bddc0-1222-43a7-95e5-d007b2b15d35","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f459e11c-a116-4923-ada3-29088b5b8da3","type":"PanTool"},{"id":"aed9ecc3-8024-4c3f-9c47-11eecd72b4cf","type":"WheelZoomTool"},{"id":"f973354b-bd8d-4d1e-af98-edb2d793bd41","type":"BoxZoomTool"},{"id":"21a5808a-e659-49e7-a3a7-44d67dc356dc","type":"SaveTool"},{"id":"160dc1c7-ce39-4656-972c-3003376d8cc6","type":"ResetTool"},{"id":"4d32ffe4-68b5-490b-85c8-b8002d62edb4","type":"HelpTool"}]},"id":"54496410-f76c-4b60-8ecd-5c88e79de8d7","type":"Toolbar"},{"attributes":{"plot":{"id":"f5b149bd-3311-4bfe-9fdd-23d9ec147971","subtype":"Figure","type":"Plot"}},"id":"21a5808a-e659-49e7-a3a7-44d67dc356dc","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1f6ab900-a265-4247-9b4c-c6aaee6177b6","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"f5b149bd-3311-4bfe-9fdd-23d9ec147971","subtype":"Figure","type":"Plot"}},"id":"160dc1c7-ce39-4656-972c-3003376d8cc6","type":"ResetTool"},{"attributes":{"callback":null},"id":"a99c99e6-f2bd-4201-85a7-ccf6b174e2ee","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"f5b149bd-3311-4bfe-9fdd-23d9ec147971","subtype":"Figure","type":"Plot"},"ticker":{"id":"28bd40f0-54d1-4c10-90c2-b1c9299f6c5b","type":"BasicTicker"}},"id":"ccc59b27-f30a-4e41-9c20-5568201ba269","type":"Grid"},{"attributes":{"data_source":{"id":"949aebec-ec1d-44d6-bdb1-d25d2f72d7f9","type":"ColumnDataSource"},"glyph":{"id":"2f7068d3-97fb-4635-bbce-de2d9e7779df","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"6c83a3a5-b2b7-42d2-a487-c41234626833","type":"Rect"},"selection_glyph":null},"id":"86c96a78-abaa-47bd-9547-bd570353211d","type":"GlyphRenderer"},{"attributes":{},"id":"6fe6b2dc-2622-44e6-923a-4a3d84938589","type":"BasicTickFormatter"},{"attributes":{},"id":"28bd40f0-54d1-4c10-90c2-b1c9299f6c5b","type":"BasicTicker"},{"attributes":{"plot":{"id":"f5b149bd-3311-4bfe-9fdd-23d9ec147971","subtype":"Figure","type":"Plot"}},"id":"f459e11c-a116-4923-ada3-29088b5b8da3","type":"PanTool"},{"attributes":{"fill_color":{"value":"#CAB2D6"},"height":{"units":"screen","value":20},"line_color":{"value":"#CAB2D6"},"width":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"2f7068d3-97fb-4635-bbce-de2d9e7779df","type":"Rect"},{"attributes":{},"id":"85553624-90bc-461e-8c23-bdb5d82dbde4","type":"BasicTicker"},{"attributes":{"plot":{"id":"f5b149bd-3311-4bfe-9fdd-23d9ec147971","subtype":"Figure","type":"Plot"},"ticker":{"id":"85553624-90bc-461e-8c23-bdb5d82dbde4","type":"BasicTicker"}},"id":"c094d102-5dac-4e9a-9032-954515df3ed0","type":"Grid"},{"attributes":{},"id":"ba57259c-bdb2-4ad6-8323-5cf078f601dd","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":null},"id":"baabc3fa-ed13-43d8-8f95-cbebe847efca","type":"Title"},{"attributes":{"plot":{"id":"f5b149bd-3311-4bfe-9fdd-23d9ec147971","subtype":"Figure","type":"Plot"}},"id":"4d32ffe4-68b5-490b-85c8-b8002d62edb4","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"screen","value":20},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"6c83a3a5-b2b7-42d2-a487-c41234626833","type":"Rect"},{"attributes":{"plot":{"id":"f5b149bd-3311-4bfe-9fdd-23d9ec147971","subtype":"Figure","type":"Plot"}},"id":"aed9ecc3-8024-4c3f-9c47-11eecd72b4cf","type":"WheelZoomTool"},{"attributes":{},"id":"b0992037-c6d1-4bc5-a746-4bedfae9892e","type":"ToolEvents"},{"attributes":{"below":[{"id":"16157706-6876-497f-9de7-36607f75cea6","type":"LinearAxis"}],"left":[{"id":"7c3bddc0-1222-43a7-95e5-d007b2b15d35","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"16157706-6876-497f-9de7-36607f75cea6","type":"LinearAxis"},{"id":"c094d102-5dac-4e9a-9032-954515df3ed0","type":"Grid"},{"id":"7c3bddc0-1222-43a7-95e5-d007b2b15d35","type":"LinearAxis"},{"id":"ccc59b27-f30a-4e41-9c20-5568201ba269","type":"Grid"},{"id":"1f6ab900-a265-4247-9b4c-c6aaee6177b6","type":"BoxAnnotation"},{"id":"86c96a78-abaa-47bd-9547-bd570353211d","type":"GlyphRenderer"}],"title":{"id":"baabc3fa-ed13-43d8-8f95-cbebe847efca","type":"Title"},"tool_events":{"id":"b0992037-c6d1-4bc5-a746-4bedfae9892e","type":"ToolEvents"},"toolbar":{"id":"54496410-f76c-4b60-8ecd-5c88e79de8d7","type":"Toolbar"},"x_range":{"id":"c54c1667-1544-4b1d-bf6b-31029b22f9be","type":"DataRange1d"},"y_range":{"id":"a99c99e6-f2bd-4201-85a7-ccf6b174e2ee","type":"DataRange1d"}},"id":"f5b149bd-3311-4bfe-9fdd-23d9ec147971","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"949aebec-ec1d-44d6-bdb1-d25d2f72d7f9","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"c54c1667-1544-4b1d-bf6b-31029b22f9be","type":"DataRange1d"}],"root_ids":["f5b149bd-3311-4bfe-9fdd-23d9ec147971"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"6d11f63c-1f97-4717-95c9-5b1c7490d683","elementid":"03a016a1-a2a2-40c0-a751-014447851f24","modelid":"f5b149bd-3311-4bfe-9fdd-23d9ec147971"}];
                  
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