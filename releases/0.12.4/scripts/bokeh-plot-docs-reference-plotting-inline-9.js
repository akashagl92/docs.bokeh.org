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
      };var element = document.getElementById("e3395ec1-c4e9-45e9-a487-3985d3904582");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e3395ec1-c4e9-45e9-a487-3985d3904582' but no matching script tag was found. ")
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
                var docs_json = {"7a9fdf35-9967-49a7-a472-0cd668545663":{"roots":{"references":[{"attributes":{"plot":{"id":"499797f8-2398-4722-9b38-fc3d98a232de","subtype":"Figure","type":"Plot"}},"id":"f258f0a3-371a-458f-8be4-2e2aebacf37d","type":"SaveTool"},{"attributes":{"formatter":{"id":"7e1a2c63-335b-491f-9f9b-4b848b91cd7a","type":"BasicTickFormatter"},"plot":{"id":"499797f8-2398-4722-9b38-fc3d98a232de","subtype":"Figure","type":"Plot"},"ticker":{"id":"f5164bc5-1449-4b06-9e95-5d6225a20ff5","type":"BasicTicker"}},"id":"a3480b4c-eff0-4328-b170-1301f1d32e67","type":"LinearAxis"},{"attributes":{"plot":{"id":"499797f8-2398-4722-9b38-fc3d98a232de","subtype":"Figure","type":"Plot"}},"id":"917ee328-4f9a-4346-bc61-20bf513a69e7","type":"ResetTool"},{"attributes":{},"id":"7e1a2c63-335b-491f-9f9b-4b848b91cd7a","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"499797f8-2398-4722-9b38-fc3d98a232de","subtype":"Figure","type":"Plot"}},"id":"2dbdebdd-35c4-4c00-a687-cad4671cf872","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"094056ed-2fff-4526-abb5-08fc6bc31c7d","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"3e860350-8fd6-4c76-8766-9dcf743f0106","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"499797f8-2398-4722-9b38-fc3d98a232de","subtype":"Figure","type":"Plot"},"ticker":{"id":"f5164bc5-1449-4b06-9e95-5d6225a20ff5","type":"BasicTicker"}},"id":"c1c794ac-b3aa-4bb1-8aa4-caefa15a4fad","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"b65ab221-dfc5-445d-a800-b5ef70067c70","type":"Title"},{"attributes":{"below":[{"id":"350e2e11-b997-4471-8e38-e87c5771b3c8","type":"LinearAxis"}],"left":[{"id":"a3480b4c-eff0-4328-b170-1301f1d32e67","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"350e2e11-b997-4471-8e38-e87c5771b3c8","type":"LinearAxis"},{"id":"85911401-b2f0-4769-9ca4-43fffc8063be","type":"Grid"},{"id":"a3480b4c-eff0-4328-b170-1301f1d32e67","type":"LinearAxis"},{"id":"c1c794ac-b3aa-4bb1-8aa4-caefa15a4fad","type":"Grid"},{"id":"094056ed-2fff-4526-abb5-08fc6bc31c7d","type":"BoxAnnotation"},{"id":"b2dc0e29-82d8-4340-a8bb-a935bc22c5fe","type":"GlyphRenderer"}],"title":{"id":"b65ab221-dfc5-445d-a800-b5ef70067c70","type":"Title"},"tool_events":{"id":"0ff22a84-8812-427b-889f-59ab74bbb71b","type":"ToolEvents"},"toolbar":{"id":"7910c142-4642-46a2-8bfe-17a6b8001015","type":"Toolbar"},"x_range":{"id":"3e860350-8fd6-4c76-8766-9dcf743f0106","type":"DataRange1d"},"y_range":{"id":"988917b3-c26d-4b37-a804-23109313a2f8","type":"DataRange1d"}},"id":"499797f8-2398-4722-9b38-fc3d98a232de","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"1258cfc9-b600-4b28-9d70-aba542beff38","type":"BasicTickFormatter"},"plot":{"id":"499797f8-2398-4722-9b38-fc3d98a232de","subtype":"Figure","type":"Plot"},"ticker":{"id":"957887e2-c8f1-469c-978e-968f0cf81749","type":"BasicTicker"}},"id":"350e2e11-b997-4471-8e38-e87c5771b3c8","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#CAB2D6"},"height":{"value":0.5},"line_color":{"value":"#CAB2D6"},"right":{"field":"right"},"y":{"field":"y"}},"id":"f4b92b52-ccc1-4a74-bde8-8cd952b8a564","type":"HBar"},{"attributes":{},"id":"1258cfc9-b600-4b28-9d70-aba542beff38","type":"BasicTickFormatter"},{"attributes":{},"id":"957887e2-c8f1-469c-978e-968f0cf81749","type":"BasicTicker"},{"attributes":{"data_source":{"id":"daf365a0-61d7-4e6c-a3a7-98cc43839f5c","type":"ColumnDataSource"},"glyph":{"id":"f4b92b52-ccc1-4a74-bde8-8cd952b8a564","type":"HBar"},"hover_glyph":null,"nonselection_glyph":{"id":"044e9772-18b2-442d-beca-9daa71da2b4c","type":"HBar"},"selection_glyph":null},"id":"b2dc0e29-82d8-4340-a8bb-a935bc22c5fe","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"499797f8-2398-4722-9b38-fc3d98a232de","subtype":"Figure","type":"Plot"},"ticker":{"id":"957887e2-c8f1-469c-978e-968f0cf81749","type":"BasicTicker"}},"id":"85911401-b2f0-4769-9ca4-43fffc8063be","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2dbdebdd-35c4-4c00-a687-cad4671cf872","type":"PanTool"},{"id":"79009ea9-9f6a-4203-8330-8156b0c45f66","type":"WheelZoomTool"},{"id":"b89360bd-f659-45e3-bad6-96392dbe2858","type":"BoxZoomTool"},{"id":"f258f0a3-371a-458f-8be4-2e2aebacf37d","type":"SaveTool"},{"id":"917ee328-4f9a-4346-bc61-20bf513a69e7","type":"ResetTool"},{"id":"69ccfe8c-204c-4f75-a63c-8aa917f03127","type":"HelpTool"}]},"id":"7910c142-4642-46a2-8bfe-17a6b8001015","type":"Toolbar"},{"attributes":{"callback":null},"id":"988917b3-c26d-4b37-a804-23109313a2f8","type":"DataRange1d"},{"attributes":{},"id":"0ff22a84-8812-427b-889f-59ab74bbb71b","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","right"],"data":{"right":[1,2,3],"y":[1,2,3]}},"id":"daf365a0-61d7-4e6c-a3a7-98cc43839f5c","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"499797f8-2398-4722-9b38-fc3d98a232de","subtype":"Figure","type":"Plot"}},"id":"79009ea9-9f6a-4203-8330-8156b0c45f66","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"y":{"field":"y"}},"id":"044e9772-18b2-442d-beca-9daa71da2b4c","type":"HBar"},{"attributes":{},"id":"f5164bc5-1449-4b06-9e95-5d6225a20ff5","type":"BasicTicker"},{"attributes":{"plot":{"id":"499797f8-2398-4722-9b38-fc3d98a232de","subtype":"Figure","type":"Plot"}},"id":"69ccfe8c-204c-4f75-a63c-8aa917f03127","type":"HelpTool"},{"attributes":{"overlay":{"id":"094056ed-2fff-4526-abb5-08fc6bc31c7d","type":"BoxAnnotation"},"plot":{"id":"499797f8-2398-4722-9b38-fc3d98a232de","subtype":"Figure","type":"Plot"}},"id":"b89360bd-f659-45e3-bad6-96392dbe2858","type":"BoxZoomTool"}],"root_ids":["499797f8-2398-4722-9b38-fc3d98a232de"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"7a9fdf35-9967-49a7-a472-0cd668545663","elementid":"e3395ec1-c4e9-45e9-a487-3985d3904582","modelid":"499797f8-2398-4722-9b38-fc3d98a232de"}];
                
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
