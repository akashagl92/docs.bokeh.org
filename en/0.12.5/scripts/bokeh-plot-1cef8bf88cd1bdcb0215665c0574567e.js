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
      };var element = document.getElementById("12cf8db3-5ee8-4673-b730-59a7b6387957");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '12cf8db3-5ee8-4673-b730-59a7b6387957' but no matching script tag was found. ")
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
                var docs_json = {"94cda701-48e3-4e55-a971-770dc985946d":{"roots":{"references":[{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"6ede4d6f-9cbb-45d2-be32-fc217a5a2f24","type":"Segment"},{"attributes":{"dimension":1,"grid_line_color":{"value":"white"},"grid_line_width":{"value":2},"plot":{"id":"89636456-6f8d-4c9c-8877-dd5322d45861","subtype":"Figure","type":"Plot"},"ticker":{"id":"e3639b87-22eb-41ee-a469-05831ddeb837","type":"BasicTicker"}},"id":"401e1264-71cb-419d-833b-79ba96aa1721","type":"Grid"},{"attributes":{},"id":"e3639b87-22eb-41ee-a469-05831ddeb837","type":"BasicTicker"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#E08E79"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"cc6da93d-c792-4437-b290-1e687a22c7be","type":"VBar"},{"attributes":{"callback":null,"column_names":["x0","x1","y0","y1"],"data":{"x0":["a","b","c","d","e","f"],"x1":["a","b","c","d","e","f"],"y0":{"__ndarray__":"yLXtWjUPB8BIdHAw1isFwATnVFUgNfq/gVXR4zVa/L8o1Ai9H43rvxxaSCrLYtq/","dtype":"float64","shape":[6]},"y1":{"__ndarray__":"FrkhlgsF5b90IV+fMBfiv3ry1/RzutI/QwsMrmPL1T9kkvX2w0r0PwYltw8bE/g/","dtype":"float64","shape":[6]}}},"id":"4218b322-6963-4400-bbb6-6be3195c1466","type":"ColumnDataSource"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"36b1bbab-6bc3-4e02-a5ab-c5dadf96fdc1","type":"Segment"},{"attributes":{},"id":"a206c3db-aac3-4299-966e-fa4efbeb084d","type":"ToolEvents"},{"attributes":{"data_source":{"id":"ad384edc-083e-47e2-93c0-a47b585655ed","type":"ColumnDataSource"},"glyph":{"id":"49264e53-99b8-4ff2-81c0-7f8f2860fbce","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f2190a29-3bad-4dee-ba43-b39449d27433","type":"VBar"},"selection_glyph":null},"id":"039c98a7-b6ee-4ccc-85f7-f45dffcf5da8","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"4218b322-6963-4400-bbb6-6be3195c1466","type":"ColumnDataSource"},"glyph":{"id":"68764dce-8fa0-4480-862d-b207576f7962","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6ede4d6f-9cbb-45d2-be32-fc217a5a2f24","type":"Segment"},"selection_glyph":null},"id":"d6d536ff-9690-4f40-acbf-c2d1e6063e4f","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["a","b","b","b","c","d","d","d","d","d","e","f","f"],"y":[-2.9983572991725786,3.994543254247489,-3.0624915426206085,-2.991517031962318,4.564072821387256,4.056901688504773,-1.8406570216962996,-1.9670430172453304,-2.3941265361519153,-1.7972305388284768,-1.2064115658709862,5.464087663235341,-0.43055227841214405]}},"id":"4f912939-adfb-4a8a-b85d-1137a17a5570","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1f506fa6-8156-40bd-b19a-1eedc924d0d6","type":"ColumnDataSource"},"glyph":{"id":"36b1bbab-6bc3-4e02-a5ab-c5dadf96fdc1","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c19e7ca8-e662-4e8a-b75c-1f46e97dfcb1","type":"Segment"},"selection_glyph":null},"id":"28d858f7-5db1-45e4-a769-2fb99624ec67","type":"GlyphRenderer"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"9581414b-41de-42b0-845f-adc0fdf963cb","type":"VBar"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"f2190a29-3bad-4dee-ba43-b39449d27433","type":"VBar"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f"]},"id":"ba7ebc43-66f4-4941-9295-8c3c34cae365","type":"FactorRange"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"0b61d6a8-38e0-46c1-890b-afd5d52c1312","type":"Rect"},{"attributes":{},"id":"7cc39a33-ddf1-4d81-bca1-b447f1db8648","type":"CategoricalTicker"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"c19e7ca8-e662-4e8a-b75c-1f46e97dfcb1","type":"Segment"},{"attributes":{"background_fill_color":{"value":"#EFE8E2"},"below":[{"id":"052e9fad-ecf4-45df-81fe-11e381ab9722","type":"CategoricalAxis"}],"left":[{"id":"a9cd6d82-4dca-41c8-b62b-2bc44923c51c","type":"LinearAxis"}],"renderers":[{"id":"052e9fad-ecf4-45df-81fe-11e381ab9722","type":"CategoricalAxis"},{"id":"0c11810e-a6e2-4570-b818-0b30cd661e6d","type":"Grid"},{"id":"a9cd6d82-4dca-41c8-b62b-2bc44923c51c","type":"LinearAxis"},{"id":"401e1264-71cb-419d-833b-79ba96aa1721","type":"Grid"},{"id":"28d858f7-5db1-45e4-a769-2fb99624ec67","type":"GlyphRenderer"},{"id":"d6d536ff-9690-4f40-acbf-c2d1e6063e4f","type":"GlyphRenderer"},{"id":"dc612734-16ea-4f0a-9800-34a9ce77c29b","type":"GlyphRenderer"},{"id":"039c98a7-b6ee-4ccc-85f7-f45dffcf5da8","type":"GlyphRenderer"},{"id":"61bdb2ae-8515-4b89-92cf-94e20c5fbfda","type":"GlyphRenderer"},{"id":"5079843a-8b97-41e2-a01b-74c34d07b83d","type":"GlyphRenderer"},{"id":"74bdae41-5d07-4f78-885c-e8705b0b00d4","type":"GlyphRenderer"}],"title":{"id":"ae6ed5f4-22d3-4e55-9c79-d24cc4d0ee74","type":"Title"},"tool_events":{"id":"a206c3db-aac3-4299-966e-fa4efbeb084d","type":"ToolEvents"},"toolbar":{"id":"282e8a81-aa04-4459-a05c-38a6c113d562","type":"Toolbar"},"x_range":{"id":"ba7ebc43-66f4-4941-9295-8c3c34cae365","type":"FactorRange"},"y_range":{"id":"f84afce5-01f5-4552-9403-8b1149a326c1","type":"DataRange1d"}},"id":"89636456-6f8d-4c9c-8877-dd5322d45861","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"ae6ed5f4-22d3-4e55-9c79-d24cc4d0ee74","type":"Title"},{"attributes":{"grid_line_color":{"value":null},"grid_line_width":{"value":2},"plot":{"id":"89636456-6f8d-4c9c-8877-dd5322d45861","subtype":"Figure","type":"Plot"},"ticker":{"id":"7cc39a33-ddf1-4d81-bca1-b447f1db8648","type":"CategoricalTicker"}},"id":"0c11810e-a6e2-4570-b818-0b30cd661e6d","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"a989f2da-1626-4ec5-bcd8-b459ceffdeaf","type":"Rect"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"68764dce-8fa0-4480-862d-b207576f7962","type":"Segment"},{"attributes":{},"id":"69f1c1c0-553e-4a2d-8248-a960df06cb8e","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"de4e5ade-a344-40ee-a8d9-ff4087cd7174","type":"ColumnDataSource"},"glyph":{"id":"cc6da93d-c792-4437-b290-1e687a22c7be","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9581414b-41de-42b0-845f-adc0fdf963cb","type":"VBar"},"selection_glyph":null},"id":"dc612734-16ea-4f0a-9800-34a9ce77c29b","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"#F38630"},"line_color":{"value":"#F38630"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"6020d7ee-d37c-41b4-ae16-073e7a9454f2","type":"Circle"},{"attributes":{"plot":{"id":"89636456-6f8d-4c9c-8877-dd5322d45861","subtype":"Figure","type":"Plot"}},"id":"aa399b80-aa46-49a4-8dd1-6ba0e10ab82e","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"7e5621ce-fae1-42ab-b5c7-d3d7bb204e1d","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["a","b","c","d","e","f"],"y":{"__ndarray__":"yLXtWjUPB8BIdHAw1isFwATnVFUgNfq/gVXR4zVa/L8o1Ai9H43rvxxaSCrLYtq/","dtype":"float64","shape":[6]}}},"id":"77f63632-894e-4b2a-9840-01475ddc9e32","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"7800e818-64ba-4d3e-ab5c-95eef84ed11a","type":"Rect"},{"attributes":{"formatter":{"id":"f2464fab-6b9f-4bb7-b450-e89b5891765b","type":"CategoricalTickFormatter"},"major_label_text_font_size":{"value":"12pt"},"plot":{"id":"89636456-6f8d-4c9c-8877-dd5322d45861","subtype":"Figure","type":"Plot"},"ticker":{"id":"7cc39a33-ddf1-4d81-bca1-b447f1db8648","type":"CategoricalTicker"}},"id":"052e9fad-ecf4-45df-81fe-11e381ab9722","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"30259a1c-eca2-4877-b765-20d96b587b5a","type":"ColumnDataSource"},"glyph":{"id":"0b61d6a8-38e0-46c1-890b-afd5d52c1312","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7800e818-64ba-4d3e-ab5c-95eef84ed11a","type":"Rect"},"selection_glyph":null},"id":"5079843a-8b97-41e2-a01b-74c34d07b83d","type":"GlyphRenderer"},{"attributes":{},"id":"f2464fab-6b9f-4bb7-b450-e89b5891765b","type":"CategoricalTickFormatter"},{"attributes":{"data_source":{"id":"77f63632-894e-4b2a-9840-01475ddc9e32","type":"ColumnDataSource"},"glyph":{"id":"a989f2da-1626-4ec5-bcd8-b459ceffdeaf","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"55fb2610-f891-40ff-b12a-b0ca7256f680","type":"Rect"},"selection_glyph":null},"id":"61bdb2ae-8515-4b89-92cf-94e20c5fbfda","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"aa399b80-aa46-49a4-8dd1-6ba0e10ab82e","type":"SaveTool"}]},"id":"282e8a81-aa04-4459-a05c-38a6c113d562","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["top","x","bottom"],"data":{"bottom":{"__ndarray__":"BRDwOMUPwT9Y4xZUbwTCP4ige1E2FPI/LeV7pD118T9zX4l4XEEAQJ36hrP9DQFA","dtype":"float64","shape":[6]},"top":{"__ndarray__":"FrkhlgsF5b90IV+fMBfiv3ry1/RzutI/QwsMrmPL1T9kkvX2w0r0PwYltw8bE/g/","dtype":"float64","shape":[6]},"x":["a","b","c","d","e","f"]}},"id":"ad384edc-083e-47e2-93c0-a47b585655ed","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"69f1c1c0-553e-4a2d-8248-a960df06cb8e","type":"BasicTickFormatter"},"plot":{"id":"89636456-6f8d-4c9c-8877-dd5322d45861","subtype":"Figure","type":"Plot"},"ticker":{"id":"e3639b87-22eb-41ee-a469-05831ddeb837","type":"BasicTicker"}},"id":"a9cd6d82-4dca-41c8-b62b-2bc44923c51c","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["a","b","c","d","e","f"],"y":{"__ndarray__":"Gf2Nc3xaBkDWAHzmmTkHQF0vJj4Ucw5AAsuHIk7kDkDvnVHBWzwSQLxMjIlczBJA","dtype":"float64","shape":[6]}}},"id":"30259a1c-eca2-4877-b765-20d96b587b5a","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"f84afce5-01f5-4552-9403-8b1149a326c1","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x0","x1","y0","y1"],"data":{"x0":["a","b","c","d","e","f"],"x1":["a","b","c","d","e","f"],"y0":{"__ndarray__":"Gf2Nc3xaBkDWAHzmmTkHQF0vJj4Ucw5AAsuHIk7kDkDvnVHBWzwSQLxMjIlczBJA","dtype":"float64","shape":[6]},"y1":{"__ndarray__":"RLBB+Hp16j+qU413P07qP3a9CzA7K/s/sj27dY37+z9aHU7tfYAFQLL78yXSQgZA","dtype":"float64","shape":[6]}}},"id":"1f506fa6-8156-40bd-b19a-1eedc924d0d6","type":"ColumnDataSource"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#3B8686"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"49264e53-99b8-4ff2-81c0-7f8f2860fbce","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"55fb2610-f891-40ff-b12a-b0ca7256f680","type":"Rect"},{"attributes":{"data_source":{"id":"4f912939-adfb-4a8a-b85d-1137a17a5570","type":"ColumnDataSource"},"glyph":{"id":"6020d7ee-d37c-41b4-ae16-073e7a9454f2","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7e5621ce-fae1-42ab-b5c7-d3d7bb204e1d","type":"Circle"},"selection_glyph":null},"id":"74bdae41-5d07-4f78-885c-e8705b0b00d4","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["top","x","bottom"],"data":{"bottom":{"__ndarray__":"RLBB+Hp16j+qU413P07qP3a9CzA7K/s/sj27dY37+z9aHU7tfYAFQLL78yXSQgZA","dtype":"float64","shape":[6]},"top":{"__ndarray__":"BRDwOMUPwT9Y4xZUbwTCP4ige1E2FPI/LeV7pD118T9zX4l4XEEAQJ36hrP9DQFA","dtype":"float64","shape":[6]},"x":["a","b","c","d","e","f"]}},"id":"de4e5ade-a344-40ee-a8d9-ff4087cd7174","type":"ColumnDataSource"}],"root_ids":["89636456-6f8d-4c9c-8877-dd5322d45861"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"94cda701-48e3-4e55-a971-770dc985946d","elementid":"12cf8db3-5ee8-4673-b730-59a7b6387957","modelid":"89636456-6f8d-4c9c-8877-dd5322d45861"}];
                
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
