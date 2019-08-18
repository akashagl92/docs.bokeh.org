document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined") {
        window._bokeh_onload_callbacks = [];
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
      };var element = document.getElementById("6a384b2c-78d4-49fe-9669-cb4a69810f6c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6a384b2c-78d4-49fe-9669-cb4a69810f6c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"11ffc50d-77fd-4ac9-a0bf-2e9f34103742":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"16f040a8-d68a-4039-8498-dbf3bb367ebe","subtype":"Figure","type":"Plot"},"ticker":{"id":"b7a2e8cf-04a6-4f15-ad22-19ceff3d1eec","type":"BasicTicker"}},"id":"21492191-4fa1-483c-b235-721c7ef9e945","type":"Grid"},{"attributes":{"plot":{"id":"16f040a8-d68a-4039-8498-dbf3bb367ebe","subtype":"Figure","type":"Plot"}},"id":"9327a14c-3fb2-469e-8a5b-e8f77be78f70","type":"PanTool"},{"attributes":{},"id":"353f014d-ba6b-4a50-9d35-e3c5bad3539a","type":"ToolEvents"},{"attributes":{},"id":"5f333891-1489-44bf-81c0-7a23ba79ec79","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1C9099"},"line_color":{"value":"#1C9099"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"9781de79-a9bc-4646-84ea-259efcb35ff8","type":"Diamond"},{"attributes":{"callback":null},"id":"9006b9a9-4b2a-43cb-a3cd-90e4f01a5330","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"4ef66086-96f5-45f7-a3f1-f5b1d35ccd0f","type":"Diamond"},{"attributes":{"formatter":{"id":"5f333891-1489-44bf-81c0-7a23ba79ec79","type":"BasicTickFormatter"},"plot":{"id":"16f040a8-d68a-4039-8498-dbf3bb367ebe","subtype":"Figure","type":"Plot"},"ticker":{"id":"b7a2e8cf-04a6-4f15-ad22-19ceff3d1eec","type":"BasicTicker"}},"id":"53ec3e20-e27a-4240-867b-b9e5038cdcec","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6e8f4496-adb0-4456-8ab2-3e64301ef9d9","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"117f017b-297e-465e-8b2f-40ceca6471ae","type":"DataRange1d"},{"attributes":{},"id":"4a7b277f-a20f-4a3b-b7d9-12480b8ca1ab","type":"BasicTicker"},{"attributes":{"data_source":{"id":"2d92b8c5-3602-435e-88f4-7a2f0a87ff8f","type":"ColumnDataSource"},"glyph":{"id":"9781de79-a9bc-4646-84ea-259efcb35ff8","type":"Diamond"},"hover_glyph":null,"nonselection_glyph":{"id":"4ef66086-96f5-45f7-a3f1-f5b1d35ccd0f","type":"Diamond"},"selection_glyph":null},"id":"5e8ab2a7-69c1-4594-a0e7-d2493b00e047","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9327a14c-3fb2-469e-8a5b-e8f77be78f70","type":"PanTool"},{"id":"97cf35a4-1666-4e14-82e0-ed3ca70087d8","type":"WheelZoomTool"},{"id":"a0cd0105-1c88-4fd2-a90f-b2a5ac80d7bf","type":"BoxZoomTool"},{"id":"f4e9940f-a6af-469a-96ac-ce7e90342e37","type":"SaveTool"},{"id":"8da12024-8f2a-4814-94e4-20d015ca2bbb","type":"ResetTool"},{"id":"301b10c0-e678-4b42-b798-0c05d68ec423","type":"HelpTool"}]},"id":"b48b495b-6b83-4af4-8ae5-a33df35db5cd","type":"Toolbar"},{"attributes":{"plot":{"id":"16f040a8-d68a-4039-8498-dbf3bb367ebe","subtype":"Figure","type":"Plot"},"ticker":{"id":"4a7b277f-a20f-4a3b-b7d9-12480b8ca1ab","type":"BasicTicker"}},"id":"25177528-0516-47e9-bdd6-72c3fc8f55d3","type":"Grid"},{"attributes":{"overlay":{"id":"6e8f4496-adb0-4456-8ab2-3e64301ef9d9","type":"BoxAnnotation"},"plot":{"id":"16f040a8-d68a-4039-8498-dbf3bb367ebe","subtype":"Figure","type":"Plot"}},"id":"a0cd0105-1c88-4fd2-a90f-b2a5ac80d7bf","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"16f040a8-d68a-4039-8498-dbf3bb367ebe","subtype":"Figure","type":"Plot"}},"id":"8da12024-8f2a-4814-94e4-20d015ca2bbb","type":"ResetTool"},{"attributes":{"below":[{"id":"5ac82ce1-5096-456d-a3ae-4ebe322edb86","type":"LinearAxis"}],"left":[{"id":"53ec3e20-e27a-4240-867b-b9e5038cdcec","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"5ac82ce1-5096-456d-a3ae-4ebe322edb86","type":"LinearAxis"},{"id":"25177528-0516-47e9-bdd6-72c3fc8f55d3","type":"Grid"},{"id":"53ec3e20-e27a-4240-867b-b9e5038cdcec","type":"LinearAxis"},{"id":"21492191-4fa1-483c-b235-721c7ef9e945","type":"Grid"},{"id":"6e8f4496-adb0-4456-8ab2-3e64301ef9d9","type":"BoxAnnotation"},{"id":"5e8ab2a7-69c1-4594-a0e7-d2493b00e047","type":"GlyphRenderer"}],"title":{"id":"2ecabb90-2b76-45e2-b7fc-317d4049aefa","type":"Title"},"tool_events":{"id":"353f014d-ba6b-4a50-9d35-e3c5bad3539a","type":"ToolEvents"},"toolbar":{"id":"b48b495b-6b83-4af4-8ae5-a33df35db5cd","type":"Toolbar"},"x_range":{"id":"117f017b-297e-465e-8b2f-40ceca6471ae","type":"DataRange1d"},"y_range":{"id":"9006b9a9-4b2a-43cb-a3cd-90e4f01a5330","type":"DataRange1d"}},"id":"16f040a8-d68a-4039-8498-dbf3bb367ebe","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":null},"id":"2ecabb90-2b76-45e2-b7fc-317d4049aefa","type":"Title"},{"attributes":{"formatter":{"id":"dc83f311-37de-4337-be7c-5c4984474195","type":"BasicTickFormatter"},"plot":{"id":"16f040a8-d68a-4039-8498-dbf3bb367ebe","subtype":"Figure","type":"Plot"},"ticker":{"id":"4a7b277f-a20f-4a3b-b7d9-12480b8ca1ab","type":"BasicTicker"}},"id":"5ac82ce1-5096-456d-a3ae-4ebe322edb86","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"2d92b8c5-3602-435e-88f4-7a2f0a87ff8f","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"16f040a8-d68a-4039-8498-dbf3bb367ebe","subtype":"Figure","type":"Plot"}},"id":"97cf35a4-1666-4e14-82e0-ed3ca70087d8","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"16f040a8-d68a-4039-8498-dbf3bb367ebe","subtype":"Figure","type":"Plot"}},"id":"301b10c0-e678-4b42-b798-0c05d68ec423","type":"HelpTool"},{"attributes":{"plot":{"id":"16f040a8-d68a-4039-8498-dbf3bb367ebe","subtype":"Figure","type":"Plot"}},"id":"f4e9940f-a6af-469a-96ac-ce7e90342e37","type":"SaveTool"},{"attributes":{},"id":"b7a2e8cf-04a6-4f15-ad22-19ceff3d1eec","type":"BasicTicker"},{"attributes":{},"id":"dc83f311-37de-4337-be7c-5c4984474195","type":"BasicTickFormatter"}],"root_ids":["16f040a8-d68a-4039-8498-dbf3bb367ebe"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"11ffc50d-77fd-4ac9-a0bf-2e9f34103742","elementid":"6a384b2c-78d4-49fe-9669-cb4a69810f6c","modelid":"16f040a8-d68a-4039-8498-dbf3bb367ebe"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
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