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
      };var element = document.getElementById("f1bd0edf-2b9d-4945-b188-d8a9ac8ade43");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f1bd0edf-2b9d-4945-b188-d8a9ac8ade43' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                    
                  var docs_json = '{"e2444230-b636-443f-aa79-f99a76775d34":{"roots":{"references":[{"attributes":{},"id":"01a34320-785f-4919-84f2-21e06d99cb42","type":"Selection"},{"attributes":{"below":[{"id":"7720c9ae-86b1-46d4-88b1-585114bcebf1","type":"CategoricalAxis"}],"left":[{"id":"c7fb6dfc-b406-4451-ae3d-22cc1ae903ec","type":"LinearAxis"}],"outline_line_color":{"value":null},"plot_height":250,"renderers":[{"id":"7720c9ae-86b1-46d4-88b1-585114bcebf1","type":"CategoricalAxis"},{"id":"38c017f6-2f14-4b6b-b8e2-03547d54bbd5","type":"Grid"},{"id":"c7fb6dfc-b406-4451-ae3d-22cc1ae903ec","type":"LinearAxis"},{"id":"d096702a-f1ab-4b07-b439-6fd7db15fd15","type":"Grid"},{"id":"85a057b2-6e9e-4cbc-9e1f-91570012592e","type":"Legend"},{"id":"31693cf8-3aae-4f4d-96db-108a8d9c2448","type":"GlyphRenderer"},{"id":"c680a409-b69f-4eda-aac8-4f191e889312","type":"GlyphRenderer"},{"id":"6b196f95-260a-46b8-85da-d07cf8f7a3c9","type":"GlyphRenderer"}],"title":{"id":"110ba73d-e544-4981-a604-36f06126cff1","type":"Title"},"toolbar":{"id":"c7638bd7-eeb5-41fa-9c0a-385fd6d886a6","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"eeacb06a-96e5-4eac-99ab-c9e43ed29ab7","type":"FactorRange"},"x_scale":{"id":"32b91ca0-0ec4-4b0e-9cfd-4ac17ee12212","type":"CategoricalScale"},"y_range":{"id":"f3793d19-7cff-4ee4-9791-d806ddd6d108","type":"DataRange1d"},"y_scale":{"id":"1fed2b7a-b6f2-4983-8c54-e7f48e5fd2fe","type":"LinearScale"}},"id":"a91398eb-c0a4-4b2a-9c50-8c9942ebbcfc","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"d8a232d5-7e68-4586-91c2-6fb89ae3d12c","type":"CategoricalTicker"},{"attributes":{"items":[{"id":"d264fa87-f9d8-4865-9e0e-472839cdd026","type":"LegendItem"},{"id":"a9463d7b-a4e3-4f3d-b291-5d70364b8ff9","type":"LegendItem"},{"id":"3bb12c83-304f-4806-bd4e-04f058d02e77","type":"LegendItem"}],"location":"top_left","orientation":"horizontal","plot":{"id":"a91398eb-c0a4-4b2a-9c50-8c9942ebbcfc","subtype":"Figure","type":"Plot"}},"id":"85a057b2-6e9e-4cbc-9e1f-91570012592e","type":"Legend"},{"attributes":{"callback":null,"start":0},"id":"f3793d19-7cff-4ee4-9791-d806ddd6d108","type":"DataRange1d"},{"attributes":{"fields":["2015"]},"id":"d602ecce-8c28-4624-9a57-2e6d2620e8d0","type":"Stack"},{"attributes":{},"id":"8eff0cca-726b-4b52-89bd-66f5f233dd98","type":"UnionRenderers"},{"attributes":{},"id":"4e95faad-80e3-4b34-b170-e5cb4bcf075e","type":"Selection"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"eeacb06a-96e5-4eac-99ab-c9e43ed29ab7","type":"FactorRange"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"31693cf8-3aae-4f4d-96db-108a8d9c2448","type":"GlyphRenderer"}]},"id":"d264fa87-f9d8-4865-9e0e-472839cdd026","type":"LegendItem"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"a91398eb-c0a4-4b2a-9c50-8c9942ebbcfc","subtype":"Figure","type":"Plot"},"ticker":{"id":"d8a232d5-7e68-4586-91c2-6fb89ae3d12c","type":"CategoricalTicker"}},"id":"38c017f6-2f14-4b6b-b8e2-03547d54bbd5","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"c7638bd7-eeb5-41fa-9c0a-385fd6d886a6","type":"Toolbar"},{"attributes":{},"id":"bbf93a6e-a0b3-46cd-a0f8-753ce5ec828a","type":"UnionRenderers"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"c680a409-b69f-4eda-aac8-4f191e889312","type":"GlyphRenderer"}]},"id":"a9463d7b-a4e3-4f3d-b291-5d70364b8ff9","type":"LegendItem"},{"attributes":{"formatter":{"id":"dc145485-5794-4d31-8c05-e5edd376d89c","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"a91398eb-c0a4-4b2a-9c50-8c9942ebbcfc","subtype":"Figure","type":"Plot"},"ticker":{"id":"c699bba6-92bf-45f6-a091-3f1d90f1b077","type":"BasicTicker"}},"id":"c7fb6dfc-b406-4451-ae3d-22cc1ae903ec","type":"LinearAxis"},{"attributes":{},"id":"c699bba6-92bf-45f6-a091-3f1d90f1b077","type":"BasicTicker"},{"attributes":{"source":{"id":"843f6591-83b5-46b0-9992-d6b9d0adac75","type":"ColumnDataSource"}},"id":"d435ba96-e63d-4862-84bd-7e23ce41f8d7","type":"CDSView"},{"attributes":{"source":{"id":"6adec8dd-0be0-4a18-b575-6a6723301b12","type":"ColumnDataSource"}},"id":"e1535437-d92d-4e31-a91e-c1d83d087ff6","type":"CDSView"},{"attributes":{},"id":"330cdc95-2224-470b-b2fd-1e352a454592","type":"Selection"},{"attributes":{"data_source":{"id":"6adec8dd-0be0-4a18-b575-6a6723301b12","type":"ColumnDataSource"},"glyph":{"id":"0bf95194-84bf-4c31-a7bf-d6f2c3dfb69b","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2017","nonselection_glyph":{"id":"e42729e1-ce25-4b54-9c35-94ca0d65af7a","type":"VBar"},"selection_glyph":null,"view":{"id":"e1535437-d92d-4e31-a91e-c1d83d087ff6","type":"CDSView"}},"id":"6b196f95-260a-46b8-85da-d07cf8f7a3c9","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"110ba73d-e544-4981-a604-36f06126cff1","type":"Title"},{"attributes":{},"id":"2d06b35f-ac05-462a-a707-0da27b40530b","type":"CategoricalTickFormatter"},{"attributes":{"fields":[]},"id":"ee5b445c-b5b3-485e-8e6c-8f17a84070a7","type":"Stack"},{"attributes":{},"id":"1fed2b7a-b6f2-4983-8c54-e7f48e5fd2fe","type":"LinearScale"},{"attributes":{"bottom":{"expr":{"id":"d54abbe2-a8b6-4bff-82d5-972916d659f2","type":"Stack"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"expr":{"id":"c9d56c6c-3a44-47a8-8f60-35a966bc2c59","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"0bf95194-84bf-4c31-a7bf-d6f2c3dfb69b","type":"VBar"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"4e95faad-80e3-4b34-b170-e5cb4bcf075e","type":"Selection"},"selection_policy":{"id":"8eff0cca-726b-4b52-89bd-66f5f233dd98","type":"UnionRenderers"}},"id":"6adec8dd-0be0-4a18-b575-6a6723301b12","type":"ColumnDataSource"},{"attributes":{"bottom":{"expr":{"id":"ee5b445c-b5b3-485e-8e6c-8f17a84070a7","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"d602ecce-8c28-4624-9a57-2e6d2620e8d0","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"f0acdaed-d10c-406d-9955-e7e4f062d28e","type":"VBar"},{"attributes":{"source":{"id":"f0b1d186-9254-4db4-850a-0f14812997c5","type":"ColumnDataSource"}},"id":"5ec9d01d-07ea-42a5-b7f5-2d9093bd091a","type":"CDSView"},{"attributes":{"bottom":{"expr":{"id":"d54abbe2-a8b6-4bff-82d5-972916d659f2","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"c9d56c6c-3a44-47a8-8f60-35a966bc2c59","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"e42729e1-ce25-4b54-9c35-94ca0d65af7a","type":"VBar"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"6b196f95-260a-46b8-85da-d07cf8f7a3c9","type":"GlyphRenderer"}]},"id":"3bb12c83-304f-4806-bd4e-04f058d02e77","type":"LegendItem"},{"attributes":{"dimension":1,"plot":{"id":"a91398eb-c0a4-4b2a-9c50-8c9942ebbcfc","subtype":"Figure","type":"Plot"},"ticker":{"id":"c699bba6-92bf-45f6-a091-3f1d90f1b077","type":"BasicTicker"}},"id":"d096702a-f1ab-4b07-b439-6fd7db15fd15","type":"Grid"},{"attributes":{},"id":"c7a24d35-6cdb-48c0-88c1-2e9772c2c973","type":"UnionRenderers"},{"attributes":{"fields":["2015","2016"]},"id":"a7f651fc-ecb5-47dc-bd0f-c824a98faecc","type":"Stack"},{"attributes":{},"id":"32b91ca0-0ec4-4b0e-9cfd-4ac17ee12212","type":"CategoricalScale"},{"attributes":{"bottom":{"expr":{"id":"ee5b445c-b5b3-485e-8e6c-8f17a84070a7","type":"Stack"}},"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"expr":{"id":"d602ecce-8c28-4624-9a57-2e6d2620e8d0","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"0792c6cf-2712-44e2-b789-55e1759f1935","type":"VBar"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"01a34320-785f-4919-84f2-21e06d99cb42","type":"Selection"},"selection_policy":{"id":"c7a24d35-6cdb-48c0-88c1-2e9772c2c973","type":"UnionRenderers"}},"id":"f0b1d186-9254-4db4-850a-0f14812997c5","type":"ColumnDataSource"},{"attributes":{"bottom":{"expr":{"id":"bd63483c-a75d-416d-83b8-8caf0f4cf732","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"a7f651fc-ecb5-47dc-bd0f-c824a98faecc","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"b3596953-bb2b-44b9-9274-2e4ee86ab238","type":"VBar"},{"attributes":{"formatter":{"id":"2d06b35f-ac05-462a-a707-0da27b40530b","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"a91398eb-c0a4-4b2a-9c50-8c9942ebbcfc","subtype":"Figure","type":"Plot"},"ticker":{"id":"d8a232d5-7e68-4586-91c2-6fb89ae3d12c","type":"CategoricalTicker"}},"id":"7720c9ae-86b1-46d4-88b1-585114bcebf1","type":"CategoricalAxis"},{"attributes":{"fields":["2015","2016"]},"id":"d54abbe2-a8b6-4bff-82d5-972916d659f2","type":"Stack"},{"attributes":{"bottom":{"expr":{"id":"bd63483c-a75d-416d-83b8-8caf0f4cf732","type":"Stack"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"expr":{"id":"a7f651fc-ecb5-47dc-bd0f-c824a98faecc","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"ca3c85cf-a77d-424f-99c9-2a2ba6eebc0e","type":"VBar"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"330cdc95-2224-470b-b2fd-1e352a454592","type":"Selection"},"selection_policy":{"id":"bbf93a6e-a0b3-46cd-a0f8-753ce5ec828a","type":"UnionRenderers"}},"id":"843f6591-83b5-46b0-9992-d6b9d0adac75","type":"ColumnDataSource"},{"attributes":{"fields":["2015","2016","2017"]},"id":"c9d56c6c-3a44-47a8-8f60-35a966bc2c59","type":"Stack"},{"attributes":{},"id":"dc145485-5794-4d31-8c05-e5edd376d89c","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"f0b1d186-9254-4db4-850a-0f14812997c5","type":"ColumnDataSource"},"glyph":{"id":"ca3c85cf-a77d-424f-99c9-2a2ba6eebc0e","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2016","nonselection_glyph":{"id":"b3596953-bb2b-44b9-9274-2e4ee86ab238","type":"VBar"},"selection_glyph":null,"view":{"id":"5ec9d01d-07ea-42a5-b7f5-2d9093bd091a","type":"CDSView"}},"id":"c680a409-b69f-4eda-aac8-4f191e889312","type":"GlyphRenderer"},{"attributes":{"fields":["2015"]},"id":"bd63483c-a75d-416d-83b8-8caf0f4cf732","type":"Stack"},{"attributes":{"data_source":{"id":"843f6591-83b5-46b0-9992-d6b9d0adac75","type":"ColumnDataSource"},"glyph":{"id":"0792c6cf-2712-44e2-b789-55e1759f1935","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2015","nonselection_glyph":{"id":"f0acdaed-d10c-406d-9955-e7e4f062d28e","type":"VBar"},"selection_glyph":null,"view":{"id":"d435ba96-e63d-4862-84bd-7e23ce41f8d7","type":"CDSView"}},"id":"31693cf8-3aae-4f4d-96db-108a8d9c2448","type":"GlyphRenderer"}],"root_ids":["a91398eb-c0a4-4b2a-9c50-8c9942ebbcfc"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"e2444230-b636-443f-aa79-f99a76775d34","roots":{"a91398eb-c0a4-4b2a-9c50-8c9942ebbcfc":"f1bd0edf-2b9d-4945-b188-d8a9ac8ade43"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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