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
      };var element = document.getElementById("5dfff656-744e-46d2-826f-40aa6e753b91");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5dfff656-744e-46d2-826f-40aa6e753b91' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                    var docs_json = {"3540b61c-3b69-45df-b5f1-00165cf040a0":{"roots":{"references":[{"attributes":{},"id":"5b53a0da-cc5f-4b15-beb8-8f76a24b0ecf","type":"CategoricalTicker"},{"attributes":{"data_source":{"id":"6e5b0bfa-e0ef-4f9e-be85-8af49cf41f6e","type":"ColumnDataSource"},"glyph":{"id":"11a2d26d-9e55-4b75-b6c7-5baa82196691","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4da4bdfe-3e40-4f53-8c3d-6e6beb8cc929","type":"Circle"},"selection_glyph":null,"view":{"id":"213a27f7-dda8-424e-8ae0-9f83db7346fc","type":"CDSView"}},"id":"db44e4f0-4b77-4c40-bbbc-e165664471d7","type":"GlyphRenderer"},{"attributes":{},"id":"12fa0866-9196-4211-836d-8fed412eedfa","type":"CategoricalTickFormatter"},{"attributes":{"formatter":{"id":"7e935842-7d08-48e4-81a6-2aa9119589b4","type":"CategoricalTickFormatter"},"plot":{"id":"24ae4586-63c7-4b5f-9e9d-dcb6ae1e6a74","subtype":"Figure","type":"Plot"},"ticker":{"id":"5b53a0da-cc5f-4b15-beb8-8f76a24b0ecf","type":"CategoricalTicker"}},"id":"addf4c69-d129-4b57-86d6-a326bd74339b","type":"CategoricalAxis"},{"attributes":{"formatter":{"id":"21d14911-48c1-409e-96cc-15712db94854","type":"CategoricalTickFormatter"},"plot":{"id":"283827db-0025-4412-a63c-7e771c3ef7e7","subtype":"Figure","type":"Plot"},"ticker":{"id":"48e234b1-aa5d-4949-b191-fb9a0a3c6bf3","type":"CategoricalTicker"}},"id":"ac659142-88ba-46a7-8760-60d3248b5ad3","type":"CategoricalAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f80f5ec7-0242-4b7e-9743-5ccff7b83703","type":"HoverTool"}]},"id":"d9be2194-81f5-4763-97d4-e2cc772fc416","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"24ae4586-63c7-4b5f-9e9d-dcb6ae1e6a74","subtype":"Figure","type":"Plot"},"ticker":{"id":"5b53a0da-cc5f-4b15-beb8-8f76a24b0ecf","type":"CategoricalTicker"}},"id":"fb3bdf4c-077a-4e15-abb4-833d6cf9dc3e","type":"Grid"},{"attributes":{"callback":null},"id":"f80f5ec7-0242-4b7e-9743-5ccff7b83703","type":"HoverTool"},{"attributes":{"below":[{"id":"9f18738d-1a51-4e18-bcf3-9084417a98bd","type":"CategoricalAxis"}],"left":[{"id":"addf4c69-d129-4b57-86d6-a326bd74339b","type":"CategoricalAxis"}],"renderers":[{"id":"9f18738d-1a51-4e18-bcf3-9084417a98bd","type":"CategoricalAxis"},{"id":"219a1827-e083-4f56-adff-83de5178e404","type":"Grid"},{"id":"addf4c69-d129-4b57-86d6-a326bd74339b","type":"CategoricalAxis"},{"id":"fb3bdf4c-077a-4e15-abb4-833d6cf9dc3e","type":"Grid"},{"id":"00073587-1494-4960-b897-f4ba29e1ec9c","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"dbf1443e-0f65-4139-beaf-63608c1b5b03","type":"Title"},"toolbar":{"id":"d9be2194-81f5-4763-97d4-e2cc772fc416","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6df36571-cde0-41ac-b5fb-c4d2ec4174c5","type":"FactorRange"},"x_scale":{"id":"4e259907-808d-4c2d-afb4-92d512ce867e","type":"CategoricalScale"},"y_range":{"id":"d61f4516-f579-421f-af73-85cbb321c0d8","type":"FactorRange"},"y_scale":{"id":"7dd4c10e-6713-4bb8-ba03-f3db755cc380","type":"CategoricalScale"}},"id":"24ae4586-63c7-4b5f-9e9d-dcb6ae1e6a74","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"3d185287-a94f-4290-8270-079b4e3e3bdc","type":"BasicTickFormatter"},"plot":{"id":"283827db-0025-4412-a63c-7e771c3ef7e7","subtype":"Figure","type":"Plot"},"ticker":{"id":"90048c82-86d2-4e02-9616-9bfca6d252f8","type":"BasicTicker"}},"id":"997ca71c-dff5-4dbe-bbf9-ed448394d64f","type":"LinearAxis"},{"attributes":{"callback":null,"end":100},"id":"a1a4a574-bacf-4078-aaeb-acfe838fe5c5","type":"Range1d"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"b6878f0f-8df7-4da9-8581-4a5653470044","type":"Segment"},{"attributes":{"callback":null,"factors":["foo 123","bar:0.2","baz-10"]},"id":"6df36571-cde0-41ac-b5fb-c4d2ec4174c5","type":"FactorRange"},{"attributes":{"plot":{"id":"24ae4586-63c7-4b5f-9e9d-dcb6ae1e6a74","subtype":"Figure","type":"Plot"},"ticker":{"id":"6586ddcd-dcc1-4a30-ad10-c30681dfe545","type":"CategoricalTicker"}},"id":"219a1827-e083-4f56-adff-83de5178e404","type":"Grid"},{"attributes":{"line_color":{"value":"green"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"524798a2-c227-4e44-a498-937ac5a6cd40","type":"Segment"},{"attributes":{"children":[{"id":"24ae4586-63c7-4b5f-9e9d-dcb6ae1e6a74","subtype":"Figure","type":"Plot"},{"id":"283827db-0025-4412-a63c-7e771c3ef7e7","subtype":"Figure","type":"Plot"}],"sizing_mode":"scale_width"},"id":"9bcf10df-4fcf-4b3c-a82c-7ab4fc1aba4e","type":"Row"},{"attributes":{"below":[{"id":"997ca71c-dff5-4dbe-bbf9-ed448394d64f","type":"LinearAxis"}],"left":[{"id":"ac659142-88ba-46a7-8760-60d3248b5ad3","type":"CategoricalAxis"}],"renderers":[{"id":"997ca71c-dff5-4dbe-bbf9-ed448394d64f","type":"LinearAxis"},{"id":"d2750d33-3c36-42b3-bb67-39880062846b","type":"Grid"},{"id":"ac659142-88ba-46a7-8760-60d3248b5ad3","type":"CategoricalAxis"},{"id":"514ebd9c-258a-41bd-9a0c-84704cb71a66","type":"Grid"},{"id":"3e3a1436-f6c5-44fc-b31a-ec8ad2538f47","type":"GlyphRenderer"},{"id":"db44e4f0-4b77-4c40-bbbc-e165664471d7","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"4e5b9eff-9f6c-42d8-9808-11e89cbdf2a0","type":"Title"},"toolbar":{"id":"e85f5940-6e45-4962-a31c-ee204a5517b3","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"a1a4a574-bacf-4078-aaeb-acfe838fe5c5","type":"Range1d"},"x_scale":{"id":"aea6d396-f944-4a3c-b481-7b5c90daaec2","type":"LinearScale"},"y_range":{"id":"07f9cded-c66e-4b92-9c03-88d473a7890c","type":"FactorRange"},"y_scale":{"id":"9eb201bb-851a-4f48-a6ba-5debd6933b05","type":"CategoricalScale"}},"id":"283827db-0025-4412-a63c-7e771c3ef7e7","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"aea6d396-f944-4a3c-b481-7b5c90daaec2","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"283827db-0025-4412-a63c-7e771c3ef7e7","subtype":"Figure","type":"Plot"},"ticker":{"id":"48e234b1-aa5d-4949-b191-fb9a0a3c6bf3","type":"CategoricalTicker"}},"id":"514ebd9c-258a-41bd-9a0c-84704cb71a66","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"e85f5940-6e45-4962-a31c-ee204a5517b3","type":"Toolbar"},{"attributes":{},"id":"6586ddcd-dcc1-4a30-ad10-c30681dfe545","type":"CategoricalTicker"},{"attributes":{"callback":null,"column_names":["y0","x1","y1"],"data":{"x1":[50,40,65,10,25,37,80,60],"y0":["a","b","c","d","e","f","g","h"],"y1":["a","b","c","d","e","f","g","h"]}},"id":"79699143-3702-43a0-ad30-81b1108c4f07","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["foo 123","bar:0.2","baz-10"]},"id":"d61f4516-f579-421f-af73-85cbb321c0d8","type":"FactorRange"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"4da4bdfe-3e40-4f53-8c3d-6e6beb8cc929","type":"Circle"},{"attributes":{},"id":"4e259907-808d-4c2d-afb4-92d512ce867e","type":"CategoricalScale"},{"attributes":{"data_source":{"id":"b856d5ec-819f-413a-b7c1-7118b422a7eb","type":"ColumnDataSource"},"glyph":{"id":"a703c7d9-5d55-490d-b3c0-200a5828cd44","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"59feda47-09b6-4b94-882a-24710abec35a","type":"Rect"},"selection_glyph":null,"view":{"id":"386f7e6f-297c-4881-a798-b93292ebde8e","type":"CDSView"}},"id":"00073587-1494-4960-b897-f4ba29e1ec9c","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f","g","h"]},"id":"07f9cded-c66e-4b92-9c03-88d473a7890c","type":"FactorRange"},{"attributes":{},"id":"3d185287-a94f-4290-8270-079b4e3e3bdc","type":"BasicTickFormatter"},{"attributes":{},"id":"9eb201bb-851a-4f48-a6ba-5debd6933b05","type":"CategoricalScale"},{"attributes":{},"id":"7dd4c10e-6713-4bb8-ba03-f3db755cc380","type":"CategoricalScale"},{"attributes":{"plot":null,"text":"Categorical Dot Plot"},"id":"4e5b9eff-9f6c-42d8-9808-11e89cbdf2a0","type":"Title"},{"attributes":{"formatter":{"id":"12fa0866-9196-4211-836d-8fed412eedfa","type":"CategoricalTickFormatter"},"plot":{"id":"24ae4586-63c7-4b5f-9e9d-dcb6ae1e6a74","subtype":"Figure","type":"Plot"},"ticker":{"id":"6586ddcd-dcc1-4a30-ad10-c30681dfe545","type":"CategoricalTicker"}},"id":"9f18738d-1a51-4e18-bcf3-9084417a98bd","type":"CategoricalAxis"},{"attributes":{"fill_color":{"field":"fill_color"},"height":{"units":"data","value":1},"line_color":{"field":"line_color"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"a703c7d9-5d55-490d-b3c0-200a5828cd44","type":"Rect"},{"attributes":{"source":{"id":"79699143-3702-43a0-ad30-81b1108c4f07","type":"ColumnDataSource"}},"id":"181cf753-3834-4c10-8fb4-37b6e2379bbf","type":"CDSView"},{"attributes":{"plot":{"id":"283827db-0025-4412-a63c-7e771c3ef7e7","subtype":"Figure","type":"Plot"},"ticker":{"id":"90048c82-86d2-4e02-9616-9bfca6d252f8","type":"BasicTicker"}},"id":"d2750d33-3c36-42b3-bb67-39880062846b","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[50,40,65,10,25,37,80,60],"y":["a","b","c","d","e","f","g","h"]}},"id":"6e5b0bfa-e0ef-4f9e-be85-8af49cf41f6e","type":"ColumnDataSource"},{"attributes":{},"id":"48e234b1-aa5d-4949-b191-fb9a0a3c6bf3","type":"CategoricalTicker"},{"attributes":{},"id":"7e935842-7d08-48e4-81a6-2aa9119589b4","type":"CategoricalTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"59feda47-09b6-4b94-882a-24710abec35a","type":"Rect"},{"attributes":{"source":{"id":"b856d5ec-819f-413a-b7c1-7118b422a7eb","type":"ColumnDataSource"}},"id":"386f7e6f-297c-4881-a798-b93292ebde8e","type":"CDSView"},{"attributes":{"source":{"id":"6e5b0bfa-e0ef-4f9e-be85-8af49cf41f6e","type":"ColumnDataSource"}},"id":"213a27f7-dda8-424e-8ae0-9f83db7346fc","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y","fill_color","line_color"],"data":{"fill_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"line_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"x":["foo 123","foo 123","foo 123","bar:0.2","bar:0.2","bar:0.2","baz-10","baz-10","baz-10"],"y":["foo 123","bar:0.2","baz-10","foo 123","bar:0.2","baz-10","foo 123","bar:0.2","baz-10"]}},"id":"b856d5ec-819f-413a-b7c1-7118b422a7eb","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"79699143-3702-43a0-ad30-81b1108c4f07","type":"ColumnDataSource"},"glyph":{"id":"524798a2-c227-4e44-a498-937ac5a6cd40","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b6878f0f-8df7-4da9-8581-4a5653470044","type":"Segment"},"selection_glyph":null,"view":{"id":"181cf753-3834-4c10-8fb4-37b6e2379bbf","type":"CDSView"}},"id":"3e3a1436-f6c5-44fc-b31a-ec8ad2538f47","type":"GlyphRenderer"},{"attributes":{},"id":"90048c82-86d2-4e02-9616-9bfca6d252f8","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"green"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"11a2d26d-9e55-4b75-b6c7-5baa82196691","type":"Circle"},{"attributes":{"plot":null,"text":"Categorical Heatmap"},"id":"dbf1443e-0f65-4139-beaf-63608c1b5b03","type":"Title"},{"attributes":{},"id":"21d14911-48c1-409e-96cc-15712db94854","type":"CategoricalTickFormatter"}],"root_ids":["9bcf10df-4fcf-4b3c-a82c-7ab4fc1aba4e"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"3540b61c-3b69-45df-b5f1-00165cf040a0","elementid":"5dfff656-744e-46d2-826f-40aa6e753b91","modelid":"9bcf10df-4fcf-4b3c-a82c-7ab4fc1aba4e"}];
                
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
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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
