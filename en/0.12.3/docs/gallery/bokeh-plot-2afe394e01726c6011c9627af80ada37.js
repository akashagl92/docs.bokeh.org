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
      };var element = document.getElementById("8384322c-562e-4a00-a2a9-e4a1318f8c5b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8384322c-562e-4a00-a2a9-e4a1318f8c5b' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"1f0916d8-4b5c-4445-b117-a3cd2aec1e36":{"roots":{"references":[{"attributes":{"data_source":{"id":"83bc1543-783e-4fa7-890b-65a3274b7c5e","type":"ColumnDataSource"},"glyph":{"id":"4a30f51b-854d-47fa-b62a-c3b36c3ae884","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"b185fd3a-f6ed-437a-baaa-00969242c9e0","type":"Rect"},"selection_glyph":null},"id":"933d7782-478a-4876-8a65-d10e74c4b10e","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"field":"height","units":"data"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"width":{"units":"data","value":0.7},"x":{"field":"x"},"y":{"field":"y"}},"id":"3fe76635-f5c7-4323-bf5c-290bfe10ccf2","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":["a","b","c","d","e","f"],"y":[-2.7343071019595215,-2.611165334599899,-1.3032346313428442,-1.676145619963211,-0.47722612452965185,-0.556845518260467]}},"id":"83bc1543-783e-4fa7-890b-65a3274b7c5e","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"d756e5f2-9439-4d87-8c90-e3e7b8c3821e","type":"Rect"},{"attributes":{"fill_color":{"value":"#3B8686"},"height":{"field":"height","units":"data"},"line_width":{"value":2},"width":{"units":"data","value":0.7},"x":{"field":"x"},"y":{"field":"y"}},"id":"30ecdd3f-9054-45e1-bae2-badab64cad13","type":"Rect"},{"attributes":{"fill_color":{"value":"#E08E79"},"height":{"field":"height","units":"data"},"line_width":{"value":2},"width":{"units":"data","value":0.7},"x":{"field":"x"},"y":{"field":"y"}},"id":"72e13613-1e1f-4068-8adb-b107b94849f9","type":"Rect"},{"attributes":{"data_source":{"id":"2f563664-b700-4f46-bda8-61b6488320ff","type":"ColumnDataSource"},"glyph":{"id":"22757ada-92ff-46bd-a738-9046620e786f","type":"Segment"},"hover_glyph":null,"nonselection_glyph":{"id":"4ebee669-9e39-4adb-82e0-6e5769dcbd9d","type":"Segment"},"selection_glyph":null},"id":"e6362929-29a7-4a12-a27c-47bc5d380a7d","type":"GlyphRenderer"},{"attributes":{"grid_line_color":{"value":null},"grid_line_width":{"value":2},"plot":{"id":"c70e9f02-6be1-4d4e-ac0c-eeef9941ad7f","subtype":"Figure","type":"Plot"},"ticker":{"id":"78e7430a-1b07-4203-8e78-475c40ecc0bc","type":"CategoricalTicker"}},"id":"7689dbed-8a3c-4b52-99b4-7a0679464c92","type":"Grid"},{"attributes":{"data_source":{"id":"8e99ff29-00fe-4290-9dad-e7d918d85d3e","type":"ColumnDataSource"},"glyph":{"id":"323f788e-773e-48a1-bdd3-35bedfd03841","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"d756e5f2-9439-4d87-8c90-e3e7b8c3821e","type":"Rect"},"selection_glyph":null},"id":"450a8860-10be-4b7e-8546-96071e985781","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"71607269-c450-43af-89b1-e7e02f78297d","type":"CategoricalTickFormatter"},"major_label_text_font_size":{"value":"12pt"},"plot":{"id":"c70e9f02-6be1-4d4e-ac0c-eeef9941ad7f","subtype":"Figure","type":"Plot"},"ticker":{"id":"78e7430a-1b07-4203-8e78-475c40ecc0bc","type":"CategoricalTicker"}},"id":"2aabc5f3-1926-426f-9f9f-3c51db2322f9","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"767f75bd-326c-4f49-aee1-ee9b8bf4344e","type":"ColumnDataSource"},"glyph":{"id":"a2585089-0717-48d5-88a2-e2e665cfbbf8","type":"Segment"},"hover_glyph":null,"nonselection_glyph":{"id":"e88e0f45-ed25-414c-8df3-48fa71c4f7f4","type":"Segment"},"selection_glyph":null},"id":"a792b63e-0f23-42d8-86b5-a73103d8b967","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"1a4cd65a-1b02-4962-9ceb-9e42bc7ebddc","type":"ColumnDataSource"},"glyph":{"id":"30ecdd3f-9054-45e1-bae2-badab64cad13","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"d65b1495-0200-4e3d-91f3-4564dcc0fd0b","type":"Rect"},"selection_glyph":null},"id":"3d3c6393-b9c9-4573-9212-ceb2c3994802","type":"GlyphRenderer"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"22757ada-92ff-46bd-a738-9046620e786f","type":"Segment"},{"attributes":{"data_source":{"id":"60b8e9eb-1424-4747-bfde-1f21d72d5fbc","type":"ColumnDataSource"},"glyph":{"id":"72e13613-1e1f-4068-8adb-b107b94849f9","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"3fe76635-f5c7-4323-bf5c-290bfe10ccf2","type":"Rect"},"selection_glyph":null},"id":"b5a74b76-2c5a-471a-8079-a2c0984b0f17","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"b4062003-5e3c-449b-98f7-871d56535543","type":"Circle"},{"attributes":{"dimension":1,"grid_line_color":{"value":"white"},"grid_line_width":{"value":2},"plot":{"id":"c70e9f02-6be1-4d4e-ac0c-eeef9941ad7f","subtype":"Figure","type":"Plot"},"ticker":{"id":"675b4920-9ee3-4199-ab01-a0dad69b4305","type":"BasicTicker"}},"id":"5fbb8513-e99d-4678-8ee5-30bab2b2eb3b","type":"Grid"},{"attributes":{"callback":null},"id":"f3411a4b-e215-40e2-a890-a60d5301c393","type":"DataRange1d"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"e88e0f45-ed25-414c-8df3-48fa71c4f7f4","type":"Segment"},{"attributes":{"callback":null,"column_names":["y","x","height"],"data":{"height":[0.6607371551811884,0.6688568361529026,0.7054948822278366,0.6565509139403436,0.7650065905457257,0.7400176855731533],"x":["a","b","c","d","e","f"],"y":[-0.3099632399424331,-0.280281890189661,0.830036098316118,0.6552300921091636,1.7395578433683765,1.7189753662945495]}},"id":"1a4cd65a-1b02-4962-9ceb-9e42bc7ebddc","type":"ColumnDataSource"},{"attributes":{},"id":"78e7430a-1b07-4203-8e78-475c40ecc0bc","type":"CategoricalTicker"},{"attributes":{},"id":"5b37fd76-8fb4-4c82-bcbd-401edcb57aa0","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":["a","b","c","d","e","f"],"y":[2.849626989844463,2.6075289194237055,3.4448274714439395,3.7065326042780913,4.6300934836969025,4.803218283806258]}},"id":"8e99ff29-00fe-4290-9dad-e7d918d85d3e","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f"]},"id":"44d0b3c2-c7b7-413b-bd9e-7733a3f4a4f9","type":"FactorRange"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"a2585089-0717-48d5-88a2-e2e665cfbbf8","type":"Segment"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":["a","a","a","a","a","b","b","c","c","c","c","c","d","d","e"],"y":[-2.81204647022753,2.9582942877435165,-3.0456463050329496,3.2092906499002773,-2.740591886179168,-3.5969529037727064,-2.651369266828322,-1.9189027251531918,-1.6365091636728146,4.314887211497295,-2.4179457062706984,-1.502325976411222,3.718975139878809,4.218502345871032,4.836122710833509]}},"id":"c70d3758-d3c1-4535-a4f7-e82d31e91790","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"#F38630"},"line_color":{"value":"#F38630"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"bfc439d3-2c60-4255-83b4-e7ddd3884966","type":"Circle"},{"attributes":{"callback":null,"column_names":["y1","y0","x0","x1"],"data":{"x0":["a","b","c","d","e","f"],"x1":["a","b","c","d","e","f"],"y0":[-2.7343071019595215,-2.611165334599899,-1.3032346313428442,-1.676145619963211,-0.47722612452965185,-0.556845518260467],"y1":[-0.6403318175330273,-0.6147103082661123,0.47728865720219965,0.3269546351389918,1.3570545480955136,1.3489665235079729]}},"id":"767f75bd-326c-4f49-aee1-ee9b8bf4344e","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"4ebee669-9e39-4adb-82e0-6e5769dcbd9d","type":"Segment"},{"attributes":{"callback":null,"column_names":["y1","y0","x0","x1"],"data":{"x0":["a","b","c","d","e","f"],"x1":["a","b","c","d","e","f"],"y0":[2.849626989844463,2.6075289194237055,3.4448274714439395,3.7065326042780913,4.6300934836969025,4.803218283806258],"y1":[0.7556517054179688,0.7162597092897455,1.6643041828988956,1.6787858227946315,2.666270122336069,2.753725731619283]}},"id":"2f563664-b700-4f46-bda8-61b6488320ff","type":"ColumnDataSource"},{"attributes":{"background_fill_color":{"value":"#EFE8E2"},"below":[{"id":"2aabc5f3-1926-426f-9f9f-3c51db2322f9","type":"CategoricalAxis"}],"left":[{"id":"4f8d66f9-a6f1-4d0f-aafd-fc2c821b0797","type":"LinearAxis"}],"renderers":[{"id":"2aabc5f3-1926-426f-9f9f-3c51db2322f9","type":"CategoricalAxis"},{"id":"7689dbed-8a3c-4b52-99b4-7a0679464c92","type":"Grid"},{"id":"4f8d66f9-a6f1-4d0f-aafd-fc2c821b0797","type":"LinearAxis"},{"id":"5fbb8513-e99d-4678-8ee5-30bab2b2eb3b","type":"Grid"},{"id":"e6362929-29a7-4a12-a27c-47bc5d380a7d","type":"GlyphRenderer"},{"id":"a792b63e-0f23-42d8-86b5-a73103d8b967","type":"GlyphRenderer"},{"id":"b5a74b76-2c5a-471a-8079-a2c0984b0f17","type":"GlyphRenderer"},{"id":"3d3c6393-b9c9-4573-9212-ceb2c3994802","type":"GlyphRenderer"},{"id":"933d7782-478a-4876-8a65-d10e74c4b10e","type":"GlyphRenderer"},{"id":"450a8860-10be-4b7e-8546-96071e985781","type":"GlyphRenderer"},{"id":"cb15efdb-cc00-4e3c-abcd-d0df7c81bcaa","type":"GlyphRenderer"}],"title":{"id":"920393f7-c7e3-41ea-b406-e471424c0231","type":"Title"},"tool_events":{"id":"5b37fd76-8fb4-4c82-bcbd-401edcb57aa0","type":"ToolEvents"},"toolbar":{"id":"1100ac5f-617f-4bbf-b667-9ce54514c665","type":"Toolbar"},"x_range":{"id":"44d0b3c2-c7b7-413b-bd9e-7733a3f4a4f9","type":"FactorRange"},"y_range":{"id":"f3411a4b-e215-40e2-a890-a60d5301c393","type":"DataRange1d"}},"id":"c70e9f02-6be1-4d4e-ac0c-eeef9941ad7f","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"77ec7766-57b5-481f-84de-cfc77a04321a","type":"BasicTickFormatter"},"plot":{"id":"c70e9f02-6be1-4d4e-ac0c-eeef9941ad7f","subtype":"Figure","type":"Plot"},"ticker":{"id":"675b4920-9ee3-4199-ab01-a0dad69b4305","type":"BasicTicker"}},"id":"4f8d66f9-a6f1-4d0f-aafd-fc2c821b0797","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"323f788e-773e-48a1-bdd3-35bedfd03841","type":"Rect"},{"attributes":{},"id":"71607269-c450-43af-89b1-e7e02f78297d","type":"CategoricalTickFormatter"},{"attributes":{},"id":"77ec7766-57b5-481f-84de-cfc77a04321a","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"c70e9f02-6be1-4d4e-ac0c-eeef9941ad7f","subtype":"Figure","type":"Plot"}},"id":"02560235-25a0-4f4e-9f84-5a0d572fb492","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["y","x","height"],"data":{"height":[0.7352463677698077,0.6621131814029552,0.48152064346885926,0.6952802737152961,0.5442089836948298,0.664741522538157],"x":["a","b","c","d","e","f"],"y":[0.38802852153306494,0.3852031185882679,1.423543861164466,1.3311456859369835,2.3941656304886543,2.4213549703502046]}},"id":"60b8e9eb-1424-4747-bfde-1f21d72d5fbc","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"c70d3758-d3c1-4535-a4f7-e82d31e91790","type":"ColumnDataSource"},"glyph":{"id":"bfc439d3-2c60-4255-83b4-e7ddd3884966","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"b4062003-5e3c-449b-98f7-871d56535543","type":"Circle"},"selection_glyph":null},"id":"cb15efdb-cc00-4e3c-abcd-d0df7c81bcaa","type":"GlyphRenderer"},{"attributes":{},"id":"675b4920-9ee3-4199-ab01-a0dad69b4305","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"920393f7-c7e3-41ea-b406-e471424c0231","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"b185fd3a-f6ed-437a-baaa-00969242c9e0","type":"Rect"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"field":"height","units":"data"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"width":{"units":"data","value":0.7},"x":{"field":"x"},"y":{"field":"y"}},"id":"d65b1495-0200-4e3d-91f3-4564dcc0fd0b","type":"Rect"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"4a30f51b-854d-47fa-b62a-c3b36c3ae884","type":"Rect"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"02560235-25a0-4f4e-9f84-5a0d572fb492","type":"SaveTool"}]},"id":"1100ac5f-617f-4bbf-b667-9ce54514c665","type":"Toolbar"}],"root_ids":["c70e9f02-6be1-4d4e-ac0c-eeef9941ad7f"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"1f0916d8-4b5c-4445-b117-a3cd2aec1e36","elementid":"8384322c-562e-4a00-a2a9-e4a1318f8c5b","modelid":"c70e9f02-6be1-4d4e-ac0c-eeef9941ad7f"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
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