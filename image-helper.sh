#!/bin/bash

# Image Update Helper Script for The Root & Resonance Website
# This script helps you update images and deploy them automatically

echo "🌿 The Root & Resonance - Image Update Helper 🌿"
echo "================================================="

# Function to display current expected images
show_expected_images() {
    echo ""
    echo "📸 Expected Image Files:"
    echo "------------------------"
    echo "Hero Image: hero-apothecary.jpg.png"
    echo ""
    echo "Apothecary Products:"
    echo "- moonlight-elixir.jpg"
    echo "- sunrise-tea.jpg"
    echo "- heart-tincture.jpg" 
    echo "- cedar-salve.jpg"
    echo "- intuition-elixir.jpg"
    echo "- digestive-tea.jpg"
    echo "- immune-remedy.jpg"
    echo "- healing-salve.jpg"
    echo ""
    echo "Sacred Creations:"
    echo "- flower-coasters.jpg"
    echo "- metatron-art.jpg"
    echo "- crystal-grid.jpg"
    echo "- geometry-keychains.jpg"
    echo "- pentacle-plate.jpg"
    echo "- mandala-board.jpg"
    echo ""
}

# Function to check which images exist
check_existing_images() {
    echo "🔍 Current Images in /images/ folder:"
    echo "-----------------------------------"
    if [ -d "images" ]; then
        ls -la images/ | grep -E '\.(jpg|jpeg|png|gif)$' || echo "No image files found"
    else
        echo "Images folder not found!"
    fi
    echo ""
    
    echo "🔍 Current Images in /public/images/ folder:"
    echo "------------------------------------------"
    if [ -d "public/images" ]; then
        ls -la public/images/ | grep -E '\.(jpg|jpeg|png|gif)$' || echo "No image files found"
    else
        echo "Public images folder not found!"
    fi
    echo ""
}

# Function to deploy changes
deploy_changes() {
    echo "🚀 Deploying changes to website..."
    echo "--------------------------------"
    
    git add .
    git status
    
    echo ""
    read -p "Enter commit message (or press Enter for default): " commit_message
    
    if [ -z "$commit_message" ]; then
        commit_message="Update website images"
    fi
    
    git commit -m "$commit_message"
    git push origin main
    
    echo ""
    echo "✅ Changes deployed! Your website will update in 1-2 minutes."
    echo "🌐 Check your site at: https://therootandresonance.vercel.app"
}

# Main menu
while true; do
    echo ""
    echo "What would you like to do?"
    echo "1. Show expected image filenames"
    echo "2. Check current images"
    echo "3. Deploy image changes"
    echo "4. Open images folder"
    echo "5. Exit"
    echo ""
    read -p "Choose an option (1-5): " choice
    
    case $choice in
        1)
            show_expected_images
            ;;
        2)
            check_existing_images
            ;;
        3)
            deploy_changes
            ;;
        4)
            echo "Opening images folder..."
            if command -v open >/dev/null 2>&1; then
                open images/
                echo "✅ Images folder opened in Finder"
            else
                echo "📁 Images folder location: $(pwd)/images/"
            fi
            ;;
        5)
            echo "Goodbye! 🌿"
            exit 0
            ;;
        *)
            echo "Invalid option. Please choose 1-5."
            ;;
    esac
done
