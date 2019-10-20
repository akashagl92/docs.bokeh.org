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
      };var element = document.getElementById("3d0b39f7-0f16-4ff2-94bb-23b238955ca5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3d0b39f7-0f16-4ff2-94bb-23b238955ca5' but no matching script tag was found. ")
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
                  var docs_json = {"73ee2075-3f00-40e7-8027-59137c80b25d":{"roots":{"references":[{"attributes":{},"id":"8a95f584-4f4a-4a46-8189-7ad517296977","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"8a95f584-4f4a-4a46-8189-7ad517296977","type":"BasicTickFormatter"},"plot":{"id":"898e27af-54f0-4646-bf3d-9a4bdd91424b","subtype":"Figure","type":"Plot"},"ticker":{"id":"99a191c8-e3cc-417e-b70e-88ddf8cffd36","type":"BasicTicker"}},"id":"2778d3d3-4125-45bc-a3d0-ab853b033185","type":"LinearAxis"},{"attributes":{"plot":{"id":"898e27af-54f0-4646-bf3d-9a4bdd91424b","subtype":"Figure","type":"Plot"},"ticker":{"id":"2a711873-6470-4b5c-a42c-c58025a71080","type":"BasicTicker"}},"id":"f881b9f0-286d-499f-84f9-fb5454add752","type":"Grid"},{"attributes":{},"id":"2a711873-6470-4b5c-a42c-c58025a71080","type":"BasicTicker"},{"attributes":{},"id":"d2a3bb19-b02d-4c2c-bdde-10e7699b6ec8","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"ee5ae641-c352-48f7-8e10-e7db8ddb76be","type":"ColumnDataSource"},"glyph":{"id":"11ff57b6-0e59-4147-bee0-cabdf4e78c1e","type":"CircleX"},"hover_glyph":null,"nonselection_glyph":{"id":"15d7933e-8abe-400e-9975-6afbe8c625b3","type":"CircleX"},"selection_glyph":null},"id":"bbb96849-130f-450b-a725-b890593b70e8","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"7932df98-d608-4835-a87c-d47561b5eb9b","type":"DataRange1d"},{"attributes":{"plot":{"id":"898e27af-54f0-4646-bf3d-9a4bdd91424b","subtype":"Figure","type":"Plot"}},"id":"e9e07a2d-783f-4203-ae54-dd1297a41447","type":"PanTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"ee5ae641-c352-48f7-8e10-e7db8ddb76be","type":"ColumnDataSource"},{"attributes":{},"id":"9338a066-2ebd-478f-8c50-e1600deabb46","type":"ToolEvents"},{"attributes":{"callback":null},"id":"f013df66-d703-41a4-831b-ccd31cd3ad45","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#DD1C77"},"line_color":{"value":"#DD1C77"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"11ff57b6-0e59-4147-bee0-cabdf4e78c1e","type":"CircleX"},{"attributes":{"below":[{"id":"d68bf961-52f9-4ac6-9307-55d9ba518219","type":"LinearAxis"}],"left":[{"id":"2778d3d3-4125-45bc-a3d0-ab853b033185","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"d68bf961-52f9-4ac6-9307-55d9ba518219","type":"LinearAxis"},{"id":"f881b9f0-286d-499f-84f9-fb5454add752","type":"Grid"},{"id":"2778d3d3-4125-45bc-a3d0-ab853b033185","type":"LinearAxis"},{"id":"805a59d3-6151-4fa0-8fe2-e58b27cb1610","type":"Grid"},{"id":"71fef618-c632-4c63-b050-755e781e6b6e","type":"BoxAnnotation"},{"id":"bbb96849-130f-450b-a725-b890593b70e8","type":"GlyphRenderer"}],"title":{"id":"088fa858-3956-49cf-83f5-e04653343adc","type":"Title"},"tool_events":{"id":"9338a066-2ebd-478f-8c50-e1600deabb46","type":"ToolEvents"},"toolbar":{"id":"1223b080-9b98-48cf-a306-2e5d675399c9","type":"Toolbar"},"x_range":{"id":"7932df98-d608-4835-a87c-d47561b5eb9b","type":"DataRange1d"},"y_range":{"id":"f013df66-d703-41a4-831b-ccd31cd3ad45","type":"DataRange1d"}},"id":"898e27af-54f0-4646-bf3d-9a4bdd91424b","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"99a191c8-e3cc-417e-b70e-88ddf8cffd36","type":"BasicTicker"},{"attributes":{"plot":null,"text":null},"id":"088fa858-3956-49cf-83f5-e04653343adc","type":"Title"},{"attributes":{"plot":{"id":"898e27af-54f0-4646-bf3d-9a4bdd91424b","subtype":"Figure","type":"Plot"}},"id":"9e6bcf7e-f0ea-4ad5-afe3-8cda4bc086f2","type":"ResetTool"},{"attributes":{"overlay":{"id":"71fef618-c632-4c63-b050-755e781e6b6e","type":"BoxAnnotation"},"plot":{"id":"898e27af-54f0-4646-bf3d-9a4bdd91424b","subtype":"Figure","type":"Plot"}},"id":"d2f73967-b6b1-4b07-b89d-97acbfb1f82d","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"898e27af-54f0-4646-bf3d-9a4bdd91424b","subtype":"Figure","type":"Plot"}},"id":"32c26aae-6554-44e3-8080-5a349dd64123","type":"SaveTool"},{"attributes":{"formatter":{"id":"d2a3bb19-b02d-4c2c-bdde-10e7699b6ec8","type":"BasicTickFormatter"},"plot":{"id":"898e27af-54f0-4646-bf3d-9a4bdd91424b","subtype":"Figure","type":"Plot"},"ticker":{"id":"2a711873-6470-4b5c-a42c-c58025a71080","type":"BasicTicker"}},"id":"d68bf961-52f9-4ac6-9307-55d9ba518219","type":"LinearAxis"},{"attributes":{"plot":{"id":"898e27af-54f0-4646-bf3d-9a4bdd91424b","subtype":"Figure","type":"Plot"}},"id":"7885f659-46a7-42c6-b828-733692a2fcd2","type":"HelpTool"},{"attributes":{"plot":{"id":"898e27af-54f0-4646-bf3d-9a4bdd91424b","subtype":"Figure","type":"Plot"}},"id":"1bb7ee6f-b24d-4322-a551-4eb2cab0a328","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"898e27af-54f0-4646-bf3d-9a4bdd91424b","subtype":"Figure","type":"Plot"},"ticker":{"id":"99a191c8-e3cc-417e-b70e-88ddf8cffd36","type":"BasicTicker"}},"id":"805a59d3-6151-4fa0-8fe2-e58b27cb1610","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"15d7933e-8abe-400e-9975-6afbe8c625b3","type":"CircleX"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"71fef618-c632-4c63-b050-755e781e6b6e","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e9e07a2d-783f-4203-ae54-dd1297a41447","type":"PanTool"},{"id":"1bb7ee6f-b24d-4322-a551-4eb2cab0a328","type":"WheelZoomTool"},{"id":"d2f73967-b6b1-4b07-b89d-97acbfb1f82d","type":"BoxZoomTool"},{"id":"32c26aae-6554-44e3-8080-5a349dd64123","type":"SaveTool"},{"id":"9e6bcf7e-f0ea-4ad5-afe3-8cda4bc086f2","type":"ResetTool"},{"id":"7885f659-46a7-42c6-b828-733692a2fcd2","type":"HelpTool"}]},"id":"1223b080-9b98-48cf-a306-2e5d675399c9","type":"Toolbar"}],"root_ids":["898e27af-54f0-4646-bf3d-9a4bdd91424b"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"73ee2075-3f00-40e7-8027-59137c80b25d","elementid":"3d0b39f7-0f16-4ff2-94bb-23b238955ca5","modelid":"898e27af-54f0-4646-bf3d-9a4bdd91424b"}];
                  
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