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
      };var element = document.getElementById("01795a46-37ed-427d-a4ba-fe4c2f30bb49");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '01795a46-37ed-427d-a4ba-fe4c2f30bb49' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"d1e4144e-8eb6-435c-8390-011752ad4b7f":{"roots":{"references":[{"attributes":{"formatter":{"id":"6522c109-aa07-41b2-93df-ea1ec882b9f2","type":"BasicTickFormatter"},"plot":{"id":"666f935a-899a-4ea8-bf0a-38e8d1adb859","subtype":"Figure","type":"Plot"},"ticker":{"id":"8bc9b5bf-db7d-4264-8eea-4e2ffa425c5a","type":"BasicTicker"}},"id":"5a6a5f32-c9d8-48c5-8e88-eab509a0092f","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"484fe26e-7281-47a2-a8c7-4475a9a8e8f0","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"666f935a-899a-4ea8-bf0a-38e8d1adb859","subtype":"Figure","type":"Plot"}},"id":"be471cbd-6255-459a-9671-734bf5eacea0","type":"SaveTool"},{"attributes":{"formatter":{"id":"2eefeb8b-902c-4363-a736-ef77061c9a1b","type":"BasicTickFormatter"},"plot":{"id":"666f935a-899a-4ea8-bf0a-38e8d1adb859","subtype":"Figure","type":"Plot"},"ticker":{"id":"ca939334-9cb7-441b-838d-8ae6ae700401","type":"BasicTicker"}},"id":"aac1e0c0-708d-47d7-bf2d-c485cec5b9c9","type":"LinearAxis"},{"attributes":{"plot":{"id":"666f935a-899a-4ea8-bf0a-38e8d1adb859","subtype":"Figure","type":"Plot"}},"id":"3ef7d16e-289b-4c2e-be39-a34cb1896310","type":"ResetTool"},{"attributes":{},"id":"2eefeb8b-902c-4363-a736-ef77061c9a1b","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"1edc3d06-ab02-41cf-8cc6-5bd3b7a76fd1","type":"ColumnDataSource"},"glyph":{"id":"258d3168-6e6d-4db5-a486-e19e958522f4","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ffdc8061-48a9-4ee1-988d-85256bf88253","type":"Circle"},"selection_glyph":null},"id":"e158296b-1792-4dfd-bd3d-bf171203f55c","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"666f935a-899a-4ea8-bf0a-38e8d1adb859","subtype":"Figure","type":"Plot"}},"id":"c6653a90-eea7-485a-b284-ac47ddab5824","type":"HelpTool"},{"attributes":{},"id":"6522c109-aa07-41b2-93df-ea1ec882b9f2","type":"BasicTickFormatter"},{"attributes":{},"id":"ca939334-9cb7-441b-838d-8ae6ae700401","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"666f935a-899a-4ea8-bf0a-38e8d1adb859","subtype":"Figure","type":"Plot"},"ticker":{"id":"ca939334-9cb7-441b-838d-8ae6ae700401","type":"BasicTicker"}},"id":"b09b5460-fe39-4557-bfe1-4c20f1cd8564","type":"Grid"},{"attributes":{},"id":"8bc9b5bf-db7d-4264-8eea-4e2ffa425c5a","type":"BasicTicker"},{"attributes":{"callback":null},"id":"04429199-511a-44ba-8b05-e6dd00b839c0","type":"DataRange1d"},{"attributes":{"plot":{"id":"666f935a-899a-4ea8-bf0a-38e8d1adb859","subtype":"Figure","type":"Plot"},"ticker":{"id":"8bc9b5bf-db7d-4264-8eea-4e2ffa425c5a","type":"BasicTicker"}},"id":"574fb26b-fe23-4406-8728-4cb1f83a226c","type":"Grid"},{"attributes":{"plot":{"id":"666f935a-899a-4ea8-bf0a-38e8d1adb859","subtype":"Figure","type":"Plot"}},"id":"d6f909b7-a463-4727-a666-8dbba137426b","type":"PanTool"},{"attributes":{"overlay":{"id":"484fe26e-7281-47a2-a8c7-4475a9a8e8f0","type":"BoxAnnotation"},"plot":{"id":"666f935a-899a-4ea8-bf0a-38e8d1adb859","subtype":"Figure","type":"Plot"}},"id":"0e19bfee-7ceb-4624-87f0-d514eb5c9543","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2],"y":[3,4]}},"id":"1edc3d06-ab02-41cf-8cc6-5bd3b7a76fd1","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Basic Title"},"id":"b5cd876b-44a8-4bc6-95ee-26e075872537","type":"Title"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"258d3168-6e6d-4db5-a486-e19e958522f4","type":"Circle"},{"attributes":{"callback":null},"id":"f3263588-e37d-48ea-9570-fcb122937eef","type":"DataRange1d"},{"attributes":{"below":[{"id":"5a6a5f32-c9d8-48c5-8e88-eab509a0092f","type":"LinearAxis"}],"left":[{"id":"aac1e0c0-708d-47d7-bf2d-c485cec5b9c9","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"5a6a5f32-c9d8-48c5-8e88-eab509a0092f","type":"LinearAxis"},{"id":"574fb26b-fe23-4406-8728-4cb1f83a226c","type":"Grid"},{"id":"aac1e0c0-708d-47d7-bf2d-c485cec5b9c9","type":"LinearAxis"},{"id":"b09b5460-fe39-4557-bfe1-4c20f1cd8564","type":"Grid"},{"id":"484fe26e-7281-47a2-a8c7-4475a9a8e8f0","type":"BoxAnnotation"},{"id":"e158296b-1792-4dfd-bd3d-bf171203f55c","type":"GlyphRenderer"}],"title":{"id":"b5cd876b-44a8-4bc6-95ee-26e075872537","type":"Title"},"tool_events":{"id":"ac8d8ad2-1ae2-4f93-85e5-2c76fceb54d1","type":"ToolEvents"},"toolbar":{"id":"815fefb1-df25-4bb5-800e-b925f5ea6acb","type":"Toolbar"},"x_range":{"id":"f3263588-e37d-48ea-9570-fcb122937eef","type":"DataRange1d"},"y_range":{"id":"04429199-511a-44ba-8b05-e6dd00b839c0","type":"DataRange1d"}},"id":"666f935a-899a-4ea8-bf0a-38e8d1adb859","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d6f909b7-a463-4727-a666-8dbba137426b","type":"PanTool"},{"id":"8ba41722-7330-4546-9df0-52f8bfe15288","type":"WheelZoomTool"},{"id":"0e19bfee-7ceb-4624-87f0-d514eb5c9543","type":"BoxZoomTool"},{"id":"be471cbd-6255-459a-9671-734bf5eacea0","type":"SaveTool"},{"id":"3ef7d16e-289b-4c2e-be39-a34cb1896310","type":"ResetTool"},{"id":"c6653a90-eea7-485a-b284-ac47ddab5824","type":"HelpTool"}]},"id":"815fefb1-df25-4bb5-800e-b925f5ea6acb","type":"Toolbar"},{"attributes":{},"id":"ac8d8ad2-1ae2-4f93-85e5-2c76fceb54d1","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ffdc8061-48a9-4ee1-988d-85256bf88253","type":"Circle"},{"attributes":{"plot":{"id":"666f935a-899a-4ea8-bf0a-38e8d1adb859","subtype":"Figure","type":"Plot"}},"id":"8ba41722-7330-4546-9df0-52f8bfe15288","type":"WheelZoomTool"}],"root_ids":["666f935a-899a-4ea8-bf0a-38e8d1adb859"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"d1e4144e-8eb6-435c-8390-011752ad4b7f","elementid":"01795a46-37ed-427d-a4ba-fe4c2f30bb49","modelid":"666f935a-899a-4ea8-bf0a-38e8d1adb859"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
