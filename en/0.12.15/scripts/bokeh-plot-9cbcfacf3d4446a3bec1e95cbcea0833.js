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
      };var element = document.getElementById("b795d613-6a47-46b5-a9fe-8cb8719bfd0f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b795d613-6a47-46b5-a9fe-8cb8719bfd0f' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.15.min.js"];
    
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
                    
                  var docs_json = '{"72a17730-cbe4-479f-b156-0da64329de99":{"roots":{"references":[{"attributes":{},"id":"545eb0dc-fac8-45ae-b8a2-893203d264f1","type":"CategoricalScale"},{"attributes":{"fields":["2015","2016","2017"]},"id":"1aaa3a9f-96ae-4028-9587-936565e26c9c","type":"Stack"},{"attributes":{},"id":"dd0f2375-22d8-44e1-b083-f8520fbcb874","type":"LinearScale"},{"attributes":{"fields":["2015","2016"]},"id":"ab13895f-3592-457e-be7d-9d9b464dcb2d","type":"Stack"},{"attributes":{"formatter":{"id":"336a9ca8-7d08-4e5d-b478-783ed7262c91","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"6c1c0630-b53b-47f5-859f-8bc2f4fb1db6","subtype":"Figure","type":"Plot"},"ticker":{"id":"a1e5f539-9920-4c07-92e5-b9588fff27a7","type":"BasicTicker"}},"id":"fb15f6b4-2d2d-4b1a-8114-4fa4535e959f","type":"LinearAxis"},{"attributes":{"callback":null,"renderers":[{"id":"70a4b16d-40f0-44c7-914e-90b3dc1d105c","type":"GlyphRenderer"}],"tooltips":[["2016 total","@2016"],["index","$index"]]},"id":"36e25bab-2920-46b3-a1a7-80cbbce3dd90","type":"HoverTool"},{"attributes":{"fields":["2015","2016"]},"id":"27206d39-e8f8-45f7-a987-b32404137070","type":"Stack"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"be8e04b5-8493-4f94-b5da-6a79348fe604","type":"HoverTool"},{"id":"36e25bab-2920-46b3-a1a7-80cbbce3dd90","type":"HoverTool"},{"id":"c05a9911-cb9b-4979-9116-000c5e1657f9","type":"HoverTool"}]},"id":"ac58bd3d-0e65-42ae-af65-16af7f48dd81","type":"Toolbar"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"3e6c5915-d9c0-44d7-a8b1-56043343b87a","type":"FactorRange"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"fec4db25-2e9e-4c2c-a3a3-f6387d103e0a","type":"GlyphRenderer"}]},"id":"61c95d1c-e013-4daa-95b6-b95f5fb05894","type":"LegendItem"},{"attributes":{"data_source":{"id":"b54d3dbd-98e1-47aa-9037-08dc80f9c6c6","type":"ColumnDataSource"},"glyph":{"id":"be972927-c422-44c0-95a7-7417cd78cd5b","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2015","nonselection_glyph":{"id":"58eb9f04-53ed-45f4-9122-6d425505c4cd","type":"VBar"},"selection_glyph":null,"view":{"id":"41fc93c7-bd83-4758-ae88-0f3805907412","type":"CDSView"}},"id":"bb53e825-efb2-4dc0-8ac3-a4dc27ac968c","type":"GlyphRenderer"},{"attributes":{"callback":null,"renderers":[{"id":"bb53e825-efb2-4dc0-8ac3-a4dc27ac968c","type":"GlyphRenderer"}],"tooltips":[["2015 total","@2015"],["index","$index"]]},"id":"be8e04b5-8493-4f94-b5da-6a79348fe604","type":"HoverTool"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":null,"selection_policy":null},"id":"b54d3dbd-98e1-47aa-9037-08dc80f9c6c6","type":"ColumnDataSource"},{"attributes":{"fields":[]},"id":"8cc1f904-432c-4d5e-a5c3-629e7757a96c","type":"Stack"},{"attributes":{},"id":"84707440-f3db-4312-9a2b-b0e1c330db1a","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"start":0},"id":"aef7f344-913c-4a79-9278-223a8ed00a43","type":"DataRange1d"},{"attributes":{"data_source":{"id":"b54d3dbd-98e1-47aa-9037-08dc80f9c6c6","type":"ColumnDataSource"},"glyph":{"id":"4386a358-a7ff-4240-9ffa-54386cd4387b","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2016","nonselection_glyph":{"id":"26102e23-82fc-494c-b93f-466219b470db","type":"VBar"},"selection_glyph":null,"view":{"id":"0a6cc2b6-8478-40be-b8aa-4e1721bed018","type":"CDSView"}},"id":"70a4b16d-40f0-44c7-914e-90b3dc1d105c","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"a07ac17b-e569-484f-9cc4-39caee92df43","type":"CategoricalAxis"}],"left":[{"id":"fb15f6b4-2d2d-4b1a-8114-4fa4535e959f","type":"LinearAxis"}],"outline_line_color":{"value":null},"plot_height":350,"renderers":[{"id":"a07ac17b-e569-484f-9cc4-39caee92df43","type":"CategoricalAxis"},{"id":"d86ca49b-7078-4849-ada4-db78d300b0e6","type":"Grid"},{"id":"fb15f6b4-2d2d-4b1a-8114-4fa4535e959f","type":"LinearAxis"},{"id":"dbbd556e-e7bc-4859-b076-f3309bae39c8","type":"Grid"},{"id":"c282cbcc-0f7f-4c6e-a2e0-fb7f879be0fe","type":"Legend"},{"id":"bb53e825-efb2-4dc0-8ac3-a4dc27ac968c","type":"GlyphRenderer"},{"id":"70a4b16d-40f0-44c7-914e-90b3dc1d105c","type":"GlyphRenderer"},{"id":"fec4db25-2e9e-4c2c-a3a3-f6387d103e0a","type":"GlyphRenderer"}],"title":{"id":"9c3aea54-b247-42e3-9751-9a847dffbc75","type":"Title"},"toolbar":{"id":"ac58bd3d-0e65-42ae-af65-16af7f48dd81","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3e6c5915-d9c0-44d7-a8b1-56043343b87a","type":"FactorRange"},"x_scale":{"id":"545eb0dc-fac8-45ae-b8a2-893203d264f1","type":"CategoricalScale"},"y_range":{"id":"aef7f344-913c-4a79-9278-223a8ed00a43","type":"DataRange1d"},"y_scale":{"id":"dd0f2375-22d8-44e1-b083-f8520fbcb874","type":"LinearScale"}},"id":"6c1c0630-b53b-47f5-859f-8bc2f4fb1db6","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"b54d3dbd-98e1-47aa-9037-08dc80f9c6c6","type":"ColumnDataSource"}},"id":"0a5479c5-4809-49bd-9814-833d33fcbfbb","type":"CDSView"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"9c3aea54-b247-42e3-9751-9a847dffbc75","type":"Title"},{"attributes":{"formatter":{"id":"84707440-f3db-4312-9a2b-b0e1c330db1a","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"6c1c0630-b53b-47f5-859f-8bc2f4fb1db6","subtype":"Figure","type":"Plot"},"ticker":{"id":"b3967953-2a61-4760-81b6-b65371676d96","type":"CategoricalTicker"}},"id":"a07ac17b-e569-484f-9cc4-39caee92df43","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"b54d3dbd-98e1-47aa-9037-08dc80f9c6c6","type":"ColumnDataSource"},"glyph":{"id":"75fc9264-025f-46cb-b85f-c1ad4e958d79","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2017","nonselection_glyph":{"id":"0a13175d-0220-4bef-85e0-c78c82afafb3","type":"VBar"},"selection_glyph":null,"view":{"id":"0a5479c5-4809-49bd-9814-833d33fcbfbb","type":"CDSView"}},"id":"fec4db25-2e9e-4c2c-a3a3-f6387d103e0a","type":"GlyphRenderer"},{"attributes":{"fields":["2015"]},"id":"61415e74-b565-4c3b-8eef-da8083d9d5c9","type":"Stack"},{"attributes":{"bottom":{"expr":{"id":"8cc1f904-432c-4d5e-a5c3-629e7757a96c","type":"Stack"}},"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"expr":{"id":"4ecdf89c-d773-427e-ad47-87aba4a6d320","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"be972927-c422-44c0-95a7-7417cd78cd5b","type":"VBar"},{"attributes":{"callback":null,"renderers":[{"id":"fec4db25-2e9e-4c2c-a3a3-f6387d103e0a","type":"GlyphRenderer"}],"tooltips":[["2017 total","@2017"],["index","$index"]]},"id":"c05a9911-cb9b-4979-9116-000c5e1657f9","type":"HoverTool"},{"attributes":{"bottom":{"expr":{"id":"ab13895f-3592-457e-be7d-9d9b464dcb2d","type":"Stack"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"expr":{"id":"1aaa3a9f-96ae-4028-9587-936565e26c9c","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"75fc9264-025f-46cb-b85f-c1ad4e958d79","type":"VBar"},{"attributes":{"bottom":{"expr":{"id":"ab13895f-3592-457e-be7d-9d9b464dcb2d","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"1aaa3a9f-96ae-4028-9587-936565e26c9c","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"0a13175d-0220-4bef-85e0-c78c82afafb3","type":"VBar"},{"attributes":{},"id":"336a9ca8-7d08-4e5d-b478-783ed7262c91","type":"BasicTickFormatter"},{"attributes":{},"id":"a1e5f539-9920-4c07-92e5-b9588fff27a7","type":"BasicTicker"},{"attributes":{"items":[{"id":"6f43c6cc-732a-4227-9929-b2068f4f05d2","type":"LegendItem"},{"id":"51f30c48-2cd1-42a6-99ef-5c1d0e85ea63","type":"LegendItem"},{"id":"61c95d1c-e013-4daa-95b6-b95f5fb05894","type":"LegendItem"}],"location":"top_left","orientation":"horizontal","plot":{"id":"6c1c0630-b53b-47f5-859f-8bc2f4fb1db6","subtype":"Figure","type":"Plot"}},"id":"c282cbcc-0f7f-4c6e-a2e0-fb7f879be0fe","type":"Legend"},{"attributes":{"fields":["2015"]},"id":"4ecdf89c-d773-427e-ad47-87aba4a6d320","type":"Stack"},{"attributes":{"bottom":{"expr":{"id":"61415e74-b565-4c3b-8eef-da8083d9d5c9","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"27206d39-e8f8-45f7-a987-b32404137070","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"26102e23-82fc-494c-b93f-466219b470db","type":"VBar"},{"attributes":{"source":{"id":"b54d3dbd-98e1-47aa-9037-08dc80f9c6c6","type":"ColumnDataSource"}},"id":"0a6cc2b6-8478-40be-b8aa-4e1721bed018","type":"CDSView"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"6c1c0630-b53b-47f5-859f-8bc2f4fb1db6","subtype":"Figure","type":"Plot"},"ticker":{"id":"b3967953-2a61-4760-81b6-b65371676d96","type":"CategoricalTicker"}},"id":"d86ca49b-7078-4849-ada4-db78d300b0e6","type":"Grid"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"70a4b16d-40f0-44c7-914e-90b3dc1d105c","type":"GlyphRenderer"}]},"id":"51f30c48-2cd1-42a6-99ef-5c1d0e85ea63","type":"LegendItem"},{"attributes":{"bottom":{"expr":{"id":"8cc1f904-432c-4d5e-a5c3-629e7757a96c","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"4ecdf89c-d773-427e-ad47-87aba4a6d320","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"58eb9f04-53ed-45f4-9122-6d425505c4cd","type":"VBar"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"bb53e825-efb2-4dc0-8ac3-a4dc27ac968c","type":"GlyphRenderer"}]},"id":"6f43c6cc-732a-4227-9929-b2068f4f05d2","type":"LegendItem"},{"attributes":{},"id":"b3967953-2a61-4760-81b6-b65371676d96","type":"CategoricalTicker"},{"attributes":{"source":{"id":"b54d3dbd-98e1-47aa-9037-08dc80f9c6c6","type":"ColumnDataSource"}},"id":"41fc93c7-bd83-4758-ae88-0f3805907412","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"6c1c0630-b53b-47f5-859f-8bc2f4fb1db6","subtype":"Figure","type":"Plot"},"ticker":{"id":"a1e5f539-9920-4c07-92e5-b9588fff27a7","type":"BasicTicker"}},"id":"dbbd556e-e7bc-4859-b076-f3309bae39c8","type":"Grid"},{"attributes":{"bottom":{"expr":{"id":"61415e74-b565-4c3b-8eef-da8083d9d5c9","type":"Stack"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"expr":{"id":"27206d39-e8f8-45f7-a987-b32404137070","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"4386a358-a7ff-4240-9ffa-54386cd4387b","type":"VBar"}],"root_ids":["6c1c0630-b53b-47f5-859f-8bc2f4fb1db6"]},"title":"Bokeh Application","version":"0.12.15"}}';
                  var render_items = [{"docid":"72a17730-cbe4-479f-b156-0da64329de99","elementid":"b795d613-6a47-46b5-a9fe-8cb8719bfd0f","modelid":"6c1c0630-b53b-47f5-859f-8bc2f4fb1db6"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.css");
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