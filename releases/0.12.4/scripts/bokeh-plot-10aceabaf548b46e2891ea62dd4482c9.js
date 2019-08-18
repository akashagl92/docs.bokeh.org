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
      };var element = document.getElementById("dc7d1b00-99e2-46cd-a06e-49d4933376a2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dc7d1b00-99e2-46cd-a06e-49d4933376a2' but no matching script tag was found. ")
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
                var docs_json = {"a63514b4-97ba-436a-aaaf-806cef086c4d":{"roots":{"references":[{"attributes":{"formatter":{"id":"e1b1abb1-82f2-4f46-9073-6f0aa604ee0b","type":"BasicTickFormatter"},"plot":{"id":"5948f585-370c-4e8c-a1d5-be35eae2ee8e","subtype":"Figure","type":"Plot"},"ticker":{"id":"c6470374-7a5a-492e-bbe2-36ccba26af76","type":"BasicTicker"}},"id":"9848ff53-0100-4b9f-835d-423dd4cdc7e3","type":"LinearAxis"},{"attributes":{"plot":{"id":"5948f585-370c-4e8c-a1d5-be35eae2ee8e","subtype":"Figure","type":"Plot"}},"id":"b355acb1-a562-4441-9dea-3044a3898ba5","type":"SaveTool"},{"attributes":{"label":{"field":"label"},"renderers":[{"id":"17f6c556-a7ef-4229-aea7-58e569e37d74","type":"GlyphRenderer"}]},"id":"ce500398-b3ef-45b9-8b30-8a31ae145848","type":"LegendItem"},{"attributes":{"formatter":{"id":"bf41c6e8-eb78-462c-abef-9e380eeb4514","type":"BasicTickFormatter"},"plot":{"id":"5948f585-370c-4e8c-a1d5-be35eae2ee8e","subtype":"Figure","type":"Plot"},"ticker":{"id":"e58b6eda-351f-4dfb-a27b-ba472b720b91","type":"BasicTicker"}},"id":"ff63ab10-fa7c-4cfb-b6df-3f970e1991fa","type":"LinearAxis"},{"attributes":{},"id":"bf41c6e8-eb78-462c-abef-9e380eeb4514","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"5948f585-370c-4e8c-a1d5-be35eae2ee8e","subtype":"Figure","type":"Plot"},"ticker":{"id":"e58b6eda-351f-4dfb-a27b-ba472b720b91","type":"BasicTicker"}},"id":"f69b7a4f-c1ce-4278-8c03-d420916dc3e1","type":"Grid"},{"attributes":{},"id":"be45e185-12f1-4e78-b4c1-e6ad8ed34831","type":"ToolEvents"},{"attributes":{"items":[{"id":"ce500398-b3ef-45b9-8b30-8a31ae145848","type":"LegendItem"}],"plot":{"id":"5948f585-370c-4e8c-a1d5-be35eae2ee8e","subtype":"Figure","type":"Plot"}},"id":"c8551312-6e31-41cc-bfe4-d7d234e50f91","type":"Legend"},{"attributes":{"plot":null,"text":""},"id":"d8f788a6-db94-49ae-9098-25da71de0bd6","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"f435cc1e-7117-4704-80c3-fd9938a22a1b","type":"Circle"},{"attributes":{"callback":null,"end":3},"id":"c987d08c-7daa-416e-9adc-90a82b566fd2","type":"Range1d"},{"attributes":{"plot":{"id":"5948f585-370c-4e8c-a1d5-be35eae2ee8e","subtype":"Figure","type":"Plot"},"ticker":{"id":"c6470374-7a5a-492e-bbe2-36ccba26af76","type":"BasicTicker"}},"id":"26d5595e-b8ff-4db5-9647-dd28d70b5b60","type":"Grid"},{"attributes":{},"id":"e1b1abb1-82f2-4f46-9073-6f0aa604ee0b","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"0379f0c3-5704-44f5-a811-8cfd44c64944","type":"Circle"},{"attributes":{"callback":null,"end":7},"id":"dbd94a81-5f9a-4691-bf98-097c184daf13","type":"Range1d"},{"attributes":{"data_source":{"id":"5fb48a3a-7078-4744-bb2c-bedc606184e6","type":"ColumnDataSource"},"glyph":{"id":"0379f0c3-5704-44f5-a811-8cfd44c64944","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"f435cc1e-7117-4704-80c3-fd9938a22a1b","type":"Circle"},"selection_glyph":null},"id":"17f6c556-a7ef-4229-aea7-58e569e37d74","type":"GlyphRenderer"},{"attributes":{},"id":"e58b6eda-351f-4dfb-a27b-ba472b720b91","type":"BasicTicker"},{"attributes":{"below":[{"id":"9848ff53-0100-4b9f-835d-423dd4cdc7e3","type":"LinearAxis"}],"left":[{"id":"ff63ab10-fa7c-4cfb-b6df-3f970e1991fa","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"9848ff53-0100-4b9f-835d-423dd4cdc7e3","type":"LinearAxis"},{"id":"26d5595e-b8ff-4db5-9647-dd28d70b5b60","type":"Grid"},{"id":"ff63ab10-fa7c-4cfb-b6df-3f970e1991fa","type":"LinearAxis"},{"id":"f69b7a4f-c1ce-4278-8c03-d420916dc3e1","type":"Grid"},{"id":"c8551312-6e31-41cc-bfe4-d7d234e50f91","type":"Legend"},{"id":"17f6c556-a7ef-4229-aea7-58e569e37d74","type":"GlyphRenderer"}],"title":{"id":"d8f788a6-db94-49ae-9098-25da71de0bd6","type":"Title"},"tool_events":{"id":"be45e185-12f1-4e78-b4c1-e6ad8ed34831","type":"ToolEvents"},"toolbar":{"id":"29875bb5-9b5c-4ae8-927f-938613b5424b","type":"Toolbar"},"x_range":{"id":"dbd94a81-5f9a-4691-bf98-097c184daf13","type":"Range1d"},"y_range":{"id":"c987d08c-7daa-416e-9adc-90a82b566fd2","type":"Range1d"}},"id":"5948f585-370c-4e8c-a1d5-be35eae2ee8e","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","color","y","label"],"data":{"color":["#ef8a62","#67a9cf","#ef8a62","#67a9cf","#ef8a62","#67a9cf"],"label":["hi","lo","hi","lo","hi","lo"],"x":[1,2,3,4,5,6],"y":[2,1,2,1,2,1]}},"id":"5fb48a3a-7078-4744-bb2c-bedc606184e6","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b355acb1-a562-4441-9dea-3044a3898ba5","type":"SaveTool"}]},"id":"29875bb5-9b5c-4ae8-927f-938613b5424b","type":"Toolbar"},{"attributes":{},"id":"c6470374-7a5a-492e-bbe2-36ccba26af76","type":"BasicTicker"}],"root_ids":["5948f585-370c-4e8c-a1d5-be35eae2ee8e"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"a63514b4-97ba-436a-aaaf-806cef086c4d","elementid":"dc7d1b00-99e2-46cd-a06e-49d4933376a2","modelid":"5948f585-370c-4e8c-a1d5-be35eae2ee8e"}];
                
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
