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
      };var element = document.getElementById("ce932a16-8bec-48ef-999f-6183a0be2b7b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ce932a16-8bec-48ef-999f-6183a0be2b7b' but no matching script tag was found. ")
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
                var docs_json = {"8ebcf525-9b80-4741-8f10-b85ed695d7d5":{"roots":{"references":[{"attributes":{"formatter":{"id":"2d246377-792e-407b-8ad1-bc20785be138","type":"PrintfTickFormatter"},"plot":{"id":"7fa78629-f12b-4109-a3ba-406e412e9e1f","subtype":"Figure","type":"Plot"},"ticker":{"id":"a54bcfc5-ec7f-43ed-ae41-148a2c6c15eb","type":"BasicTicker"}},"id":"e379b3ed-1aae-4e3c-a458-7a055b7ee07a","type":"LinearAxis"},{"attributes":{"plot":{"id":"7fa78629-f12b-4109-a3ba-406e412e9e1f","subtype":"Figure","type":"Plot"},"ticker":{"id":"e153359f-58e4-4376-ade4-7d3310ec94c0","type":"BasicTicker"}},"id":"f1abd59b-7553-4016-bfaf-9579c08d86a9","type":"Grid"},{"attributes":{"plot":{"id":"7fa78629-f12b-4109-a3ba-406e412e9e1f","subtype":"Figure","type":"Plot"}},"id":"e2edfec5-1208-45a1-a7c8-0db31da4a36c","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ee433006-0331-4b1f-b245-ba2e371dd952","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"51a417bb-b4ec-4c33-b7a3-7abd6375353f","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"733f1410-ce0b-42d9-b1b5-addd3ef61c26","type":"ColumnDataSource"},{"attributes":{},"id":"a54bcfc5-ec7f-43ed-ae41-148a2c6c15eb","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"4645c15d-b20c-4b08-b0a7-06ecfd8d1302","type":"Title"},{"attributes":{"format":"%5.3f mu"},"id":"2d246377-792e-407b-8ad1-bc20785be138","type":"PrintfTickFormatter"},{"attributes":{"plot":{"id":"7fa78629-f12b-4109-a3ba-406e412e9e1f","subtype":"Figure","type":"Plot"}},"id":"cdd19420-d60a-4946-97fa-39f9968e3264","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"7fa78629-f12b-4109-a3ba-406e412e9e1f","subtype":"Figure","type":"Plot"},"ticker":{"id":"a54bcfc5-ec7f-43ed-ae41-148a2c6c15eb","type":"BasicTicker"}},"id":"f8eeb60d-0058-4e40-8087-11e0a7e2cfb2","type":"Grid"},{"attributes":{},"id":"e153359f-58e4-4376-ade4-7d3310ec94c0","type":"BasicTicker"},{"attributes":{"format":"%4.1e"},"id":"1044e15f-5a2a-4179-a972-c7b586eb16d8","type":"PrintfTickFormatter"},{"attributes":{"plot":{"id":"7fa78629-f12b-4109-a3ba-406e412e9e1f","subtype":"Figure","type":"Plot"}},"id":"0cdbf27c-400f-426a-aca0-48b605387d43","type":"SaveTool"},{"attributes":{"data_source":{"id":"733f1410-ce0b-42d9-b1b5-addd3ef61c26","type":"ColumnDataSource"},"glyph":{"id":"51a417bb-b4ec-4c33-b7a3-7abd6375353f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"69a0e1cd-b3b1-43a8-938d-9eafd4549472","type":"Circle"},"selection_glyph":null},"id":"98b6fdaf-a260-4fd1-ba93-ff419d9cdc22","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"1acab9e9-f7ca-4f57-be45-022c7edeceb3","type":"DataRange1d"},{"attributes":{"overlay":{"id":"ee433006-0331-4b1f-b245-ba2e371dd952","type":"BoxAnnotation"},"plot":{"id":"7fa78629-f12b-4109-a3ba-406e412e9e1f","subtype":"Figure","type":"Plot"}},"id":"dfb1216e-7153-43c4-8938-644f927e995d","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"98ce5d38-e6ee-4e10-8fa4-29e0c6a82bdb","type":"PanTool"},{"id":"2b726b54-773d-4444-b2cd-6e8c8dbd75a3","type":"WheelZoomTool"},{"id":"dfb1216e-7153-43c4-8938-644f927e995d","type":"BoxZoomTool"},{"id":"0cdbf27c-400f-426a-aca0-48b605387d43","type":"SaveTool"},{"id":"e2edfec5-1208-45a1-a7c8-0db31da4a36c","type":"ResetTool"},{"id":"cdd19420-d60a-4946-97fa-39f9968e3264","type":"HelpTool"}]},"id":"77be8d9a-d8ab-47d7-9621-0441d8ccd560","type":"Toolbar"},{"attributes":{},"id":"e9f651a5-211d-4e8d-af4d-6a18882ade44","type":"ToolEvents"},{"attributes":{"callback":null},"id":"7e0917d9-72f4-4b16-bfde-d2577acead71","type":"DataRange1d"},{"attributes":{"plot":{"id":"7fa78629-f12b-4109-a3ba-406e412e9e1f","subtype":"Figure","type":"Plot"}},"id":"2b726b54-773d-4444-b2cd-6e8c8dbd75a3","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"1044e15f-5a2a-4179-a972-c7b586eb16d8","type":"PrintfTickFormatter"},"plot":{"id":"7fa78629-f12b-4109-a3ba-406e412e9e1f","subtype":"Figure","type":"Plot"},"ticker":{"id":"e153359f-58e4-4376-ade4-7d3310ec94c0","type":"BasicTicker"}},"id":"bbf9f933-ec87-4994-93a9-516e31053c14","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"69a0e1cd-b3b1-43a8-938d-9eafd4549472","type":"Circle"},{"attributes":{"plot":{"id":"7fa78629-f12b-4109-a3ba-406e412e9e1f","subtype":"Figure","type":"Plot"}},"id":"98ce5d38-e6ee-4e10-8fa4-29e0c6a82bdb","type":"PanTool"},{"attributes":{"below":[{"id":"bbf9f933-ec87-4994-93a9-516e31053c14","type":"LinearAxis"}],"left":[{"id":"e379b3ed-1aae-4e3c-a458-7a055b7ee07a","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"bbf9f933-ec87-4994-93a9-516e31053c14","type":"LinearAxis"},{"id":"f1abd59b-7553-4016-bfaf-9579c08d86a9","type":"Grid"},{"id":"e379b3ed-1aae-4e3c-a458-7a055b7ee07a","type":"LinearAxis"},{"id":"f8eeb60d-0058-4e40-8087-11e0a7e2cfb2","type":"Grid"},{"id":"ee433006-0331-4b1f-b245-ba2e371dd952","type":"BoxAnnotation"},{"id":"98b6fdaf-a260-4fd1-ba93-ff419d9cdc22","type":"GlyphRenderer"}],"title":{"id":"4645c15d-b20c-4b08-b0a7-06ecfd8d1302","type":"Title"},"tool_events":{"id":"e9f651a5-211d-4e8d-af4d-6a18882ade44","type":"ToolEvents"},"toolbar":{"id":"77be8d9a-d8ab-47d7-9621-0441d8ccd560","type":"Toolbar"},"x_range":{"id":"1acab9e9-f7ca-4f57-be45-022c7edeceb3","type":"DataRange1d"},"y_range":{"id":"7e0917d9-72f4-4b16-bfde-d2577acead71","type":"DataRange1d"}},"id":"7fa78629-f12b-4109-a3ba-406e412e9e1f","subtype":"Figure","type":"Plot"}],"root_ids":["7fa78629-f12b-4109-a3ba-406e412e9e1f"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"8ebcf525-9b80-4741-8f10-b85ed695d7d5","elementid":"ce932a16-8bec-48ef-999f-6183a0be2b7b","modelid":"7fa78629-f12b-4109-a3ba-406e412e9e1f"}];
                
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
