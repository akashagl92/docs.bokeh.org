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
      };var element = document.getElementById("5bb4cd3a-919d-441f-9d8d-1304b4af42d5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5bb4cd3a-919d-441f-9d8d-1304b4af42d5' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"89671a36-9574-47f4-bafe-c20107fb00d2":{"roots":{"references":[{"attributes":{"plot":{"id":"970105ad-3389-4eec-b79f-525a45940b75","subtype":"Figure","type":"Plot"},"ticker":{"id":"8eefa79e-babd-4cb0-9891-95b6a12ecd7c","type":"BasicTicker"}},"id":"dd03a574-059b-4193-948b-8972a1de7115","type":"Grid"},{"attributes":{"below":[{"id":"a4c9dd87-c1dd-4f62-8fad-0701c7dd0679","type":"LinearAxis"}],"left":[{"id":"bad35797-32f5-42f4-ac41-9ee36f27aa31","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"a4c9dd87-c1dd-4f62-8fad-0701c7dd0679","type":"LinearAxis"},{"id":"dd03a574-059b-4193-948b-8972a1de7115","type":"Grid"},{"id":"bad35797-32f5-42f4-ac41-9ee36f27aa31","type":"LinearAxis"},{"id":"8cfd33d2-61d4-4879-9d76-3b39b4d77bfd","type":"Grid"},{"id":"d270f916-2657-42f6-978c-def538519060","type":"BoxAnnotation"},{"id":"e417595f-cce6-42a4-9ba7-53e96ee40c92","type":"GlyphRenderer"}],"title":{"id":"57d7f86a-484c-4d61-aebe-837d0e05a3af","type":"Title"},"tool_events":{"id":"91d826d7-340e-4525-901d-8abbdb458c1a","type":"ToolEvents"},"toolbar":{"id":"60a45ad7-c1bb-4bfc-a0a9-9d1f7125674f","type":"Toolbar"},"x_range":{"id":"bd0da077-3218-4861-b199-8e025a24c58f","type":"DataRange1d"},"y_range":{"id":"565d59b7-249d-4cf3-8db4-fc0c283965c5","type":"DataRange1d"}},"id":"970105ad-3389-4eec-b79f-525a45940b75","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"d1c647dc-40c3-47fc-920e-e608a8cd083e","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"970105ad-3389-4eec-b79f-525a45940b75","subtype":"Figure","type":"Plot"}},"id":"431409a6-77fb-4fe5-b4a9-a9f802eace05","type":"ResetTool"},{"attributes":{},"id":"91d826d7-340e-4525-901d-8abbdb458c1a","type":"ToolEvents"},{"attributes":{},"id":"8eefa79e-babd-4cb0-9891-95b6a12ecd7c","type":"BasicTicker"},{"attributes":{"overlay":{"id":"d270f916-2657-42f6-978c-def538519060","type":"BoxAnnotation"},"plot":{"id":"970105ad-3389-4eec-b79f-525a45940b75","subtype":"Figure","type":"Plot"}},"id":"b58856ed-3232-4085-b216-503110084cb1","type":"BoxZoomTool"},{"attributes":{"angle":{"units":"rad","value":-0.7},"length":{"units":"data","value":45},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"77386eef-e4ae-4bd5-9aba-44b2fc1cb6d5","type":"Ray"},{"attributes":{"callback":null},"id":"565d59b7-249d-4cf3-8db4-fc0c283965c5","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d270f916-2657-42f6-978c-def538519060","type":"BoxAnnotation"},{"attributes":{"angle":{"units":"rad","value":-0.7},"length":{"units":"data","value":45},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"24815f50-8233-4e4f-bf21-23a19acfbf82","type":"Ray"},{"attributes":{},"id":"bb325702-f585-4da9-9871-9cff01ee01e1","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5f1db700-4e13-4228-b85d-acab97971c32","type":"PanTool"},{"id":"5b83a64d-aaad-4e29-9fb6-90f5fddc81ea","type":"WheelZoomTool"},{"id":"b58856ed-3232-4085-b216-503110084cb1","type":"BoxZoomTool"},{"id":"07b074cc-593a-4dd9-8f25-51a32328e1bf","type":"SaveTool"},{"id":"431409a6-77fb-4fe5-b4a9-a9f802eace05","type":"ResetTool"},{"id":"c9e728dd-0c74-4eaf-bdfd-d44bf6005207","type":"HelpTool"}]},"id":"60a45ad7-c1bb-4bfc-a0a9-9d1f7125674f","type":"Toolbar"},{"attributes":{"plot":{"id":"970105ad-3389-4eec-b79f-525a45940b75","subtype":"Figure","type":"Plot"}},"id":"07b074cc-593a-4dd9-8f25-51a32328e1bf","type":"SaveTool"},{"attributes":{"callback":null},"id":"bd0da077-3218-4861-b199-8e025a24c58f","type":"DataRange1d"},{"attributes":{"data_source":{"id":"d1c647dc-40c3-47fc-920e-e608a8cd083e","type":"ColumnDataSource"},"glyph":{"id":"24815f50-8233-4e4f-bf21-23a19acfbf82","type":"Ray"},"hover_glyph":null,"nonselection_glyph":{"id":"77386eef-e4ae-4bd5-9aba-44b2fc1cb6d5","type":"Ray"},"selection_glyph":null},"id":"e417595f-cce6-42a4-9ba7-53e96ee40c92","type":"GlyphRenderer"},{"attributes":{},"id":"fe73f89f-8153-4bfe-8b1e-7ea2d8e9820f","type":"BasicTicker"},{"attributes":{"plot":{"id":"970105ad-3389-4eec-b79f-525a45940b75","subtype":"Figure","type":"Plot"}},"id":"5f1db700-4e13-4228-b85d-acab97971c32","type":"PanTool"},{"attributes":{"plot":{"id":"970105ad-3389-4eec-b79f-525a45940b75","subtype":"Figure","type":"Plot"}},"id":"5b83a64d-aaad-4e29-9fb6-90f5fddc81ea","type":"WheelZoomTool"},{"attributes":{},"id":"a99f5a77-f859-4d11-9601-7047b3420272","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"a99f5a77-f859-4d11-9601-7047b3420272","type":"BasicTickFormatter"},"plot":{"id":"970105ad-3389-4eec-b79f-525a45940b75","subtype":"Figure","type":"Plot"},"ticker":{"id":"fe73f89f-8153-4bfe-8b1e-7ea2d8e9820f","type":"BasicTicker"}},"id":"bad35797-32f5-42f4-ac41-9ee36f27aa31","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"970105ad-3389-4eec-b79f-525a45940b75","subtype":"Figure","type":"Plot"},"ticker":{"id":"fe73f89f-8153-4bfe-8b1e-7ea2d8e9820f","type":"BasicTicker"}},"id":"8cfd33d2-61d4-4879-9d76-3b39b4d77bfd","type":"Grid"},{"attributes":{"plot":null,"text":null},"id":"57d7f86a-484c-4d61-aebe-837d0e05a3af","type":"Title"},{"attributes":{"plot":{"id":"970105ad-3389-4eec-b79f-525a45940b75","subtype":"Figure","type":"Plot"}},"id":"c9e728dd-0c74-4eaf-bdfd-d44bf6005207","type":"HelpTool"},{"attributes":{"formatter":{"id":"bb325702-f585-4da9-9871-9cff01ee01e1","type":"BasicTickFormatter"},"plot":{"id":"970105ad-3389-4eec-b79f-525a45940b75","subtype":"Figure","type":"Plot"},"ticker":{"id":"8eefa79e-babd-4cb0-9891-95b6a12ecd7c","type":"BasicTicker"}},"id":"a4c9dd87-c1dd-4f62-8fad-0701c7dd0679","type":"LinearAxis"}],"root_ids":["970105ad-3389-4eec-b79f-525a45940b75"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"89671a36-9574-47f4-bafe-c20107fb00d2","elementid":"5bb4cd3a-919d-441f-9d8d-1304b4af42d5","modelid":"970105ad-3389-4eec-b79f-525a45940b75"}];
              
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