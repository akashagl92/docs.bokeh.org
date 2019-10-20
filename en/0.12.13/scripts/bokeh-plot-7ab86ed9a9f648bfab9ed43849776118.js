(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("004bdd7a-b18e-4c94-8a7e-70d6b9d6c8ab");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '004bdd7a-b18e-4c94-8a7e-70d6b9d6c8ab' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.13.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.13.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.13.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.13.min.js"];
    
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
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"3fca2e02-eed2-4055-b767-3a10c54d5612":{"roots":{"references":[{"attributes":{"data_source":{"id":"e1f6b151-fa58-4e2d-8d7c-798a2960f992","type":"ColumnDataSource"},"glyph":{"id":"c224b316-1b4b-47c7-a1a0-939f4e903af0","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d991814b-34d1-4bec-b342-da513ba8645f","type":"VBar"},"selection_glyph":null,"view":{"id":"0d16e96b-4dfd-47aa-9c02-195d3e089cd5","type":"CDSView"}},"id":"84af93bc-592b-496b-ac19-e4d63afeafe7","type":"GlyphRenderer"},{"attributes":{"source":{"id":"e1f6b151-fa58-4e2d-8d7c-798a2960f992","type":"ColumnDataSource"}},"id":"0d16e96b-4dfd-47aa-9c02-195d3e089cd5","type":"CDSView"},{"attributes":{},"id":"cc00593d-3146-4452-8d43-7eaf655a34ef","type":"CategoricalTickFormatter"},{"attributes":{"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"field":"2016"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"40818135-e987-4e7a-99c6-121055782a11","type":"Dodge"}}},"id":"1df0c185-feda-46c8-bf79-2e34b701f602","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2017"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"e677f62b-a837-4a7c-8b22-a4a80569f588","type":"Dodge"}}},"id":"eb40c96b-7155-40eb-a431-e1fc9aee2261","type":"VBar"},{"attributes":{"range":{"id":"e157ce63-7776-4787-bd3c-467df205e00f","type":"FactorRange"}},"id":"40818135-e987-4e7a-99c6-121055782a11","type":"Dodge"},{"attributes":{"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"field":"2017"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"e677f62b-a837-4a7c-8b22-a4a80569f588","type":"Dodge"}}},"id":"5343f384-75b8-49f8-a18a-ef3019c24427","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2016"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"40818135-e987-4e7a-99c6-121055782a11","type":"Dodge"}}},"id":"0318dd5f-7ab3-4edf-ae66-c1f7231c4f51","type":"VBar"},{"attributes":{"data_source":{"id":"e1f6b151-fa58-4e2d-8d7c-798a2960f992","type":"ColumnDataSource"},"glyph":{"id":"1df0c185-feda-46c8-bf79-2e34b701f602","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0318dd5f-7ab3-4edf-ae66-c1f7231c4f51","type":"VBar"},"selection_glyph":null,"view":{"id":"3191ef96-a1cd-4868-b66d-9ad1020c5253","type":"CDSView"}},"id":"456d657c-227e-4173-91d1-a74b2416e8f7","type":"GlyphRenderer"},{"attributes":{"range":{"id":"e157ce63-7776-4787-bd3c-467df205e00f","type":"FactorRange"},"value":-0.25},"id":"dfaba226-7071-481c-8b38-55df0bed4812","type":"Dodge"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"74469713-61ab-458c-b8d1-76ef751aa7af","type":"Title"},{"attributes":{"data_source":{"id":"e1f6b151-fa58-4e2d-8d7c-798a2960f992","type":"ColumnDataSource"},"glyph":{"id":"5343f384-75b8-49f8-a18a-ef3019c24427","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"eb40c96b-7155-40eb-a431-e1fc9aee2261","type":"VBar"},"selection_glyph":null,"view":{"id":"a8b2a013-8958-4158-9e3e-efad58b600c7","type":"CDSView"}},"id":"5da0893c-bb88-40b2-ae46-6f75a40b8047","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"e157ce63-7776-4787-bd3c-467df205e00f","type":"FactorRange"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"5176446c-d4a6-4bbd-9587-000ad7f5ebcf","type":"Toolbar"},{"attributes":{"formatter":{"id":"2163f41f-af1a-47b9-ba44-e270fb9d39c1","type":"BasicTickFormatter"},"plot":{"id":"470d8741-b6dd-4ab9-bf57-cfffb583c988","subtype":"Figure","type":"Plot"},"ticker":{"id":"e99b8fd2-412f-4d48-b60d-d74ba0df0bdc","type":"BasicTicker"}},"id":"2387bfaa-1f1b-4a0b-9959-9051c9d2a97d","type":"LinearAxis"},{"attributes":{},"id":"ee60660b-4121-44db-b084-edef9fc25b2d","type":"CategoricalScale"},{"attributes":{"callback":null,"end":10},"id":"0645b4b9-c51d-4042-a379-85ac9708514c","type":"Range1d"},{"attributes":{},"id":"50186737-a549-4344-86f8-1c42494e59b9","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,3,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"e1f6b151-fa58-4e2d-8d7c-798a2960f992","type":"ColumnDataSource"},{"attributes":{"source":{"id":"e1f6b151-fa58-4e2d-8d7c-798a2960f992","type":"ColumnDataSource"}},"id":"a8b2a013-8958-4158-9e3e-efad58b600c7","type":"CDSView"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"470d8741-b6dd-4ab9-bf57-cfffb583c988","subtype":"Figure","type":"Plot"},"ticker":{"id":"9b721ab9-da05-4378-af8e-6d08d2a1afeb","type":"CategoricalTicker"}},"id":"af886708-2f42-4563-9f68-d6f66ac4863f","type":"Grid"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"5da0893c-bb88-40b2-ae46-6f75a40b8047","type":"GlyphRenderer"}]},"id":"b69ed421-4837-4c0a-ae62-34f6cf3e4d1b","type":"LegendItem"},{"attributes":{"formatter":{"id":"cc00593d-3146-4452-8d43-7eaf655a34ef","type":"CategoricalTickFormatter"},"plot":{"id":"470d8741-b6dd-4ab9-bf57-cfffb583c988","subtype":"Figure","type":"Plot"},"ticker":{"id":"9b721ab9-da05-4378-af8e-6d08d2a1afeb","type":"CategoricalTicker"}},"id":"892926a0-3c5b-44f6-acdd-e9fd5301453c","type":"CategoricalAxis"},{"attributes":{},"id":"2163f41f-af1a-47b9-ba44-e270fb9d39c1","type":"BasicTickFormatter"},{"attributes":{},"id":"9b721ab9-da05-4378-af8e-6d08d2a1afeb","type":"CategoricalTicker"},{"attributes":{"dimension":1,"plot":{"id":"470d8741-b6dd-4ab9-bf57-cfffb583c988","subtype":"Figure","type":"Plot"},"ticker":{"id":"e99b8fd2-412f-4d48-b60d-d74ba0df0bdc","type":"BasicTicker"}},"id":"5cf2f4c3-235e-452c-bb0c-a81fb7168ffe","type":"Grid"},{"attributes":{"below":[{"id":"892926a0-3c5b-44f6-acdd-e9fd5301453c","type":"CategoricalAxis"}],"left":[{"id":"2387bfaa-1f1b-4a0b-9959-9051c9d2a97d","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"892926a0-3c5b-44f6-acdd-e9fd5301453c","type":"CategoricalAxis"},{"id":"af886708-2f42-4563-9f68-d6f66ac4863f","type":"Grid"},{"id":"2387bfaa-1f1b-4a0b-9959-9051c9d2a97d","type":"LinearAxis"},{"id":"5cf2f4c3-235e-452c-bb0c-a81fb7168ffe","type":"Grid"},{"id":"afcf2321-14f5-4a59-8c1f-74386b71e2d3","type":"Legend"},{"id":"84af93bc-592b-496b-ac19-e4d63afeafe7","type":"GlyphRenderer"},{"id":"456d657c-227e-4173-91d1-a74b2416e8f7","type":"GlyphRenderer"},{"id":"5da0893c-bb88-40b2-ae46-6f75a40b8047","type":"GlyphRenderer"}],"title":{"id":"74469713-61ab-458c-b8d1-76ef751aa7af","type":"Title"},"toolbar":{"id":"5176446c-d4a6-4bbd-9587-000ad7f5ebcf","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"e157ce63-7776-4787-bd3c-467df205e00f","type":"FactorRange"},"x_scale":{"id":"ee60660b-4121-44db-b084-edef9fc25b2d","type":"CategoricalScale"},"y_range":{"id":"0645b4b9-c51d-4042-a379-85ac9708514c","type":"Range1d"},"y_scale":{"id":"50186737-a549-4344-86f8-1c42494e59b9","type":"LinearScale"}},"id":"470d8741-b6dd-4ab9-bf57-cfffb583c988","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"e99b8fd2-412f-4d48-b60d-d74ba0df0bdc","type":"BasicTicker"},{"attributes":{"items":[{"id":"4345f5bd-dbcd-4067-afdc-9ae7aaeae717","type":"LegendItem"},{"id":"c5fac6be-581f-46da-8924-5b8e0a9d3157","type":"LegendItem"},{"id":"b69ed421-4837-4c0a-ae62-34f6cf3e4d1b","type":"LegendItem"}],"location":"top_left","orientation":"horizontal","plot":{"id":"470d8741-b6dd-4ab9-bf57-cfffb583c988","subtype":"Figure","type":"Plot"}},"id":"afcf2321-14f5-4a59-8c1f-74386b71e2d3","type":"Legend"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"456d657c-227e-4173-91d1-a74b2416e8f7","type":"GlyphRenderer"}]},"id":"c5fac6be-581f-46da-8924-5b8e0a9d3157","type":"LegendItem"},{"attributes":{"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"field":"2015"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"dfaba226-7071-481c-8b38-55df0bed4812","type":"Dodge"}}},"id":"c224b316-1b4b-47c7-a1a0-939f4e903af0","type":"VBar"},{"attributes":{"source":{"id":"e1f6b151-fa58-4e2d-8d7c-798a2960f992","type":"ColumnDataSource"}},"id":"3191ef96-a1cd-4868-b66d-9ad1020c5253","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2015"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"dfaba226-7071-481c-8b38-55df0bed4812","type":"Dodge"}}},"id":"d991814b-34d1-4bec-b342-da513ba8645f","type":"VBar"},{"attributes":{"range":{"id":"e157ce63-7776-4787-bd3c-467df205e00f","type":"FactorRange"},"value":0.25},"id":"e677f62b-a837-4a7c-8b22-a4a80569f588","type":"Dodge"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"84af93bc-592b-496b-ac19-e4d63afeafe7","type":"GlyphRenderer"}]},"id":"4345f5bd-dbcd-4067-afdc-9ae7aaeae717","type":"LegendItem"}],"root_ids":["470d8741-b6dd-4ab9-bf57-cfffb583c988"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"3fca2e02-eed2-4055-b767-3a10c54d5612","elementid":"004bdd7a-b18e-4c94-8a7e-70d6b9d6c8ab","modelid":"470d8741-b6dd-4ab9-bf57-cfffb583c988"}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.13.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.13.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.13.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();