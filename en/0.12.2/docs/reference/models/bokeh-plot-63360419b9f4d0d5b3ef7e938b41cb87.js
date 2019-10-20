document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
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
      };var element = document.getElementById("89801857-cb14-4733-99b8-9bdd66d489d5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '89801857-cb14-4733-99b8-9bdd66d489d5' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.2.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"79a99485-4100-4c15-af38-878c00f8b1f1":{"roots":{"references":[{"attributes":{"angle":{"units":"rad","value":0.2617993877991494},"fill_color":{"value":"#d0d0e8"},"line_color":{"value":"#606060"},"module":{"value":5},"teeth":{"value":12},"x":{"value":-90.0},"y":{"value":0.0}},"id":"bf84a0e3-383b-48f2-a11b-6f936d9faa42","type":"Gear"},{"attributes":{"data_source":{"id":"efd70d9f-90ce-47e3-b9d0-793160fa4e0f","type":"ColumnDataSource"},"glyph":{"id":"f279c72c-383b-45fa-aecf-f83c7be84690","type":"Gear"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"74f53822-6129-4c85-be47-cb170a9f2c0f","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"e1cbad56-74ed-4ae7-9cdd-e72172aa62bf","type":"ColumnDataSource"},"glyph":{"id":"5ae12648-b835-45be-897c-6ac0cfd7bcd1","type":"Gear"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0f09eb47-c123-44fc-a3ff-bcd8c076acce","type":"GlyphRenderer"},{"attributes":{"h_symmetry":false,"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"0f09eb47-c123-44fc-a3ff-bcd8c076acce","type":"GlyphRenderer"},{"id":"91749c60-6faa-4be0-8630-ac8feb228e8d","type":"GlyphRenderer"},{"id":"15f301db-3b7e-41f5-b7dc-9ee12936b0ce","type":"GlyphRenderer"},{"id":"74f53822-6129-4c85-be47-cb170a9f2c0f","type":"GlyphRenderer"},{"id":"02152e34-8ead-4a8a-90cd-eb6e6e5dd0f2","type":"GlyphRenderer"},{"id":"a9d1a8d0-d7f3-4e1a-9308-8ee3363f6e68","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"fbe5e90c-9fd7-415b-9919-96d72473830a","type":"ToolEvents"},"toolbar":{"id":"c4ce56aa-5158-438f-b861-75984457b89a","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6c8f725c-099d-4a90-a4da-a4262cd760f7","type":"Range1d"},"y_range":{"id":"aaa5ba91-34d5-4299-9a8f-927676085c05","type":"Range1d"}},"id":"a2d7a2ae-3cff-451a-98b2-4ee69a69cfd6","type":"Plot"},{"attributes":{"callback":null,"end":150,"start":-150},"id":"aaa5ba91-34d5-4299-9a8f-927676085c05","type":"Range1d"},{"attributes":{"angle":{"units":"rad","value":0.2617993877991494},"fill_color":{"value":"#d0d0e8"},"line_color":{"value":"#606060"},"module":{"value":5},"teeth":{"value":12},"x":{"value":90.0},"y":{"value":0.0}},"id":"b66e6903-229c-441e-b219-21516ab46ea8","type":"Gear"},{"attributes":{"callback":null},"id":"23a97be8-2090-429a-83cc-7d5478aaf224","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"583f6439-3c66-4cc2-ac4d-55b6fb3acc9d","type":"ColumnDataSource"},"glyph":{"id":"b66e6903-229c-441e-b219-21516ab46ea8","type":"Gear"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"15f301db-3b7e-41f5-b7dc-9ee12936b0ce","type":"GlyphRenderer"},{"attributes":{"angle":{"units":"rad","value":0.2617993877991494},"fill_color":{"value":"#d0d0e8"},"line_color":{"value":"#606060"},"module":{"value":5},"teeth":{"value":12},"x":{"value":0.0},"y":{"value":-90.0}},"id":"be8f3d5c-27ec-4ea7-a3bd-d42b08bf7ed0","type":"Gear"},{"attributes":{"callback":null},"id":"d41e38a6-22ff-43c8-927c-b202b1edc27f","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"c4ce56aa-5158-438f-b861-75984457b89a","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#ddddd0"},"line_color":{"value":"#606060"},"module":{"value":5},"teeth":{"value":24},"x":{"value":0},"y":{"value":0}},"id":"1060bee2-5476-4856-8948-b4e27134714b","type":"Gear"},{"attributes":{"callback":null},"id":"30850d4c-ba47-4ee4-8662-282d6ed825f7","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#ddd0dd"},"internal":{"value":true},"line_color":{"value":"#606060"},"module":{"value":5},"teeth":{"value":48},"x":{"value":0},"y":{"value":0}},"id":"5ae12648-b835-45be-897c-6ac0cfd7bcd1","type":"Gear"},{"attributes":{"callback":null},"id":"efd70d9f-90ce-47e3-b9d0-793160fa4e0f","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"30850d4c-ba47-4ee4-8662-282d6ed825f7","type":"ColumnDataSource"},"glyph":{"id":"1060bee2-5476-4856-8948-b4e27134714b","type":"Gear"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"91749c60-6faa-4be0-8630-ac8feb228e8d","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"d41e38a6-22ff-43c8-927c-b202b1edc27f","type":"ColumnDataSource"},"glyph":{"id":"be8f3d5c-27ec-4ea7-a3bd-d42b08bf7ed0","type":"Gear"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a9d1a8d0-d7f3-4e1a-9308-8ee3363f6e68","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"23a97be8-2090-429a-83cc-7d5478aaf224","type":"ColumnDataSource"},"glyph":{"id":"bf84a0e3-383b-48f2-a11b-6f936d9faa42","type":"Gear"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"02152e34-8ead-4a8a-90cd-eb6e6e5dd0f2","type":"GlyphRenderer"},{"attributes":{},"id":"fbe5e90c-9fd7-415b-9919-96d72473830a","type":"ToolEvents"},{"attributes":{"callback":null},"id":"583f6439-3c66-4cc2-ac4d-55b6fb3acc9d","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"e1cbad56-74ed-4ae7-9cdd-e72172aa62bf","type":"ColumnDataSource"},{"attributes":{"angle":{"units":"rad","value":0.2617993877991494},"fill_color":{"value":"#d0d0e8"},"line_color":{"value":"#606060"},"module":{"value":5},"teeth":{"value":12},"x":{"value":0.0},"y":{"value":90.0}},"id":"f279c72c-383b-45fa-aecf-f83c7be84690","type":"Gear"},{"attributes":{"callback":null,"end":150,"start":-150},"id":"6c8f725c-099d-4a90-a4da-a4262cd760f7","type":"Range1d"}],"root_ids":["a2d7a2ae-3cff-451a-98b2-4ee69a69cfd6"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"79a99485-4100-4c15-af38-878c00f8b1f1","elementid":"89801857-cb14-4733-99b8-9bdd66d489d5","modelid":"a2d7a2ae-3cff-451a-98b2-4ee69a69cfd6"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
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
});