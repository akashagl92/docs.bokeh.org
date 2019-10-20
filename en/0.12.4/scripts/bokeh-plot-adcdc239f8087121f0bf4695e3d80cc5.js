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
      };var element = document.getElementById("bac93fd4-6c26-4b9a-a268-fa116b7954a1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'bac93fd4-6c26-4b9a-a268-fa116b7954a1' but no matching script tag was found. ")
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
                var docs_json = {"27b1e4ea-28f6-4a51-a3be-9eeaf900e9b9":{"roots":{"references":[{"attributes":{"plot":{"id":"e53ec778-843a-46b3-ad49-5362d37adb0f","subtype":"Figure","type":"Plot"}},"id":"0f6ecb12-312b-4fdc-9a6f-a836f844db03","type":"PanTool"},{"attributes":{"plot":{"id":"e53ec778-843a-46b3-ad49-5362d37adb0f","subtype":"Figure","type":"Plot"},"ticker":{"id":"f5225b0d-3a5c-4b1a-8ab6-a32645364603","type":"BasicTicker"}},"id":"5a2c1735-ec85-4dae-bc53-9d85b21a69d1","type":"Grid"},{"attributes":{"overlay":{"id":"9671e221-bde0-48a2-a755-3ce1c7936951","type":"BoxAnnotation"},"plot":{"id":"e53ec778-843a-46b3-ad49-5362d37adb0f","subtype":"Figure","type":"Plot"}},"id":"7f45b4b8-91de-4628-ad39-30697bd55d33","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"e53ec778-843a-46b3-ad49-5362d37adb0f","subtype":"Figure","type":"Plot"}},"id":"7e9db6a6-b5f9-4e11-8751-f07d289ea735","type":"ResetTool"},{"attributes":{},"id":"f5225b0d-3a5c-4b1a-8ab6-a32645364603","type":"BasicTicker"},{"attributes":{"end":{"id":"964ad04e-f4ba-4dd1-943e-94313e34f20e","type":"VeeHead"},"line_color":{"value":"red"},"plot":{"id":"e53ec778-843a-46b3-ad49-5362d37adb0f","subtype":"Figure","type":"Plot"},"source":null,"start":null,"x_end":{"value":0},"x_start":{"value":0.5},"y_end":{"value":0},"y_start":{"value":0.7}},"id":"1afe7cd0-1030-4660-8b74-7f2be5044131","type":"Arrow"},{"attributes":{"formatter":{"id":"83fd265a-8928-4fa6-8159-fce3a1124d1d","type":"BasicTickFormatter"},"plot":{"id":"e53ec778-843a-46b3-ad49-5362d37adb0f","subtype":"Figure","type":"Plot"},"ticker":{"id":"b03d32a0-a690-4fd7-a92a-a285cb7245ee","type":"BasicTicker"}},"id":"9425e918-6b91-4329-b539-0ddcba017d7b","type":"LinearAxis"},{"attributes":{},"id":"81a626ae-b58e-4d15-b625-c42d5febe206","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"radius":{"units":"data","value":0.1},"x":{"field":"x"},"y":{"field":"y"}},"id":"91c81684-bb8a-4d41-bb64-ece1f911b068","type":"Circle"},{"attributes":{"callback":null},"id":"6e4da5b7-5910-4ae4-bfac-17cfefa720e1","type":"DataRange1d"},{"attributes":{"line_color":{"value":"firebrick"},"line_width":{"value":4},"plot":null},"id":"77dd4a26-8541-4714-b54b-e7a713acd835","type":"OpenHead"},{"attributes":{"fill_color":{"value":"orange"},"plot":null},"id":"e25364eb-60af-448d-a658-3d625fc9f301","type":"NormalHead"},{"attributes":{"dimension":1,"plot":{"id":"e53ec778-843a-46b3-ad49-5362d37adb0f","subtype":"Figure","type":"Plot"},"ticker":{"id":"b03d32a0-a690-4fd7-a92a-a285cb7245ee","type":"BasicTicker"}},"id":"9503f8f1-a672-46ae-8a5d-06d1a4cc11ac","type":"Grid"},{"attributes":{"callback":null},"id":"025ffe8d-ee07-437f-b2d6-7cdc8cd5e7a8","type":"DataRange1d"},{"attributes":{"plot":{"id":"e53ec778-843a-46b3-ad49-5362d37adb0f","subtype":"Figure","type":"Plot"}},"id":"3bed5953-9cf3-4a8d-8212-45f0d5185b93","type":"SaveTool"},{"attributes":{},"id":"5425ad2b-95a8-4e72-a6da-22d38ceaf933","type":"ToolEvents"},{"attributes":{"data_source":{"id":"5c62893e-a06e-4ba8-9c7f-1c9eec890512","type":"ColumnDataSource"},"glyph":{"id":"91c81684-bb8a-4d41-bb64-ece1f911b068","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"671e0c63-a9c4-4775-8367-f793240a7e3c","type":"Circle"},"selection_glyph":null},"id":"e44d4fbc-2283-4d28-807d-36e3dbbae6ff","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0f6ecb12-312b-4fdc-9a6f-a836f844db03","type":"PanTool"},{"id":"97af035c-db34-470e-99b0-4eae39ae7fef","type":"WheelZoomTool"},{"id":"7f45b4b8-91de-4628-ad39-30697bd55d33","type":"BoxZoomTool"},{"id":"3bed5953-9cf3-4a8d-8212-45f0d5185b93","type":"SaveTool"},{"id":"7e9db6a6-b5f9-4e11-8751-f07d289ea735","type":"ResetTool"},{"id":"d8dc08f8-7336-451d-87e8-2dae05b96ae7","type":"HelpTool"}]},"id":"2a91d59d-f7fd-4fd3-97ec-69a6301981a0","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.1},"x":{"field":"x"},"y":{"field":"y"}},"id":"671e0c63-a9c4-4775-8367-f793240a7e3c","type":"Circle"},{"attributes":{"end":{"id":"77dd4a26-8541-4714-b54b-e7a713acd835","type":"OpenHead"},"plot":{"id":"e53ec778-843a-46b3-ad49-5362d37adb0f","subtype":"Figure","type":"Plot"},"source":null,"start":null,"x_end":{"value":1},"x_start":{"value":0},"y_end":{"value":0},"y_start":{"value":0}},"id":"706ee016-c97a-4216-b95b-2e91f9bf7c5b","type":"Arrow"},{"attributes":{"plot":{"id":"e53ec778-843a-46b3-ad49-5362d37adb0f","subtype":"Figure","type":"Plot"}},"id":"97af035c-db34-470e-99b0-4eae39ae7fef","type":"WheelZoomTool"},{"attributes":{"plot":null,"size":35},"id":"964ad04e-f4ba-4dd1-943e-94313e34f20e","type":"VeeHead"},{"attributes":{"callback":null,"column_names":["x","y","line_color","fill_color"],"data":{"fill_color":["navy","yellow","red"],"line_color":["navy","yellow","red"],"x":[0,1,0.5],"y":[0,0,0.7]}},"id":"5c62893e-a06e-4ba8-9c7f-1c9eec890512","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"81d6a449-f197-4a0c-adca-95d1c9ec51e1","type":"LinearAxis"}],"left":[{"id":"9425e918-6b91-4329-b539-0ddcba017d7b","type":"LinearAxis"}],"renderers":[{"id":"81d6a449-f197-4a0c-adca-95d1c9ec51e1","type":"LinearAxis"},{"id":"5a2c1735-ec85-4dae-bc53-9d85b21a69d1","type":"Grid"},{"id":"9425e918-6b91-4329-b539-0ddcba017d7b","type":"LinearAxis"},{"id":"9503f8f1-a672-46ae-8a5d-06d1a4cc11ac","type":"Grid"},{"id":"9671e221-bde0-48a2-a755-3ce1c7936951","type":"BoxAnnotation"},{"id":"e44d4fbc-2283-4d28-807d-36e3dbbae6ff","type":"GlyphRenderer"},{"id":"706ee016-c97a-4216-b95b-2e91f9bf7c5b","type":"Arrow"},{"id":"342b77b6-057a-4bdc-b242-62aaf1f494d9","type":"Arrow"},{"id":"1afe7cd0-1030-4660-8b74-7f2be5044131","type":"Arrow"}],"title":{"id":"f25e268a-da5a-436f-8557-0990093eaa27","type":"Title"},"tool_events":{"id":"5425ad2b-95a8-4e72-a6da-22d38ceaf933","type":"ToolEvents"},"toolbar":{"id":"2a91d59d-f7fd-4fd3-97ec-69a6301981a0","type":"Toolbar"},"x_range":{"id":"6e4da5b7-5910-4ae4-bfac-17cfefa720e1","type":"DataRange1d"},"y_range":{"id":"025ffe8d-ee07-437f-b2d6-7cdc8cd5e7a8","type":"DataRange1d"}},"id":"e53ec778-843a-46b3-ad49-5362d37adb0f","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"e53ec778-843a-46b3-ad49-5362d37adb0f","subtype":"Figure","type":"Plot"}},"id":"d8dc08f8-7336-451d-87e8-2dae05b96ae7","type":"HelpTool"},{"attributes":{"plot":null,"text":""},"id":"f25e268a-da5a-436f-8557-0990093eaa27","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9671e221-bde0-48a2-a755-3ce1c7936951","type":"BoxAnnotation"},{"attributes":{},"id":"b03d32a0-a690-4fd7-a92a-a285cb7245ee","type":"BasicTicker"},{"attributes":{},"id":"83fd265a-8928-4fa6-8159-fce3a1124d1d","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"81a626ae-b58e-4d15-b625-c42d5febe206","type":"BasicTickFormatter"},"plot":{"id":"e53ec778-843a-46b3-ad49-5362d37adb0f","subtype":"Figure","type":"Plot"},"ticker":{"id":"f5225b0d-3a5c-4b1a-8ab6-a32645364603","type":"BasicTicker"}},"id":"81d6a449-f197-4a0c-adca-95d1c9ec51e1","type":"LinearAxis"},{"attributes":{"end":{"id":"e25364eb-60af-448d-a658-3d625fc9f301","type":"NormalHead"},"plot":{"id":"e53ec778-843a-46b3-ad49-5362d37adb0f","subtype":"Figure","type":"Plot"},"source":null,"start":null,"x_end":{"value":0.5},"x_start":{"value":1},"y_end":{"value":0.7},"y_start":{"value":0}},"id":"342b77b6-057a-4bdc-b242-62aaf1f494d9","type":"Arrow"}],"root_ids":["e53ec778-843a-46b3-ad49-5362d37adb0f"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"27b1e4ea-28f6-4a51-a3be-9eeaf900e9b9","elementid":"bac93fd4-6c26-4b9a-a268-fa116b7954a1","modelid":"e53ec778-843a-46b3-ad49-5362d37adb0f"}];
                
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
