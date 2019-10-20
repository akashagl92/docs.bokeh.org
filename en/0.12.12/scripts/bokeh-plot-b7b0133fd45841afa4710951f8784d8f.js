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
      };var element = document.getElementById("1ee3c49b-19cb-464b-8cfb-ac7328a01857");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1ee3c49b-19cb-464b-8cfb-ac7328a01857' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.12.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.12.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.12.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.12.min.js"];
    
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
                    
                  var docs_json = '{"0b224c03-2636-453c-8485-90da2e8f42a6":{"roots":{"references":[{"attributes":{"callback":null,"start":0},"id":"451a9534-4258-4eb9-95e6-d578a1856d43","type":"DataRange1d"},{"attributes":{"formatter":{"id":"be3c7cff-b758-4759-b5f6-ea7d2ac6265e","type":"CategoricalTickFormatter"},"major_label_orientation":1,"plot":{"id":"ed849662-0799-4d87-a410-136761f7a965","subtype":"Figure","type":"Plot"},"ticker":{"id":"f329b3a0-9312-4167-ace3-19e10be30161","type":"CategoricalTicker"}},"id":"75f1ded3-e9ca-4ae8-a648-a75f477ea18a","type":"CategoricalAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"bf702009-cf4a-486e-99c6-55d663be5099","type":"Toolbar"},{"attributes":{"below":[{"id":"75f1ded3-e9ca-4ae8-a648-a75f477ea18a","type":"CategoricalAxis"}],"left":[{"id":"dbdc6437-5bf7-44b9-b0dd-8c06f862e233","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"75f1ded3-e9ca-4ae8-a648-a75f477ea18a","type":"CategoricalAxis"},{"id":"be88b9be-45b4-4950-8612-f068f6ce4ab7","type":"Grid"},{"id":"dbdc6437-5bf7-44b9-b0dd-8c06f862e233","type":"LinearAxis"},{"id":"bc58a4af-6603-44c3-93e0-05f5b5620219","type":"Grid"},{"id":"3676dd0f-e82b-4ff1-9159-bde2468103b3","type":"GlyphRenderer"}],"title":{"id":"485e0e37-14fc-4671-a6d1-6964c9c2064e","type":"Title"},"toolbar":{"id":"bf702009-cf4a-486e-99c6-55d663be5099","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"cf6b663a-4df4-4f4f-b2d8-99b59be98dcd","type":"FactorRange"},"x_scale":{"id":"ee27c6f7-0282-4d29-88a8-c3e424aadb41","type":"CategoricalScale"},"y_range":{"id":"451a9534-4258-4eb9-95e6-d578a1856d43","type":"DataRange1d"},"y_scale":{"id":"0e05e84e-b38c-4a03-9511-150087912377","type":"LinearScale"}},"id":"ed849662-0799-4d87-a410-136761f7a965","subtype":"Figure","type":"Plot"},{"attributes":{"end":2,"factors":["2015","2016","2017"],"palette":["#c9d9d3","#718dbf","#e84d60"],"start":1},"id":"2caab41b-cbda-484f-898b-6fdf00cd2aa9","type":"CategoricalColorMapper"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"485e0e37-14fc-4671-a6d1-6964c9c2064e","type":"Title"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"ed849662-0799-4d87-a410-136761f7a965","subtype":"Figure","type":"Plot"},"ticker":{"id":"f329b3a0-9312-4167-ace3-19e10be30161","type":"CategoricalTicker"}},"id":"be88b9be-45b4-4950-8612-f068f6ce4ab7","type":"Grid"},{"attributes":{},"id":"ee27c6f7-0282-4d29-88a8-c3e424aadb41","type":"CategoricalScale"},{"attributes":{"data_source":{"id":"01d7b41a-e6e9-404b-8fab-d82c3312146d","type":"ColumnDataSource"},"glyph":{"id":"203223a8-684f-4c4c-a9e4-6f343275aae5","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7f97bec7-ef92-4ea0-ad67-4c286962d3e1","type":"VBar"},"selection_glyph":null,"view":{"id":"7444ae2f-760b-40d1-b680-7697e5135094","type":"CDSView"}},"id":"3676dd0f-e82b-4ff1-9159-bde2468103b3","type":"GlyphRenderer"},{"attributes":{},"id":"19cf3475-e0eb-4d55-80ca-b7a1294377eb","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","counts"],"data":{"counts":[2,5,3,1,3,2,4,3,4,3,2,4,2,4,5,4,6,3],"x":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]]}},"id":"01d7b41a-e6e9-404b-8fab-d82c3312146d","type":"ColumnDataSource"},{"attributes":{},"id":"fc690a82-bd6e-42d0-a821-ff094ed7e7bb","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"ed849662-0799-4d87-a410-136761f7a965","subtype":"Figure","type":"Plot"},"ticker":{"id":"19cf3475-e0eb-4d55-80ca-b7a1294377eb","type":"BasicTicker"}},"id":"bc58a4af-6603-44c3-93e0-05f5b5620219","type":"Grid"},{"attributes":{},"id":"be3c7cff-b758-4759-b5f6-ea7d2ac6265e","type":"CategoricalTickFormatter"},{"attributes":{},"id":"f329b3a0-9312-4167-ace3-19e10be30161","type":"CategoricalTicker"},{"attributes":{"fill_color":{"field":"x","transform":{"id":"2caab41b-cbda-484f-898b-6fdf00cd2aa9","type":"CategoricalColorMapper"}},"line_color":{"value":"white"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"203223a8-684f-4c4c-a9e4-6f343275aae5","type":"VBar"},{"attributes":{},"id":"0e05e84e-b38c-4a03-9511-150087912377","type":"LinearScale"},{"attributes":{"formatter":{"id":"fc690a82-bd6e-42d0-a821-ff094ed7e7bb","type":"BasicTickFormatter"},"plot":{"id":"ed849662-0799-4d87-a410-136761f7a965","subtype":"Figure","type":"Plot"},"ticker":{"id":"19cf3475-e0eb-4d55-80ca-b7a1294377eb","type":"BasicTicker"}},"id":"dbdc6437-5bf7-44b9-b0dd-8c06f862e233","type":"LinearAxis"},{"attributes":{"source":{"id":"01d7b41a-e6e9-404b-8fab-d82c3312146d","type":"ColumnDataSource"}},"id":"7444ae2f-760b-40d1-b680-7697e5135094","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"7f97bec7-ef92-4ea0-ad67-4c286962d3e1","type":"VBar"},{"attributes":{"callback":null,"factors":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]],"range_padding":0.1},"id":"cf6b663a-4df4-4f4f-b2d8-99b59be98dcd","type":"FactorRange"}],"root_ids":["ed849662-0799-4d87-a410-136761f7a965"]},"title":"Bokeh Application","version":"0.12.12"}}';
                  var render_items = [{"docid":"0b224c03-2636-453c-8485-90da2e8f42a6","elementid":"1ee3c49b-19cb-464b-8cfb-ac7328a01857","modelid":"ed849662-0799-4d87-a410-136761f7a965"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.12.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.12.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.12.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.12.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.12.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.12.min.css");
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