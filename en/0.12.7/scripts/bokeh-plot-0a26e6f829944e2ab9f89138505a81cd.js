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
      };var element = document.getElementById("75bda692-89f7-4ab2-9064-ddd20655afdb");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '75bda692-89f7-4ab2-9064-ddd20655afdb' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"bce47607-edb0-4cb0-838a-7ed58a881886":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"0c24a5df-c3cd-478c-afed-a3aa3cf57acc","type":"VBar"},{"attributes":{"callback":null,"start":0},"id":"1d9e773a-f1c9-42e5-a601-f20202a3af1f","type":"DataRange1d"},{"attributes":{"below":[{"id":"9869d7ee-802a-4ede-b23a-364471f0778d","type":"CategoricalAxis"}],"left":[{"id":"2b6cd14d-084f-4175-bfbd-c0b00a087f20","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"9869d7ee-802a-4ede-b23a-364471f0778d","type":"CategoricalAxis"},{"id":"ee968076-4d0e-4475-8536-6fe7a564e103","type":"Grid"},{"id":"2b6cd14d-084f-4175-bfbd-c0b00a087f20","type":"LinearAxis"},{"id":"e0c7329c-f377-4ff2-b404-ce5ada3a8f91","type":"Grid"},{"id":"ffaa2b5f-780c-416e-91a2-57691c4b76b4","type":"GlyphRenderer"}],"title":{"id":"c5d14a75-00fc-42eb-87f1-28da9491ca09","type":"Title"},"toolbar":{"id":"1fce27f8-67c9-419a-a751-d8757d007992","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5a867296-3cc2-488a-86c1-b08563720218","type":"FactorRange"},"x_scale":{"id":"61cab12f-f41c-4dff-bddc-c3ec3260a181","type":"CategoricalScale"},"y_range":{"id":"1d9e773a-f1c9-42e5-a601-f20202a3af1f","type":"DataRange1d"},"y_scale":{"id":"73d05f3b-752f-445e-a0e0-34eedb80292c","type":"LinearScale"}},"id":"1470ce57-2788-4c71-83d5-c803070c3145","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"1fce27f8-67c9-419a-a751-d8757d007992","type":"Toolbar"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"5a867296-3cc2-488a-86c1-b08563720218","type":"FactorRange"},{"attributes":{},"id":"73d05f3b-752f-445e-a0e0-34eedb80292c","type":"LinearScale"},{"attributes":{},"id":"17352a46-2fa1-448b-9949-5ab23adc83b5","type":"BasicTickFormatter"},{"attributes":{},"id":"61cab12f-f41c-4dff-bddc-c3ec3260a181","type":"CategoricalScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"f4dfa721-bbb3-4ccf-a898-eb861eafca9f","type":"VBar"},{"attributes":{},"id":"95992f6e-3f82-436f-9afd-9ec16d94c68c","type":"CategoricalTickFormatter"},{"attributes":{"formatter":{"id":"95992f6e-3f82-436f-9afd-9ec16d94c68c","type":"CategoricalTickFormatter"},"plot":{"id":"1470ce57-2788-4c71-83d5-c803070c3145","subtype":"Figure","type":"Plot"},"ticker":{"id":"928b876c-4cfa-4370-bf6f-d94dd18007b8","type":"CategoricalTicker"}},"id":"9869d7ee-802a-4ede-b23a-364471f0778d","type":"CategoricalAxis"},{"attributes":{},"id":"928b876c-4cfa-4370-bf6f-d94dd18007b8","type":"CategoricalTicker"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"1470ce57-2788-4c71-83d5-c803070c3145","subtype":"Figure","type":"Plot"},"ticker":{"id":"928b876c-4cfa-4370-bf6f-d94dd18007b8","type":"CategoricalTicker"}},"id":"ee968076-4d0e-4475-8536-6fe7a564e103","type":"Grid"},{"attributes":{},"id":"db376109-b5fc-4b67-aebb-a344d26cf663","type":"BasicTicker"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"c5d14a75-00fc-42eb-87f1-28da9491ca09","type":"Title"},{"attributes":{"data_source":{"id":"22eb2150-9def-42a0-9f2b-4856276c7ade","type":"ColumnDataSource"},"glyph":{"id":"f4dfa721-bbb3-4ccf-a898-eb861eafca9f","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0c24a5df-c3cd-478c-afed-a3aa3cf57acc","type":"VBar"},"selection_glyph":null,"view":{"id":"e87b60c4-9c5c-4219-9a8c-fed7eec7db1a","type":"CDSView"}},"id":"ffaa2b5f-780c-416e-91a2-57691c4b76b4","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"1470ce57-2788-4c71-83d5-c803070c3145","subtype":"Figure","type":"Plot"},"ticker":{"id":"db376109-b5fc-4b67-aebb-a344d26cf663","type":"BasicTicker"}},"id":"e0c7329c-f377-4ff2-b404-ce5ada3a8f91","type":"Grid"},{"attributes":{"source":{"id":"22eb2150-9def-42a0-9f2b-4856276c7ade","type":"ColumnDataSource"}},"id":"e87b60c4-9c5c-4219-9a8c-fed7eec7db1a","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","top"],"data":{"top":[5,3,4,2,4,6],"x":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"22eb2150-9def-42a0-9f2b-4856276c7ade","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"17352a46-2fa1-448b-9949-5ab23adc83b5","type":"BasicTickFormatter"},"plot":{"id":"1470ce57-2788-4c71-83d5-c803070c3145","subtype":"Figure","type":"Plot"},"ticker":{"id":"db376109-b5fc-4b67-aebb-a344d26cf663","type":"BasicTicker"}},"id":"2b6cd14d-084f-4175-bfbd-c0b00a087f20","type":"LinearAxis"}],"root_ids":["1470ce57-2788-4c71-83d5-c803070c3145"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"bce47607-edb0-4cb0-838a-7ed58a881886","elementid":"75bda692-89f7-4ab2-9064-ddd20655afdb","modelid":"1470ce57-2788-4c71-83d5-c803070c3145"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
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
