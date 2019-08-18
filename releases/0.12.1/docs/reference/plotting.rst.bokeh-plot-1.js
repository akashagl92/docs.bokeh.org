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
      };var element = document.getElementById("07701a41-68ad-4e6d-b41f-c26a933239d1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '07701a41-68ad-4e6d-b41f-c26a933239d1' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"115d6cdd-9eb9-4a71-a57e-4bb741c0577c":{"roots":{"references":[{"attributes":{"data_source":{"id":"2a3ee8f0-d3b9-448a-a335-edc4c2f19835","type":"ColumnDataSource"},"glyph":{"id":"62fde6c4-63e5-4809-b7d1-f6c558e59f75","type":"Asterisk"},"hover_glyph":null,"nonselection_glyph":{"id":"375cbb84-3202-4e58-8f2d-b145197fc908","type":"Asterisk"},"selection_glyph":null},"id":"0f18274a-53a0-4b3d-a70b-fa0d38a5ab26","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9354d52d-6ea2-4af9-a90c-243b348e3ca5","type":"PanTool"},{"id":"8a62143c-4e2c-4944-906c-62e2fb880321","type":"WheelZoomTool"},{"id":"fe6df25b-a9be-476a-a387-313c2cd2d1b0","type":"BoxZoomTool"},{"id":"24580898-e726-4885-b5ee-df87bcaa7936","type":"SaveTool"},{"id":"a8249ad3-a79f-4b97-94ff-3e7b8b3dbeba","type":"ResetTool"},{"id":"5e889e60-1e11-41ab-ae48-d4f9468fa7eb","type":"HelpTool"}]},"id":"0e79edc3-d5ea-4a56-9566-a507c0206154","type":"Toolbar"},{"attributes":{"formatter":{"id":"179dbc83-9a31-4c09-97e4-d49c39aeaa27","type":"BasicTickFormatter"},"plot":{"id":"b4ab5cee-dd31-410c-9651-0e8b65061ce8","subtype":"Figure","type":"Plot"},"ticker":{"id":"a85c5e78-6de9-40b3-a2f5-2ceef79954c8","type":"BasicTicker"}},"id":"dbb8ad88-62bf-42e3-bd46-30a1e946be5e","type":"LinearAxis"},{"attributes":{"overlay":{"id":"2df74fa1-dea8-485a-a038-c89f7c9acacf","type":"BoxAnnotation"},"plot":{"id":"b4ab5cee-dd31-410c-9651-0e8b65061ce8","subtype":"Figure","type":"Plot"}},"id":"fe6df25b-a9be-476a-a387-313c2cd2d1b0","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"b4ab5cee-dd31-410c-9651-0e8b65061ce8","subtype":"Figure","type":"Plot"},"ticker":{"id":"a85c5e78-6de9-40b3-a2f5-2ceef79954c8","type":"BasicTicker"}},"id":"4101de9d-51f9-46a8-9572-ebc739fd845e","type":"Grid"},{"attributes":{"plot":{"id":"b4ab5cee-dd31-410c-9651-0e8b65061ce8","subtype":"Figure","type":"Plot"}},"id":"9354d52d-6ea2-4af9-a90c-243b348e3ca5","type":"PanTool"},{"attributes":{"plot":{"id":"b4ab5cee-dd31-410c-9651-0e8b65061ce8","subtype":"Figure","type":"Plot"}},"id":"8a62143c-4e2c-4944-906c-62e2fb880321","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"2a3ee8f0-d3b9-448a-a335-edc4c2f19835","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2df74fa1-dea8-485a-a038-c89f7c9acacf","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"b4ab5cee-dd31-410c-9651-0e8b65061ce8","subtype":"Figure","type":"Plot"}},"id":"24580898-e726-4885-b5ee-df87bcaa7936","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#F0027F"},"line_color":{"value":"#F0027F"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"62fde6c4-63e5-4809-b7d1-f6c558e59f75","type":"Asterisk"},{"attributes":{},"id":"179dbc83-9a31-4c09-97e4-d49c39aeaa27","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"8c0f7bf9-6f28-487f-aa72-15869c0a96d5","type":"LinearAxis"}],"left":[{"id":"dbb8ad88-62bf-42e3-bd46-30a1e946be5e","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"8c0f7bf9-6f28-487f-aa72-15869c0a96d5","type":"LinearAxis"},{"id":"53cd9e23-2e3a-42d3-8cab-2b41c8331486","type":"Grid"},{"id":"dbb8ad88-62bf-42e3-bd46-30a1e946be5e","type":"LinearAxis"},{"id":"4101de9d-51f9-46a8-9572-ebc739fd845e","type":"Grid"},{"id":"2df74fa1-dea8-485a-a038-c89f7c9acacf","type":"BoxAnnotation"},{"id":"0f18274a-53a0-4b3d-a70b-fa0d38a5ab26","type":"GlyphRenderer"}],"title":{"id":"533d9160-ace6-4c01-857d-d486115d4740","type":"Title"},"tool_events":{"id":"512840c4-c4ec-4713-bb9d-f946e6061595","type":"ToolEvents"},"toolbar":{"id":"0e79edc3-d5ea-4a56-9566-a507c0206154","type":"Toolbar"},"x_range":{"id":"84a4517f-01e2-4722-a57d-34fd0b10cac9","type":"DataRange1d"},"y_range":{"id":"bdba50d5-9063-4e9a-a3a4-761285616455","type":"DataRange1d"}},"id":"b4ab5cee-dd31-410c-9651-0e8b65061ce8","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"b4ab5cee-dd31-410c-9651-0e8b65061ce8","subtype":"Figure","type":"Plot"}},"id":"5e889e60-1e11-41ab-ae48-d4f9468fa7eb","type":"HelpTool"},{"attributes":{"callback":null},"id":"84a4517f-01e2-4722-a57d-34fd0b10cac9","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"375cbb84-3202-4e58-8f2d-b145197fc908","type":"Asterisk"},{"attributes":{},"id":"0140316c-2a64-4552-b9e4-f9e5845a04bd","type":"BasicTicker"},{"attributes":{"plot":{"id":"b4ab5cee-dd31-410c-9651-0e8b65061ce8","subtype":"Figure","type":"Plot"},"ticker":{"id":"0140316c-2a64-4552-b9e4-f9e5845a04bd","type":"BasicTicker"}},"id":"53cd9e23-2e3a-42d3-8cab-2b41c8331486","type":"Grid"},{"attributes":{"plot":{"id":"b4ab5cee-dd31-410c-9651-0e8b65061ce8","subtype":"Figure","type":"Plot"}},"id":"a8249ad3-a79f-4b97-94ff-3e7b8b3dbeba","type":"ResetTool"},{"attributes":{},"id":"95a6c9be-b05d-4841-ab99-d891602ee91f","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"95a6c9be-b05d-4841-ab99-d891602ee91f","type":"BasicTickFormatter"},"plot":{"id":"b4ab5cee-dd31-410c-9651-0e8b65061ce8","subtype":"Figure","type":"Plot"},"ticker":{"id":"0140316c-2a64-4552-b9e4-f9e5845a04bd","type":"BasicTicker"}},"id":"8c0f7bf9-6f28-487f-aa72-15869c0a96d5","type":"LinearAxis"},{"attributes":{},"id":"512840c4-c4ec-4713-bb9d-f946e6061595","type":"ToolEvents"},{"attributes":{"plot":null,"text":null},"id":"533d9160-ace6-4c01-857d-d486115d4740","type":"Title"},{"attributes":{"callback":null},"id":"bdba50d5-9063-4e9a-a3a4-761285616455","type":"DataRange1d"},{"attributes":{},"id":"a85c5e78-6de9-40b3-a2f5-2ceef79954c8","type":"BasicTicker"}],"root_ids":["b4ab5cee-dd31-410c-9651-0e8b65061ce8"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"115d6cdd-9eb9-4a71-a57e-4bb741c0577c","elementid":"07701a41-68ad-4e6d-b41f-c26a933239d1","modelid":"b4ab5cee-dd31-410c-9651-0e8b65061ce8"}];
              
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