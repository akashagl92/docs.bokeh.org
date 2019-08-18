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
      };var element = document.getElementById("87fc9e83-6aa1-4131-afc4-2db72373f44b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '87fc9e83-6aa1-4131-afc4-2db72373f44b' but no matching script tag was found. ")
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
                  var docs_json = {"159911d4-e568-483e-9eea-ed0caf857e3b":{"roots":{"references":[{"attributes":{"callback":null},"id":"6d41dc2b-977f-4eaa-b25b-271312e7672f","type":"DataRange1d"},{"attributes":{"formatter":{"id":"d80c3182-796f-4ca1-b08d-73003ad14a3a","type":"BasicTickFormatter"},"plot":{"id":"f51e6bfe-8a38-4903-ab67-43f6a05e220b","subtype":"Figure","type":"Plot"},"ticker":{"id":"03e979ff-a42b-4577-9dd8-3b01dd0daa65","type":"BasicTicker"}},"id":"922a4059-74d1-45f0-a028-3ea048094041","type":"LinearAxis"},{"attributes":{"plot":null,"text":"Left Title"},"id":"87bfcd59-8030-4ee9-baff-72054f35ffc6","type":"Title"},{"attributes":{},"id":"27c73485-b9b3-49ef-b223-3d09a1cf780b","type":"ToolEvents"},{"attributes":{"plot":{"id":"f51e6bfe-8a38-4903-ab67-43f6a05e220b","subtype":"Figure","type":"Plot"}},"id":"1b365fd5-7ab4-47fa-a3da-f23ad06cf416","type":"HelpTool"},{"attributes":{},"id":"d80c3182-796f-4ca1-b08d-73003ad14a3a","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"922a4059-74d1-45f0-a028-3ea048094041","type":"LinearAxis"},{"id":"88fc1906-1e44-4896-989e-973d63d74278","type":"Title"}],"left":[{"id":"d03e7051-960e-49fa-8300-f2b3ff882b00","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"922a4059-74d1-45f0-a028-3ea048094041","type":"LinearAxis"},{"id":"e784fb63-3284-43aa-9b4f-d15e89e5fb3e","type":"Grid"},{"id":"d03e7051-960e-49fa-8300-f2b3ff882b00","type":"LinearAxis"},{"id":"1d636859-258d-4372-b13b-d8280c767cb4","type":"Grid"},{"id":"68d4b824-b6b8-4574-90a3-901c7ce3ef84","type":"BoxAnnotation"},{"id":"a1906eed-b698-4130-863a-e06dfeb36ea8","type":"GlyphRenderer"},{"id":"88fc1906-1e44-4896-989e-973d63d74278","type":"Title"}],"title":{"id":"87bfcd59-8030-4ee9-baff-72054f35ffc6","type":"Title"},"title_location":"left","tool_events":{"id":"27c73485-b9b3-49ef-b223-3d09a1cf780b","type":"ToolEvents"},"toolbar":{"id":"735dcded-56a1-4026-a022-75589505d5c7","type":"Toolbar"},"x_range":{"id":"6d41dc2b-977f-4eaa-b25b-271312e7672f","type":"DataRange1d"},"y_range":{"id":"10fe98c1-4f3a-4997-b2db-713b9c0c0d55","type":"DataRange1d"}},"id":"f51e6bfe-8a38-4903-ab67-43f6a05e220b","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"03e979ff-a42b-4577-9dd8-3b01dd0daa65","type":"BasicTicker"},{"attributes":{},"id":"dc0788db-37fd-4870-b428-b3b6e48e7201","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9bea61f0-dab2-493a-8ffb-73655aea203f","type":"Circle"},{"attributes":{},"id":"3c28ac10-2b7b-4bf9-9ee9-cb68ef6f2f65","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"779fe6eb-6238-4907-aa1e-6130fcbafc3e","type":"PanTool"},{"id":"92dfe13e-3140-48e5-bd0e-c84dcefcee9e","type":"WheelZoomTool"},{"id":"2985aca9-4cb0-4145-aaa1-a7546ebfa2c9","type":"BoxZoomTool"},{"id":"42208009-9119-4ecc-907a-226e644e6fbb","type":"SaveTool"},{"id":"ef8e8784-8934-4829-9283-282964382d26","type":"ResetTool"},{"id":"1b365fd5-7ab4-47fa-a3da-f23ad06cf416","type":"HelpTool"}]},"id":"735dcded-56a1-4026-a022-75589505d5c7","type":"Toolbar"},{"attributes":{"plot":{"id":"f51e6bfe-8a38-4903-ab67-43f6a05e220b","subtype":"Figure","type":"Plot"},"ticker":{"id":"03e979ff-a42b-4577-9dd8-3b01dd0daa65","type":"BasicTicker"}},"id":"e784fb63-3284-43aa-9b4f-d15e89e5fb3e","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"f51e6bfe-8a38-4903-ab67-43f6a05e220b","subtype":"Figure","type":"Plot"},"ticker":{"id":"3c28ac10-2b7b-4bf9-9ee9-cb68ef6f2f65","type":"BasicTicker"}},"id":"1d636859-258d-4372-b13b-d8280c767cb4","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2],"y":[3,4]}},"id":"0cd0263e-6916-4a0e-9d03-008b6119b070","type":"ColumnDataSource"},{"attributes":{"align":"center","plot":{"id":"f51e6bfe-8a38-4903-ab67-43f6a05e220b","subtype":"Figure","type":"Plot"},"text":"Bottom Centered Title"},"id":"88fc1906-1e44-4896-989e-973d63d74278","type":"Title"},{"attributes":{"formatter":{"id":"dc0788db-37fd-4870-b428-b3b6e48e7201","type":"BasicTickFormatter"},"plot":{"id":"f51e6bfe-8a38-4903-ab67-43f6a05e220b","subtype":"Figure","type":"Plot"},"ticker":{"id":"3c28ac10-2b7b-4bf9-9ee9-cb68ef6f2f65","type":"BasicTicker"}},"id":"d03e7051-960e-49fa-8300-f2b3ff882b00","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5f0391a8-a817-44be-88fe-d2efd9b1c946","type":"Circle"},{"attributes":{"plot":{"id":"f51e6bfe-8a38-4903-ab67-43f6a05e220b","subtype":"Figure","type":"Plot"}},"id":"779fe6eb-6238-4907-aa1e-6130fcbafc3e","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"68d4b824-b6b8-4574-90a3-901c7ce3ef84","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"f51e6bfe-8a38-4903-ab67-43f6a05e220b","subtype":"Figure","type":"Plot"}},"id":"92dfe13e-3140-48e5-bd0e-c84dcefcee9e","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"f51e6bfe-8a38-4903-ab67-43f6a05e220b","subtype":"Figure","type":"Plot"}},"id":"ef8e8784-8934-4829-9283-282964382d26","type":"ResetTool"},{"attributes":{"data_source":{"id":"0cd0263e-6916-4a0e-9d03-008b6119b070","type":"ColumnDataSource"},"glyph":{"id":"5f0391a8-a817-44be-88fe-d2efd9b1c946","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"9bea61f0-dab2-493a-8ffb-73655aea203f","type":"Circle"},"selection_glyph":null},"id":"a1906eed-b698-4130-863a-e06dfeb36ea8","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"10fe98c1-4f3a-4997-b2db-713b9c0c0d55","type":"DataRange1d"},{"attributes":{"overlay":{"id":"68d4b824-b6b8-4574-90a3-901c7ce3ef84","type":"BoxAnnotation"},"plot":{"id":"f51e6bfe-8a38-4903-ab67-43f6a05e220b","subtype":"Figure","type":"Plot"}},"id":"2985aca9-4cb0-4145-aaa1-a7546ebfa2c9","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"f51e6bfe-8a38-4903-ab67-43f6a05e220b","subtype":"Figure","type":"Plot"}},"id":"42208009-9119-4ecc-907a-226e644e6fbb","type":"SaveTool"}],"root_ids":["f51e6bfe-8a38-4903-ab67-43f6a05e220b"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"159911d4-e568-483e-9eea-ed0caf857e3b","elementid":"87fc9e83-6aa1-4131-afc4-2db72373f44b","modelid":"f51e6bfe-8a38-4903-ab67-43f6a05e220b"}];
                  
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