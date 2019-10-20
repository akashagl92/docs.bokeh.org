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
      };var element = document.getElementById("e3156b77-a6c5-43a3-94ad-d58e6d4b3619");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e3156b77-a6c5-43a3-94ad-d58e6d4b3619' but no matching script tag was found. ")
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
                  var docs_json = {"62b8a155-3b6a-4648-852e-91be048f7e8d":{"roots":{"references":[{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"70d46cb6-fdad-49f7-b291-68dcc335028c","type":"Segment"},{"attributes":{"fill_color":{"value":"#E08E79"},"height":{"field":"height","units":"data"},"line_width":{"value":2},"width":{"units":"data","value":0.7},"x":{"field":"x"},"y":{"field":"y"}},"id":"3f95f3a6-c077-405f-aaee-bdee5630d980","type":"Rect"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"#F38630"},"line_color":{"value":"#F38630"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"331e922a-fc04-4a9b-841b-b36f2c97e1ec","type":"Circle"},{"attributes":{"data_source":{"id":"a57049aa-97d3-4b32-8088-92102a8e440e","type":"ColumnDataSource"},"glyph":{"id":"b4f56730-f913-48a7-bbaa-221e19db3bff","type":"Segment"},"hover_glyph":null,"nonselection_glyph":{"id":"07b2c4d8-bfab-48e5-8c9b-e626c36a1156","type":"Segment"},"selection_glyph":null},"id":"a03983f2-41b5-4bb9-82ae-1d238d1ff9ee","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"f87433ab-f88b-43c1-86f5-2dc042761898","type":"Rect"},{"attributes":{"formatter":{"id":"52ac993e-9dab-4657-9e8a-15fb15cc1ce5","type":"BasicTickFormatter"},"plot":{"id":"17de1375-2ec5-458c-8bc9-6ad557364c65","subtype":"Figure","type":"Plot"},"ticker":{"id":"740c4a30-8b5c-4038-b87d-c52ba0eb42c2","type":"BasicTicker"}},"id":"a5806a88-9e21-4569-85a0-21eccc326ad0","type":"LinearAxis"},{"attributes":{"grid_line_color":{"value":null},"grid_line_width":{"value":2},"plot":{"id":"17de1375-2ec5-458c-8bc9-6ad557364c65","subtype":"Figure","type":"Plot"},"ticker":{"id":"11943f1a-909e-4ac8-ac07-c96d32463e54","type":"CategoricalTicker"}},"id":"5eb251fa-1ce1-4e0c-a572-50822e91070d","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"08cd0b74-dc62-47cf-83d9-f9605b9d5d74","type":"Title"},{"attributes":{"data_source":{"id":"3fc12f6d-17c3-4f5f-b957-ec8b43b1350e","type":"ColumnDataSource"},"glyph":{"id":"331e922a-fc04-4a9b-841b-b36f2c97e1ec","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"8b182de8-eeb1-48e8-a776-eb117e1fb072","type":"Circle"},"selection_glyph":null},"id":"ca762d41-b116-47e4-ad67-1ced0f4d054b","type":"GlyphRenderer"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"b4f56730-f913-48a7-bbaa-221e19db3bff","type":"Segment"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"8b182de8-eeb1-48e8-a776-eb117e1fb072","type":"Circle"},{"attributes":{"callback":null,"column_names":["y1","y0","x0","x1"],"data":{"x0":["a","b","c","d","e","f"],"x1":["a","b","c","d","e","f"],"y0":[-2.646019510662579,-2.921731821063036,-1.5973656830287233,-1.3935766077933702,-0.3611086305424889,-0.7698418738239394],"y1":[-0.6370013896280072,-0.7412328981320582,0.3666966279893362,0.37049053051599135,1.4535419878307687,1.2903036584076193]}},"id":"a57049aa-97d3-4b32-8088-92102a8e440e","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":["a","b","c","d","e","f"],"y":[-2.646019510662579,-2.921731821063036,-1.5973656830287233,-1.3935766077933702,-0.3611086305424889,-0.7698418738239394]}},"id":"352ae08d-aa8b-4b34-882d-644f327fd90b","type":"ColumnDataSource"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"cca63096-7986-4461-89ed-a9d8ee3f72dc","type":"Segment"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"07b2c4d8-bfab-48e5-8c9b-e626c36a1156","type":"Segment"},{"attributes":{"callback":null},"id":"016d186f-f6c9-4a38-825b-0241cee3e663","type":"DataRange1d"},{"attributes":{},"id":"52ac993e-9dab-4657-9e8a-15fb15cc1ce5","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"9bd8d34f-aa08-410f-a46f-9c8349529e8b","type":"Rect"},{"attributes":{"background_fill_color":{"value":"#EFE8E2"},"below":[{"id":"1a3e1afb-e464-4e32-a4a3-ad0a05d188ae","type":"CategoricalAxis"}],"left":[{"id":"a5806a88-9e21-4569-85a0-21eccc326ad0","type":"LinearAxis"}],"renderers":[{"id":"1a3e1afb-e464-4e32-a4a3-ad0a05d188ae","type":"CategoricalAxis"},{"id":"5eb251fa-1ce1-4e0c-a572-50822e91070d","type":"Grid"},{"id":"a5806a88-9e21-4569-85a0-21eccc326ad0","type":"LinearAxis"},{"id":"94f590d3-6814-474a-9b35-01f707aeba33","type":"Grid"},{"id":"8517a02e-c742-4547-a603-c4db79ee7da3","type":"GlyphRenderer"},{"id":"a03983f2-41b5-4bb9-82ae-1d238d1ff9ee","type":"GlyphRenderer"},{"id":"db8ab201-c87e-484f-aca0-4a5f8ef817ff","type":"GlyphRenderer"},{"id":"bb5ebe1c-543e-4f53-8ee3-f77928644b3a","type":"GlyphRenderer"},{"id":"bcd0b525-8e7e-4c4d-8cdb-0e9ca6317cb0","type":"GlyphRenderer"},{"id":"cc6bed5e-407f-4635-a98b-b306ed789561","type":"GlyphRenderer"},{"id":"ca762d41-b116-47e4-ad67-1ced0f4d054b","type":"GlyphRenderer"}],"title":{"id":"08cd0b74-dc62-47cf-83d9-f9605b9d5d74","type":"Title"},"tool_events":{"id":"c6aae9f1-481b-4124-8582-87a8d4b11327","type":"ToolEvents"},"toolbar":{"id":"6844c2d8-8881-4667-a7f7-10bf50e0406d","type":"Toolbar"},"x_range":{"id":"e9c90daf-a08d-46f8-9993-938770f3cb8e","type":"FactorRange"},"y_range":{"id":"016d186f-f6c9-4a38-825b-0241cee3e663","type":"DataRange1d"}},"id":"17de1375-2ec5-458c-8bc9-6ad557364c65","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"6ad6be4e-6260-406f-b9fe-6b2eb6c856f2","type":"ColumnDataSource"},"glyph":{"id":"cbea0b02-48cc-413b-9a48-24249fc95b53","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"b62fac04-c390-4b82-a90a-f2ea37db5732","type":"Rect"},"selection_glyph":null},"id":"bb5ebe1c-543e-4f53-8ee3-f77928644b3a","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"9b974cf9-7186-4dee-b3c4-f4047818d509","type":"CategoricalTickFormatter"},"major_label_text_font_size":{"value":"12pt"},"plot":{"id":"17de1375-2ec5-458c-8bc9-6ad557364c65","subtype":"Figure","type":"Plot"},"ticker":{"id":"11943f1a-909e-4ac8-ac07-c96d32463e54","type":"CategoricalTicker"}},"id":"1a3e1afb-e464-4e32-a4a3-ad0a05d188ae","type":"CategoricalAxis"},{"attributes":{},"id":"740c4a30-8b5c-4038-b87d-c52ba0eb42c2","type":"BasicTicker"},{"attributes":{"data_source":{"id":"49be3615-4c8d-4595-8d5e-3d0ef749a8be","type":"ColumnDataSource"},"glyph":{"id":"f87433ab-f88b-43c1-86f5-2dc042761898","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"d088f4a9-ac81-4976-a4c5-d60f24bc6b7c","type":"Rect"},"selection_glyph":null},"id":"cc6bed5e-407f-4635-a98b-b306ed789561","type":"GlyphRenderer"},{"attributes":{},"id":"c6aae9f1-481b-4124-8582-87a8d4b11327","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"d088f4a9-ac81-4976-a4c5-d60f24bc6b7c","type":"Rect"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"a6621c68-c2c1-4a22-8500-00d65db95a21","type":"Rect"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f"]},"id":"e9c90daf-a08d-46f8-9993-938770f3cb8e","type":"FactorRange"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9fc124a7-7ee6-41be-90a5-92a50849afd8","type":"SaveTool"}]},"id":"6844c2d8-8881-4667-a7f7-10bf50e0406d","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":["a","b","c","d","e","f"],"y":[2.7113621454296117,2.8929319734195715,3.581150588639229,3.4494216659193557,4.477959685119531,4.723879545460218]}},"id":"49be3615-4c8d-4595-8d5e-3d0ef749a8be","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","height"],"data":{"height":[0.6705278774514811,0.7646030393090031,0.5730541311010051,0.6110584005011586,0.6703839917622885,0.6767915874901977],"x":["a","b","c","d","e","f"],"y":[0.3670800856692997,0.3301315308340922,1.3895444364508733,1.296533784426758,2.3281170708651295,2.3253382194835597]}},"id":"1ae3e253-fc26-46ed-bdfe-5b31dd03e453","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"352ae08d-aa8b-4b34-882d-644f327fd90b","type":"ColumnDataSource"},"glyph":{"id":"9bd8d34f-aa08-410f-a46f-9c8349529e8b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"a6621c68-c2c1-4a22-8500-00d65db95a21","type":"Rect"},"selection_glyph":null},"id":"bcd0b525-8e7e-4c4d-8cdb-0e9ca6317cb0","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"field":"height","units":"data"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"width":{"units":"data","value":0.7},"x":{"field":"x"},"y":{"field":"y"}},"id":"de995560-01d6-4a2f-b40d-22a943d1534f","type":"Rect"},{"attributes":{"callback":null,"column_names":["y1","y0","x0","x1"],"data":{"x0":["a","b","c","d","e","f"],"x1":["a","b","c","d","e","f"],"y0":[2.7113621454296117,2.8929319734195715,3.581150588639229,3.4494216659193557,4.477959685119531,4.723879545460218],"y1":[0.7023440243950403,0.7124330504885937,1.676071502001376,1.602062984677337,2.6633090667462738,2.6637340132286584]}},"id":"4fdd8cda-9359-4d97-9bad-2c7cddbafe94","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1ae3e253-fc26-46ed-bdfe-5b31dd03e453","type":"ColumnDataSource"},"glyph":{"id":"3f95f3a6-c077-405f-aaee-bdee5630d980","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"de995560-01d6-4a2f-b40d-22a943d1534f","type":"Rect"},"selection_glyph":null},"id":"db8ab201-c87e-484f-aca0-4a5f8ef817ff","type":"GlyphRenderer"},{"attributes":{"dimension":1,"grid_line_color":{"value":"white"},"grid_line_width":{"value":2},"plot":{"id":"17de1375-2ec5-458c-8bc9-6ad557364c65","subtype":"Figure","type":"Plot"},"ticker":{"id":"740c4a30-8b5c-4038-b87d-c52ba0eb42c2","type":"BasicTicker"}},"id":"94f590d3-6814-474a-9b35-01f707aeba33","type":"Grid"},{"attributes":{"fill_color":{"value":"#3B8686"},"height":{"field":"height","units":"data"},"line_width":{"value":2},"width":{"units":"data","value":0.7},"x":{"field":"x"},"y":{"field":"y"}},"id":"cbea0b02-48cc-413b-9a48-24249fc95b53","type":"Rect"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"field":"height","units":"data"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"width":{"units":"data","value":0.7},"x":{"field":"x"},"y":{"field":"y"}},"id":"b62fac04-c390-4b82-a90a-f2ea37db5732","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":["a","a","b","b","c","d","d","d","e","e","e","e","e","f","f"],"y":[2.87110082245229,-3.0486486352340996,-3.2549883112114033,3.405972006558904,-1.885274964989701,4.659131081545372,3.482101115396485,4.3157868466319975,4.707858133085952,4.99242488786151,-0.42662278596810754,-0.5226946126197172,-0.4858717839325233,4.729689944771096,-0.97574927632686]}},"id":"3fc12f6d-17c3-4f5f-b957-ec8b43b1350e","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"17de1375-2ec5-458c-8bc9-6ad557364c65","subtype":"Figure","type":"Plot"}},"id":"9fc124a7-7ee6-41be-90a5-92a50849afd8","type":"SaveTool"},{"attributes":{"data_source":{"id":"4fdd8cda-9359-4d97-9bad-2c7cddbafe94","type":"ColumnDataSource"},"glyph":{"id":"cca63096-7986-4461-89ed-a9d8ee3f72dc","type":"Segment"},"hover_glyph":null,"nonselection_glyph":{"id":"70d46cb6-fdad-49f7-b291-68dcc335028c","type":"Segment"},"selection_glyph":null},"id":"8517a02e-c742-4547-a603-c4db79ee7da3","type":"GlyphRenderer"},{"attributes":{},"id":"11943f1a-909e-4ac8-ac07-c96d32463e54","type":"CategoricalTicker"},{"attributes":{},"id":"9b974cf9-7186-4dee-b3c4-f4047818d509","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","height"],"data":{"height":[0.6688175365715665,0.6890629093116488,0.7363207429110346,0.6205140536601872,0.5393830871532166,0.6966387673308414],"x":["a","b","c","d","e","f"],"y":[-0.302592621342224,-0.39670144347623376,0.7348569994448535,0.6807475573460849,1.723233531407377,1.63862304207304]}},"id":"6ad6be4e-6260-406f-b9fe-6b2eb6c856f2","type":"ColumnDataSource"}],"root_ids":["17de1375-2ec5-458c-8bc9-6ad557364c65"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"62b8a155-3b6a-4648-852e-91be048f7e8d","elementid":"e3156b77-a6c5-43a3-94ad-d58e6d4b3619","modelid":"17de1375-2ec5-458c-8bc9-6ad557364c65"}];
                  
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