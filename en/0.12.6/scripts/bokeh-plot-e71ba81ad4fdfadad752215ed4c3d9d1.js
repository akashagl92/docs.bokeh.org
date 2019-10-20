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
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
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
      };var element = document.getElementById("199842f8-68f5-49d4-b125-6160a95c0fde");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '199842f8-68f5-49d4-b125-6160a95c0fde' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"eaa37de0-af84-43c5-add9-00951aef4332":{"roots":{"references":[{"attributes":{"plot":{"id":"0233db99-2cf8-4c64-9ae6-dc2474dc67f9","subtype":"Figure","type":"Plot"}},"id":"3675d671-2c56-49ae-9002-aed3f4270a0b","type":"HelpTool"},{"attributes":{"data_source":{"id":"957799ba-a265-4656-a950-ea795e57a4b7","type":"ColumnDataSource"},"glyph":{"id":"71a2115d-3229-4f62-8099-9ae4669d1b45","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7dae66be-bd42-414a-8e13-1a4df6bdc76c","type":"Circle"},"selection_glyph":null},"id":"e939d111-0f3b-4643-80aa-7a99b3554100","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"0233db99-2cf8-4c64-9ae6-dc2474dc67f9","subtype":"Figure","type":"Plot"}},"id":"5b5f0075-b0a6-4b31-8707-e0cc297ce561","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"71a2115d-3229-4f62-8099-9ae4669d1b45","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"7dae66be-bd42-414a-8e13-1a4df6bdc76c","type":"Circle"},{"attributes":{},"id":"5d7cebd6-c099-4df9-a3f2-a8b3265b7b06","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c0aca101-a4e1-45d0-8eca-35c4d9d7ba68","type":"PanTool"},{"id":"5b5f0075-b0a6-4b31-8707-e0cc297ce561","type":"WheelZoomTool"},{"id":"ea37b37e-4872-4a02-9752-259b6ef0bbb3","type":"BoxZoomTool"},{"id":"a3bbdc1c-e06f-4a13-91dc-b302bddc6f0b","type":"SaveTool"},{"id":"0ffdd758-ef5b-420a-a309-5fd0c3547b22","type":"ResetTool"},{"id":"3675d671-2c56-49ae-9002-aed3f4270a0b","type":"HelpTool"}]},"id":"19d3eae8-c789-4ec8-8e81-1ecc1b679c8c","type":"Toolbar"},{"attributes":{"plot":{"id":"0233db99-2cf8-4c64-9ae6-dc2474dc67f9","subtype":"Figure","type":"Plot"},"ticker":{"id":"5d7cebd6-c099-4df9-a3f2-a8b3265b7b06","type":"BasicTicker"}},"id":"a36fd29c-6cc8-4860-83be-0e5ddb8bb577","type":"Grid"},{"attributes":{},"id":"9cbe9859-f470-43d5-8c8f-11e64eed512e","type":"ToolEvents"},{"attributes":{"formatter":{"id":"fac8dc9a-e29b-451e-8ac1-99d14069a1cf","type":"BasicTickFormatter"},"plot":{"id":"0233db99-2cf8-4c64-9ae6-dc2474dc67f9","subtype":"Figure","type":"Plot"},"ticker":{"id":"ee9325a6-2feb-43a8-bd29-697b0c99d818","type":"BasicTicker"}},"id":"8926ba37-0656-48c8-ba52-7ad1bf320b04","type":"LinearAxis"},{"attributes":{"plot":{"id":"0233db99-2cf8-4c64-9ae6-dc2474dc67f9","subtype":"Figure","type":"Plot"}},"id":"c0aca101-a4e1-45d0-8eca-35c4d9d7ba68","type":"PanTool"},{"attributes":{},"id":"728bf6f7-130b-4c8b-9f94-f312007db2fb","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"726db6b3-4bdb-4def-a0e7-b9b0f7c212a8","type":"BoxAnnotation"},"plot":{"id":"0233db99-2cf8-4c64-9ae6-dc2474dc67f9","subtype":"Figure","type":"Plot"}},"id":"ea37b37e-4872-4a02-9752-259b6ef0bbb3","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"dc4ca8a1-4dfa-4576-bf5a-58d8ca87263d","type":"LinearAxis"}],"left":[{"id":"8926ba37-0656-48c8-ba52-7ad1bf320b04","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"dc4ca8a1-4dfa-4576-bf5a-58d8ca87263d","type":"LinearAxis"},{"id":"a36fd29c-6cc8-4860-83be-0e5ddb8bb577","type":"Grid"},{"id":"8926ba37-0656-48c8-ba52-7ad1bf320b04","type":"LinearAxis"},{"id":"70adcaed-ebbd-4647-8976-6e5055dbf260","type":"Grid"},{"id":"726db6b3-4bdb-4def-a0e7-b9b0f7c212a8","type":"BoxAnnotation"},{"id":"e939d111-0f3b-4643-80aa-7a99b3554100","type":"GlyphRenderer"}],"title":{"id":"ef5dcde2-5d85-4ac6-8a28-f14e6e1bb592","type":"Title"},"title_location":"left","tool_events":{"id":"9cbe9859-f470-43d5-8c8f-11e64eed512e","type":"ToolEvents"},"toolbar":{"id":"19d3eae8-c789-4ec8-8e81-1ecc1b679c8c","type":"Toolbar"},"x_range":{"id":"b59b81c7-2f3c-43d3-a04f-f7605f95ed5e","type":"DataRange1d"},"x_scale":{"id":"79575777-5cd6-443d-9601-eae14f9ee676","type":"LinearScale"},"y_range":{"id":"707632c9-f6b1-481e-82d9-44f553bdbc3e","type":"DataRange1d"},"y_scale":{"id":"78caf9db-4e11-475f-8e7a-c602e003bc17","type":"LinearScale"}},"id":"0233db99-2cf8-4c64-9ae6-dc2474dc67f9","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"b59b81c7-2f3c-43d3-a04f-f7605f95ed5e","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"726db6b3-4bdb-4def-a0e7-b9b0f7c212a8","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"728bf6f7-130b-4c8b-9f94-f312007db2fb","type":"BasicTickFormatter"},"plot":{"id":"0233db99-2cf8-4c64-9ae6-dc2474dc67f9","subtype":"Figure","type":"Plot"},"ticker":{"id":"5d7cebd6-c099-4df9-a3f2-a8b3265b7b06","type":"BasicTicker"}},"id":"dc4ca8a1-4dfa-4576-bf5a-58d8ca87263d","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"0233db99-2cf8-4c64-9ae6-dc2474dc67f9","subtype":"Figure","type":"Plot"},"ticker":{"id":"ee9325a6-2feb-43a8-bd29-697b0c99d818","type":"BasicTicker"}},"id":"70adcaed-ebbd-4647-8976-6e5055dbf260","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2],"y":[3,4]}},"id":"957799ba-a265-4656-a950-ea795e57a4b7","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"0233db99-2cf8-4c64-9ae6-dc2474dc67f9","subtype":"Figure","type":"Plot"}},"id":"a3bbdc1c-e06f-4a13-91dc-b302bddc6f0b","type":"SaveTool"},{"attributes":{},"id":"78caf9db-4e11-475f-8e7a-c602e003bc17","type":"LinearScale"},{"attributes":{"callback":null},"id":"707632c9-f6b1-481e-82d9-44f553bdbc3e","type":"DataRange1d"},{"attributes":{"plot":{"id":"0233db99-2cf8-4c64-9ae6-dc2474dc67f9","subtype":"Figure","type":"Plot"}},"id":"0ffdd758-ef5b-420a-a309-5fd0c3547b22","type":"ResetTool"},{"attributes":{},"id":"79575777-5cd6-443d-9601-eae14f9ee676","type":"LinearScale"},{"attributes":{},"id":"fac8dc9a-e29b-451e-8ac1-99d14069a1cf","type":"BasicTickFormatter"},{"attributes":{},"id":"ee9325a6-2feb-43a8-bd29-697b0c99d818","type":"BasicTicker"},{"attributes":{"plot":null,"text":"Left Title"},"id":"ef5dcde2-5d85-4ac6-8a28-f14e6e1bb592","type":"Title"}],"root_ids":["0233db99-2cf8-4c64-9ae6-dc2474dc67f9"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"eaa37de0-af84-43c5-add9-00951aef4332","elementid":"199842f8-68f5-49d4-b125-6160a95c0fde","modelid":"0233db99-2cf8-4c64-9ae6-dc2474dc67f9"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
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
